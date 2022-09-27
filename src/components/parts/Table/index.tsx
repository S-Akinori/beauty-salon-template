import React from "react"
import { CommonChilden } from "src/types/CommonProps"

interface Props {
  children: React.ReactNode
}

const Table = ({children}: Props) => {
  return (
    <table><tbody>{children}</tbody></table>
  )
}

export default Table

interface TableRowPorps extends Props {
  border?: 'top' | 'right' | 'bottom' | 'left'
}

const variantStyle = {
  top: 'border-t border-main',
  right: 'border-r border-main',
  bottom: 'border-b border-main',
  left: 'border-l border-main',
}
export const TableRow = ({children, border}: TableRowPorps) => {
  const className = border ? variantStyle[border] : undefined
  return (
    <tr className={className}>{children}</tr>
  )
}

interface Props {
  children: React.ReactNode
  tag?: 'th' | 'td',
  nowrap?: boolean
}

export const TableCell = ({children, tag = 'td', nowrap = false}: Props) => {
  const Tag = tag
  return (
    <Tag className={`px-4 py-2 ${nowrap ? 'whitespace-nowrap' : ''}`}>{children}</Tag>
  )
}