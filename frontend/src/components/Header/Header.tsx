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
        let lastScrollY:number = 0
        let waiting:number = 0
        let headerTop:number = 0

        const handleScroll = () => {
            const header:HTMLElement|null = headerRef.current
            if(!header) return

            const showHeaderThreshold:number = header.offsetHeight
            const change:number = window.scrollY - lastScrollY

            if(change > 0) {
                headerTop = Math.max(-header.offsetHeight, headerTop - change)
                waiting = 0
            }
            
            if(change < 0) {
                if(headerTop > -header.offsetHeight) headerTop = Math.min(0, headerTop - change)
                else if(waiting < showHeaderThreshold) waiting -= change
                else {
                    headerTop = 0
                    header.style.opacity = '1'
                    waiting = 0
                }
            }

            if(window.scrollY > 0 && headerTop === 0) header.classList.add('scrolled')
            if(window.scrollY === 0) {
                header.classList.remove('scrolled')
                headerTop = 0
            }

            if(headerTop === -header.offsetHeight) header.style.opacity = '0'
            else header.style.opacity = '1'

            header.style.top = headerTop + 'px'
            lastScrollY = window.scrollY
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
