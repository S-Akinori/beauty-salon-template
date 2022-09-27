import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  children: React.ReactNode
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl'
}

const Container = ({children, breakpoint = 'md', className = '', style}: Props) => {
  const containerClass = `${breakpoint}:container mx-auto px-6 lg:px-28 ${className}`
  return  (
    <div className={containerClass} style={style}>{children}</div>
  )
}

export default Container