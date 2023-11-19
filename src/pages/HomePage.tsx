import Footer from '../components/Footer';
import NavbarHome from '../components/NavBar_Home'
import { useNavigate } from 'react-router-dom';



const HomePage = () => {

    const navigate = useNavigate();

    const goToSignUp = () => {

        console.log("Tıklandı")
        navigate('/signUp');
    }


    return (

        <div className="flex flex-col min-h-screen text-center'">

            <NavbarHome />

            {/* Main Area */}
            <div className='flex flex-col items-center flex-grow font-inter '>

                <h1 className='text-4xl'>AI App: All-in-One AI Chatbot</h1>

                <p className='text-xl text-center'>
                    AI App offers an intuitive user interface for accessing ChatGPT, GPT-4, and Google Bard without any daily usage limits, all at an affordable price with a single membership.
                </p>

                <p className='text-xl'>To begin using AI App on the web, mobile, and desktop, simply tap the 'Get Started' button.</p>

                <button onClick={goToSignUp} className="mt-4 bg-[#000000] text-white rounded-2xl hover:cursor-pointer hover:opacity-90 h-14 w-32 text-lg mb-6"> Get Started</button>
            </div>

            <Footer />

        </div>




    )
}

export default HomePage;



