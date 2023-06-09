import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return(
    <div>
      <Home />

    </div>

  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


