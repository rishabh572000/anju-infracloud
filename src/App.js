import Header from './Componant/Header';
import TableData from './Componant/TableData';

function App() {
  return (
    <div className="App">
      <Header />
      <TableData url={"https://jsonplaceholder.typicode.com/posts"}/>
    </div>
  );
}

export default App;
