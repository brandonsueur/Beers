import React, { Component } from 'react'

import "./Beers.css"

class Beers extends Component{
    render() {
        return(
            <div className="app beers">
                <div className="container">
                    <h2 className="title">List of beers <span>do not buy them all !</span></h2>

                    <div className="list-beers">
                        <div className="col-md-4">
                            <div className="beer">
                                <div className="container">

                                    <h3 className="name">Buzz</h3>

                                    <span className="tagline">A Real Bitter Experience.</span>
                                    <span className="first_brewed">09/2007</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Beers
