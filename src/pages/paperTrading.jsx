import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { API_PORT } from '../../api/models/constants';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import PortfolioChart from '../components/PortfolioChart/PortfolioChart';
import SearchBox from '../components/SearchBox/SearchBox';
import PortfolioStats from '../components/PortfolioStats/PortfolioStats';
import Positions from '../components/Positions/Positions';
import NavBar from '../components/NavBar/NavBar';

const PaperTrading = () => {
    const navigate = useNavigate()

    const [cookies, removeCookie] = useCookies([])

    useEffect(() => {
        const verifyCookie = async() => {
            if(!cookies.token) {
                //navigate("/login")
            }
        }
        verifyCookie()
    })

    return (
        <div>
            <NavBar displayContent="Paper Trading"/>
            <div className="page-body" style={{height: "75%", width: "100%"}}>
                <div className="top" style={{display: "flex", minHeight: '20vh', flexWrap: "wrap", gap: "2%"}}>
                    <PortfolioStats></PortfolioStats>
                    <SearchBox></SearchBox>
                </div>
                <div className="bottom" style={{display: "flex", height: '400px', flexWrap: "wrap", gap: "2%"}}>
                    <PortfolioChart></PortfolioChart>
                    <Positions></Positions>
                </div>
            </div>
        </div>
    )

}

export default PaperTrading;