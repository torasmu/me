import * as React from 'react'
import PageWrapper from './PageWrapper'
import SkillBar from '../components/SkillBar'

type SkillsPageProps = {}

export const SkillsPage = ({}: SkillsPageProps) => {
  return (
    <PageWrapper title={'Skills'}>
      <SkillBar label="Backend development" rating={9} />
      <SkillBar label="React" rating={8} />
      <SkillBar label="Databases (SQL, NoSQL)" rating={8} />
      <SkillBar label="Infrastructure / DevOps" rating={7} />
      <SkillBar label="Project management" rating={6} />
      <SkillBar label="Team leadership" rating={6} />
      <SkillBar label="Machine learning / AI" rating={6} />
    </PageWrapper>
  )
}
