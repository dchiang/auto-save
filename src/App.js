import './App.css';
import OrderStatus from './components/OrderStatus';
import OrderField from './components/OrderField';

import { useEffect, useState } from 'react';


function App() {

  const [eventType, setEventType] = useState();
  const [value, setValue] = useState('0');
  const [editTimer, setEditTimer] = useState();
  const [saveTimer, setSaveTimer] = useState();

  const handleChange = (event) => {
    let inputText = event.target.value ? event.target.value : '0';
    let isValidNumber = new RegExp('^[0-9]*$', 'g');
    if (isValidNumber.test(inputText)) {
      let inputNumber = parseInt(inputText)
      if (editTimer) {
        clearTimeout(editTimer);
        if (saveTimer) {
          clearTimeout(saveTimer);
        }
      }
      setEventType('Editing');
      setValue(inputNumber);
    }
  };

  useEffect(() => {
    if (eventType === 'Editing') {
      setEditTimer(
        setTimeout(() => {
          setEventType('Auto-saving');
          setSaveTimer(
            setTimeout(() => {
              setEventType('Saved');
            }, 1000))
        }, 2000)
      );
    }
  }, [value, eventType]);

  return (
    <div className="App">
      <header className="App-header">
        <h3 style={{ textAlign: "left" }}>Order quantity: </h3>
        <OrderField name={"Apples"} value={value} handleChange={handleChange}></OrderField>
        <OrderStatus text={eventType}></OrderStatus>
      </header>
    </div>
  );
}

export default App;
