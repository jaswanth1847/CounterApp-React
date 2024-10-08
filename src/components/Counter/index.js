
import {Component} from "react"
import "./index.css"

class MyComponent extends Component{
  state = { count: 0 }
  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }

  onDecrement = () => {
    this.setState((prevState)=>({
        count : prevState.count - 1
    }))
  }

    render(){
        const {count} = this.state
        return(
            <div className="cont">
                <h1>Counter</h1>
                <p >{count}</p>
                <div className="btn" >
                    <button className="btn1" onClick={this.onIncrement}>inc</button>
                    <button onClick={this.onDecrement}>dec</button>
                </div>
            </div>
        )
    }
}

export default MyComponent