import React from 'react';

import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { BiMessageAlt } from 'react-icons/bi';

const { Header, Content, Footer, Sider } = Layout;

// TODO: Lenght => User'a ait coseverstation sayısı olacak.
const items: MenuProps['items'] = Array.from({ length: 9 }, (_, index) => ({
    key: String(index + 1),
    icon: <BiMessageAlt />,
    label: `Converstation ${index + 1}`,
}));

const Converstation: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="flex">
            <Sider
                className=" overflow-auto h-screen fixed left-0 top-0 bottom-0 bg-gray-800"
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
            <Layout className="site-layout ml-64">
                <Header className="p-0" style={{ background: colorBgContainer }} />
                <Content className="m-24 overflow-visible">
                    <div className={`p-24 text-center ${colorBgContainer}`}>
                        <p>Konuşma İçeriği</p>
                        {

                        }
                    </div>
                </Content>
                <Footer className="text-center">Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Converstation;
