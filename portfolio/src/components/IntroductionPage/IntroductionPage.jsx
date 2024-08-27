import './IntroductionPage.css';
import {NavLink} from 'react-router-dom';
import job from '../../assets/job.png';

const IntroductionPage = () => {
    return(
        <>
        <section className='main-div'>
        <div className='intro-content'>
        <span className='hello'>
            Hello,
        </span>
        <span className='intro-text'>
            I'm <span className='name'>Sahari Bagothula</span><br/> Full-Stack developer
        </span>
        <p className='intro-para'>I am a skilled and passionate Full-Stack developer. Passionate in building and learning.</p>
        <NavLink >
            <button className='hire-section'><img src={job} alt='not found' className='hire-img' /><span className='txt'>Hire Me</span></button>
        </NavLink>
        </div>
        </section>
        </>
    )
}

export default IntroductionPage;