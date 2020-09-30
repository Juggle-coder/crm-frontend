import React, {useState} from 'react';
// import {Form} from 'react-bootstrap';//

import './entry.style.css';
import {ResetPassword} from "../../components/password-reset/Password-reset.comp"

import {LoginForm} from "../../components/login/login.comp";

import {Jumbotron} from 'react-bootstrap';
export const Entry = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [FormLoad, setFormLoad] = useState('login');

const handleOnChange = e => {
    const {name, value} = e.target
    switch(name){
        case "email":
            setEmail(value);
            break;
        case "password":
            setPassword(value);
            break;
        default:
            break;
    }
};

const handleOnSubmit= e => {
    e.preventDefault()

    if(!email || !password){
        return alert("FIll up all the form!")
    }
    //ToDO call api to submit the form
    console.log(email, password)

};
const handleOnResetSubmit= e => {
    e.preventDefault()

    if(!email){
        return alert("Please enter the email!");
    }
    //ToDO call api to submit the form
    console.log(email);

};

const formSwitcher = formType => {
    setFormLoad(formType);
    
};
    return <div className="entry-page bg-info">
        <Jumbotron className="form-box">
            {FormLoad === "login" && <LoginForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            pass={password}
            />}
            
            {FormLoad ==="reset" && <ResetPassword 
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
           
            />}
        </Jumbotron>
    </div>;
};