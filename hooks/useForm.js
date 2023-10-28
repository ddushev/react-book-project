import { useState } from "react";

export default function useForm(initialValues, onSubmitHandler, roomId) {
    const [values, setValues] = useState(initialValues);
    function onChangeHandler(e) {
        console.log('name: ' + e.target.name);
        console.log('value: ' + e.target.value);

        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        onSubmitHandler(values, roomId);
    }

    function changeValues(newValues) {
        setValues(newValues);
    }

    return {
        values,
        onChangeHandler,
        onSubmit,
        changeValues
    }
}