import React from 'react';
import { FaGithubSquare, FaLinkedinSquare } from 'react-icons/lib/fa';

const year = new Date().getFullYear();
// TODO: CHANGE lines 6 - 9
const name = 'Alejandro Varona'
const linkedIn = 'https://www.linkedin.com/in/alejandro-varona';
const githubUsername = 'avarona';
const githubURL = 'https://www.github.com/avarona';

const Footer = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="copyright">
              Copyright © {year}, {name}, All rights reserved
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="design">
              <a target="_blank" rel="noopener noreferrer" href={linkedIn}>
                <FaLinkedinSquare />LinkedIn
              </a> |  Web Design & Development by
              <a target="_blank" rel="noopener noreferrer" href={githubURL}>
                <FaGithubSquare />{githubUsername}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
