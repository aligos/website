import { createContext } from 'use-context-selector'

export type CursorType = 'default' | 'focus'

interface AppContextInterface {
  cursorType: CursorType
  setCursorType: React.Dispatch<React.SetStateAction<CursorType>>
}

export default createContext<AppContextInterface>({} as AppContextInterface)
