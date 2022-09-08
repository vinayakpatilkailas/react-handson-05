import React, { Component} from 'react';

class  PureComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "Vinayak",
            };
    }

    changeName = () => {
        
        this.setState({ name: "Disha"})
        };

    render(){
        console.log("changeName")
        return(
            <div>
                <p>Name : {this.state.name}</p>
                <button onClick={this.changeName}>changeName</button>
         
            </div>
        )
    }

}
export default PureComponent;