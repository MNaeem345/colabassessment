import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackToTopButton from './components/backToTopButton';
import PokemonBattle from './components/PokemonBattle';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from './redux/rootReducer'


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Navbar />
    <Main />
    <Projects/>
    <PokemonBattle/>
    <Footer/>
    
    <BackToTopButton/>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
