import React, { useState } from 'react'
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import Moment from 'moment';

import { useForm } from '../hooks/useForm';
import { FormInput } from './FormInput';

import './../styles/Form.css'

Modal.setAppElement('#root');
export const Form = ( { modalIsOpen = false, reset, inputTypes, inputNames, inputPlaceholders} ) => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        lastname: '',
        birthDate: '',
        email: ''
    });

    const [emailStatus, setEmailStatus] = useState({
        status : ''
    });
    
    const { status } = emailStatus;

    const handleSubmit = (e) => {
        
        e.preventDefault();

        setEmailStatus({ status: 102 });

        let templateParams = {
            to_name: formValues.name,
            to_lastname: formValues.lastname,
            to_birthdate: Moment(formValues.birthDate).format('DD-MM-YYYY'),
            to_email: formValues.email
        };
        
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
        .then(function(response) {
            
            setEmailStatus({ status : 202 });

        }, function(error) {

            setEmailStatus({ status : 502 });

        })
    }

    const soldItemsSwitch = (status) => {
        switch (status){ 
        case 102:
            return  <div className="loader-container">

                        <h3 className="process">Procesando...</h3>

                        <p className="loader"/>

                    </div>
        case 202:                    
            return <div className="done-container">

                        <h3 className="process">Registro exitoso!</h3>
                        <p className="process">Chequeá tu bandeja de entrada!</p>

                        <p className="done"/>
                    
                        <button className="btn btn-warning form-btn" onClick={() => {
                            reset();
                            setTimeout(() => {
                            setEmailStatus({ status: '' });
                            }, 1000);
                            }}
                        >Cerrar
                        </button>

                    </div>
        case 502:
            return  <div className="error-container">

                        <h3 className="process">Ups! Algo ha salido mal...</h3>
                        <p className="process">Por favor notificalo al desarrollador</p>

                        <p className="error"/>
                    
                        <button className="btn btn-warning form-btn" onClick={() => {
                            reset();
                            setTimeout(() => {
                            setEmailStatus({ status: '' });
                            }, 1000);
                            }}
                        >Cerrar
                        </button>

                    </div>
        default:
            return <div>
                        <h2>Registrá tus datos!</h2>
                                
                        <form onSubmit={ handleSubmit }>
                            {
                                inputTypes.map(( type, i ) => {
                                    return <FormInput 
                                                key={ i } 
                                                typeValue={ type } 
                                                nameValue={ inputNames[i] } 
                                                placeholderValue={ inputPlaceholders[i] } 
                                                handleInputChange={ handleInputChange } 
                                            />
                                })
                            }

                            <button className="btn btn-success form-btn submit-btn" type="submit">Enviar</button>

                        </form>    

                        <button className="btn btn-warning form-btn close-btn" onClick={() => {
                            reset();
                            setTimeout(() => {
                            setEmailStatus({ status: '' });
                            }, 1000);
                            }}
                        >
                            Cerrar
                        </button>
                    </div>
        }              
    }

    return (
        <Modal 
            closeTimeoutMS={350}
            isOpen={modalIsOpen}
            shouldFocusAfterRender={true}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
            onRequestClose={() => {
                reset();
            }}
        >

            { soldItemsSwitch(status) }    

        </Modal>
    )
}
