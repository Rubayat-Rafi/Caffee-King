import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Categories = ({categories}) => {

  return (
    <div>

      <div role="tablist" className="tabs tabs-lifted">
        {
            categories.map(category => (
                <NavLink key={category.id} 
                to={`/category/${category.category}`}
                role="tab"
                className={({ isActive }) =>
                    `tab text-2xl font-medium ${isActive ? 'tab-active' : ''}`
                  }>
                {category.category}
                </NavLink>
            ))
        }

      </div>
    </div>
  );
};


Categories.propTypes = {
    categories: PropTypes.array,
  }

export default Categories;
