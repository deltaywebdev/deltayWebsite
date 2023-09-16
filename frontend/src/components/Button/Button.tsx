import {FC, PropsWithChildren} from 'react'
import './Button.scss'

type ButtonProps = {
    type: 'primary' | 'secondary'
    className?: string
    theme?: 'light' | 'dark'
}

export const Button:FC<PropsWithChildren<ButtonProps>> = (props) => {
    const classes = ['button', ... props.className ? props.className.split(' ') : []]
    classes.push(props.type === 'secondary' ? 'secondary' : 'primary')
    classes.push(props.theme === 'light' ? 'light' : 'dark')
    const className = classes.join(' ')

    return (
        <button className={className}>{props.children}</button>
    )
}