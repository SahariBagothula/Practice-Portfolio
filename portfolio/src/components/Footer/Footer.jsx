import {NavLink} from 'react-router-dom';

import './Footer.css';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';

const Footer = () => {
    return(
        <>
            <footer className='footer-page'>
                <div className='header-contents'>
                    <NavLink to='/' className='header-content'>Home</NavLink>
                    <NavLink to='/about' className='header-content'>About</NavLink>
                    <NavLink to='/projects' className='header-content'>Projects</NavLink>
                    <NavLink to='/blogs' className='header-content'>Blogs</NavLink>
                </div>
                <div className='footer-icons'>
                    <a href='https://github.com/SahariBagothula' className='footer-icon'><img src={github} alt='Github'/></a>
                    <a href='https://www.linkedin.com/in/sahari-bagothula-563a551a4/' className='footer-icon'><img src={linkedin} alt='Linkedin' /></a>
                    <a href='https://x.com/BagothulaS85027' className='footer-icon'><img src={twitter} alt='Linkedin' /></a>
                </div>
                <div className='footer-text'>
                    Copyright &#169; 2024 Sahari Bagothula. All rights reserved
                </div>
            </footer>
        </>
    )
}

export default Footer;