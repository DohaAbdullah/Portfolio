import { Link } from "react-router-dom";
import TwitterIcon from "../icons/twitterIcon";
import LinkedInIcon from "../icons/linkedInIcon";
import Anchor from "../common/a";


function Contact() {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <div>
    
      <div>
        <p className="sub-title">Contact</p>
        <div className="flex">
          <p className="discription">
            You can reach out to me through contact@mawuena.me. As will as{" "}
          </p>
          <Link to="https://github.com/devnullone">
            <LinkedInIcon />
          </Link>
          <p className="discription">, and</p>
          <Link to="https://twitter.com/devnullone">
            <TwitterIcon />
          </Link>
        </div>
      </div>
      <div className="footer">
        <div className="left">copyright @{year} Zuhaa A</div>
        <div className="right">
          <Anchor href="/" className="footer-link">
            Home
          </Anchor>{" "}
          <span>|</span>{" "}
          <Anchor className="footer-link" href="/blogs">
            Blogs
          </Anchor>
          <span>|</span>{" "}
          <Anchor className="footer-link" href="/contact">
            Contact
          </Anchor>
          <span>|</span>{" "}
          <Anchor className="footer-link" href="/resume">
            Resume
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default Contact;
