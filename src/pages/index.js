import * as React from "react"
import Layout from'../layouts/index'
import {graphql, Link} from "gatsby";

const Home = ({data}) => {
   return (
        <div>
            <Layout>
                <br/>
                <Link to={"/page-2/"}>Page 2</Link>
                <br/>
                <h2>{data.web.siteMetadata.title}</h2>
                <Link to={"/dir1/page-3/"}>Page 3</Link>
                <br/>
                <Link to={"/dir1/counter/"}>Counter</Link>
            </Layout>
        </div>
    )

}

export const query = graphql`
    query FirstQuery {
        web {
            siteMetaData {
            title,
            author
            }    
        }
    } 
    `
export default Home;


