import React, { Fragment } from 'react';
import positionContent from './Position-Content';
import { Link } from 'react-router-dom';


const PositionsList = () => {
    return(
        <Fragment>
        <h2>Work Experience</h2>
          {positionContent.map((position, key) => (
            <Link key={key} to={`/position/${position.name}`}>
            <h4>{position.title}</h4>
            </Link>
        )
      )}
       
           
         </Fragment>
    )
}

export default PositionsList