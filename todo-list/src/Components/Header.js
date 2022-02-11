import React from 'react'

export default function Header() {
    const now = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const day = days[now.getDay()]
    const months= ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const month = months[now.getMonth()];
    const date = now.getDate();

    return (
        <div className='header'>
            <h3>{day}, <span className='date'>{month} {date}</span></h3>
        </div>
    )
}