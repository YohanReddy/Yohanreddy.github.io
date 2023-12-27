import "../css/dist/styles.css";
import Waving from "../media/waving.png";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";


const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,react",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=webflow,firebase",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=tailwind,bootstrap",
    id: 4,
  },
];

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm Yohan Reddy. A passionate Front-end React
                  Developer based in Hyderabad, India. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/yohanreddy/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/yohanreddy"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>

              <div className="hero-img">
              </div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
