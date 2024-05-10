
import Carousel from '../components/Carousel';
import Featured from '../components/Featured';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const foods = useLoaderData()
    console.log(foods);

    return (
        <div>
            <Carousel></Carousel>
            <Featured></Featured>
        </div>
    );
};

export default Home;