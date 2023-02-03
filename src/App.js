import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode,setmode] = useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type) =>{
  setAlert({
      message : message,
      type : type
  });
    setTimeout(() => {
      setAlert(null)
    }, 800);
  }
  const toggleMode=()=>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor="#00152b";
      showAlert("Dark mode has been enabled","success");
    }else{
      setmode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <HashRouter>
      <Navbar title="Textutils" aboutText="About Textutils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* <TextForm heading = "Enter the text to Analyze below" mode = {mode} showAlert={showAlert}/> */}
      <Routes>
        <Route exact path="/" element={<TextForm heading = "Enter the text to Analyze below" mode = {mode} showAlert={showAlert}/>}></Route>
        </Routes>
      <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
      </Routes>
      </div>
        </HashRouter>
    </>
  );
}

export default App;
