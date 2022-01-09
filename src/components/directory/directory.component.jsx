import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect' 

import MenuItem from '../menu-item/menu-item.component'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'


import './directory.styles.scss'

const Directory = ( { sections } ) => {
  // below, ...otherSectionsProps is destructuring { title: '', imageUrl: '', size: '', linkUrl:'' } from this.state.sections
return(
    <div className='directory-menu'>
      { sections.map(({ id, ...otherSectionsProps })=> {
          return <MenuItem key={id} {...otherSectionsProps} />
      }) }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
    
