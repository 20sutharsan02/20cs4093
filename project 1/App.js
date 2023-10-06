// import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Router, Route, Switch,Routes } from 'react-router-dom';

import TrainDetail from './TrainDetail';
import Home from './Home';
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/train/:trainId" element={<TrainDetail />} />
        
      </Routes>
    </BrowserRouter>
     {/* <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/train/:trainId" component={TrainDetail} />
      </Switch>
    </Router> */}
    
    </>
  );
}

export default App;
