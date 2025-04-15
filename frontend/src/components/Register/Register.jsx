import React, { useRef, useState, useEffect } from "react";
import { useRegister } from "./authUtils";

import './Register.css';

import envelope_icon from "../../assets/icons/envelope.svg";
import user_icon from "../../assets/icons/user-alt.svg";
import lock_icon from "../../assets/icons/lock-alt.svg";

const Register = () => {
    const [registerState, registerDispatch] = useRegister();

    const emailRef = useRef();
    const errRef = useRef();

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    const updateField = (e) => {
        const { id, value } = e.target;
        registerDispatch({
            type: 'UPDATE_FIELD',
            field: id,
            value: value
        });
    };

    const updateFocus = (e, inFocus) => {
        const { id } = e.target
        registerDispatch({
            type: 'UPDATE_FOCUS',
            field: id,
            inFocus: inFocus
        });
    };

    return (
        <div>
            <div className="input_line_content">
                <label htmlFor="email">
                    <img src={envelope_icon} alt="Email" />
                </label>
                <input
                    className="input_field"
                    type="text"
                    id="email"
                    onChange={(e) => updateField(e)}
                    value={registerState.email.value}
                    ref={emailRef}
                    onFocus={(e) => updateFocus(e, true)}
                    onBlur={(e) => updateFocus(e, false)}
                />
                <p className={!registerState.email.valid && registerState.email.inFocus ? "input_instructions" : "hidden" }>
                    Must be a valid email.
                </p>
            </div>
            <div className="input_line_content">
                <label htmlFor="username">
                    <img src={user_icon} alt="Username" />
                </label>
                <input
                    className="input_field"
                    type="text"
                    id="username"
                    onChange={(e) => updateField(e)}
                    value={registerState.username.value}
                    onFocus={(e) => updateFocus(e, true)}
                    onBlur={(e) => updateFocus(e, false)}
                />
                <p className={!registerState.username.valid && registerState.username.inFocus ? "input_instructions" : "hidden" }>
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores allowed.
                </p>
            </div>
            <div className="input_line_content">
            <label htmlFor="password">
                <img src={lock_icon} alt="Password" />
            </label>
                <input
                    className="input_field"
                    type="text"
                    id="password"
                    onChange={(e) => updateField(e)}
                    value={registerState.password.value}
                    onFocus={(e) => updateFocus(e, true)}
                    onBlur={(e) => updateFocus(e, false)}
                />
                <p className={!registerState.password.valid && registerState.password.inFocus ? "input_instructions" : "hidden" }>
                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters: ! @ # $ %
                </p>
            </div>
            <div className="input_line_content">
                <label htmlFor="confirmPassword">
                    <img src={lock_icon} alt="Confirm Password" />
                </label>
                <input
                    className="input_field"
                    type="text"
                    id="confirmPassword"
                    onChange={(e) => updateField(e)}
                    value={registerState.confirmPassword.value}
                    onFocus={(e) => updateFocus(e, true)}
                    onBlur={(e) => updateFocus(e, false)}
                />
                <p className={!registerState.confirmPassword.valid && registerState.confirmPassword.inFocus ? "input_instructions" : "hidden" }>
                    Must match the first password input field.
                </p>
            </div>
        </div>
    );
};

export default Register;