import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown } from 'antd';
import { More } from 'iconsax-react';
import { json, useNavigate } from 'react-router-dom';




const UserArea: React.FC<UserAreaProps> = ({ userNameColor = 'white' }) => {
    const navigate = useNavigate();

    // Payment Sayfasına Yönlendiriyor
    const goToPayment = () => {
        navigate('/payment');
    }

    const logOut = () => {
        localStorage.removeItem('token');
        console.log("Log Out olundu");
        navigate('/');
    };

    const userInfo = () => {
        const userString = localStorage.getItem('user');

        if (userString) {
            const user = JSON.parse(userString);
            console.log("User Info:", user);

            // Burada user adına ulaşabilirsiniz
            const userName = user.name;
            return userName;
        }

        return "User Name"; // Eğer kullanıcı bilgisi yoksa varsayılan bir değer döndür
    }

    const items: MenuProps['items'] = [
        {
            label: <Button className='w-full font-inter'>User Update</Button>,
            key: '0',
        },
        {
            label: <Button onClick={goToPayment} className='w-full font-inter'>Payment</Button>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: <Button className='w-full font-inter' onClick={logOut}>Log Out</Button>,
            key: '3',
        },
    ];

    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
                <div className="flex items-center">
                    <Avatar className='mb-2' shape="square" size={36} icon={<UserOutlined />} />
                    <span className={`ml-2 font-inter font-semibold text-base text-${userNameColor}`}>
                        {userInfo()}</span>
                    <More className='ml-2' />
                </div>
            </a>
        </Dropdown>
    );
};

export default UserArea;

