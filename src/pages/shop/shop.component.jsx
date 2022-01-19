import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux'
import { motion } from 'framer-motion'

import CollectionPageContainer from "../collection/collection.container";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import { containerVariants } from "../../animation-rules/pageVariants.animations";
import './shop.styles.scss'

                                              // match from react router
const ShopPage = ( { fetchCollectionsStart, match } ) => {
  
    const { hidden, visible, exit } = containerVariants

    useEffect(()=> {
        fetchCollectionsStart() 
    }, [fetchCollectionsStart]) 
       
    return(
        <motion.div 
            className='shop-page'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </motion.div>
        )
}


const mapDispatchToProps = dispatch => {
    return {
        fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
    }
}

export default connect(null, mapDispatchToProps)(ShopPage)
               








