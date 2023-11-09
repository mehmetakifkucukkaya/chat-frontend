import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { BiMessageAlt } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';

const { Header, Content, Sider } = Layout;

// TODO: Lenght => User'a ait coseverstation sayısı olacak.


const Converstation: React.FC = () => {

    const token = localStorage.getItem('token');

    const [conversations, setConversations] = useState<Array<{ key: React.Key; icon: React.ReactNode; label: React.ReactNode; className?: string }>>([]);


    const createConverstation = async () => {
        try {
            const response = await axios.post('http://localhost:3000/converstation', {
                name: 'Test',
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });


            const newConversation = {
                key: response.data.id,
                icon: <BiMessageAlt />,
                label: response.data.name,
                className: 'font-inter text-regular',
            };

            setConversations((prevConversations) => [...prevConversations, newConversation]);

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <Layout className="flex">

            {/* Soldaki Menü */}
            <Sider className="overflow-auto h-screen fixed left-0 top-0 bottom-0 " style={{ background: '#101010' }}>

                {/* New Chat Butonu */}
                <button
                    onClick={createConverstation} className="bg-[#202123] hover:opacity-80 text-white font-inter font-medium py-2 px-4 mt-4 ml-2 rounded-md flex items-center">
                    <FaPlus className="mr-2" /> New
                </button>

                {/* Sohbet Menüsü */}
                <div className="mt-6" style={{ background: '#101010' }} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={conversations} style={{ background: '#101010' }} />
            </Sider>

            {/* İçerik */}

            <Layout className="site-layout ml-64">

                <Header className="p-0" style={{ background: 'white' }} />


                <Content className="m-24 overflow-visible">
                    <div className={`p-24 text-center`}>
                        <p>Konuşma İçeriği</p>
                    </div>
                </Content>

            </Layout>
        </Layout>
    );
};

export default Converstation;
