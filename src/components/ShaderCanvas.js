import { useEffect, useRef } from 'react';

const vertexShaderSource = `
    attribute vec4 a_position;
    void main() {
        gl_Position = a_position;
    }
`;

const fragmentShaderSource = `
    precision mediump float;

    uniform vec2 iResolution;
    uniform float iTime;

    #define N 16
    #define PI 3.14159265
    #define depth 1.0
    #define rate 0.35

    // Convert HSV to RGB
    vec3 hsv2rgb(in vec3 c) {
        vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
        return c.z * mix(vec3(1.0), rgb, c.y);
    }

    void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 v = (fragCoord.xy - (iResolution.xy * 0.01)) / min(iResolution.y, iResolution.x) * 1.0;
    float t = iTime * 0.01;
    float r = 2.0;
    float d = 0.0;

    for (int i = 1; i < N; i++) {
        d = (PI / float(N)) * (float(i) * 14.0);
        r += length(vec2(rate * v.y, rate * v.x)) + 1.21;
        v = vec2(v.x + cos(v.y + cos(r) + d) + cos(t), v.y - sin(v.x + cos(r) + d) + sin(t));
    }

    r = (sin(r * 0.09) * 0.5) + 0.5;
    r = pow(r, depth);

    // Base green hue approx 0.25 (around 90 degrees)
    float baseHue = 0.25;

    // Add slight oscillation around baseHue for richer color variation
    float hueShift = 0.1 * sin(5.0 * r + t * 2.0);
    float hue = mod(baseHue + hueShift, 1.0);

    // Vary saturation and value with r for gradient effect
    float sat = mix(0.6, 1.0, r);   // saturation from 60% to 100%
    float val = mix(0.1, 0.5, r);   // value from 10% to 50%

    vec3 hsv = vec3(hue, sat, val);

    fragColor = vec4(hsv2rgb(hsv), 1.0);
}


    void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
    }
`;

function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile failed:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function createProgram(gl, vsSource, fsSource) {
    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program failed to link:', gl.getProgramInfoLog(program));
        return null;
    }
    return program;
}

export default function ShaderCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gl = canvas.getContext('webgl');
        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
        if (!program) return;

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                -1, -1,
                 1, -1,
                -1,  1,
                -1,  1,
                 1, -1,
                 1,  1
            ]),
            gl.STATIC_DRAW
        );

        gl.useProgram(program);
        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const iResolutionLocation = gl.getUniformLocation(program, 'iResolution');
        const iTimeLocation = gl.getUniformLocation(program, 'iTime');

        let startTime = performance.now();

        function render() {
            const time = (performance.now() - startTime) * 0.001;
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
            gl.uniform1f(iTimeLocation, time);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(render);
        }

        render();
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{width: '100%', height: '100%', zIndex: '-1'}}
        />
    );
}
