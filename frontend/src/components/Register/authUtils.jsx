import { useReducer } from "react";

const USER_REGEX = /^[A-z][A-z0-9_]{3,23}$/;
const EMAIL_REGEX = /^[^@]+@[^@]+\.[^@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const initialFieldState = {
    value: '',
    valid: false,
    inFocus: false
}

const registerInitialState =  {
    email: { ...initialFieldState },
    username: { ...initialFieldState },
    password: { ...initialFieldState },
    confirmPassword: { ...initialFieldState },
};

function validateField(field, value, state) {
    switch (field) {
        case 'email':
            return EMAIL_REGEX.test(value);
        case 'username':
            return USER_REGEX.test(value);
        case 'password':
            return PWD_REGEX.test(value);
        case 'confirmPassword':
            return value === state.password.value;
        default:
            return false
    }
}

function registerReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    value: action.value,
                    valid: validateField(action.field, action.value, state)
                },
            };
        case 'UPDATE_FOCUS':
            return {
                ...state,
                [action.field]: {
                    ...state[action.field],
                    inFocus: action.inFocus
                },
            }
        case 'RESET':
            return registerInitialState;
        default:
            return state;
    }
}

export function useRegister() {
    const [registerState, registerDispatch] = useReducer(registerReducer, registerInitialState);
    return [registerState, registerDispatch];
}

