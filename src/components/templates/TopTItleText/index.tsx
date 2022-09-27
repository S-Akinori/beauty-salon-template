import Title from "../../parts/Title"

interface Props {
  children?: React.ReactNode
  en?: string
  title: string
  beforeColor?:  'base' | 'main' | 'accent'
  row?: boolean
}

const TopTitleText = ({en, title, children, beforeColor = 'accent', row = false}: Props) => {
  const wrappwerClass = row ? 'md:flex' : undefined
  return (
    <div className={wrappwerClass}>
      <div className={row ? 'shrink-0' : ''}>
        {en && <div className="mb-8 text-2xl"><Title beforeColor={beforeColor}>{en}</Title></div>}
        <h2 className={`mb-6 whitespace-pre-wrap ${en ? 'md:pl-10' : ''}`}>{title}</h2>
      </div>
      <div className={en ? 'md:pl-10' : ''}>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default TopTitleText