import PageWrapper from './PageWrapper'
import LinkBubbles from '../components/LinkBubbles'

type ContactPageProps = {}

export const ContactPage = ({}: ContactPageProps) => {
  return (
    <PageWrapper>
      <div>Contact</div>
      <LinkBubbles />
    </PageWrapper>
  )
}
