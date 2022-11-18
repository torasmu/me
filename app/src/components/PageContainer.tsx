import React from 'react'
import { Link } from 'react-router-dom'

const PageContainer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <div style={{ textAlign: 'right' }}>
      <Link to="/">x</Link>
    </div>
    {children}
  </>
)

export default PageContainer
