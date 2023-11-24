import React, { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <div style={{ padding: '10px' }}>{children}</div>
}

export default PageWrapper
