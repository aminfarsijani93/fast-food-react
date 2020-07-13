import React, { Component } from 'react';




export default class Allfood extends Component {
    
    render() {
        const categoury = this.props.menu.find(el => el.categoury)
        console.log(categoury);
        
        return (
            <div className="allfood-body">
                <ul className="ul-allfood">               
                {this.props.menu.map((el, index) => (
                    <li className="li" key={index.toString()}>
                        <h5 className="input-label">{ el.name }</h5>
                        <img src={ el.image } alt={ el.name }></img>
                        <h4 className="input-label">{ el.price }</h4>
                    </li>
                ))}  
                </ul>
            </div>
        )
    }
}




{/* <ul className="ul-allfood">               
                {this.props.menu.map((el, index) => (
                    <li className="li" key={index}>
                        <h5 className="input-label">{ el.name }</h5>
                        <img src={ el.image }></img>
                        <h4 className="input-label">{ el.price }</h4>
                    </li>
                ))}  
                </ul> */}
