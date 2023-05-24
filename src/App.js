
import React from 'react';
import './App.css';
import Toggle from './components/Toggle';
import Counter from './components/Counter';
import Greet from './components/Greet';
import Handle from './components/Handle';
import Welcome from './components/Welcome';
import MyButton from './components/MyButton';
import AboutPage from './components/AboutPage';



function App() {
  
  return (
    <div>
       <h1>Welcome to my app</h1>
      < Counter />
      < Toggle />
      < Greet />
      < Handle name="Andrew" heroName="superman"/>
      < Welcome name="Thomas" heroName="spiderman" />
     
       < MyButton />
       < AboutPage />
    </div>
  );
}

export default App;

