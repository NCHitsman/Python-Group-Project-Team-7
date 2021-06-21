import React from "react"
import LoggedOutHome from "./LoggedOutHome"
import LoggedInHome from "./LoggedInHome"

const Home = ({authenticated}) => {


    if (authenticated) {
        return (<LoggedInHome />)
    } else {
        return (<LoggedOutHome />)
    }

}

export default Home
