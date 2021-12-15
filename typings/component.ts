export interface IItem {
  children: React.ReactNode
  Icon?: React.ElementType
  disabled?: boolean
  type: 'button' | 'link'
  href?: string
  onClick?: () => any
  danger?: boolean
}
