import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Navbar />

            <div className="flex-grow">
                <LoginForm />
            </div>

            <Footer />
        </div>
    )
}

export default Login;
