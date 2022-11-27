import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default function HeaderScreem() {
  const navMenu = [
    {
      key: 1,
      link: '/?category=science',
      name: 'Art',
    },
    {
      key: 2,
      link: '/?category=health',
      name: 'Health',
    },
    {
      key: 3,
      link: '/?category=sports',
      name: 'Sports',
    },
    {
      key: 4,
      link: '/?category=technology',
      name: 'Technology',
    },
  ];

  return (
    <Header className="sticky">
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <h1>
              <Link to={'/'}>RTH News</Link>
            </h1>
          </div>
          <Menu
            disabledOverflow
            className="header__menu"
            mode="horizontal"
            // defaultSelectedKeys={['0']}
            items={navMenu.map((item, index) => {
              const key = index + 1;
              return {
                key,
                label: <Link to={item.link}>{item.name}</Link>,
              };
            })}
          />
        </div>
      </div>
    </Header>
  );
}
