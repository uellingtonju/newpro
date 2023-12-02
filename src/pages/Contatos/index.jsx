import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { LuYoutube } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import './contatos.css'

function Contatos() {
  return (
    <>
      <Header />
      <div className='contatos'>
        <h1 className='titulo'>Contatos</h1> <br />
        <span className='form'>Entre em contatos</span> <br />
        <p className='paragrafo'>Para que possamos conversar mais sobre.</p>
        <div className='icons'>
          <a href="https://myaccount.google.com/u/1/?utm_source=OGB&utm_medium=app" target='_blank'><MdOutlineEmail /></a>
          <a href="https://www.instagram.com" target='_blank'><FaInstagram /></a>
          <a href="https://www.youtube.com/" target='_blank'><LuYoutube /></a>
          <a href="https://github.com/" target="_blank" ><LuGithub /></a>
          <a href="https://br.linkedin.com" target="_blank" ><LuLinkedin /></a>
        </div>
      </div>
      <Footer />


    </>
  )
}

export default Contatos;