import {useState} from 'react';
import Proptypes from 'prop-types';

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
       setCounter (counter +1);
    }

  return (
    <>
        <h1>Counter App</h1>
        <h2>{value}</h2>
        <h2>{counter}</h2>
        <button onClick={() => handleClick() }>
            +1
        </button>
        <button onClick={() => setCounter (counter - 1) }>
            -1
        </button>
        <button onClick={() => setCounter (0) }>
            Reset
        </button>
    </>
  )
}


CounterApp.propTypes = {
    value: Proptypes.number.isRequired
}