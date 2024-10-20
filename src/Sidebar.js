import React from 'react';
import './Sidebar.css'; // Optional for custom styles
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
    return (
        <>
            <div className="area"></div>
            <nav className="main-menu">
                <ul>
                    <li>
                    <Link to="/real-time">
                            <i className="fa fa-dashboard"></i>
                            <span className="nav-text">
                            Real-Time Monitoring
                            </span>
                        </Link>
                    </li>
                    <li className="has-subnav">
                    <Link to="/historical">
                            <i className="fa fa-desktop"></i>
                            <span className="nav-text">
                            Historical Recording
                            </span>
                    </Link>
                    </li>
                    <li className="has-subnav">
                        <a href="/forecasting">
                           <i className="fa fa-signal"></i>
                            <span className="nav-text">
                            Forecasting 
                            </span>
                        </a>
                    </li>
                    
                   
                </ul>

                <ul className="logout">
                    <li>
                    <Link to="/">
                             <i className="fa fa-power-off fa-2x"></i>
                            <span className="nav-text">
                                Logout
                            </span>
                            </Link>
                    </li>  
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
