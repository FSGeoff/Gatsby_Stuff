import * as React from "react"
import {Link} from "gatsby";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0}
    }
    render () {
        return <div>
            <h1>Counter</h1>
            <br/>
            <Link to={"/"}>HOME</Link>
            <br/>
            <Link to={"/page-2"}>Page 2</Link>
            <br/>
            <Link to={"/dir1/page-3"}>Page 3</Link>

            <br/> <br/> <br/>

            <h2>Counter</h2>
            <p>current count: {this.state.count}</p>
            <button style={{fontSize: "30px"}} onClick={() => this.setState({count: this.state.count + 1})}>+</button>

            <button style={{fontSize: "32px"}}onClick={() => this.setState({count: this.state.count - 1})} >-</button>

        </div>
    }

}

export default Counter;