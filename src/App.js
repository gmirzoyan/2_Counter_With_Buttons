import React, {useState} from 'react';
import CounterList from "./CounterList";
import "./index.css";
import InputController from "./InputController";


function App() {

    const [counter, setCounter] = useState([])
    const [buttons, setButtons] = useState([])

    const addNewCounter = (value, inputButtons) => {
        const result = [...counter]
        result.push(value)
        setCounter(result);

        const result1 = [...buttons]
        result1.push(inputButtons);
        setButtons(result1);
    }

    const deleteAll = () => {
        setCounter([])
    }

    const resetAll = () => {
        const result = counter.map(el => el = 0)
        setCounter(result)
    }

    const counterPlusMinus = (index, val) => {
        const result = counter.map((el, i) => {
            if (i === index) return el + val;
            return el;
        })
        setCounter(result)
    }

    const deleteCurrentCounter = (index) => {
        const result = counter.filter((el, i) => (i !== index) ? true : false)
        setCounter(result)
    }

    const resetCurrentCounter = (index) => {
        const result = counter.map((el, i) => (i === index) ? el = 0 : el)
        setCounter(result)
    }

    const sortButtonsMinMax = () => {
        const result = [...buttons]
        result.sort((a, b) => a - b)
        setButtons(result)
    }

    const sorButtonsMaxMin = () => {
        const result = [...buttons]
        result.sort((a, b) => b - a)
        setButtons(result)
    }


    return (
        <div>
            <h2 className='header'>C O U N T E R</h2>

            <InputController addNewCounter={addNewCounter} deleteAll={deleteAll} resetAll={resetAll}
                             sortButtonsMinMax={sortButtonsMinMax} sorButtonsMaxMin={sorButtonsMaxMin}/>

            {counter.map((el, i) => <CounterList el={el} key={Math.random()} index={i}
                                                 buttons={buttons[i]}
                                                 counterPlusMinus={counterPlusMinus}
                                                 deleteCurrentCounter={deleteCurrentCounter}
                                                 resetCurrentCounter={resetCurrentCounter}/>)}
        </div>
    );
}

export default App;
