import styled from 'styled-components'

const Bubble = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;

  > svg {
    height: 50%;
    width: auto;
  }
`

type LinkBubbleProps = {
  href: string
  //   tooltip: string
  icon: JSX.Element
}

const LinkBubble = ({ href, icon }: LinkBubbleProps) => {
  return (
    <Bubble target={'_blank'} href={href}>
      {icon}
    </Bubble>
  )
}

export default LinkBubble
