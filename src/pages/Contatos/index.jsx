import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { CiMail } from "react-icons/ci";
import './contatos.css'

function Contatos() {
  return(
    <>
        <Header />
        <div className='contatos'>
        <h2 className='titulo'>Contatos</h2> <br/>
        <span className='form'>Entre em contatos</span> <br/>
        <p className='paragrafo'>Para que possamos conversar mais sobre.</p>
        <a href="https://myaccount.google.com/u/1/?utm_source=OGB&utm_medium=app"><CiMail /></a>
        </div>
        <Footer />
     
    
    </>
  )
}

export default Contatos;