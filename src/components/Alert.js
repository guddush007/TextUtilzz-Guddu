import React from 'react'

function Alert(props) {
    const capitalize = (word)=> {
        const cap = word.charAt(0).toUpperCase() + word.slice(1);
        return cap;
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-1`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/ }
        </div>
    )
}

export default Alert
