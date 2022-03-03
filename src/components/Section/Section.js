import React from 'react'
import propTypes from 'prop-types';

const Section = ({title , children}) => {
    return (
       <>      
        <h2>{title}</h2>
        {children}
 
      </>
    )
};

export default Section;

Section.propTypes= {
    title:propTypes.string,
}