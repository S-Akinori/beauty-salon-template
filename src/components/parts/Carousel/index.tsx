import Image from "next/image"
import React, { Children, cloneElement, createElement, MouseEvent, MouseEventHandler, TouchEvent, useEffect, useRef, useState } from "react"
import useMediaQuery from "src/hooks/useMediaQuery"
import { ImageObject } from "src/types/CommonProps"
import { breakpoints } from "src/variables/breakpoints"

interface BreakPoint {
  md?: number
  lg?: number
  xl?: number
}

interface Props {
  children: React.ReactElement[]
  slidesPerView?: number | BreakPoint
  
}

const Carousel = ({slidesPerView = 1, children}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {breakPoint} = useMediaQuery();
  const [startX, setStartX] = useState<number | null>(null);
  const [itemWidth, setItemWidth] = useState(0)
  const [slideNum, setSlideNum] = useState(1);
  const ref = useRef<HTMLDivElement>(null)
  const speed = 5 * slideNum

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
      const dis = (e.type === 'mousemove') ? (e as MouseEvent).clientX - startX : (e as TouchEvent).changedTouches[0].clientX - startX
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

  return (
      <div className={`overflow-hidden ${startX === null ? 'cursor-grab' : 'cursor-grabbing'}`}
        onTouchStart={handleDown} 
        onMouseDown={handleDown} 
        onMouseMove={handleMove} 
        onTouchMove={handleMove} 
        onMouseUp={handleUp} 
        onTouchEnd={handleUp}
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
  )
}

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