import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return(
        <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className='content'>
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
        </div>
    )
}

export default withRouter(MenuItem)

// above the withRouter() function from react router dom accepts MenuItem component and does some stuff to it and returns a new component having accessed properties from the history object.

// https://v5.reactrouter.com/web/api/withRouter

// You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.