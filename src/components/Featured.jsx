import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);
      setFoods(data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="flex p-6">
        <div className="w-1/2 bg-black text-white p-4 mt-10">
          <h1 className="text-6xl font bold mb-4">Featured Foods</h1>
          <p className="text-lg">
          Featured foods encompass a diverse array of culinary delights, each promising a unique sensory experience. From the comforting familiarity of pasta dishes to the exotic allure of chicken curry, these featured foods capture the essence of global cuisine. Pasta, a beloved Italian staple, boasts versatility in its many forms, whether it's spaghetti twirled with marinara sauce or creamy fettuccine Alfredo. Its simplicity belies its ability to accommodate an endless variety of flavors and ingredients, making it a perennial favorite for home cooks and gourmets alike. Meanwhile, chicken curry transports diners to the vibrant streets of India, with its aromatic blend of spices and tender poultry enveloped in a creamy, tomato-based sauce. Served with fragrant basmati rice or warm naan bread, chicken curry embodies the rich cultural heritage and culinary sophistication of Indian cuisine. From humble potatoes and carrots to exotic eggplants and Brussels sprouts, virtually any vegetable can be elevated to culinary greatness through the process of roasting. Drizzled with olive oil, sprinkled with herbs, and seasoned with salt and pepper, these roasted gems become a delectable side dish or a hearty main course. Whether served alongside grilled meats, tossed with pasta, or stuffed into sandwiches, roasted veggies add depth and character to any meal, making them a cherished staple in kitchens around the world. Featured foods encompass a diverse array of culinary delights, each promising a unique sensory experience. From the comforting familiarity of pasta dishes to the exotic allure of chicken curry, these featured foods capture the essence of global cuisine. Pasta, a beloved Italian staple, boasts versatility in its many forms, whether it's spaghetti twirled with marinara sauce or creamy fettuccine Alfredo. Its simplicity belies its ability to accommodate an endless variety of flavors and ingredients, making it a perennial favorite for home cooks and gourmets alike. Meanwhile, chicken curry transports diners to the vibrant streets of India, with its aromatic blend of spices and tender poultry enveloped in a creamy, tomato-based sauce. Served with fragrant basmati rice or warm naan bread, chicken curry embodies the rich cultural heritage and culinary sophistication of Indian cuisine. From humble potatoes and carrots to exotic eggplants and Brussels sprouts, virtually any vegetable can be elevated to culinary greatness through the process of roasting. Drizzled with olive oil, sprinkled with herbs, and seasoned with salt and pepper, these roasted gems become a delectable side dish or a hearty main course. Whether served alongside grilled meats, tossed with pasta, or stuffed into sandwiches, roasted veggies add depth and character to any meal, making them a cherished staple in kitchens around the world.In contrast, risotto and burritos offer distinct culinary experiences, each with its own allure and charm. Risotto, an Italian delicacy, captivates palates with its creamy texture and rich flavor profile. Slow-cooked Arborio rice absorbs the savory essence of broth, resulting in a luxurious dish that epitomizes comfort and indulgence. On the other hand, burritos embody the spirit of Mexican street food, with their portable, customizable nature. A flour tortilla serves as a canvas for an assortment of fillings, from spicy meats to crisp vegetables, all wrapped up for a convenient and satisfying meal on the go. Whether savoring the creamy decadence of risotto or indulging in the bold flavors of a burrito, featured foods offer a tantalizing journey through the world's culinary landscape. In essence, featured foods represent more than just sustenance; they embody the artistry and ingenuity of culinary exploration. From the rustic charm of pasta primavera to the elemental beauty of roasted veggies, each dish tells a story of tradition, innovation, and the boundless creativity of human gastronomy. Whether prepared in a bustling restaurant kitchen or lovingly crafted at home, these foods invite us to savor the simple joys of good food and good company, reminding us that the true essence of dining lies in the shared experience of discovery and delight.
          </p>
          <br />
          <p className="text-lg">
          In contrast, risotto and burritos offer distinct culinary experiences, each with its own allure and charm. Risotto, an Italian delicacy, captivates palates with its creamy texture and rich flavor profile. Slow-cooked Arborio rice absorbs the savory essence of broth, resulting in a luxurious dish that epitomizes comfort and indulgence. On the other hand, burritos embody the spirit of Mexican street food, with their portable, customizable nature. A flour tortilla serves as a canvas for an assortment of fillings, from spicy meats to crisp vegetables, all wrapped up for a convenient and satisfying meal on the go. Whether savoring the creamy decadence of risotto or indulging in the bold flavors of a burrito, featured foods offer a tantalizing journey through the world's culinary landscape. In essence, featured foods represent more than just sustenance; they embody the artistry and ingenuity of culinary exploration. From the rustic charm of pasta primavera to the elemental beauty of roasted veggies, each dish tells a story of tradition, innovation, and the boundless creativity of human gastronomy. Whether prepared in a bustling restaurant kitchen or lovingly crafted at home, these foods invite us to savor the simple joys of good food and good company, reminding us that the true essence of dining lies in the shared experience of discovery and delight. In contrast, risotto and burritos offer distinct culinary experiences, each with its own allure and charm. Risotto, an Italian delicacy, captivates palates with its creamy texture and rich flavor profile. Slow-cooked Arborio rice absorbs the savory essence of broth, resulting in a luxurious dish that epitomizes comfort and indulgence. On the other hand, burritos embody the spirit of Mexican street food, with their portable, customizable nature. A flour tortilla serves as a canvas for an assortment of fillings, from spicy meats to crisp vegetables, all wrapped up for a convenient and satisfying meal on the go. Whether savoring the creamy decadence of risotto or indulging in the bold flavors of a burrito, featured foods offer a tantalizing journey through the world's culinary landscape. In essence, featured foods represent more than just sustenance; they embody the artistry and ingenuity of culinary exploration. A flour tortilla serves as a canvas for an assortment of fillings, from spicy meats to crisp vegetables, all wrapped up for a convenient and satisfying meal on the go. Whether savoring the creamy decadence of risotto or indulging in the bold flavors of a burrito, featured foods offer a tantalizing journey through the world's culinary landscape. In essence, featured foods represent more than just sustenance; they embody the artistry and ingenuity of culinary exploration.
          </p>
        </div>
        <div className="w-1/2 bg-green mx-auto">
          {foods.slice(0, 6).map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>
      <Link to="/foods" className="p-5">
        <button className="btn btn-block bg-indigo-400">View All</button>
      </Link>
    </div>
  );
};

export default Featured;


// foods.slice(0, 6).map((food)