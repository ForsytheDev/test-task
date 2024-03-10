import React from 'react'
import ReactPaginate from 'react-paginate'

import { useAppDispatch } from '../../redux/store'
import { setCurrentPage } from '../../redux/filter/slice'

import styles from './Pagination.module.scss'

export const Pagination: React.FC = React.memo(() => {
  const dispath = useAppDispatch()

  return (
    <div className={styles.pagination}>
      <ReactPaginate
        className={styles.bar}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => dispath(setCurrentPage(event.selected))}
        pageCount={10}
        renderOnZeroPageCount={null}
      />
    </div>
  )
})
