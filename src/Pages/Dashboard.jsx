import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import PropTypes from 'prop-types';
import { getFavorite, removeFavorite } from "../utilitis";
import Card from "../Components/Card";

const Dashboard = ({title, subtitle}) => {

    const [coffees, setCoffees] = useState([]);
    useEffect(()=>{
        const favorite = getFavorite()
        setCoffees(favorite);
    },[])

    const handleRemove = id => {
        removeFavorite(id)
        const favorites = getFavorite()
        setCoffees(favorites)
      }

    return (
        <div>
            <div>
            <Heading title={'Welcome to Dashboard'} subtitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.'}></Heading>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
        {coffees.map(coffee => (
          <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />
        ))}
      </div>


        </div>
    );
};

Dashboard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

export default Dashboard;