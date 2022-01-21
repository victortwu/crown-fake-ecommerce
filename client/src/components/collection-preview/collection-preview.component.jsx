import React from "react";
import { withRouter } from "react-router-dom"; 

import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items, routeName, match, history }) => {
    
   return(
        <div className='collection-preview'>
            <h1 onClick={()=> history.push(`${match.path}/${routeName}`)} className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, i) => i < 4).map(item => {
                        return (
                            <CollectionItem key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview)