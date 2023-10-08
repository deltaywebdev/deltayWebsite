import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {NavLink} from 'react-router-dom'
import Button from '../../components/Button'
import Gallery from '../../components/Gallery'
import {LinkOutlined} from '@ant-design/icons'
import ToTop from '../../components/ToTop'
import Review from '../../components/Review'
import './Home.scss'

export const Home:FC = () => {
    const {t} = useTranslation()

    return (
        <>
            <ToTop threshold={800} />
            <section className='top'>
                <div className='floating-rect top-1/4 left-[-1em]'></div>
                <div className='floating-rect top-[15%] left-[40%] gradient-right'></div>
                <div className='mt-16 ml-12 w-[45%]'>
                    <strong className='block mb-5'>{t('home-heading')} <span className='emph'>{t('website')}</span></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro debitis atque accusantium doloremque a odit dicta laudantium, minus error quasi perferendis quas amet aliquid aspernatur? Non eius iste dolore consequuntur!</p>
                    <div className='flex gap-5 mt-8'>
                        <Button type='primary' className='noshadow'>
                            <NavLink to='/products' className='nohover'>Webseite erstellen lassen</NavLink>
                        </Button>
                        <Button type='secondary'>
                            <a href='#projects' className='nohover'><span>Projekte ansehen</span></a>
                        </Button>
                    </div>
                </div>
                <img className='w-2/5 absolute right-10 top-56' src='https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1' alt='Graphic of computer' />
                <img className='svg-transition' src='/transitions/home_landingpage.svg' alt='svg transition' />
            </section>
            <section className='products'>
                <div className='anchor' id='products'></div>
                <a href='#products' className='h-underlined nohover'>Unsere Top Angebote</a>
                <div className='flex gap-10 justify-center px-5'>
                    <div className='product'>
                        <img src='/graphics/gear_icon.svg' alt='Gear icon' />
                        <p>Custom website development</p>
                    </div>
                    <div className='product'>
                        <img src='/graphics/pen_icon.svg' alt='Pen icon' />
                        <p>Website design, logo and company branding</p>
                    </div>
                    <div className='product'>
                        <img src='/graphics/wordpress_icon.svg' alt='Wordpress icon' />
                        <p>Wordpress / Wix.com websites</p>
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
                    transitionTimeSek={.75}
                    transformScale={true}
                    changeOpacity={true}
                >
                    <div className='project' style={{backgroundImage: 'url(/graphics/darm-gesundheit.png)'}}>
                        <a href='https://www.darm-gesundheit.org' target='_blank' draggable={false}><LinkOutlined /><span>darm-gesundheit.org</span></a>
                    </div>
                    <div className='project' style={{backgroundImage: 'url(/graphics/darm-gesundheit.png)'}}>
                        <a href='https://www.darm-gesundheit.org' target='_blank' draggable={false}><LinkOutlined /><span>darm-gesundheit.org</span></a>
                    </div>
                    <div className='project' style={{backgroundImage: 'url(/graphics/darm-gesundheit.png)'}}>
                        <a href='https://www.darm-gesundheit.org' target='_blank' draggable={false}><LinkOutlined /><span>darm-gesundheit.org</span></a>
                    </div>
                    <div className='project' style={{backgroundImage: 'url(/graphics/darm-gesundheit.png)'}}>
                        <a href='https://www.darm-gesundheit.org' target='_blank' draggable={false}><LinkOutlined /><span>darm-gesundheit.org</span></a>
                    </div>
                </Gallery>
                <Button type='primary' className='mx-auto block mt-16 px-10'>
                    <NavLink to='/projects' className='nohover'>Alle anzeigen</NavLink>
                </Button>
            </section>
            <section className='about'>
                <div className='floating-rect bottom-[10%] left-[-1em]'></div>
                <div className='floating-rect top-[10%] right-[5%] w-80 aspect-[2/1] gradient-left'></div>
                <div className='flex max-w-6xl m-auto pt-16 pb-56'>
                    <div className='px-12 text-right w-[40%] mr-8'>
                        <b>DeltaY</b>
                        <p>
                            Webseiten abgestimmt auf <b>dich</b> <br />
                            Wieso du DeltaY wählen solltest?
                            <img className='w-2/3 aspect-[1/2] ml-auto mt-8 opacity-50' src="https://i0.wp.com/finncham.at/wp-content/uploads/2022/07/placeholder-1.png?ssl=1" alt="Graphic of computer" />
                        </p>
                    </div>
                    <div className='px-12 w-[60%]'>
                        <b className='block mb-16 mt-12 pl-28'>Das macht uns aus:</b>
                        <ul className='list'>
                            <li>
                                <img src='/graphics/handshake_icon.svg' alt='Handshake icon' />
                                <span>1</span>
                                <p>
                                    <b>Vertrauenswürdig</b>
                                    Wir sind persönlich, günstig und zuverlässig.
                                </p>
                            </li>
                            <li>
                                <img src='/graphics/ideas_icon.svg' alt='Lightbulb icon' />
                                <span>2</span>
                                <p>
                                    <b>Vielseitig</b>
                                    Wir bieten Logodesign, Webdevelopment, Content Creation und Social Media Marketing an.
                                </p>
                            </li>
                            <li>
                                <img src='/graphics/connections_icon.svg' alt='Connections icon' />
                                <span>3</span>
                                <p>
                                    <b>Verbunden</b>
                                    Wir legen großen Wert auf Kundenkontakt. Min. 3 Zoom-Anrufe oder persönliche Meetings in jedem Angebot inklusive.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='reviews'>
                <div className='anchor' id='reviews'></div>
                <a href='#reviews' className='h-underlined nohover mb-20'>Das sagen unsere Kunden</a>
                <Gallery
                    height='23vw'
                    visibleItems={3}
                    backgroundColor='#edf2edff'
                    transitionTimeSek={.75}
                    transformScale={true}
                    pagination={true}
                    distanceRatio={0.95}
                    autoswipe={true}
                    swipeTimeoutMS={1000}
                >
                    <Review 
                        content='Ich bin begeistert! So cool wow omg mich haut 
                        es von den Socken. Benützen Sie den Code 
                        "hihi", um einen Rabatt von -20% zu erhalten.'
                        maxchars={200}
                        creator='Max Mustermann'
                        stars={3.4}
                    />
                    <Review 
                        content='Ich bin begeistert! So cool wow omg mich haut 
                        es von den Socken. Benützen Sie den Code 
                        "hihi", um einen Rabatt von -20% zu erhalten.'
                        maxchars={200}
                        creator='Max Mustermann'
                        stars={3.4}
                    />
                    <Review 
                        content='Ich bin begeistert! So cool wow omg mich haut 
                        es von den Socken. Benützen Sie den Code 
                        "hihi", um einen Rabatt von -20% zu erhalten.'
                        maxchars={200}
                        creator='Max Mustermann'
                        stars={3.4}
                    />
                    <div className='flex items-center h-[100%]'>
                        <div className='h-fit block'>
                            <Button type='primary' className='w-[100%] mb-6'><NavLink to='/reviews' className='nohover'>Zeige mehr</NavLink></Button><br />
                            <Button type='secondary' theme='light' className='w-[100%]'><NavLink to='/reviews/write-review' className='nohover'>Rezension schreiben</NavLink></Button>
                        </div>
                    </div>
                </Gallery>
            </section>
        </>
    )
}
