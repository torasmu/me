import * as React from 'react'
import PageWrapper from './PageWrapper'
import SkillBar from '../components/SkillBar'

type SkillsPageProps = {}

export const SkillsPage = ({}: SkillsPageProps) => {
  return (
    <PageWrapper>
      <div>Skills</div>
      <SkillBar label="React" rating={8} />
      <SkillBar label="Backend" rating={9} />
      <SkillBar label="Infrastructure" rating={7} />
      <SkillBar label="Project management" rating={7} />
      <SkillBar label="Machine learning" rating={6} />
    </PageWrapper>
  )
}
