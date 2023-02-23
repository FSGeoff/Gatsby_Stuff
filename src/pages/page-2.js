import * as React from "react"
import {Link} from "gatsby";
import Layout from '../layouts/index'

export default function Page2()  {
    return (
        <div>
            <Layout>
            <h1>Page 2</h1>
            <Link to="/">Home Page</Link>
            <br/>
            <Link to={"/dir1/page-3/"}>Page 3</Link>
            <br/>
            <Link to={"/dir1/counter/"}>Counter</Link>
            </Layout>
        </div>

    )
}