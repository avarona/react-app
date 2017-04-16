import React from 'react';

const year = new Date().getFullYear();
// TODO: CHANGE lines 5 - 7
const linkedIn = 'https://www.linkedin.com/alejandro-varona';
const githubUsername = 'avarona';
const githubURL = 'https://www.github.com/avarona';

const Footer = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="copyright">
              Copyright © {year}, Alejandro Varona, All rights reserved
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="design">
              <a href={linkedIn}>LinkedIn </a> |  Web Design & Development by
              <a target="_blank" rel="noopener noreferrer" href={githubURL}> {githubUsername}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer;
