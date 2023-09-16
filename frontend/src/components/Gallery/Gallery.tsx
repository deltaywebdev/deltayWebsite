import {CSSProperties, FC, PropsWithChildren, useEffect, useRef, useState, Children, MouseEventHandler} from 'react'
import {GalleryItem} from './GalleryItem'
import './Gallery.scss'

interface GalleryProps {
    height:string
    visibleItems:number
    backgroundColor: string
    pagination?:boolean
    autoswipe?:boolean
    swipeTimeout?:number
    transformScale?:boolean
    transformRotate?:boolean
}

export const Gallery:FC<PropsWithChildren<GalleryProps>> = (props) => {
    const {children, height, visibleItems, backgroundColor, pagination, autoswipe, swipeTimeout, transformScale, transformRotate} = props

    const galleryRef = useRef<HTMLDivElement | null>(null)
    const [translate, setTranslate] = useState<number>(0)

    const centerIndex:number = Math.floor(visibleItems / 2)

    const checkTranslate = (value:number):number => {
        if(!galleryRef.current) return 0

        if (galleryRef.current.dataset.mousedown === 'false') {
            const {itemWidth} = getWidths()
            value = Math.max(itemWidth * ((1 + centerIndex) - galleryRef.current.children.length), Math.min(itemWidth * centerIndex, value))
            const itemPos:number = Math.round(value / itemWidth) * itemWidth
            const distance:number = Math.abs(value - itemPos)
            if(distance < itemWidth / 2) value = itemPos
        }

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

        const handleResize = () => {calcTranslate(0, true)}

        document.addEventListener('mouseup', mouseUp)
        document.addEventListener('keyup', handleKeyUp)
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('mouseup', mouseUp)
            document.removeEventListener('keyup', handleKeyUp)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div 
            className='px-5 gallery'
            ref={galleryRef}

            style={{
                height: height,
                '--visible-items': visibleItems,
                '--background-color': backgroundColor
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
                    childCount={galleryRef.current?.children.length ?? 0}
                    transformScale={transformScale}
                    transformRotate={transformRotate}
                >{child}</GalleryItem>
            ))}

        </div>
    )
}