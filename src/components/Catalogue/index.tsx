import React from 'react'

import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../redux/store'
import { getItems } from '../../redux/items/actions'
import { StatusEnum } from '../../redux/items/types'
import { getItemsSelector } from '../../redux/items/selectors'
import { getFilterSelector } from '../../redux/filter/selectors'

import { ProductCard } from '../ProductCard'
import { Skeleton } from '../ProductCard/Skeleton'

import styles from './Catalogue.module.scss'

export const Catalogue: React.FC = () => {
  const dispatch = useAppDispatch()
  const { search, currentPage } = useSelector(getFilterSelector)
  const { items, status } = useSelector(getItemsSelector)

  const onFetch = async () => {
    window.scrollTo(0, 0)
    dispatch(getItems({ search, currentPage }))
  }

  React.useEffect(() => {
    onFetch()
  }, [search, currentPage])

  React.useEffect(() => {
    if (status === StatusEnum.ERROR) {
      setTimeout(() => {
        onFetch()
      }, 1000)
    }
  }, [status])

  return (
    <div className={styles.container}>
      {status === StatusEnum.SUCCESS
        ? items.map((item) => <ProductCard key={item.id} {...item} />)
        : [...new Array(12)].map((_, index) => <Skeleton key={index} />)}
    </div>
  )
}
