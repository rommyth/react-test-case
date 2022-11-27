import React, { useState } from 'react';
import './index.css';

import { Link, useNavigate } from 'react-router-dom';

import { MenuOutlined } from '@ant-design/icons';
import { Layout, Menu, Input, Space, Button, Drawer } from 'antd';

const { Header } = Layout;
const { Search } = Input;

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

export default function HeaderScreem() {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  // General Function
  const onSearch = (value: string) => {
    navigate(`/search?q=${value}`);
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header className="sticky">
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <h1>
              <Link to={'/'}>RTH News</Link>
            </h1>
          </div>
          <div className="menu__mobile--hidden">
            <div className="menu">
              <Search
                placeholder="Cari Berita"
                allowClear
                onSearch={onSearch}
                style={{ width: 200 }}
              />
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

          <div className="menu__mobile--visible">
            <Button onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <Drawer placement="right" onClose={onClose} open={open}>
              <div>
                <Search
                  placeholder="Cari Berita"
                  allowClear
                  onSearch={onSearch}
                  style={{ width: '100%' }}
                />
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
            </Drawer>
          </div>
        </div>
      </div>
    </Header>
  );
}
