import {FC} from 'react'
import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import LanguageMenu from '../LanguageMenu'
import {InstagramOutlined, FacebookOutlined, MailOutlined} from '@ant-design/icons'
import {Tooltip} from 'antd'
import './Footer.scss'

export const Footer:FC = () => {
    const {t} = useTranslation()

    return (
        <footer>
            <section>
                <div>
                    <NavLink to='/' className='nohover'>
                        <img src="/logos/deltay_footer.svg" alt="DeltaY Logo" className='logo'/>
                    </NavLink>
                    <p className='mt-4'>Professional website design and development</p>
                </div>
                <div>
                    <h1>Folge uns auf</h1>
                    <div className='social-media'>
                        <a href='https://www.instagram.com/deltaywebdev/' target='_blank' className='hover hover-opacity'><InstagramOutlined /></a>
                        <a href='https://www.facebook.com/profile.php?id=100084114982408' target='_blank' className='hover hover-opacity'><FacebookOutlined /></a>
                    </div>
                </div>
                <div>
                <h1>Kontaktiere uns</h1>
                    <div className='contact'>
                        <a href='mailto:webdev@deltay.at?subject=Anfrage über deltay.at' className='hover hover-opacity'><MailOutlined /> &nbsp; webdev@deltay.at</a>
                    </div>
                </div>
                <nav>
                    <NavLink to='/agb' className='hover hover-opacity'>{t('agb')}</NavLink>
                    <NavLink to='/privacy' className='hover hover-opacity'>{t('privacy')}</NavLink>
                    <NavLink to='/imprint' className='hover hover-opacity'>{t('imprint')}</NavLink>
                </nav>
                <div className='info'>
                    <Tooltip title={t('cookie-info')} overlayStyle={{paddingRight: '10px'}}>
                        {/* Tooltip targets this div element so it doesn't remove spin class from image when removing tooltip */}
                        <div>
                            <img
                                src='https://freesvg.org/img/1548612994.png'
                                alt='Cookie settings'
                                onClick={(e) => {
                                    const img = e.target as HTMLImageElement
                                    img.classList.add('spin')
                                    setTimeout(() => {img.classList.remove('spin')}, 1000)
                                }}
                            />
                        </div>
                    </Tooltip>
                    <NavLink to='/admin-login' className='hover hover-opacity'>Admin</NavLink>
                </div>
            </section>
            <section>
                <p>&copy; DeltaY 2023</p>
                <LanguageMenu listAlign='left'/>
            </section>
        </footer>
    )
}
