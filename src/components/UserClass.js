import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0,
        }
        // console.log(props);
        console.log(this.props.name+"child constructor");
        
    }
    componentDidMount(){
        console.log(this.props.name+"child componentDidMount");
    }
    render() {
        return (
            <div className="user-card">
            {console.log(this.props.name+"child render")}
                <h1>count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                   
                }}>countInc</button>
                <h2>{this.props.name}</h2>
                <h3>Hyderabad</h3>
                <h3>vicky.mood28</h3>
            </div>
        )
    }
}
export default UserClass;