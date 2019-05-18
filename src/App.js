import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { name:'nithin'  }
    }
    render() { 
        return ( 
            <div>{this.state.name}</div>
         );
    }
}
 
export default App;