import { Component } from "react"

import "./index.css"

class Counter extends Component {
  state = { count: 0 }
  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }
  render() {
    const { count } = this.state
    return (
      <div className="container">
        <h1 className="count">Count</h1>
        <h1 className="count">{count}</h1>
        <div className="button-container">
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter