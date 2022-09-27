import { useInView } from "react-intersection-observer"
import styles from './index.module.css'

interface Props {
  children: React.ReactNode
  inViewOption?: {
    rootMargin: string
    triggerOnce: boolean
  }
  direction?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}

const Fade = ({children, inViewOption = {rootMargin: '-100px', triggerOnce: true}, direction, className = ''}: Props) => {
  const {ref, inView} = useInView(inViewOption);

  return (
    <div ref={ref} className={`${className} ${styles.fade} ${direction ? styles[direction] : ''} ${inView ? styles.show : ''}`}>{children}</div>
  )
}

export default Fade