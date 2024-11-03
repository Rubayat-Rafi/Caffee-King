import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";

const Coffees = () => {

    const data = useLoaderData()
    // console.log(data)
    const [coffees, setCoffees] = useState(data);

    const handleSort = (sortBy) => {

        if(sortBy === 'popularity'){
            const sortByPopularity = [...data].sort((a,b)=> b.popularity - a.popularity)
            setCoffees(sortByPopularity);
        }else if(sortBy === 'rating'){
            const sortByRating = [...data].sort((a,b)=> a.rating - b.rating)
            setCoffees(sortByRating);
        }
    }



    return (
        <div>
            <div className="flex items-center justify-between py-8">
                <div>
                    <h1 className="text-3xl">Sort Coffee&apos;s by Popularity & Rating</h1>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={()=>handleSort('popularity')} className="btn btn-warning">Sort by Popularity</button>
                    <button onClick={()=>handleSort('rating')} className="btn btn-warning">Sort by Ratting</button>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;