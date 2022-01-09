import React from 'react' 

import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.styles.scss'
                        // match is coming from <Route />
const CollectionPage = ( { match } ) => {
    return(
        <div className="category">
            <h2>category page</h2>
        </div>
    )
}

export default CollectionPage