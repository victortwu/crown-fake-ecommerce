import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import { containerVariants } from "../../animation-rules/pageVariants.animations";
import './shop.styles.scss'

//import CollectionPageContainer from "../collection/collection.container";
//import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";

const CollectionPageContainer = lazy(() => import('../collection/collection.container'))
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'))


                                              // match from react router
const ShopPage = ( {  match } ) => {
  
   const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchCollectionsStart()) 
    }, [dispatch]) 
       
    return(
        <motion.div 
            className='shop-page'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            >
            <Suspense fallback={<div>loading...</div>}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
            </Suspense>
        </motion.div>
        )
}

export default ShopPage
               








