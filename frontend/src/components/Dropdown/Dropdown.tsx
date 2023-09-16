import {FC, ReactNode, PropsWithChildren} from 'react'
import './Dropdown.scss'

interface DropdownProps {
    title:ReactNode
}

export const Dropdown:FC<PropsWithChildren<DropdownProps>> = (props) => {
    return (
        <div className='dropdown'>
            {props.title}
            <div className='items'>
                {props.children}
            </div>
        </div>
    )
}
