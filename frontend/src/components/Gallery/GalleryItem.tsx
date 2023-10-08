import {FC, PropsWithChildren} from 'react'

interface GalleryItemProps {
    index:number
    translate:number
    centerIndex:number
    getWidths:Function
    calcTranslate:Function
    distanceRatio:number
    transformScale:boolean|undefined
    transformRotate:boolean|undefined
    changeOpacity:boolean|undefined
}

export const GalleryItem:FC<PropsWithChildren<GalleryItemProps>> = (props) => {
    const {index, translate, centerIndex, getWidths, calcTranslate, distanceRatio, transformScale, transformRotate, changeOpacity} = props

    const {itemWidth, parentWidth} = getWidths()
    const moveItem:number = itemWidth * (index - centerIndex) + translate
    let transform:string = `translateX(calc(-50% + ${moveItem * (1 - Math.abs(moveItem / (parentWidth / 2)) * (transformScale ? (1 - distanceRatio + 0.2) : (1 - distanceRatio)))}px)) translateY(calc(-50%))`

    if(transformScale) transform += ` scale(calc(1 - ${Math.min(1, Math.abs(moveItem / (parentWidth / 2)) * 0.3)}))`
    if(transformRotate) transform += ` rotate3d(0, 1, 0, ${Math.max(-90, Math.min(90, (moveItem / (parentWidth / 2)) * 60))}deg)`
    
    const opacity = 1 - Math.abs(moveItem / (parentWidth / 2)) ** 4

    return (
        <div
            style={{
                transform: transform,
                zIndex: String(9 - Math.abs(moveItem / (parentWidth / 2)) * 3),
                opacity: changeOpacity ? String(opacity) : 1,
                pointerEvents: opacity < 0.3 ? 'none' : 'all'
            }}

            onMouseDown={(e) => {
                (e.target as HTMLDivElement).setAttribute('data-mousex', String(e.clientX))
            }}

            onClick={(e) => {
                const dragDist = Math.abs(Number((e.target as HTMLDivElement).dataset.mousex) - e.clientX)
                if(dragDist < 10) calcTranslate(-itemWidth * (index - centerIndex))
            }}

            className={moveItem === 0 ? 'gallery-item center' : 'gallery-item'}
        >
            {props.children}
        </div>
    )
}