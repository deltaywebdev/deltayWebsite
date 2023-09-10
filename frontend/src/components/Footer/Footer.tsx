import {FC} from 'react'
import './Footer.scss'
import LanguageMenu from '../LanguageMenu'

export const Footer:FC = () => {
    return (
        <footer>
            <p>&copy; DeltaY 2023</p>
            <LanguageMenu />
        </footer>
    )
}