import {FC} from 'react'
import {Rate} from 'antd'
import './Review.scss'

type ReviewProps = {
    content:string
    creator:string
    stars:number
    maxchars?:number
}

export const Review:FC<ReviewProps> = (props) => {
    const contentLength = props.content.length
    const {content, creator, stars, maxchars = contentLength} = props

    return (
        <div className='review'>
            <img src='/graphics/quotes_icon.svg' alt='Upper quotes' className='quotes' />
            <p>
                <span>{contentLength > maxchars ? content.slice(0, maxchars) + '...' : content}</span>
            </p>
            <div className='bottom'>
                <div className='flex items-center'>
                    <img className='w-12' src='/graphics/profile_icon.svg' alt='Profile icon' />
                    <div className='ml-6 h-fit'>
                        <div>{creator}</div>
                        <Rate disabled allowHalf value={stars} />
                    </div>
                </div>
            </div>
        </div>
    )
}