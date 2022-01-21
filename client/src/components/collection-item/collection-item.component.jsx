import React, {useState} from "react";
import { connect } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'


import CustomButton from "../custom-button/custom-button.component";
import { addItem } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'


const CollectionItem = ({ item, addItem }) => {

    const [show, setShow] = useState(false)

    const showMessage = () => {
        setShow(true)
        setTimeout(()=> setShow(false), 1000)
    }
    
    const {  name, price, imageUrl } = item
    return(
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
       <CustomButton className='custom-button' onClick={()=> {  addItem(item)
                                                                showMessage()
                                                            }} inverted>
            Add to cart
       </CustomButton>
       <AnimatePresence>
            {show && <motion.div className="added-message" animate={{y: [0, -150]}} exit={{opacity: 0}}>
                    <span>
                        {name.toUpperCase()} ADDED
                    </span>
            </motion.div>}
       </AnimatePresence>
    </div>
    )
}

const mapItemToDispatch = dispatch => {
    return {
        addItem: item => dispatch(addItem(item))
    }
}

export default connect(null, mapItemToDispatch)(CollectionItem)
