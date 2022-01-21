import React from 'react'
import { useSelector } from 'react-redux'

import MenuItem from '../menu-item/menu-item.component'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import './directory.styles.scss'

const Directory = () => {
  
const sections = useSelector(selectDirectorySections)
  
  // below, ...otherSectionsProps is destructuring { title: '', imageUrl: '', size: '', linkUrl:'' } from this.state.sections
return(
    <div className='directory-menu'>
      { sections.map(({ id, ...otherSectionsProps })=> {
          return <MenuItem key={id} {...otherSectionsProps} />
      }) }
    </div>
  )
}

export default Directory
    
