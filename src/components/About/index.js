import {
  faAngular,
  faCss3,
  faGit,
  faGitAlt,
  faGithub,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '!']}
              idx={15}
            />
          </h1>
          <p>
            I am a dynamic and results-driven professional, with recent IT
            experience and formal education in software development.
          </p>
          <p>
            I recently completed an IT Diploma in Software Development from
            SAIT, where I gained valuable experience and knowledge across all
            aspects of full-stack development. It was a rewarding and fulfilling
            experience to explore the latest tools, techniques, and concepts in
            the end-to-end development of business applications. Among my
            notable projects, I worked with a team to develop a data mobilizer
            for real-world client Transrail Innovation Group.
          </p>
          <p>
            Alongside my education, I have a year of experience as a Storage
            Engineer with TSP Canada, where I provide on-call and 24/7 service
            for NetApp, Pure Storage, and Rubrik Storage systems in client
            environments across Alberta. My prior experience includes the
            ownership of a business in the construction sector.
          </p>
          <p>
            Connect with me to learn more about what I have to offer in the
            areas of:
          </p>
          <p>- Software Development</p>
          <p>- Analytical Thinking</p>
          <p>- Cross-Functional Collaboration</p>
          <p>- Verbal & Written Communication</p>
          <p>- Object Oriented Programming</p>
          <p>- Business Mindset</p>
          <p>- Problem Solving</p>
          <p>- Quality Assurance</p>
          <p>- Continuous Learning</p>
          <p>Technical Skills:</p>
          <p>Java | HTML | CSS | Git/GitHub | JavaScript | React | SQL</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGithub} color="#efd81d" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGit} color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
