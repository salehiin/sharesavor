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
        <div className="text-center">
            <h2>All foods</h2>
            <div className="  border text-center">
                <div className=" bg-green text-center border">
                    {foods.map((food) => (
                        <FoodCard key={food._id} food={food}></FoodCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Foods;