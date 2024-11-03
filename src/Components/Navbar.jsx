import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold">
          Caffee-King
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-10">

            <NavLink to='/' className={({isActive}) => `font-semibold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>

            <NavLink to='/coffees' className={({isActive}) => `font-semibold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Coffees</NavLink>

            <NavLink to='/dashboard' className={({isActive}) => `font-semibold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Dashboard</NavLink>
          </ul>
        </div>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] right-0 mt-3 w-40 p-2 shadow space-y-4"
          >
            
            <NavLink to='/' className={({isActive}) => `font-semibold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>

            <NavLink to='/coffees' className={({isActive}) => `font-semibold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Coffees</NavLink>

            <NavLink to='/dashboard' className={({isActive}) => `font-semibold ${isActive ? 'text-warning' : 'hover:text-warning'}`}>Dashboard</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
