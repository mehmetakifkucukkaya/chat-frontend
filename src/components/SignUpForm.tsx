import { ChangeEventHandler,  useState } from 'react'
import { BiMessage } from 'react-icons/bi'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const SignUpForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [showError, setShowError] = useState<boolean>(false);



    const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    };
    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    }

    const signUp = async () => {
        //TODO: user verisi olarak undefined dönüyor

        const response = await axios.post('http://localhost:3000/user', {
            name: name,
            email: email,
            password: password
        })
            .then(function (response) {
               
                navigate('/');

            })
            .catch(function (error) {
                console.log(error);

                setShowError(true)
            });
    }


    return (
        <div className='mt-16 lg:mt-24 md:mt-24 sm:mt-20 flex flex-col items-center'>

            {/* Title */}
            <div className='justify-items-center'>
                <h1 className='font-bold text-2xl'>
                    Create Your Account
                </h1>
            </div>

            {/* Inputs */}
            <form className="flex flex-col p-4 bg-white ">
                {/* Name */}
                <div className='mb-3 w-[350px] '>
                    <Input
                        onPressEnter={signUp}
                        className='rounded-xl h-12'
                        status={email.trim() === '' ? 'error' : ''}
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                {/* Email */}
                <div className='mb-3 w-[350px] '>
                    <Input
                        onPressEnter={signUp}
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
                        onPressEnter={signUp}
                        className='rounded-xl h-12'
                        status={password.trim() === '' ? 'error' : ''}
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        iconRender={(visible) => (visible ? <EyeTwoTone size={35} /> : <EyeInvisibleOutlined size={35} />)}
                    />
                </div>
            </form>

            <p>Already have an account? <span className='font-medium underline '>Log in</span></p>

            {/* Button */}
            <div className="">
                <button onClick={signUp} className="cursor-pointer bg-[#030712] text-white text-s mt-4 rounded-md h-[50px] md:w-[400px] sm:w-64 w-[340px] flex items-center justify-center border-none hover:opacity-95">
                    <BiMessage className="mr-2" size={15} />
                    Sign Up
                </button>
            </div>


            {/* Hata mesajı */}
            {showError && (
                <Alert
                    message="Error !"
                    description="SignUp failed. Please check your information."
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

export default SignUpForm

