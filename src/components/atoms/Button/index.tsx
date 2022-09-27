import Link from "next/link"
import { CommonProps } from "src/types/CommonProps"

interface Props extends CommonProps {
  href?: string
  target?: '_blank'
  query?: {
    [key: string]: string
  }
  children: React.ReactNode
}
const Button = ({href='', className = '', style, target, children, query}:Props) => {
  const btnClass = `inline-block relative bg-base-color-dark text-base-cont py-4 px-8 ${className}`;
  return (
    <>
      {!href && <button className={btnClass} style={style}>{children}</button>}
      {(href && target) && <a className={btnClass}  href={href} target={target} rel="noreferrer" style={style}>{children}</a>}
      {(href && !target) && <Link href={{pathname: href, query: query}} ><a className={btnClass} style={style}>{children}</a></Link>}
    </>
  )
}

export default Button