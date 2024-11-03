import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-2">
            <h1 className="text-4xl font-bold text-[#343a40]">404</h1> 
            <p className="text-[#6c757d] text-base">Oops! The page you're looking for doesn't exist.</p> 
            <p> <Link to="/" className="text-[#007bff] font-bold">Go back to the homepage</Link> </p>
        </div>
    );
};

export default Error;