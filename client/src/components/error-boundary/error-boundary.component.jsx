import React from 'react'

class ErrorBoundary extends React.Component {
    constructor() {
        super()

        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        // process the error
        return { hasErrored: true }
    }

    componentDidCatch(err, info) {
        console.log(err)
    }

    
    render() {
        const style = {
            width: '100%',
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '30px'
        }

        if (this.state.hasErrored) {
            return <div style={style}><span>Something went wrong...</span></div>
        }

        return this.props.children
    }
}

export default ErrorBoundary