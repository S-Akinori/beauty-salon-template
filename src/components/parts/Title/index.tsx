interface Props {
  children: React.ReactNode
  beforeColor?: 'base' | 'main' | 'accent'
}

const Title = ({children, beforeColor = 'accent'}: Props) => {
  let beforeClass = 'beforeObject before:-top-4 before:w-8 before:h-1 md:before:top-1/2 md:before:left-0 '
  if(beforeColor == 'base') {
    beforeClass += 'before:bg-base'
  } else if(beforeColor == 'main') {
    beforeClass += 'before:bg-main'
  } else {
    beforeClass += 'before:bg-accent'
  }
  return (
    <div className={`md:pl-12 ${beforeClass}`}>{children}</div>
  )
}

export default Title;