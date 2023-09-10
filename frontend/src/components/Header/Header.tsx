import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import {Tooltip} from 'antd'
import {LinkOutlined} from '@ant-design/icons'
import {useTranslation} from 'react-i18next'
import './Header.scss'

export const Header:FC= () => {
    const {t} = useTranslation()

    return (
        <header>
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
                <div className='dropdown'>
                    <span className='title'>{t('about')}</span>
                    <div className='items'>
                        <NavLink to='/company' className='item hover hover-arrow'>{t('company')}</NavLink>
                        <NavLink to='/career' className='item hover hover-arrow'>{t('career')}</NavLink>
                    </div>
                </div>
                <a href='https://help.deltay.at' target='_blank' className='hover hover-opacity'>
                    <Tooltip 
                        title={<span><LinkOutlined/> {t('help')}</span>}
                        placement='bottom'
                        overlayStyle={{paddingRight: '10px'}}
                    >
                        ?
                    </Tooltip>
                </a>
            </nav>
        </header>
    )
}