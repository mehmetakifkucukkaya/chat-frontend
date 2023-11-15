import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

const PricingCards = () => {
    const cardData = [
        {
            title: "Monthly",
            price: "$20",
            description: "Unlimited Chat",
        },
        {
            title: "3 Month",
            price: "$52",
            description: "Unlimited Chat",

        },
        {

            title: "Yearly",
            price: "$199",
            description: "Unlimited Chat",

        },
    ];

    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className={`max-sm:mx-2 max-md: mx-2 shadow-xl flex flex-col p-4 my-6 rounded-2xl hover:scale-105 duration-300 bg-gray-200`}
                    >
                        <div className="flex justify-center ">
                            <PiCurrencyDollarSimpleFill size={36} />
                        </div>

                        <h2 className="text-2xl font-bold text-center py-4">
                            {card.title}
                        </h2>

                        <p className="text-center text-4xl font-bold mt-2">{card.price}</p>

                        <div className="text-center font-medium">
                            <span>{card.description}</span>
                        </div>


                        {/* //TODO Kart Bilgileri Kısmına Gönderecek  */}
                        <button
                            className={`bg-[#292b33] hover:text-white text-base w-[200px] rounded-md border-none font-semibold my-6 mx-auto py-3`}
                        >
                            Start Trial
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCards;