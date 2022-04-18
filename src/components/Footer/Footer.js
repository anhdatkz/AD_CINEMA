
import './Footer.css'
import {FaGithub, FaFacebook, FaLinkedinIn} from 'react-icons/fa'

function Footer(){
    return(
        <footer id="footer">
            <div className="copy-right">
                <h3>Lê Phước Anh Đạt</h3>
            </div>
            <div className="social">
                <a className='github' href="https://github.com/anhdatkz"><FaGithub/></a>
                <a className='facebook' href="https://www.facebook.com/profile.php?id=100007819182252"><FaFacebook/></a>
                <a className='linked-in' href=""><FaLinkedinIn/></a>
            </div>
        </footer>
    )
}

export default Footer