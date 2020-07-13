import React, { Component } from 'react';

export default class Filters extends Component {
    render() {
        return (
            <div className="body-filters">
                <div className="btn-filter">
                    <div className="icon-pizza">
                        <img src="/images/icon-pizza.png" alt="pizza"></img>
                    </div>
                    <div className="icon-sandwich">
                    <img src="/images/icon-sandwich.png" alt="sandwich"></img>
                    </div>
                    <div className="icon-appetizer">
                    <img src="/images/icon-appetizer.png" alt="appetizer"></img>
                    </div>
                    <div className="icon-beverage">
                    <img src="/images/icon-beverage.png" alt="beverage"></img>
                    </div>
                </div>
            </div>
        )
    }
}
