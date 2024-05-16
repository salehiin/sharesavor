import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const {
        _id,
        foodName,
        foodImage,
        donar,
        // donar: { email: donatorEmail, name: donatorName, photo: donatorImage },
        quantity,
        pickupLocation,
        expiredDateTime,
        additionalNotes,
    } = food || {};

     const donatorEmail = donar ? donar.email : "";
    const donatorName = donar ? donar.name : "";
    const donatorImage = donar ? donar.photo : "";

    return (
        <div>
            <div className="w-full max-w-md px-8 py-4 mt-8 bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto">
                {/* <div className="flex justify-center -mt-16 md:justify-end">
                    <img
                        className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                        alt="Donator"
                        src={donatorImage}
                    />
                </div> */}

                {/* DAISY UI */}

                <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={foodImage} alt="Food" />
                {/* <div className="flex justify-center -mt-28 -mr-20 md:justify-end z-50 fixed"> */}
                    {/* <img
                        className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                        alt="Donator"
                        src={donatorImage}
                    /> */}
                {/* </div> */}
                </figure>
                <div className="card-body">
                    <img
                        className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
                        alt="Donator"
                        src={donatorImage}
                    />
                    <h2 className="card-title text-[#ff006e] capitalize text-3xl font-bold">{foodName}</h2>
                    <p className="text-[#e9edc9]">{additionalNotes}</p>
                    <div className="flex text-[#ff006e]">
                    <p className="">Quantity: {quantity}</p>
                    <p className=""><span>Expiry: {new Date(food.expiredDateTime).toLocaleDateString()}</span></p>
                    </div>
                    
                    <p className="text-[#ff006e]">Location: {pickupLocation}</p>
                    <h4 className="text-xl font-medium text-blue-600 dark:text-blue-300 capitalize">Donator: {donatorName}</h4>
                    
                    <div className="card-actions justify-end">
                        <Link to={`/food/${_id}`} className="flex justify-between items-center mt-4">
                            {/* <a href="#"  tabIndex="0" role="link"> */}
                                
                            {/* </a> */}
                            <button className="btn btn-primary text-[#e9edc9]">View details</button>
                        </Link>
                    </div>
                </div>
                </div>


                {/* DAISY UI */}

                {/* <img className="object-cover w-full h-64 mt-2" alt="Food" src={foodImage} /> */}

                {/* <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{foodName}</h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{donatorEmail}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Quantity: {quantity}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Pickup Location: {pickupLocation}</p>
                <span>Expired date: {new Date(food.expiredDateTime).toLocaleDateString()}</span>
                

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{additionalNotes}</p>

                <Link to={`/food/${_id}`} className="flex justify-between items-center mt-4">
                    <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">
                        {donatorName}
                    </a>
                    <button className="btn btn-info">View details</button>
                </Link> */}
            </div>
        </div>
    );
};

export default FoodCard;
