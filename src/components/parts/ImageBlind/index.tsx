import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import styles from "./index.module.css"

interface Props {
  src: string
  width: number
  height: number

}

const ImageBlind = ({src, width, height}: Props) => {
  const {ref, inView} = useInView({
    rootMargin: '-100px',
    triggerOnce: true
  });
  const [imageClass, setImageClasss] = useState('opacity-0');

  useEffect(() => {
    if(inView) {
      setTimeout(() => {
        setImageClasss('opacity-100')
      }, 550)
    }
  }, [inView])

  return (
    <div className="relative">
      <div ref={ref} className={inView ? styles.bg + ' ' + styles.active : styles.bg}></div>
      <div className={imageClass} style={{fontSize: 0}}>
        <Image
          src={src}
          width={width}
          height={height}
        />
      </div>
    </div>
  )
}

export default ImageBlind