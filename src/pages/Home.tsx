import React from 'react'

import { Search } from '../components/Search'

import { Catalogue } from '../components/Catalogue'
import { Pagination } from '../components/Pagination'

export const Home: React.FC = () => {
  return (
    <>
      <div className="controls">
        <Search />
      </div>
      <Catalogue />
      <Pagination />
    </>
  )
}
