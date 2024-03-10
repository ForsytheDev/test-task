import React from 'react'

import styles from './ProductCard.module.scss'

interface ProductCardProps {
  id: string
  product: string
  price: number
  brand: string | null
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, product, price, brand }) => {
  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <h5 className={styles.head}>{product}</h5>
        <div className={styles.description}>
          <p className={styles.signature}>{id}</p>
          <div className={styles.meta}>
            <span>{brand || 'Нет бренда'}</span>
            <span>{price} ₽</span>
          </div>
        </div>
      </div>
    </article>
  )
}
