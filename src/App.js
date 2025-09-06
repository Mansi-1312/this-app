// import logo from './logo.svg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';   
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import About from './components/About'; 
import React, {useState} from 'react'; 
import Alert from './components/Alert'; 
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";

// let name ="Harry";   

function App() {    
  const [mode, setMode]=useState('light');  //Whether dark mode is enabled or not 
  const [alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{ 
    setAlert({ 
      msg:message,
      type:type           
    })
    setTimeout(()=>{ 
    setAlert(null);
    },3000);      
  } 
  // const removeBodyClasses=()=>{ 
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')

  // }
  const toggleMode=()=>{   
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode==='light'){ 
      setMode('dark');   
      document.body.style.backgroundColor='#042743'; 
      showAlert("Dark mode has been enabled","success");  
      // document.title="This-app - Dark Mode"; 
      // setInterval(() => {
      // document.title="This-app is amazing"; 
      // }, 2000); 
      //  setInterval(() => {
      // document.title="Install This-app now"; 
      // }, 1500);
    }  else{   
      setMode('light'); 
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
      // document.title="This-app - Light Mode";  
     }
   }

  return ( 
    <>   
 <Router>  
<Navbar title="This-app1" mode={mode} toggleMode={toggleMode} aboutText="About us"/>  
<Alert alert={alert}/>
<div className="container my-3">  
   <Routes>    
    {/* /users-->Component1
    /users/home-->component2 */}
    <Route exact path="/about" element={<About mode={mode}/>}/> 
     {/* <About/>  */}
     {/* <About/> */}
    {/* </Route>    */}
     <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try This-app--Word Counter Character Counter, Remove extra spaces " mode={mode}/>}/>   
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>    */}
    {/* </Route>    */}
 </Routes>  
</div> 
  </Router>

{/* <About/>   */}

{/* <Navbar /> */}

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload. Hello 
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with harry.
    //     </a>
    //   </header> 
    // </div>
  );
}      
export default App;

// "homepage": "https://Mansi-1312.github.io/this-app",
