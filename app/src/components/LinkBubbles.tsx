import styled from 'styled-components'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdMailOutline, MdOutlineDocumentScanner } from 'react-icons/md'
import LinkBubble from './LinkBubble'

const BubbleBuddy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  height: 80px;
  margin-top: 15px;
`

const LinkBubbles = () => (
  <BubbleBuddy>
    <LinkBubble
      href="https://www.linkedin.com/in/tom-rasmussen-760918103/"
      icon={<BsLinkedin />}
    />
    <LinkBubble href="https://github.com/torasmu" icon={<BsGithub />} />
    <LinkBubble href="mailto:tomras12@gmail.com" icon={<MdMailOutline />} />
    <LinkBubble href="/resume.pdf" icon={<MdOutlineDocumentScanner />} />
  </BubbleBuddy>
)

export default LinkBubbles
