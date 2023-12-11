import React, { ReactNode } from 'react'
import { Header } from '../components/Header'

interface PageWrapperProps {
  children: ReactNode
  title?: string
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {title && <Header>{title}</Header>}
      <div style={{ padding: '10px' }}>{children}</div>
    </div>
  )
}

export default PageWrapper
