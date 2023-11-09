import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="">
      <footer className="text-center text-lg-start footer-container">
        <div className="container d-flex justify-content-center py-5 footer-social-buttons">
          <button type="button" className="btn btn-primary btn-sm btn-floating mx-2">
          <FontAwesomeIcon icon={faFacebookF} />
          </button>
          <button type="button" className="btn btn-primary btn-sm btn-floating mx-2">
          <FontAwesomeIcon icon={faYoutube} />
          </button>
          <button type="button" className="btn btn-primary btn-sm btn-floating mx-2">
          <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button type="button" className="btn btn-primary btn-sm btn-floating mx-2">
            <FontAwesomeIcon icon={faTwitter} />
          </button>
        </div>

        <div className="text-center text-white p-3 footer-info">
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
