import styled from 'styled-components'

const Bubble = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #1220ba;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #1220ba;
  transform: rotate(5deg) skew(5deg);

  :hover {
    color: #1812ff;
    border-color: #1812ff;
  }

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
