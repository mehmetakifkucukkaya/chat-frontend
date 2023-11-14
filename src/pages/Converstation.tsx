import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Button, Drawer, Input, Layout, Menu, Spin } from 'antd';
import { BiMessageAlt } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { BsSend, BsTrash3 } from 'react-icons/bs';
import axios from 'axios';
import Typography from 'antd/es/typography/Typography';
import { CloseCircleOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { More, Send2 } from 'iconsax-react';
import UserArea from '../components/UserArea/UserArea';

const { Content, Sider } = Layout;

const Converstation: React.FC = () => {
    const [token, setToken] = useState<string | any>(localStorage.getItem('token'))

    // Converstation dizisi
    const [conversations, setConversations] = useState<any[]>([]);
    const [currentConversations, setCurrentConversations] = useState<any>()
    const [predictName, setPredictName] = useState<string>('')
    const [predictData, setPredictData] = useState<any>()
    const [predictDatas, setPredictDatas] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState(false);
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    const createConverstation = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await axios.post('http://localhost:3000/converstation', {
                name: 'Test',
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }).then((res) => {
                findConverstation()
                setIsLoading(false)
            }).catch((err) => {
                setIsLoading(true)

            });
        } catch (error) {
            console.error(error);
        }
    }, [])

    const deleteConverstation = useCallback(async () => {

        const response = await axios.delete(`http://localhost:3000/converstation/${currentConversations?._id}`
            , {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }).then((res) => {
                findConverstation()
            }).catch((err) => {
                console.log(err);
            });

    }, [currentConversations])


    const findConverstation = useCallback(async () => {
        setIsLoading(true)
        const response = await axios.post('http://localhost:3000/converstation/find', {
            where: {

            }
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then((res) => {
            console.log(res?.data?.data)
            setConversations(res.data?.data)
            setCurrentConversations(res.data?.data[0])
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        });
    }, [])


    useEffect(() => {
        findConverstation()
    }, [findConverstation])

    const predictApply = useCallback(async () => {
        setPredictName('')
        setIsLoading(true)
        const response = await axios.post('http://localhost:3000/predict', {
            question: predictName,
            converstationId: currentConversations?._id
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then((res) => {
            console.log(res?.data?.data)
            setPredictData(res?.data?.data)
            findPredict()
            setIsLoading(false)
        }).catch((err) => {
            console.log(err)
            setIsLoading(false)
        });
    }, [predictName, currentConversations])


    const findPredict = useCallback(async () => {
        setIsLoading(true)
        const response = await axios.post('http://localhost:3000/predict/find', {
            where: {
                converstationId: currentConversations?._id
            }
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        }).then((res) => {
            console.log(res?.data?.data)
            setPredictDatas(res?.data?.data)
            setIsLoading(false)
        }).catch((err) => {
            setIsLoading(false)
            console.log(err)
        });
    }, [currentConversations])

    useEffect(() => {
        findPredict()
    }, [findPredict])


    const items: React.ComponentProps<typeof Menu>['items'] = Array.from({ length: conversations.length }, (_, index) => ({
        key: String(index + 1),
        icon: <BiMessageAlt />,
        label: <div
            onClick={() => {
                setCurrentConversations(conversations[index]);
                console.log(conversations[index]);
            }}
            style={{ display: 'flex', alignItems: 'center' }}
        >
            <span style={{ marginRight: 'auto' }}>{conversations[index]?.name}</span>
            <Button onClick={deleteConverstation} className='bg-transparent border-none text-[#c5c5d2]' >
                <BsTrash3 size={16} />
            </Button>
        </div>,

        className: 'font-inter text-regular',
    }));



    return (
        <Layout style={{
            margin: '-8px'
        }} className="flex h-screen">
            <Sider
                breakpoint="md"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                className="overflow-auto h-screen fixed left-0 top-0 bottom-0 " style={{ background: '#101010' }}
            >
                <div className="flex flex-col h-full">
                    <div>
                        <Button
                            type='primary'
                            onClick={createConverstation}
                            className="flex mx-12 mt-4 justify-center"
                        >
                            <div className='flex flex-row justify-center items-center'>
                                <FaPlus className="mr-2" />
                                <div>New Chat</div>
                            </div>
                        </Button>
                    </div>

                    <div className="mt-6" />

                    <div className="bg-transparent p-4 flex flex-col flex-grow">
                        <div className="flex-grow">
                            <Menu style={{ background: '#101010' }} theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />

                        </div>
                        <div className="mt-auto">
                            <hr className='w-full border-t-0 border-gray-50 mb-3 mt-3' />
                            <UserArea />
                        </div>
                    </div>


                </div>




                {/* Drawer Menu & Items */}
                <Drawer
                    title={
                        <div className='flex flex-row justify-between items-center'>
                            <Title level={3}>Menu</Title>
                            <div className='items-center'>
                                <CloseCircleOutlined style={{ fontSize: '24px', marginTop: '15px' }} onClick={onClose} className='' />
                            </div>
                        </div>
                    }
                    placement='left'
                    closable={false}
                    onClose={onClose}
                    open={open}
                    key='left'
                >
                    <div className='flex justify-center items-center mb-5'>
                        <Button
                            type='primary'
                            onClick={createConverstation}
                            className="flex mx-12 mt-4 justify-center"
                        >
                            <div className='flex flex-row justify-center items-center'>
                                <FaPlus className="mr-2" />
                                <div>New Chat</div>
                            </div>
                        </Button>
                    </div>

                    {/* Conversations */}
                    <div className='flex flex-col h-full m-2'>
                        {conversations?.map((item: any, index: number) => (
                            <div key={index} className="flex space-x-2">
                                <Button
                                    block
                                    className='m-2 flex-1'
                                    onClick={() => {
                                        setCurrentConversations(item)
                                    }}
                                >
                                    {item?.name}
                                </Button>
                                <Button onClick={deleteConverstation} className='m-2 bg-transparent border-none text-[#c5c5d2]'>
                                    <BsTrash3 size={16} />
                                </Button>
                            </div>
                        ))}

                        <hr className='w-full border-t-0 border-blue-300' />
                    </div>

                    {/* UserArea */}
                    <div className='flex justify-center'>
                        <UserArea userNameColor='black' />
                    </div>
                </Drawer>



            </Sider>


            {/* Precdicts Area */}
            <Layout className="site-layout">
                <Content className="">
                    <div className='h-full flex flex-col justify-between'>
                        <div className="flex flex-col overflow-x-auto">
                            <Button className='md:hidden m-5' onClick={showDrawer}><MenuUnfoldOutlined /></Button>
                            {predictDatas?.map((item: any, index: number) => {
                                return (
                                    <div className='mx-5 '>
                                        {/* Questions */}
                                        <Typography className='bg-[#343541] text-end text-[#ffffff] '>
                                            <pre>
                                                {item?.question}
                                            </pre>
                                        </Typography>

                                        {/* Answers */}
                                        <Typography className=''>
                                            <pre>
                                                {item?.answer}
                                            </pre>
                                        </Typography>
                                    </div>
                                )
                            })}
                            {
                                isLoading
                                    ?
                                    <div className="flex justify-center">
                                        <Spin size='large' />
                                    </div>
                                    :
                                    <></>
                            }
                        </div>


                        {/* Input Area */}
                        <div className='place-items-center m-10 flex flex-row '>
                            <Input
                                suffix={<Button style={{
                                    border: 'none',

                                }} onClick={predictApply} >
                                    <Send2
                                        color='#d9d9d9'
                                    />
                                </Button>}
                                onPressEnter={predictApply}
                                value={predictName}
                                onChange={(e) => {
                                    setPredictName(e.target.value)
                                }}
                                style={{
                                    width: '100%',
                                }} />

                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Converstation;
