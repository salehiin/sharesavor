import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import axios from "axios";


const Foods = () => {

    const [foods, setFoods] = useState([]);
        useEffect(() => {
            const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);
            setFoods(data);
            };
            getData();
        }, []);


    return (
        <div className="text-center bg-[black]">
            <h1 className="text-6xl font-bold uppercase py-6 text-blue-600">All foods</h1>
            {/* <div className="flex w-full justify-between"> */}
            {/* <div className=" w-1/2  border flex"> */}
                <div className="w-full grid grid-cols-2 text-left pb-16">
                    {foods.map((food) => (
                        <FoodCard key={food._id} food={food}></FoodCard>
                    ))}
                </div>
            </div>
            // </div>
        // </div>
    );
};

export default Foods;