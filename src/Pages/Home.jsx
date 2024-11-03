import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import Heading from "../Components/Heading";

const Home = () => {

    const categories = useLoaderData()

    return (
        <div>
            {/* Banner Section */}
            <Banner></Banner>

            {/* Heading Section */}
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>

            {/* Categories Section */}
            <Categories categories={categories}></Categories>

            {/* Daynamic nested component Section */}
            <Outlet></Outlet>

        </div>
    );
};

export default Home;