import React from 'react' 
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'
                      // since mapStateToProps names props 'collection' and ownProps are included, you just pass in { collections } to the component  
const CollectionPage = ( { collection } ) => {
    console.log(collection)
    return(
        <div className="collection-page">
            <h2>category page</h2>
        </div>
    )
}
                        // match is coming from <Route />, ownProps arg passes in 'regular' props
const mapStateToProps = (state, ownProps) => {
    return {     // the selectCollection was written as a function returning a function
        collection: selectCollection(ownProps.match.params.collectionId)(state)
    }
}

export default connect(mapStateToProps)(CollectionPage)