import {FC, useState, useEffect, useRef} from 'react'
import i18n from '../../i18n'
import {useTranslation} from 'react-i18next'
import {languages} from '../../constants/languages'
import {Tooltip} from 'antd'
import {language} from '../../constants/languages'
import './LanguageMenu.scss'

export const LanguageMenu:FC = () => {
    const {t} = useTranslation()
    const [isListOpen, openList] = useState(false)
    const currentLang:language = languages.find((lang) => lang.code === i18n.language) || languages[0]
    const languageMenuRef = useRef<HTMLDivElement | null>(null);

    const setListState = (isOpen:boolean):void => {
        // save language to cookies here
        openList(isOpen)
    }

    useEffect(() => {
        const clickOutside = (event: MouseEvent) => {
            if(
                languageMenuRef.current 
                && event.target instanceof HTMLDivElement 
                && !languageMenuRef.current.contains(event.target)
            ) openList(false)
        }

        document.addEventListener('click', clickOutside)

        return () => document.removeEventListener('click', clickOutside)
    }, [])

    return (
        <div className='language-menu' ref={languageMenuRef}>
            <Tooltip title={t('chooselang')}>
                <span className='active-lang' onClick={() => {setListState(isListOpen ? false : true)}}>{currentLang.label}</span>
            </Tooltip>

            <div className={isListOpen ? 'list open' : 'list'}>
                {languages.map((lang, index) =>
                    <div 
                        key={lang.code}
                        className={lang.code === currentLang.code ? 'lang-icon item active' : 'lang-icon item'}

                        style={{
                            backgroundImage: `url(${lang.flagurl})`,
                            right: isListOpen ? -20 - (index * 40) + 'px' : '-10px',
                            opacity: isListOpen ? 1 : 0,
                        }}

                        onClick={() => {
                            i18n.changeLanguage(lang.code)
                            setListState(false)
                        }}
                    >
                        <span>{lang.code}</span>
                    </div>
                )}
            </div>
        </div>
    )
}