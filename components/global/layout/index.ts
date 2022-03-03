import { useContext } from 'react'
import Layout, { LayoutContext } from './Layout'

export function useLayoutContext() {
  return useContext(LayoutContext)
}

export default Layout
