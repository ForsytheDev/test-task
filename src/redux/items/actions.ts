import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import { auth, url } from '../../api'

import { ItemType, ItemParamsType } from './types'

const itemsPerPage = 50

export const getItems = createAsyncThunk<ItemType[], ItemParamsType>(
  'items/getItems',
  async (params) => {
    const { search, currentPage } = params

    let request

    if (search) {
      request = {
        action: 'filter',
        params: {
          product: search,
          offset: currentPage * itemsPerPage,
          limit: itemsPerPage,
        },
      }
    } else {
      request = {
        action: 'get_ids',
        params: { offset: currentPage * itemsPerPage, limit: itemsPerPage },
      }
    }

    const { data } = await axios.post(url, request, auth)
    const ids = Array.from(new Set(data.result))

    const items = await axios.post(
      url,
      {
        action: 'get_items',
        params: { ids },
      },
      auth
    )

    const result = items.data.result.filter(
      (item: ItemType, index: number, array: ItemType[]) =>
        array.findIndex((object) => object.id === item.id) === index
    )

    return result
  }
)
