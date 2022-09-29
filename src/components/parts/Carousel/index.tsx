import clsx from "clsx"
import React, { Children, cloneElement, createElement, MouseEvent, MouseEventHandler, TouchEvent, useEffect, useRef, useState } from "react"
import useInterval from "src/hooks/useInterval"
import useMediaQuery from "src/hooks/useMediaQuery"
import { breakpoints } from "src/variables/breakpoints"
import css from 'styled-jsx/css'

interface BreakPoint {
  md?: number
  lg?: number
  xl?: number
}

interface Props {
  children: React.ReactElement[]
  slidesPerView?: number | BreakPoint
  autoPlay?: boolean
  navigation?: boolean
}

const Carousel = ({slidesPerView = 1, autoPlay = false, navigation = true, children}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {breakPoint} = useMediaQuery();
  const [startX, setStartX] = useState<number | null>(null);
  const [itemWidth, setItemWidth] = useState(0)
  const [slideNum, setSlideNum] = useState(1);
  const ref = useRef<HTMLDivElement>(null)
  const speed = 5 * slideNum

  if(autoPlay) {
    useInterval(() => {
      setActiveIndex(activeIndex === children.length - 1 ? 0 : activeIndex + 1);
    }, 3000)
  }

  useEffect(() => {
    //comment: no better way?
    if(typeof slidesPerView === 'object') {
      const keys = Object.keys(slidesPerView) as (keyof typeof slidesPerView)[]
      let key = keys.find(key => key === breakPoint.name);
      if(key !== undefined) {
        const slides = slidesPerView[key] as number
        setItemWidth(100 / slides)
        setSlideNum(slides)
      } else {
        key = keys[keys.length - 1];
        const targetBreakpoint = breakpoints.find(item => item.name === key)!;
        (targetBreakpoint.id < breakPoint.id) ? setItemWidth(100 / slidesPerView[key]!) : setItemWidth(100);
        setSlideNum(slidesPerView[key]!)
      }
    } else if(typeof slidesPerView === 'number') {
      setItemWidth(100 / slidesPerView)
      setSlideNum(slidesPerView)
    }
  }, [breakPoint])

  useEffect(() => {
    if(ref.current) {
      ref.current.style.transform = `translateX(${-itemWidth * activeIndex}%)`
    }
  }, [activeIndex])

  const handleDown: MouseEventHandler<HTMLDivElement> & React.TouchEventHandler<HTMLDivElement> = (e) => {
    if(e.type === 'mousedown') {
      setStartX((e as MouseEvent).clientX)
    } else {
      setStartX((e as TouchEvent).changedTouches[0].clientX)
    }
  }

  const handleMove: MouseEventHandler<HTMLDivElement> & React.TouchEventHandler<HTMLDivElement> = (e) => {
    if(startX !== null) {
      const dis = (e.type === 'mousemove') ? (e as MouseEvent).clientX - startX : (e as TouchEvent).changedTouches[0].clientX - startX
      if(ref.current) {
        ref.current.style.transform = `translateX(${-itemWidth * activeIndex + dis / speed}%)`
      }
    }
    
  }
  const handleUp: MouseEventHandler<HTMLDivElement> & React.TouchEventHandler<HTMLDivElement> = (e) => {
    if(startX && ref.current) {
      const triggerDis = 70;
      const dis = (e.type === 'mouseup') ? (e as MouseEvent).clientX - startX : (e as TouchEvent).changedTouches[0].clientX - startX
      const direction = - Math.sign(dis); // -1 -> to left, 1 -> to right      
      if(
        Math.abs(dis) < triggerDis ||
        (direction < 0 && activeIndex === 0) || 
        (direction > 0 && activeIndex === children.length - 1)
        ) {
        // cannot move to left (right) if the first (last) item is active
        // if the abs dis does not reach the triggerDis
        ref.current.style.transform = `translateX(${-itemWidth * activeIndex}%)`
      } else {
        ref.current.style.transform = `translateX(${-1 * itemWidth * (activeIndex + direction)}%)`
        setActiveIndex(activeIndex + direction)
      }
    }
    setStartX(null)
  }

  const slide = (slideTo: number) => {
    if(slideTo >= 0 && slideTo < children.length) setActiveIndex(slideTo)
  }

  return (
    <>
      <style jsx>{btnStyle}</style>
      <div className="relative">
        <div className={clsx(['overflow-hidden', startX === null ? 'cursor-grab' : 'cursor-grabbing'])}
          // onTouchStart={handleDown} 
          onMouseDown={handleDown} 
          onMouseMove={handleMove} 
          // onTouchMove={handleMove} 
          onMouseUp={handleUp} 
          // onTouchEnd={handleUp}
          // onMouseOut={handleUp}
        >
          <div className={`flex ${startX === null ? 'duration-300' : ''}`} ref={ref}>
            {Children.map(children, (child, index) => {
              return cloneElement(child,{
                className: activeIndex === index ? 'active' : '',
                style: {width: `calc(${itemWidth}%)`},
              })
            })}
          </div>
        </div>
        {navigation && (
          <>
            <div className="btn left-0 after:left-0" onClick={(e) => slide(activeIndex - 1)}>prev</div>
            <div className="btn right-0 after:right-0" onClick={(e) => slide(activeIndex + 1)}>next</div>
          </>
        )}
      </div>
    </>
  )
}

const btnStyle = css`
  .btn {
    position: absolute;
    bottom: -2rem;
    padding-bottom: .25rem;
    cursor: pointer;
  }
  .btn::after {
    content: '';
    position: absolute;
    bottom: 0;
    display: block;
    width: 125%;
    height: 1px;
    background: #222;
    transition: 300ms;
  }
  .btn:hover::after {
    width: 150%;
  }
`

interface ItemProps {
  children: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export const CarouselItem = ({children, style, className}: ItemProps) => {
  return (
    <div className={`relative shrink-0 aspect-square ${className}`} style={style}>{children}</div>
  )
}

export default Carousel