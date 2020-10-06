import React from 'react';


function CounterList(props) {


    const buttonsMinus = [];
    const buttonsPlus = [];

    for (let i = 1; i <= props.buttons; i++) {
        buttonsMinus.push(<button className='list'
                                  onClick={() => props.counterPlusMinus(props.index, -i)}>-{i}</button>)
        buttonsPlus.push(<button className='list' onClick={() => props.counterPlusMinus(props.index, i)}>{i}</button>)
    }

    return (
        <div>
            {buttonsMinus}
            <strong>{props.el}</strong>
            {buttonsPlus}
            <button className='app2' onClick={() => props.deleteCurrentCounter(props.index)}>Delete</button>
            <button className='app' onClick={() => props.resetCurrentCounter(props.index)}>Reset</button>
        </div>
    );
}

export default CounterList;
