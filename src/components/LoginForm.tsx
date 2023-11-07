import { MouseEventHandler, useState } from 'react'
import { HiEyeOff, HiEye } from 'react-icons/hi'
import { BiMessage } from 'react-icons/bi'

const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility: MouseEventHandler<HTMLButtonElement> = (event) => {
        setShowPassword(!showPassword);

        event.preventDefault();
    };


    return (
        <div className='mt-16 lg:mt-24 md:mt-24 sm:mt-20 flex flex-col items-center'>

            {/* Title */}
            <div className='justify-items-center'>

                <h1 className='font-bold text-2xl'>
                    Log in to FunCodes AI
                </h1>

            </div>


            {/* İnputs */}
            <form className="flex flex-col p-4 bg-white relative">
                <input
                    className="mb-6 w-[400px] p-3 rounded-xl border border-gray-300"
                    type="email"
                    placeholder="Email"
                />
                <div className="relative mb-3">
                    <input
                        className="w-full p-3 rounded-xl border border-gray-300"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                    />
                    <button
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <HiEyeOff /> : <HiEye />}
                    </button>
                </div>
            </form>


            <p>Don't have an account? <span className='font-medium    underline'>Sign up</span></p>

            {/* Button */}
            <div className="">
                <button className="bg-[#030712] text-white text-s mt-4 rounded-md h-[50px] md:w-[400px] sm:w-64 w-[340px] flex items-center justify-center">
                    <BiMessage className="mr-2" size={15} />
                    Continue
                </button>
            </div>

            <span className='mt-4 underline font-medium'>Forgot Password</span>

        </div>
    )
}

export default LoginForm
