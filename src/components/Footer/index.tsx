import React from 'react';
import './index.css';

import {
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

export default function FooterScreen() {
  return (
    <div className="block footer">
      <div className="container-fluid">
        <div className="footer__flex">
          <div className="footer__sosmed">
            <a href="https://github.com/rommyth">
              <GithubOutlined style={{ fontSize: '25px' }} />
            </a>
            <a href="https://www.linkedin.com/in/rommy-taufik-hidayat-665269256/">
              <LinkedinOutlined style={{ fontSize: '25px' }} />
            </a>
          </div>
          <p>All Rights Reserved &copy; 2022 | RommyTH</p>
        </div>
      </div>
    </div>
  );
}
