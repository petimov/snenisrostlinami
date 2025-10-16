import { Link } from 'react-router-dom'
import prod1_img from '../assets/prod1.jpg'
import prod2_img from '../assets/prod2.jpg'
import prod3_img from '../assets/prod3.jpg'
import prod4_img from '../assets/prod4.jpg'
import prod5_img from '../assets/prod5.jpg'
import prod6_img from '../assets/prod6.jpg'
import ShaderCanvas from './ShaderCanvas'

const Apoteka = () => {
  return (
    <div className='apoteka'>
        <div className='first-paint'>
          <div>
          <h4>Bylinná apotéka</h4>
          <p>Přírodní medicíny nesou posvátnou moudrost rostlin naší krajiny a přinášejí tak důležité rozpomenutí si na hodnoty <strong>původního, přírodního léčení.</strong></p>
        <p>Jejich smysluplnou přípravou a vědomým užíváním se vytváří <strong>prostor pro budování a rozšiřování našeho vztahu s krajinou</strong> a zdejšími, přirozenými rostlinami. </p>
        <p>Většina medicíny vzniká <strong>z divokých, planých, ručně sbíraných rostlin</strong> a také z pěstovaných rostlin divokých zahrad.</p>
        <p>Ty jsou <strong>zpracovávány šetrnými, ale účinnými postupy</strong> tak, aby výsledné medicíny koncentrovaly nejen nejlepší účinné látky rostlin s ohledem na kolo roku, ale i jejich esenci.</p>
        <p>Díky vědomému, bdělému zacházení od živé rostlinné bytosti po výslednou lahvičku je možné vnímat propsanou esenci daných rostlin i vědomí samotného bylináře.</p>
        </div>
      </div>
        <main className='products'>
            <Link to={'/cajove-smesi'} className='product'>
              <img src={prod1_img}/>
              <span>Čajové směsi</span>
            </Link>
            <Link to={'/caj'} className='product'>
              <img src={prod2_img}/>
              <span>Bylinné kapky</span>
            </Link>
            <Link to={'/'} className='product'>
              <img src={prod3_img}/>
              <span>Bylinné oleje</span>
            </Link>
            <Link to={'/'} className='product'>
              <img src={prod4_img}/>
              <span>Pleťové balzámy</span>
            </Link>
            <Link to={'/'} className='product'>
              <img src={prod5_img}/>
              <span>Bylinné masti</span>
            </Link>
             <div className='product'>
              <img src={prod6_img}/>
              <span>Gely, hydroláty, kapsle</span>
            </div>
        </main>
        <ShaderCanvas />
    </div>
  )
}

export default Apoteka