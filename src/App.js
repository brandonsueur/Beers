import React, { Component } from 'react';
import { Router, Redirect } from "@reach/router"

import './App.css'
import Header from "./components/Header/Header"
import Beers from "./components/Beers/Beers"
import Beer from "./components/Beer/Beer"

class App extends Component {
    render() {
        return (
            <div className="App">

                <Header />

                <Router>
                     <Redirect
                         from="/"
                         to="beers"
                     />

                    <Beers path="beers" />
                    <Beer path="beers/:id" />
                </Router>

            </div>
        );
    }
}

export default App;
