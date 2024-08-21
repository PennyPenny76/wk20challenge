// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // 引入图标
import Footerbar from './UI/Footerbar';

export default function Footer() {
  return (
    <Footerbar
      links={[
        <Link key={1} className="footer-link text-light" to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </Link>,
        <Link key={2} className="footer-link text-light" to="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </Link>,
        <Link key={3} className="footer-link text-light" to="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} />
        </Link>,
      ]}
    />
  );
}
