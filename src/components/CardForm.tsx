import { useState } from "react";
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { RiRobot2Fill } from "react-icons/ri";
import Footer from "./Footer";
import { Button, Input } from "antd";


//TODO: Validate İşlemleri Yapılacak.
//TODO: Ödeme İşlemi yapldıktan sonra user verisinde isPayment alanı güncellenecek.
//TODO: 


const CardForm = () => {
    const [name, setName] = useState<string>('')
    const [cardNumber, setCardNumber] = useState<string>('')
    const [expiry, setExpiry] = useState<string>('')
    const [cvc, setCvc] = useState<string>('')
    const [focus, setFocus] = useState<string>('')

    const getPayment = () => {

        console.log(name, cardNumber, expiry, cvc, "Ödeme Yapıldı")

    }

    return (
        <div className="p-2">
            {/* Navbar */}
            <div className="flex justify-between">
                <div className="ml-6 lg:ml-40 md:ml-24 sm:ml-16 mt-3 flex justify-center items-center">
                    <RiRobot2Fill size={40} />
                    <h1 className="pl-5 text-lg font-semibold tracking-normal leading-normal ">FunCodes</h1>
                </div>
            </div>

            {/* Gray Line */}
            <hr className="w-full border-gray-300 mt-3" />

            {/* Card */}
            <div className="my-8 mx-auto text-center">
                <Cards
                    name={name}
                    number={cardNumber}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus}
                />
            </div>

            {/* Card Form */}
            <form className="mt-8 mx-auto text-center flex flex-col items-center">
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    className="w-full lg:w-96 p-2 mb-4 border rounded-md shadow-md focus:shadow-lg placeholder:text-gray-800"
                />
                <Input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    className="w-full lg:w-96 p-2 mb-4 border rounded-md shadow-md focus:shadow-lg placeholder:text-gray-800"
                />
                <Input
                    type="text"
                    name="expiry"
                    placeholder="MM/YY Expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    className="w-full lg:w-96 p-2 mb-4 border rounded-md shadow-md focus:shadow-lg placeholder:text-gray-800"
                />
                <Input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    onFocus={(e) => setFocus(e.target.name)}
                    className="w-full lg:w-96 p-2 mb-4 border rounded-md shadow-md focus:shadow-lg placeholder:text-gray-800"
                />


                <Button onClick={getPayment} type="primary" size="large" className="w-20" >Pay</Button>

            </form>

            <Footer />
        </div>
    );

}

export default CardForm;
