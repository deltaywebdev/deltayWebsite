import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'
import Button from '../../components/Button'
import Gallery from '../../components/Gallery'
import './Home.scss'

export const Home:FC = () => {
    const {t} = useTranslation()

    return (
        <>
            <section className='top'>
                <div className='mt-12 ml-12 w-1/2'>
                    <strong className='block mb-5'>{t('home-heading')} <span className='emph'>{t('website')}</span></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis atque accusantium doloremque a odit dicta laudantium, minus error quasi perferendis quas amet aliquid aspernatur? Non eius iste dolore consequuntur!</p>
                    <div className='flex gap-10 mt-8'>
                        <Button type='primary'>
                            <NavLink to='/products' className='nohover'>Webseite erstellen lassen</NavLink>
                        </Button>
                        <Button type='secondary'>
                            <a href='#projects' className='nohover'><span>Projekte ansehen</span></a>
                        </Button>
                    </div>
                </div>
                <img className='w-2/5 absolute right-10 top-40' src='https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1' alt='Graphic of computer' />
                <img className='svg-transition' src='/transitions/home_landingpage.svg' alt='svg transition' />
            </section>
            <section className='products'>
                <div className='anchor' id='products'></div>
                <a href='#products' className='h-underlined nohover'>Unsere Top Angebote</a>
                <div className='flex gap-10 justify-center px-5'>
                    <div className='product'>
                        <img src='/graphics/gear_icon.svg' alt='Gear icon' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='product'>
                        <img src='/graphics/pen_icon.svg' alt='Pen icon' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='product'>
                        <img src='/graphics/wordpress_icon.svg' alt='Wordpress icon' />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <Button type='primary' className='mx-auto block px-10 mt-16'>
                    <NavLink to='/products' className='nohover'>Alle anzeigen</NavLink>
                </Button>
                <img className='svg-transition' src='/transitions/home_products.svg' alt='svg transition' />
            </section>
            <section className='projects'>
                <div className='anchor' id='projects'></div>
                <a href='#projects' className='h-underlined nohover'>Unsere Projekte</a>
                <Gallery
                    height='20vw'
                    visibleItems={3}
                    backgroundColor='#c5d9ceff'
                    transformScale={true}
                >
                    <div className='project'>
                    </div>
                    <div className='project'>
                    </div>
                    <div className='project'>
                    </div>
                    <div className='project'>
                    </div>
                    <div className='project'>
                    </div>
                    <div className='project'>
                    </div>
                </Gallery>
                <Button type='primary' className='mx-auto block mt-16 px-10'>
                    <NavLink to='/projects' className='nohover'>Alle anzeigen</NavLink>
                </Button>
            </section>
            <section className='about'>
                <div>
                    <b>DeltaY</b>
                    <p>
                        Webseiten abgestimmt auf <b>dich</b> <br />
                        Wieso du DeltaY wählen solltest?
                        <img width='50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                    </p>
                </div>
                <div>
                    <img width='50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                    <img width='50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                    <img width='50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                </div>
                <div>
                    <b>Das macht uns aus:</b>
                    <ul>
                        <li>
                            <span>1</span>
                            <p>
                                <b>Vertrauenswürdig</b>
                                Wir sind persönlich, günstig und zuverlässig.
                            </p>
                        </li>
                        <li>
                            <span>2</span>
                            <p>
                                <b>Vielseitig</b>
                                Wir bieten Logodesign, Webdevelopment, Content Creation und Social Media Marketing an.
                            </p>
                        </li>
                        <li>
                            <span>3</span>
                            <p>
                                <b>Verbunden</b>
                                Wir legen großen Wert auf Kundenkontakt. Min. 3 Zoom-Anrufe oder persönliche Meetings in jedem Angebot inklusive.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='reviews'>
                <h1 className='h-underline'></h1>
                <div className="reviews">
                    <div className="review">
                        <img width='50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident, eum iure id sed quia tempora. Neque assumenda blanditiis recusandae eligendi repudiandae iure obcaecati saepe, facilis maiores doloremque eaque quo.</p>
                        <div className='bottom'>
                            <img width='50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                            <span>Mark Mustermann</span>
                            <div className='stars'>
                                <div className='stars-fill'></div>
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <img width='50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident, eum iure id sed quia tempora. Neque assumenda blanditiis recusandae eligendi repudiandae iure obcaecati saepe, facilis maiores doloremque eaque quo.</p>
                        <div className='bottom'>
                            <img width='50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                            <span>Mark Mustermann</span>
                            <div className='stars'>
                                <div className='stars-fill'></div>
                            </div>
                        </div>
                    </div>
                    <div className='review'>
                        <NavLink to='/reviews' className='button'>Zeige mehr</NavLink>
                        <NavLink to='/reviews/write-review' className='button secondary'>Rezension schreiben</NavLink>
                    </div>
                </div>
                <nav>
                    <div className='arrow'>{'<'}</div>
                    <div className='dot'></div>
                    <div className='arrow'>{'>'}</div>
                </nav>
            </section>
        </>
    )
}
