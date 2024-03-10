import React from 'react'

import debounce from 'lodash.debounce'
import { MdClose } from 'react-icons/md'
import { useAppDispatch } from '../../redux/store'
import { setSearchFilter } from '../../redux/filter/slice'

import styles from './Search.module.scss'

export const Search: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()

  const [value, setValue] = React.useState<string>('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onSearch = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchFilter(str.toLowerCase().trim()))
    }, 700),
    []
  )

  const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onSearch(event.target.value)
  }

  const onClear = () => {
    setValue('')
    dispatch(setSearchFilter(''))
    inputRef.current?.focus()
  }

  return (
    <div className={styles.search}>
      <span className={styles.label}>Поиск по названию</span>
      <input
        className={styles.bar}
        ref={inputRef}
        value={value}
        onChange={onChangeValue}
        type="text"
        placeholder="Золотое кольцо с бриллиантом..."
        autoComplete="off"
        spellCheck="false"
      />
      {value && <MdClose className={styles.closer} onClick={onClear} />}
    </div>
  )
})
