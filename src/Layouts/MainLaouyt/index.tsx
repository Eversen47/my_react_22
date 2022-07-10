import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import style from './MainLayout.module.scss';

const { Sider, Header, Content } = Layout;

interface IProps {
  children: React.ReactNode;
}

const MainLaouyt: FC<IProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const habdleSiderToggle = () => setIsCollapsed((prev) => !prev);

  const collapsedSiderBtn = isCollapsed ? (
    <MenuUnfoldOutlined className={style.sider_toggle} onClick={habdleSiderToggle} />
  ) : (
    <MenuFoldOutlined className={style.sider_toggle} onClick={habdleSiderToggle} />
  );
  return (
    <Layout className={style.main_layout}>
      <Sider collapsed={isCollapsed}>
        <Menu
          theme="dark"
          mode="inline"
          className={style.main_layout_sider_manu}
          items={[
            { key: '1', label: 'nav 1' },
            { key: '2', label: 'nav 2' },
          ]}
        />
      </Sider>
      <Layout className={style.main_sublayout}>
        <Header className={style.main_layout_header}>{collapsedSiderBtn}</Header>
        <Content className={style.main_layout_content}>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default MainLaouyt;
