import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown } from 'antd';
import { More } from 'iconsax-react';

const items: MenuProps['items'] = [
    {
        label: <Button className='w-full font-inter'>User Update</Button>,
        key: '0',
    },
    {
        label: <Button className='w-full font-inter'>Payment</Button>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: <Button className='w-full font-inter'>Log Out</Button>,
        key: '3',
    },
];

const UserArea: React.FC = () => (
    <Dropdown menu={{ items }} trigger={['click']}>

        <a onClick={(e) => e.preventDefault()}>

            <div className="flex items-center">
                <Avatar className='mb-2' shape="square" size={36} icon={<UserOutlined />} />
                <span className='ml-2 font-inter font-semibold text-base text-white'>User Name</span>
                <More className='ml-2' />
            </div>

        </a>
    </Dropdown>
);

export default UserArea;