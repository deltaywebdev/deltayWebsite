import {CSSProperties, FC, PropsWithChildren, useEffect, useRef, useState, Children} from 'react'
import {Pagination, PaginationProps} from 'antd'
import {GalleryItem} from './GalleryItem'
import './Gallery.scss'

interface GalleryProps {
    height:string
    visibleItems:number
    backgroundColor: string
    transitionTimeSek:number
    pagination?:boolean
    autoswipe?:boolean
    swipeTimeoutMS?:number
    transformScale?:boolean
    transformRotate?:boolean
    changeOpacity?:boolean
    distanceRatio?:number
}

export const Gallery:FC<PropsWithChildren<GalleryProps>> = (props) => {
    const {children, height, visibleItems, backgroundColor, transitionTimeSek, pagination, autoswipe, swipeTimeoutMS, transformScale, transformRotate, changeOpacity, distanceRatio = 0.9} = props

    const galleryRef = useRef<HTMLDivElement | null>(null)
    const [translate, setTranslate] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState(1)
    const translateRef = useRef(0)
    translateRef.current = translate

    const centerIndex:number = Math.floor(visibleItems / 2)

    const checkTranslate = (value:number):number => {
        if(!galleryRef.current) return 0
        const {itemWidth} = getWidths()

        if (!galleryRef.current.dataset.mousedown || galleryRef.current.dataset.mousedown === 'false') {
            value = Math.max(itemWidth * ((1 + centerIndex) - galleryRef.current.children.length), Math.min(itemWidth * centerIndex, value))
            const itemPos:number = Math.round(value / itemWidth) * itemWidth
            const distance:number = Math.abs(value - itemPos)
            if(distance < itemWidth / 2) value = itemPos
        }

        setCurrentPage(-Math.round(Math.max(itemWidth * ((1 + centerIndex) - galleryRef.current.children.length), Math.min(itemWidth * centerIndex, value)) / itemWidth) + 2)
        return value
    }

    const calcTranslate = (value:number, add:boolean = false) => setTranslate((translate) => add ? checkTranslate(translate + value) : checkTranslate(value))
    const swipe = (direction:1|-1) => calcTranslate(getWidths().itemWidth * direction, true)
    const getWidths = () => ({parentWidth: galleryRef.current?.clientWidth ?? 0, itemWidth: (galleryRef.current?.clientWidth ?? 0) * 1 / visibleItems})

    useEffect(() => {
        const mouseUp = (e:MouseEvent) => {
            if(!galleryRef.current || !galleryRef.current.dataset.mousedown || galleryRef.current.dataset.mousedown === 'false') return
            const mouseDown:{x:number, translate:number} = JSON.parse(galleryRef.current.dataset.mousedown)
            galleryRef.current?.setAttribute('data-mousedown', 'false')
            calcTranslate(mouseDown.translate + (e.clientX - mouseDown.x))
        }

        const handleKeyUp = (e:KeyboardEvent) => {
            if(e.key === 'ArrowLeft') swipe(1)
            if(e.key === 'ArrowRight') swipe(-1)
        }

        // get component to re-render by changing translate (+1 doesn't change translate because of snapping)
        const handleResize = () => {calcTranslate(1, true)}

        document.addEventListener('mouseup', mouseUp)
        document.addEventListener('keyup', handleKeyUp)
        window.addEventListener('resize', handleResize)

        const autoSwipeInterval:ReturnType<typeof setInterval> = setInterval(() => {
            if(!galleryRef.current) return
            if(autoswipe) {
                const {itemWidth} = getWidths()
                if(itemWidth * ((1 + centerIndex - (galleryRef.current.children.length ?? 0))) === translateRef.current) calcTranslate(-itemWidth * (centerIndex - 2))
                else swipe(-1)
            }
        }, swipeTimeoutMS)

        return () => {
            document.removeEventListener('mouseup', mouseUp)
            document.removeEventListener('keyup', handleKeyUp)
            window.removeEventListener('resize', handleResize)
            clearInterval(autoSwipeInterval)
        }
    }, [])

    const onChange:PaginationProps['onChange'] = (page) => calcTranslate((page - 2) * -getWidths().itemWidth)

    return (
        <div className='gallery-wrapper'>
            <div 
                className='px-5 gallery'
                ref={galleryRef}

                style={{
                    height: height,
                    '--visible-items': visibleItems,
                    '--background-color': backgroundColor,
                    '--transition-time': transitionTimeSek + 's'
                } as CSSProperties}

                onMouseDown={(e) => galleryRef.current?.setAttribute('data-mousedown', JSON.stringify({x: e.clientX, translate: translate}))}

                onMouseMove={(e) => {
                    if(!galleryRef.current || !galleryRef.current.dataset.mousedown || galleryRef.current.dataset.mousedown === 'false') return
                    const mouseDown:{x:number, translate:number} = JSON.parse(galleryRef.current.dataset.mousedown)
                    calcTranslate(mouseDown.translate + (e.clientX - mouseDown.x), false)
                }}
            >
                {Children.map(children, (child, index) => (
                    <GalleryItem
                        key={index}
                        index={index}
                        translate={translate}
                        centerIndex={centerIndex}
                        getWidths={getWidths}
                        calcTranslate={calcTranslate}
                        distanceRatio={distanceRatio}
                        transformScale={transformScale}
                        transformRotate={transformRotate}
                        changeOpacity={changeOpacity}
                    >{child}</GalleryItem>
                ))}
            </div>

            {pagination && 
                <Pagination
                    className='pagination'
                    onChange={onChange}
                    current={currentPage}
                    showSizeChanger={false}
                    total={(galleryRef.current?.children.length ?? 0) * 10}
                />
            }
        </div>
    )
}