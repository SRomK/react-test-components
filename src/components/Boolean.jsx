import React, { Component } from 'react';

class Boolean extends Component {
    state = {
        showDiv: true,
    }
    
    toggleDiv() {
        this.setState({ showDiv: false });
        console.log(this.state.showDiv)
    }
    render() {
        return (
            <div className="container">
                <button onClick={this.toggleDiv}>Toggle</button> 
                {this.state.showDiv && <div>This div is shown</div>} 
            </div>
           
        );
    }
}

export default Boolean;
