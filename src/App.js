import Header from './Componant/Header';
import TableData from './Componant/TableData';
import {
  BrowserRouter as Router,
  Switch,
  Route,Routes,
  Link,
} from "react-router-dom";
import CommentAll from './Componant/CommentAll';
// import Switch as 'switch'

function App() {
  return (
    <Router>    
      <div className="App">
      <Header />
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      
      {/* <CommentAll />     */}

      <Routes>
          <Route path="/" element={<TableData url={"https://jsonplaceholder.typicode.com/posts"}  id='id' nameman='title' body='body'/>} />
          <Route path="/comment" element={<CommentAll />} />
        </Routes>
    </div>
    </Router>

  );
}

export default App;
