import PropTypes from 'prop-types';

const ErrorMsg = ({ message = '' }) => {
  return <p>{message || 'Something went wrong'}</p>;
};

ErrorMsg.propTypes = {
  message: PropTypes.string,
};

export default ErrorMsg;
