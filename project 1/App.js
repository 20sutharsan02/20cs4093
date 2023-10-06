
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home';
import TrainDetail from './TrainDetail';
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
