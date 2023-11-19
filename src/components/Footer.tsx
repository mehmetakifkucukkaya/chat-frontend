import { RiRobot2Fill } from 'react-icons/ri'

const Footer = () => {
    return (

        // TODO: Responsive yapılacak.

        <div className=' bg-gray-200 h-[260px] flex flex-row max-md:flex-col justify-between mt-4'>

            {/* Left Area -> Includes icon and app name */}
            {/* //TODO: Anasayfaya yönlendirilecek. */}
            <button className='border-none ml-6 lg:ml-40 md:ml-24 sm:ml-16 mt-3 flex justify-center items-center bg-transparent'>
                <RiRobot2Fill size={40} />
                <h1 className='pl-5 text-lg font-semibold tracking-normal leading-normal font-inter'>FunCodes</h1>
            </button>

            {/* Center Area ->Includes Support,Term of Use and Privacy Polciy */}
            <div className='text-[#666666] flex justify-center items-center space-x-9'>

                {/* //TODO: Gerekli yönlendirilmeler yapılacak. */}
                <button className='border-none text-base hover:underline font-inter'>Support</button>
                <button className='border-none text-base hover:underline font-inter'>Privacy Policy</button>
                <button className='border-none text-base hover:underline font-inter'>Term of Use</button>
            </div>


            {/* Right Area -> Includes Copyright */}
            <div className='flex items-center justify-center'>
                <p className='text-black text-xs mr-40'>@ 2023 AI App</p>
            </div>


        </div>
    )
}

export default Footer
