import React from 'react'
import PropTypes from 'prop-types'



const Header = () => {
    const {title, definition} = Header.defaultProps;

    return (

        <header className="nav nav-bar bg-dark text-white justify-content-center text-center p-1">
            <div>
            <h1 className="">Tasks Lister</h1>
            <small> A simple task lister Applications</small>
            </div>
        </header>

    )
}
Header.defaultProps = {
    title: 'Task Lister',
    definition: 'This is a simple task-lister Application'
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
