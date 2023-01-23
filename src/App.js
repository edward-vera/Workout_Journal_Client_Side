import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import { Signin } from './components/Signin';
import { Todo } from './components/Todo';

function App() {

  useEffect(() => {
    console.log("mounted");
  })
  
  return (
    <div className="App">
        <Signin />
        {/* <Todo /> */}
    </div>
  );
}

export default App;
