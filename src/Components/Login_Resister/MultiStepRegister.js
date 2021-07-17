import React from 'react'
import {useForm, useStep} from "react-hooks-helper";
import Register from './Register';
import RegisterAddress from './RegisterAddress'

const formValues = {
    firstName : "",
    lastName : "",
    company : "",
    addressOne : "",
    addressTwo : "",
    city : "",
    country : "",
    state : "",
    postalCode : "",
    phoneNumber : "",
    extension : "",
    email : "",
    fax : "",
    preferredLanguage : "",
    username : "",
    password : "",
    confirmNewPassword : "",
    accessCode : ""
}

const steps = [
    {id: "first"},
    {id: "second"},
    {id: "review"},
    {id: "submit"}
]

const MultiStepRegister = () => {
    const [form, setForm] = useForm(formValues);
    const {step, stepQueue} = useStep({
        steps,
        initialStep: 0,
    });

    const props = {form, setForm, stepQueue};

    switch (step.id) {
        case "first":
            return <Register {...props} />;
        case "second":
            return <RegisterAddress {...props} />;
    }
        
    return (
        <div>
            
        </div>
    )
}

export default MultiStepRegister
