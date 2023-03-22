import {Parallax} from 'react-parallax';
import flowerTwo from '@/components/images/bg.png';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const ContactLinks = () => {
    return (
        <nav>
          <ul className="contact-links">
            <li>
              <Link className="contact" href="mailto:arshiya.khattak@nyu.edu">
                  <FaEnvelope />
              </Link>
            </li>
            <li>
              <Link className="contact" href="https://github.com/arshiya-k">
                <FaGithub />
            </Link>
            </li>
            <li>
              <Link className="contact" href="https://www.linkedin.com/in/arshiya-khattak-91393b1b3/">
                <FaLinkedin />
              </Link>
            </li>
            <li>
                <Link className="contact" href="https://wa.me/971502100463">
                    <FaWhatsapp/>
                </Link>
            </li>
          </ul>
    
        </nav>
      );
}
// console.log(flowerOne)
const ImageTwo = () => {
    return (
    <Parallax className='image' bgImage={flowerTwo.src} strength={800} bgImageStyle={{minHeight:"100vh"}}>
      <div className='content about'>
        <div className='about-me'>
            <h1>About Me</h1>
            <div className='about-me-text' align = "justify" >
                I am a current student at New York University Abu Dhabi, majoring in Computer Science with a minor in Applied Mathematics.<br/><br/>
                As someone who is deeply passionate about accessibility, sustainability, and inclusion in technology, I believe that there are 
                multiple avenues within the field of Computer Science where these values can be integrated and leveraged to create positive change. 
                I have extensive experience in both research and industry. <br/><br/>
                I love learning new ways to channel my imagination - outside of my projects, I enjoy other forms of art, such as embroidery. 
                I&apos;m always open to new experiences, whether it be a new algorithmic challenge or travelling to a completely new place.<br/><br/>
                I&apos;m based across multiple cities - I always find myself somewhere in between Karachi, Islamabad and Abu Dhabi.<br/>
             </div>
            <ContactLinks/>
          </div>
        </div>
    </Parallax>
)
}

export default ImageTwo;