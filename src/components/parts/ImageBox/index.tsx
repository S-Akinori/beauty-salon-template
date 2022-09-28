import Image from "next/image"
import { CommonChilden, CommonProps, ImageObject } from "src/types/CommonProps"

interface Props {
  image: ImageObject
  children: React.ReactNode
}

const ImageBox = ({image, children}: Props) => {
  return (
    <div className="relative">
      <div style={{fontSize: 0}}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          objectFit={image.objectFit}
        />
      </div>
      <div 
        className="absolute top-0 left-0 z-10 p-4 w-full h-full opacity-0 duration-300 select-none
                  before:content-[''] before:block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-base-cont before:opacity-50
                  hover:opacity-100"
      >
        {children}
      </div>
    </div>
  )
}

export const ImageBoxTitle = ({children, className, style}: CommonProps) => {
  return (
    <div className={`mb-4 relative ${className}`} style={style}>{children}</div>
  )
}

export const ImageBoxBody = ({children, className, style}: CommonProps) => {
  return (
    <div className={`relative ${className}`} style={style}>{children}</div>
  )
}

export default ImageBox