interface Props {
  src: string
  width?: number
  height?: number
}
const GMap = ({src, width, height, ...props}: Props) => {
  const className = (!width || !height) ? 'w-full h-full' : undefined
  return <iframe className={className} width={width} height={height} src={src} {...props} style={{minHeight: '300px'}} />
}

export default GMap