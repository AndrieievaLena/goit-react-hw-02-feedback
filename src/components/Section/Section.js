import React from 'react'
import propTypes from 'prop-types';
import s from '../Section/Section.module.css'

const Section = ({title , children}) => {
    return (
       <>      
        <h2 className ={s.title}>{title}</h2>
        {children}
 
      </>
    )
};

export default Section;

Section.propTypes= {
    title:propTypes.string,
}