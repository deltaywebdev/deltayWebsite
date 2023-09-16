import {FC, useEffect, useRef} from 'react'
import {NavLink} from 'react-router-dom'
import {Tooltip} from 'antd'
import {LinkOutlined} from '@ant-design/icons'
import {useTranslation} from 'react-i18next'
import Dropdown from '../Dropdown/'

import './Header.scss'

export const Header:FC= () => {
    const {t} = useTranslation()
    const headerRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 10) headerRef.current?.classList.add('scrolled')
            else headerRef.current?.classList.remove('scrolled')
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header ref={headerRef}>
            <NavLink to='/' className='hover hover-opacity no-active'>
                <div className='header-logo'>
                    <img src="/logos/deltay_icon.svg" alt="DeltaY Logo" />
                    <span>DeltaY</span>
                </div>
            </NavLink>
            <nav>
                <NavLink to='/products'>{t('products')}</NavLink>
                <NavLink to='/pricing'>{t('pricing')}</NavLink>
                <NavLink to='/projects'>{t('projects')}</NavLink>

                <Dropdown title={<span className='title'>{t('about')}</span>}>
                    <NavLink to='/company' className='item hover hover-arrow'>{t('company')}</NavLink>
                    <NavLink to='/career' className='item hover hover-arrow'>{t('career')}</NavLink>
                </Dropdown>

                <a href='https://help.deltay.at' target='_blank' className='hover hover-opacity'>
                    <Tooltip 
                        title={<span><LinkOutlined/> {t('help')}</span>}
                        placement='bottom'
                        overlayStyle={{paddingRight: '10px'}}
                    >
                        <img className='help-icon' src="/graphics/help_icon.svg" alt="help" />
                    </Tooltip>
                </a>
            </nav>
        </header>
    )
}
