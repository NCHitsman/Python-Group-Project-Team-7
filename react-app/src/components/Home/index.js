import React, { useEffect } from "react"
import LoggedOutHome from "./LoggedOutHome"
import LoggedInHome from "./LoggedInHome"
import { useSelector, useDispatch } from "react-redux"
import { getAllStocks, removeHistory } from "../../store/stocks.js"

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllStocks())
    }, [dispatch])

    const user = useSelector((state) => state.session.user)


    if (user) {
        return (<LoggedInHome />)
    } else {
        return (<LoggedOutHome />)
    }

}

export default Home
