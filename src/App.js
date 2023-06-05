import React from 'react';
import './App.css';
import Tempapp from './components/Tempapp';

function App() {
 return (
   <div className="App">
     <header className="App-header">
       <h1>React Weather App</h1>
     </header>
     <main>
       <Tempapp/>
     </main>
     <footer>
       Page created by yournamehere
     </footer>
   </div>
 );
}
export default App;