import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { BiMessageAlt } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import axios from 'axios';

const { Header, Content, Sider } = Layout;

const Converstation: React.FC = () => {
    const token = localStorage.getItem('token');

    // Converstation dizisi
    const [conversations, setConversations] = useState<Array<any>>(() => {
        const storedConversations = JSON.parse(localStorage.getItem('conversations') || '[]');
        return storedConversations;
    });


    const [convserstationName, setConvserstationName] = useState<string>('');

    const createConverstation = async () => {
        try {
            const response = await axios.post('http://localhost:3000/converstation', {
                name: 'Test',
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            setConvserstationName(response.data.name);
            console.log(convserstationName)

            console.log(response.data)


            const newConversation = {
                key: String(conversations.length + 1),
                icon: <BiMessageAlt />,
                label: ` Converstation ${conversations.length + 1} `,
                className: 'font-inter text-regular',
            };

            setConversations(prevConversations => [...prevConversations, newConversation]);

            // localStorage güncelleniyor
            localStorage.setItem('conversations', JSON.stringify([...conversations, newConversation]));

        } catch (error) {
            console.error(error);
        }
    };

    const items: React.ComponentProps<typeof Menu>['items'] = Array.from({ length: conversations.length }, (_, index) => ({
        key: String(index + 1),
        icon: <BiMessageAlt />,
        label: "Converstation",
        className: 'font-inter text-regular',
    }));

    useEffect(() => {

        // Sayfa yüklendiğinde localStorage'dan verileri al
        const storedConversations = JSON.parse(localStorage.getItem('conversations') || '[]');
        setConversations(storedConversations);
    }, []);


    return (
        <Layout className="flex">
            <Sider className="overflow-auto h-screen fixed left-0 top-0 bottom-0 " style={{ background: '#101010' }}>
                <button
                    onClick={createConverstation}
                    className="bg-[#202123] hover:opacity-80 text-white font-inter font-medium py-2 px-4 mt-4 ml-2 rounded-md flex items-center"
                >
                    <FaPlus className="mr-2" /> New Chat
                </button>

                <div className="mt-6" style={{ background: '#101010' }} />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} style={{ background: '#101010' }} />
            </Sider>

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
