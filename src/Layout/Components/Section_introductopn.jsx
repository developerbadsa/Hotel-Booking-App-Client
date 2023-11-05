import React from 'react';

const Section_introductopn = ({title, description}) => {
      return (
            <div >
                   <span className='text-base my-5 text-shadow'>{title}</span>
                  <h3 className='text-6xl my-6 text-shadow mb-12'>{description}</h3>
            </div>
      );
};

export default Section_introductopn;