import styled from 'styled-components'
import { Bubble } from './Bubble'

type LinkBubbleProps = {
  href: string
  //   tooltip: string
  icon: JSX.Element
}

const LinkBubble = ({ href, icon }: LinkBubbleProps) => {
  return (
    <Bubble target={'_blank'} href={href} skew={true}>
      {icon}
    </Bubble>
  )
}

export default LinkBubble
