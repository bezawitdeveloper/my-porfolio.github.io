import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import positionContent from './Position-Content';
import NotFoundPage from './NotFoundPage';
import Img from './arrow_black.png';


const ArticlePage = ( {match} ) => {
    const name = match.params.name;

    const position = positionContent.find(position => position.name === name)
    
    if(!position) return <NotFoundPage />

    return(
        <Fragment>
        <Link to="/positions-list"><img class="Img_position" src={Img} alt="postion arrow"/></Link>
        <h1>{position.name}</h1>
        {position.content.map((paragraph, key) => (
            <div>
            
            <ul>
            <li key={key}>{paragraph}</li>
            </ul>
            </div>
        ))}
         </Fragment>
    )
}

export default ArticlePage

// <p class="main" key={key}>{paragraph}</p>


