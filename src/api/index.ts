import md5 from 'md5'

export const url = 'https://api.valantis.store:41000/'
export const password = 'Valantis'

const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '')

export const auth = {
  headers: { 'X-Auth': md5(`${password}_${timestamp}`) },
}
