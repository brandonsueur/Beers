import React, { Component } from 'react'
import { Link } from '@reach/router'

import "./Beers.css"

class Beers extends Component{
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            beers: []
        };
    }

    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
            .then(res => res.json())
            .then(
                results => {
                    this.setState({
                        isLoaded: true,
                        beers: results
                    })
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }

    render() {
        const { beers } = this.state;

        return(
            <div className="app beers">
                <div className="container">
                    <h2 className="title">List of beers <span>do not buy them all !</span></h2>

                    <div className="list-beers">
                        <div className="row">
                            {beers.map(beer => (
                                <div className="col-md-6">
                                    <div className="beer" key={beer.id}>
                                        <div className="container">
                                            <h3 className="name">
                                                <Link to={ "/beers/" + beer.id}>{beer.name}</Link>
                                            </h3>

                                            <span className="first_brewed">{beer.first_brewed}</span>

                                            <span className="tagline">{beer.tagline}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Beers
