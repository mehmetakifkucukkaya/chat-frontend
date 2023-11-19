import { RiRobot2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const NavBar_Home = () => {
    const navigate = useNavigate();

    const navigatePayment = () => {
        navigate('/signUp');
    }

    const navigateLogIn = () => {
        navigate('/login');
    }


    return (
        <>
            <div className='flex justify-between '>

                {/* Left Area -> Includes icon and app name */}
                <div className='ml-6 lg:ml-40 md:ml-24 sm:ml-16 mt-3 flex justify-center items-center'>
                    <RiRobot2Fill size={40} />
                    <h1 className='pl-5 text-lg font-semibold tracking-normal leading-normal '>FunCodes</h1>
                </div>

                {/* Center Area */}

                <div className='flex flex-row items-center'>
                    <p className="mr-4">Use AI App</p>
                    <p className="mr-4">Use Cases</p>
                    <p className="mr-4">News</p>
                    <p>Pricing</p>
                </div>


                {/* Right Area ->  Includes login button an signup button*/}

                {/* //TODO: Show buttons only lg mode. */}
                {/* //TODO: Gerekli yönlendirilmeler yapılacak. */}
                <div className='flex items-center  mr-6 lg:mr-24 md:mr-20 sm:mr-16 '>
                    <button onClick={navigateLogIn} className='cursor-pointer p-4 hover:opacity-90 bg-white font-inter text-base border-none'>Login</button>
                    <button onClick={navigatePayment} className='cursor-pointer bg-[#030712] text-[white] rounded-md text-base px-3 py-2 hover:opacity-90 border-none'>Sign Up</button>
                </div>

            </div>

            {/* Gray Line */}
            <hr className='w-full border-gray-300 mt-3' />

        </>
    )
}

export default NavBar_Home
