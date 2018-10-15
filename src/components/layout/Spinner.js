import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
        <img
            src={spinner}
            alt="Loading.."
            style={{ width: '40px', margin: '40px auto', display: 'block', top: '50vh', left: '50vw', position: 'absolute'   }}
        />
    </div>
  );
};
