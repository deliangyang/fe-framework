import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
})

instance.defaults.baseURL = '';
instance.defaults.timeout = 8000;

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const { data } = response
    return data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const get = (url: string) => {
  return instance.get(url)
}

export const post = (url: string, data?: any) => {
  return instance.post(url, data)
}

export const put = (url: string, data?: any) => {
  return instance.put(url, data)
}

export const del = (url: string) => {
  return instance.delete(url)
}