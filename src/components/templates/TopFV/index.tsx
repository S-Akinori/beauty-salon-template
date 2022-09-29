import Image from "next/image";
import { useEffect, useState } from "react";
import { heroImages } from "src/contents/top/fv";
import useInterval from "src/hooks/useInterval";
import styles from './index.module.css'
import clsx from 'clsx';

const TopFV = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [delay, setDelay] = useState<number | null>(null)
  const [fvState, setFvState] = useState<'loading' | 'active' | 'moving' | 'fadeOut' |'static'>('loading');

  useInterval(() => {
    setActiveIndex((activeIndex + 1) % heroImages.length)
  }, delay)

  useEffect(() => {
    if(fvState == 'active' && activeIndex >= heroImages.length - 1) {
      setDelay(3000)
      setTimeout(() => {
        setFvState('moving')
      }, 1000)
      setTimeout(() => {
        setFvState('fadeOut')
      }, 3500)
      setTimeout(() => {
        document.querySelector('body')!.style.overflowY = 'auto'
        setFvState('static')
      }, 4000)
      sessionStorage.setItem('isVisited', 'true')
    }
  }, [activeIndex])

  useEffect(() => {
    if(!sessionStorage.getItem('isVisited')) {
      document.querySelector('body')!.style.overflowY = 'hidden'
      setTimeout(() => {
        setFvState('active')
        setDelay(800)
      }, 500)
    } else {
      setTimeout(() => {
        setFvState('fadeOut')
        setDelay(3000)
      }, 800)
      setTimeout(() => {
        setFvState('static')
      }, 1000)
    }
  }, [])

  return (
    <>
      {fvState !== 'static' && fvState !== 'fadeOut' && (
        <div style={{height: '80vh', width: '100%'}}></div>
      )}
      {fvState !== 'static' && (
        <div className={clsx([styles.bg, fvState === 'fadeOut' ? styles.fadeOut : false])}></div>
      )}
      {(fvState === 'loading' || fvState === 'active') && (
        <div className={clsx(['fixed top-0 left-0 flex items-center justify-center w-full h-full duration-300', fvState === 'loading' ? 'bg-main' : 'bg-none'])} style={{zIndex: '9999'}}>
          <span className="text-xl">Beauty Salon</span>
        </div>
      )}
      <div className={`${styles.fv} ${fvState === 'active' ? styles.active : ''} ${fvState === 'moving' ? styles.move : ''}`}>
        <div className='h-full'>
          {heroImages && heroImages.map((image, index) => (
            <div key={image.id} className={`w-full h-full ${styles.fvImage} ${(index === activeIndex) ? styles.active : ''}`}>
              <Image
                src={image.src}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TopFV