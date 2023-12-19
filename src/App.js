import './App.css';
import HomePanel from './components/HomePanel';
import NotesPanel from './components/NotesPanel';

function App() {
  return (
    <div className="App">
      <NotesPanel/>
      <HomePanel/>
    </div>
  );
}

export default App;
