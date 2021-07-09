import React from 'react'
import './SidebarOption.css'
import {useHistory} from 'react-router-dom'
function SidebarOption({Icon,Title,number,selected}) {
    const history=useHistory()
    return (
        <div
        className='sidebaroption'>
        <Icon className="MuiSvgIcon-root"/>
        <h3>{Title}</h3>
      
            
        </div>
    )
}

export default SidebarOption
