import React from 'react'

export const FormInput = ({ typeValue = "text", nameValue="", placeholderValue="", handleInputChange }) => {
    
    return (
        <div>
            <input
                className="form-input-control"
                type={ typeValue }
                name={ nameValue }
                placeholder={ placeholderValue }
                autoComplete="on"
                onChange={ handleInputChange }
                required
            ></input>
        </div>
    )
}
