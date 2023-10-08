import {FC, useEffect, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import './ToTop.scss'

type ToTopProps = {
    threshold:number
}

export const ToTop:FC<ToTopProps> = (props) => {
    const {t} = useTranslation()
    const buttonRef = useRef<HTMLAnchorElement | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            const button = buttonRef.current
            if(!button) return

            if(window.scrollY >= props.threshold) button.classList.add('show')
            else button.classList.remove('show')

            const footer = document.querySelector('footer')
            button.style.bottom = `max(1.5em, calc(2em + ${window.scrollY + window.innerHeight - (footer?.offsetTop ?? 0)}px))`
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {window.removeEventListener('scroll', handleScroll)}
    }, [])


    return (
        <a className='nohover' title={t('to-top')} href='#' id='to-top-button' ref={buttonRef}>
            <span>{'>'}</span>
            <div>{t('to-top')}</div>
        </a>
    )
}