import PageWrapper from './PageWrapper'
import LinkBubbles from '../components/LinkBubbles'
import { Header } from '../components/Header'

type ContactPageProps = {}

export const ContactPage = ({}: ContactPageProps) => {
  return (
    <PageWrapper title={'Contact'}>
      <LinkBubbles />
    </PageWrapper>
  )
}
