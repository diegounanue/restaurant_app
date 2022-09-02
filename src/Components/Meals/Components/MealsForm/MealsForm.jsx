import { useRef } from 'react';
import { Input } from '../../../UI/Header/Input/Input';
import './MealsForm.scss';

const MealsForm = ({id, onAddToCart}) => {
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();        
        const ammount = +amountInputRef.current.value;
        return onAddToCart(ammount);
    }

    /* Input is a react element, so to use ref, we have wo forward
       refs from the html input, refs can only be used in html elements,
       if it's a custom react element you have to forward refs.
       We are extracting the amount just to make an example of forwardRefs
    */

    return <form className='form' onSubmit={submitHandler}>
        <Input
         ref={amountInputRef}
         label='amount'
         input={{
            id: {id},
            type: 'number',
            min: '1',
            max: '5',
            step: '1'
         }}
         />
        <button> + </button>
    </form>
}

export default MealsForm;