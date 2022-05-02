import logo from './logo.svg';
import Main from './Components/Main';
import Firstquestion from './Components/Firstquestion';
import Result from './Components/Result';
import Scent from './Components/Scent';
import Price from './Components/Price.jsx';
import Daynight from './Components/Daynight';
import Blank from './Components/Blank';
import Analyzing from './Components/Analyzing';
import Test from './Components/Test';
import Add from './Components/Add';
import Weather from './Components/Weather';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ProgressBar from './Components/ProgressBar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/firstquestion" element={<Firstquestion />} />
      
      <Route exact path="/scent" element={<Scent />} />
      <Route exact path="/price" element={<Price />} />
      <Route exact path="/daynight" element={<Daynight />} />
      <Route exact path="/blank" element={<Blank />} />
      <Route exact path="/analyzing" element={<Analyzing />} />
      <Route exact path="/result" element={<Result />} />
      <Route exact path="/test" element={<Test />} />
      <Route exact path="/" element={<Main />} />
      <Route exact path="/add" element={<Add />} />
      <Route exact path="/Weather" element={<Weather />} />
      {/* <Route exact path="/ProgressBar" element={<ProgressBar />} /> */}
      
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
