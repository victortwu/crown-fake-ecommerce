import React from 'react' 
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'
                      // since mapStateToProps names props 'collection' and ownProps are included, you just pass in { collections } to the component  
const CollectionPage = ( { collection } ) => {
    console.log(collection)
    const { title, items } = collection
    return(
        <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item=> {
                        return <CollectionItem key={item.id} item={item}/>
                    })
                }
            </div>
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