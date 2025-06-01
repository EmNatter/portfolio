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
              <img src="src/IMG/icons/github.svg" alt="GitHub" />
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
              <img src="src/IMG/icons/instagram.svg" alt="Instagram" />
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
              <img src="src/IMG/icons/linkedin.svg" alt="LinkedIn" />
            </div>
          </a>
        </li>
      </ul>
      <p>© 2025 Emilia Nätters App</p>
    </footer>
  );
};

export default Footer;
