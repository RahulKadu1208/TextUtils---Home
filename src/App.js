
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import { Switch } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#071e37";
      showAlert("  Dark mode has been enabled!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("  Light mode has been enabled!", "success");
    }
  }

  return (
    <>
       {/* <Navbar title = "Johnmama" aboutText="Contact Us"/> */}
       {/* <Router> */}
       <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className='container my-3'>
       {/* <Routes> */}
          {/* <Route exact path="/" */}
          {/* element= */}
          <TextForm heading="Write A Text To Analyze Below" mode={mode} showAlert={showAlert}/>
          {/* /> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
        {/* </Routes> */}
       </div>
       {/* </Router> */}
    </>
  );
}

export default App;
