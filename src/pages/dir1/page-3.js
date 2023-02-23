import * as React from "react"
import {Link} from "gatsby";

export default function Page3 () {
    return (
        <div>
            <h1>Page 3</h1>
            <br/>
            <Link to={"/"}>HOME</Link>
            <br/>
            <Link to={"/page-2"}>Page 2</Link>
            <br/>
            <Link to={"/dir1/counter"}>Counter</Link>
        </div>
    )
}