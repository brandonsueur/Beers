import React, { Component } from 'react'
import { Link } from '@reach/router'

class Beer extends Component{

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            beer: []
        };
    }

    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers/" + this.props.id)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        beer: result
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

    render(props) {

        const { error, isLoaded, beer } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const item = beer[0]

            return (
                <div className="app beer">
                    <div className="container">
                        <h1>Beer {item.name}</h1>

                        <span className="tagline">{item.tagline}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            );
        }

        console.log(this.props.id)
        console.log(this.state.beer[0].tagline)

        return(
            <div className="app beer">
                <div className="container">
                    <h1>Beer {this.props.id}</h1>
                </div>
            </div>
        )
    }
}
export default Beer
