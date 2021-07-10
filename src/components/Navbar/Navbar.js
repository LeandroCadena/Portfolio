import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import './Navbar.scss';
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div class="container navcolor  topBotomBordersOut">
            <NavLink to='/'>
                HOME
            </NavLink>
            <NavLink to='/apps'>
                PORTFOLIO
            </NavLink>
            <NavLink to='/about'>
                ABOUT
            </NavLink>
            <NavLink to='/contact'>
                CONTACT
            </NavLink>
        </div>
    )
}
