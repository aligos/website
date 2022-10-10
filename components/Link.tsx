import NextLink, { LinkProps } from 'next/link'
import { useContextSelector } from 'use-context-selector'
import AppContext from 'context/appContext'

interface Props extends LinkProps {
  children: React.ReactNode
}
const Link: React.FC<Props> = ({ children, ...props }) => {
  const setCursorType = useContextSelector(AppContext, (s) => s.setCursorType)
  return (
    <NextLink {...props}>
      <span
        className="cursor-pointer"
        onMouseEnter={() => setCursorType('focus')}
        onMouseLeave={() => setCursorType('default')}>
        {children}
      </span>
    </NextLink>
  )
}

export default Link
