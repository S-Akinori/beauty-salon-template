import Image from "next/image";
import { ImageObject } from "src/types/CommonProps";
import styles from './index.module.css'

interface Props {
  src: string
  title: string
}

const FV = ({src, title}: Props) => {
  return (
    <div className='relative w-full' style={{height: '80vh'}}>
      <div style={{fontSize: 0}}>
        <Image
          src={src}
          width={1920}
          height={1080}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full white-filter">
        <div className="relative text-3xl">{title}</div>
      </div>
    </div>
  )
}

export default FV