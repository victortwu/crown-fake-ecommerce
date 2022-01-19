import React from 'react' 
import { useSelector } from 'react-redux'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import './collections-overview.styles.scss'

const CollectionsOverview = () => {
    
    const collections = useSelector(selectCollectionsForPreview)

    return(
        <div className="collections-overview">
              {
                    collections.map(({id, ...otherCollectionsProps}) => {
                        return <CollectionPreview key={id} {...otherCollectionsProps}/>
                    })
                }
        </div>
    )
}

export default CollectionsOverview