import React from 'react' 

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'
// Higher order function component, it takes a component as an arguement and returns another functional component
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner
}  

export default WithSpinner

// can also be written without explicit return of functional component

// const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
//         return isLoading ? (
//             <SpinnerOverlay>
//                 <SpinnerContainer/>
//             </SpinnerOverlay>
//         ) : (
//             <WrappedComponent {...otherProps} />
//         )
//     }
    
 