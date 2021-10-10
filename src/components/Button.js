import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'


const Button = ({onShow, propsshowForm, color, text }) => {

    return (
        <div className="d-flex justify-content-between align-items-center mx-5 mt-5">
            <i class="bi bi-file-person-fill"></i>
         <button className="btn btn-danger" color={color}  text={text} onClick={onShow}> {propsshowForm ? "Close" : "Add"} </button>
        </div>
    )
}
Button.defaultProps = {
    color: 'teal',
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    actions: PropTypes.func
}
export default Button
