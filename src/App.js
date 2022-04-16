import './App.css';
import Navigation from './components/Navigation';
import { Section } from './components/Section';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import React, { createContext, useState } from 'react';

export const ReactContext = createContext();

function App() {
    let [likes, setLikes] = useState(0);

    return (
        <div>
            <ReactContext.Provider value={{ likes, setLikes }}>
                <Navigation />
                <Section />
                <Switch>
                    <Route exact path='/' component={Main} />
                </Switch>
                <Footer />
            </ReactContext.Provider>
        </div>
    );
}

export default App;
