import "./Projects.css";
import Project1 from "../../assets/Project1.jpg";
import Project2 from "../../assets/Project2.png";
import Project3 from "../../assets/Project3.jpg";
import Project4 from "../../assets/Project4.png";
import Project5 from "../../assets/Project5.png";
import Project6 from "../../assets/Project6.jpg";
import LinkLogo from "../../assets/LinkLogo.jpg";

const Projects = () => {
  return (
    <>
      <section className="projects-page">
        <h2 className="projects-heading">Projects</h2>
        {/* <span>Filter Based on Techstack</span> */}
        <div className="projects-list">
          <div className="project-card">
            <img src={Project1} alt="Project1" className="project-image" />
            <p className="project-name">Name of the project</p>
            <div className='lower-content'>
              <span>
                Live <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
              <span>
                Github <img src={LinkLogo} alt="LinkLogo" className='link-logo' />
              </span>
            </div>
          </div>
          <div className="project-card">
            <img src={Project2} alt="Project2" className="project-image" />
            <p className="project-name">Name of the project</p>
            <div className='lower-content'>
              <span>
                Live <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
              <span>
                Github <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
            </div>
          </div>
          <div className="project-card">
            <img src={Project3} alt="Project3" className="project-image" />
            <p className="project-name">Name of the project</p>
            <div className='lower-content'>
              <span>
                Live <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
              <span>
                Github <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
            </div>
          </div>
          <div className="project-card">
            <img src={Project4} alt="Project4" className="project-image" />
            <p className="project-name">Name of the project</p>
            <div className='lower-content'>
              <span>
                Live <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
              <span>
                Github <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
            </div>
          </div>
          <div className="project-card">
            <img src={Project5} alt="Project5" className="project-image" />
            <p className="project-name">Name of the project</p>
            <div className='lower-content'>
              <span>
                Live <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
              <span>
                Github <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
            </div>
          </div>
          <div className="project-card">
            <img src={Project6} alt="Project6" className="project-image" />
            <p className="project-name">Name of the project</p>
            <div className='lower-content'>
              <span>
                Live <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
              <span>
                Github <img src={LinkLogo} alt="LinkLogo" className='link-logo'/>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
