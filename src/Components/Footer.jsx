import githubIcon from "../IMG/icons/github.svg";
import instagramIcon from "../IMG/icons/instagram.svg";
import linkedinIcon from "../IMG/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <ul className="social-links">
        <li>
          <a
            href="https://github.com/EmNatter"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <div className="icon">
              <img src={githubIcon} alt="GitHub" />
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/em_natt/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <div className="icon">
              <img src={instagramIcon} alt="Instagram" />
            </div>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <div className="icon">
              <img src={linkedinIcon} alt="LinkedIn" />
            </div>
          </a>
        </li>
      </ul>
      <p>© 2025 Emilia Nätters portfolio</p>
    </footer>
  );
};

export default Footer;
