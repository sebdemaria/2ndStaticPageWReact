import { useState } from "react";


export const useForm = ( initialState = {} ) => {
        
    const [formValues, setFormValues] = useState( initialState );

    const resetForm = () => {
        setFormValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        setFormValues({
            ...formValues,
            [ target.name ]: target.value,
        });
    }

    return [ formValues, handleInputChange, resetForm ]
}
