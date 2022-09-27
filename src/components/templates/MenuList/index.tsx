interface Props {
  menuItems: {
    id: string
    title: string
    text?: string
    price: string
  }[]
}

const MenuList = ({menuItems}: Props) => {
  return (
    <div>
      <ul className="list">
        {menuItems.map(item => (
          <li key={item.id} className="flex justify-between mb-6 border-b border-b-accent">
            <div>
              <div>{item.title}</div>
              {item.text && <div className="text-sm">{item.text}</div>}
            </div>
            <div>{item.price}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MenuList