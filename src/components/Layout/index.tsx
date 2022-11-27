import React from 'react';

import { Outlet } from 'react-router-dom';
import { Breadcrumb, Layout as LayoutAntd, Menu } from 'antd';

// global components
import Header from '../Header';
import Footer from '../Footer';

const { Content } = LayoutAntd;

export default function Layout() {
  return (
    <>
      <LayoutAntd>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </LayoutAntd>
    </>
  );
}
