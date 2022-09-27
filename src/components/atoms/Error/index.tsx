interface Props {
  children: React.ReactNode
}
const Error = ({children}: Props) => {
  return (
    <div className="text-red-400 text-sm">{children}</div>
  )
}

export default Error