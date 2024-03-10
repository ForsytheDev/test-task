import React from 'react'
import ContentLoader from 'react-content-loader'

export const Skeleton: React.FC = () => {
  return (
    <ContentLoader
      speed={1}
      width={280}
      height={190}
      title=""
      viewBox="0 0 280 190"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width="280" height="190" />
    </ContentLoader>
  )
}
