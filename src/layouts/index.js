import * as React from "react";
import {graphql} from "gatsby";

export default function Layout({children})  {
   return ( <div>
       HEADER <br/>
        {children}
        <br/> FOOTER
    </div>
)

}