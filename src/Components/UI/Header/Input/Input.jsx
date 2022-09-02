import { forwardRef } from "react";

export const Input = forwardRef(({label, input}, ref) => {
    return <>
        <label htmlFor={input.id}>{label}</label>
        <input ref={ref} id={input.id}  {...input}/>
    </>
});