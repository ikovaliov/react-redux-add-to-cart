import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className='lds-css ng-scope'>
      <div className='lds-cube'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
