import styled from 'styled-components'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import LinkBubble from './LinkBubble'

const BubbleBuddy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 80px;
  margin-top: 15px;
  transform: rotate(-5deg) skew(-5deg);
`

const LinkBubbles = () => (
  <BubbleBuddy>
    {/* Dont want to make my email public */}
    {/* <LinkBubble href="mailto:tomras12@gmail.com" icon={<MdMailOutline />} /> */}
    <LinkBubble
      href="https://www.linkedin.com/in/tom-rasmussen-760918103/"
      icon={<BsLinkedin />}
    />
    <LinkBubble href="https://github.com/torasmu" icon={<BsGithub />} />
    <LinkBubble
      href="https://www.instagram.com/tom__rasmussen/"
      icon={<BsInstagram />}
    />
    {/* Resume seems a little presumptuous */}
    {/* <LinkBubble href="/resume.pdf" icon={<MdOutlineDocumentScanner />} /> */}
  </BubbleBuddy>
)

export default LinkBubbles
