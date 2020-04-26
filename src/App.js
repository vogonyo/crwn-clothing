import React from 'react';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = (props) => {
  console.log(props);
  return(
     <div>
      <h1>HATS PAGE</h1>
     </div>
  );
};

const HatsDetails = (props) => {
  console.log(props)
  return(
  <div>
      <button onClick={() => props.history.push('/hats')}>Hats</button>
      <h1>Hats Details Page</h1>
  </div>
  );
};

function App() {
  return (
    <div>
      <Router>     
       <Switch>
         <Route exact path='/' component={HomePage}/>
         <Route exact path='/hats/' component={HatsPage}/>
         <Route path='/hats/:hatsId' component={HatsDetails}/>
       </Switch>
      </Router>

    </div>
  );
}

export default App;
