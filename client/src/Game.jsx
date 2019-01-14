import React, {Component} from 'react';
import {subscribeToServer} from './subscriber'


export default class Game extends Component {
    constructor(props) {
        super(props)
        subscribeToServer((err, timestamp) => this.setState({
            timestamp
        }))

        this.state = {
            timestamp: 'no timestamp yet'
        };

    }


    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    This is the timer value: {this.state.timestamp}
                </p>
            </div>
        );
    }

}