import { useState } from 'react'
import { ToggleHook } from 'typings/hooks'

export function useToggle(initState: boolean): ToggleHook {
  const [state, setState] = useState(initState)

  const toggler = (bool?: boolean) => {
    setState((currentState) => bool || !currentState)
  }

  return [state, toggler]
}
