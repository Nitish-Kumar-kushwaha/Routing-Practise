import React from "react";
import { Link, Outlet } from "react-router-dom";
// import About from "../routes/About";
// import Project from "../routes/Project";




function App(){


    return(<>
        <h1>Learn React</h1>
        <br/>
        <div>
            <Link to = '/'>Home</Link>
            {"|"}
            <Link to = '/project'>Project</Link>
            {"|"}
            <Link to ='/about'>About</Link>
            {"|"}
            <br/>
            <Outlet/>
        </div>
    </>);

};

export default App;