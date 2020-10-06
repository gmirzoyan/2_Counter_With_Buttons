import React, {useState} from 'react';


function InputController(props) {

    const [value, setInputValue] = useState('')
    const [inputButtons, setInputButtons] = useState('')

    const inputValueHandler = (e) => {
        setInputValue(e.target.value)
    }

    const inputButtonsHandler = (e) => {
        setInputButtons(e.target.value)
    }

    const addButtonHandler = () => {
        props.addNewCounter(value, inputButtons);
        setInputValue('')
        setInputButtons('')
    }

    return (
        <div>
            <label className='header1'><strong>+/- number:</strong></label>
            {' '}
            <input className='text' type='text' onChange={inputButtonsHandler} value={inputButtons}/>
            {' '}
            <label className='header1'><strong>value:</strong></label>
            {' '}
            <input className='text' type='text' onChange={inputValueHandler} value={value}/>
            {' '}
            <button className='app3' onClick={addButtonHandler}>Add new</button>
            {' '}
            <button className='app2' onClick={props.deleteAll}>Delete All</button>
            {' '}
            <button className='app' onClick={props.resetAll}>Reset All</button>
            {' '}
            <button className='app1' onClick={props.sortButtonsMinMax}>+/- min→max</button>
            <button className='app1' onClick={props.sorButtonsMaxMin}>+/- max→min</button>
        </div>
    );
}

export default InputController;
