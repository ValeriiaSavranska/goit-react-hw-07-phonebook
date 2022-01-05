/** @jsxImportSource @emotion/react */

import PropagateLoader from 'react-spinners/PropagateLoader';

const wrapperStyles = {
  margin: 'auto',
  paddingBottom: '40px',
};

const Loader = () => {
  return (
    <div css={wrapperStyles}>
      <PropagateLoader size={16} color={'#ff6b0a'} />
    </div>
  );
};

export default Loader;
