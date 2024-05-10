import {Route,Routes} from 'react-router-dom';
import './App.css';
// import Register from '../src/components/LearnerComponent/Register';
import RegisterView from './View/RegisterView';



function App() {
  
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<RegisterView/>}/>
        </Routes>      
    </div>
  );
}

export default App;
