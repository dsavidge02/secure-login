import { useReducer } from "react";

const registerInitialState =  {
    email: { 
        value: '',
        valid: false
    },
    username: { 
        value: '',
        valid: false
    },
    password: { 
        value: '',
        valid: false
    },
    confirmPassword: { 
        value: '',
        valid: false
    },
};

function 

function registerReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.field]: action.value,
            };
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

