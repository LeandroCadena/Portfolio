import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import './Navbar.scss'

export default function Navbar() {
    return (
        <div class="container orange pullUpDown">
            <a>HOME</a>
            <a>ARTICLES</a>
            <a>PORTFOLIO</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
        </div>
    )
}
