import { ChangeEventHandler, useState } from 'react'
import { BiMessage } from 'react-icons/bi'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);



    const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    };

    const getUserInfo = (email: string, password: string) => {
        // Token'ı önceden almanız ve bir değişkende saklamanız gereklidir.
        const accessToken = 'buraya_token';

        axios.get('http://localhost:3000/auth/me', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            params: {
                email: email,
                password: password
            }
        })
            .then(function (response) {
                localStorage.setItem('user', JSON.stringify(response?.data?.data));

                console.log(response?.data?.data, "USER INFO");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const login = () => {
        axios.post('http://localhost:3000/auth/login', {
            email: email,
            password: password
        })
            .then(function (response) {
                localStorage.setItem('token', response.data.data); //* Token localstorage'a kaydedildi.

                //* Kontrol amaçlı yazdırıldı.
                console.log(localStorage.getItem('token'));

                navigate('/converstation');

                //* Kullanıcı bilgilerini alıyoruz
                getUserInfo(email, password);

                const user = localStorage.getItem('user');
            })
            .catch(function (error) {
                console.log(error);

                // Login işlemi başarısız olursa hata mesajı gösterilecek.
                setShowError(true);
            });
    }


    return (
        <div className='mt-16 lg:mt-24 md:mt-24 sm:mt-20 flex flex-col items-center'>


            {/* Title */}
            <div className='justify-items-center'>
                <h1 className='font-bold text-2xl'>
                    Log in to FunCodes AI
                </h1>
            </div>

            {/* Inputs */}
            <form className="flex flex-col p-4 bg-white ">
                {/* Email */}
                <div className='mb-3 w-[350px] '>
                    <Input
                        onPressEnter={login}
                        className='rounded-xl h-12'
                        status={email.trim() === '' ? 'error' : ''}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>

                {/* Password */}
                <div className="relative mb-2 ">
                    <Input.Password
                        onPressEnter={login}
                        className='rounded-xl h-12'
                        status={password.trim() === '' ? 'error' : ''}
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        iconRender={(visible) => (visible ? <EyeTwoTone size={35} /> : <EyeInvisibleOutlined size={35} />)}
                    />
                </div>
            </form>

            <p>Don't have an account? <span className='font-medium underline '>Sign up</span></p>

            {/* Button */}
            <div className="">
                <button onClick={login} className="cursor-pointer bg-[#030712] text-white text-s mt-4 rounded-md h-[50px] md:w-[400px] sm:w-64 w-[340px] flex items-center justify-center border-none hover:opacity-95">
                    <BiMessage className="mr-2" size={15} />
                    Continue
                </button>
            </div>

            <span className='mt-4 underline font-medium'>Forgot Password</span>


            {/* Hata mesajı */}
            {showError && (
                <Alert
                    message="Error !"
                    description="Login failed. Please check your information."
                    type="error"
                    showIcon
                    closable
                    onClose={() => setShowError(false)}
                    style={{ position: 'fixed', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}
                />
            )}
        </div>
    );
}

export default LoginForm

