import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './home.css'

function Home() {
  return(
    <>
      <Header />
       <section className='container'>
          <div className='apresentacao'>
            <p>Olá, sou <br/>
            <span>Edson Maia</span> <br/>
            Dev full stack</p>
            <button className='btn'>Sobre mim</button>
          </div>
          <figure>
            <img className='img-home' src="/developer-blue.svg" alt="img" />
          </figure>
       </section>
      <Footer />
    </>
  )

}

export default Home;