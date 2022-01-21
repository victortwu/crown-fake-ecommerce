import React, { useLayoutEffect, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { motion } from 'framer-motion'  

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors' // this module is for memoization

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    
    const [scale, setScale] = useState(1)

    const animateItemCount = () => {
        setScale([1, 1.9, 1])
        setTimeout(() => setScale(1), 200)
    }

    useEffect(()=> {
        animateItemCount()
    }, [itemCount])

    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <motion.span className="item-count" animate={{scale: scale}}>
                {itemCount}
            </motion.span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => {
    return { toggleCartHidden: ()=> dispatch(toggleCartHidden()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

