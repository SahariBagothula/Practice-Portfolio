import './About.css';
import frontend from '../../assets/frontend.jpg';
import backend from '../../assets/backend.png';
import genai from '../../assets/genai.jpg';


const About = () => {
    return(
        <>

            <section className='about'>
                <span className='about-title'>About myself</span>
                <span className='about-content'>I have over two years of experience in IT, specializing as a Full Stack Developer with a backend in Java Spring Boot and a frontend in React. I have built applications from scratch, contributing to all phases of development, and recently transitioned to working as a Gen AI Developer, utilizing generative AI tools to enhance productivity and code migration. My expertise includes end-to-end application development, code refactoring, and staying updated with the latest technologies and frameworks.</span>
               <div>
               <div className='techstacks'>
                    <img className='techstack-logo' src={backend} alt=''/>
                    <div className='techstack-block'>
                        <h2 className='techstack-heading'>Backend Technologies</h2>
                        <p className='techstack-content'>With my experience in Java and Spring Boot, I've built scalable backend services, developed and deployed REST APIs</p>
                    </div>
                </div>
                <div className='techstacks'>
                    <img className='techstack-logo' src={frontend} alt=''/>
                    <div className='techstack-block'>
                        <h2 className='techstack-heading'>Frontend Technologies</h2>
                        <p className='techstack-content'>With my experience in JavaScript and React, I’ve built dynamic, responsive front-end applications, focusing on component-driven development. </p>
                    </div>
                </div>
                <div className='techstacks'>
                    <img className='techstack-logo' src={genai} alt=''/>
                    <div className='techstack-block'>
                        <h2 className='techstack-heading'>Gen Ai Experience</h2>
                        <p className='techstack-content'>With my experience as a Gen AI Developer, I’ve leveraged generative AI tools to automate workflows, perform code refactoring, and migrate applications across different technologies. </p>
                    </div>
                </div>
               </div>
            </section>

        </>
    )
}

export default About;