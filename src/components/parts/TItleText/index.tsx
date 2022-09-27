import css from 'styled-jsx/css'

interface Props {
  children?: React.ReactNode
  title: string
}

const TopTitleText = ({title, children}: Props) => {
  return (
    <div>
      <style jsx>{titleStyle}</style>
      <h2 className="relative md:w-max pb-4 mb-8 whitespace-pre-wrap border-b-2 border-accent border-dashed">{title}</h2>
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}

const titleStyle = css`
  h2::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1.5rem;
    display: block;
    width: 25px;
    height: 41px;
    background: url('/images/icon_title.png') no-repeat center / cover;
    transform: rotate(90deg)
}`

export default TopTitleText