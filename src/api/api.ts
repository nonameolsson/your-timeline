import axios, { AxiosResponse } from 'axios'
import { AuthResponse } from 'context'

const instance = axios.create({
  baseURL: 'http://localhost:1337',
  timeout: 15000,
})

const responseBody = (response: AxiosResponse) => response.data

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: Record<string, unknown>) => instance.post(url, body).then(responseBody),
  put: (url: string, body: Record<string, unknown>) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
}

export const Auth = {
  postLogin: (credentials: { identifier: string; password: string }): Promise<AuthResponse> =>
    requests.post('/auth/local', credentials),
}
