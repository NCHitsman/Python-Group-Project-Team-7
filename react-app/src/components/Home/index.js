import React from "react"
import LoggedOutHome from "./LoggedOutHome"
import LoggedInHome from "./LoggedInHome"
import { useSelector } from "react-redux"

const Home = () => {


    const user = useSelector((state) => state.session.user)


    if (user) {
        return (<LoggedInHome User={user} />)
    } else {
        return (<LoggedOutHome />)
    }

}

export default Home
