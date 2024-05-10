import { Link } from "react-router-dom";


const FoodCard = ({food}) => {


    const { 
        _id, 
        foodName, 
        donatorName, 
        donatorImage, 
        quantity, 
        pickupLocation, 
        expiredDateTime, 
        additionalNotes 

    } = food || {}


    return (
        <div>
            
                <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto">
                    <div className="flex justify-center -mt-16 md:justify-end">
                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={donatorImage}></img>
                    </div>

                    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{foodName}</h2>

                    <span>Expired date: {expiredDateTime}</span>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

                    <Link to={`/food/${_id}`} className="flex justify-between items-center mt-4">
                        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{donatorName}</a>
                        <button className="btn btn-info">View details</button>
                    </Link>
                </div>
                
            
        </div>
    );
};

export default FoodCard;