import PropTypes from 'prop-types';

const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <h1 className="text-3xl font-semibold mb-3">{title}</h1>
            <p className="text-base font-normal text-black/50">{subtitle}</p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

export default Heading;