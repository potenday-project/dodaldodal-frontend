export interface ServerResponse<T> {
  statusCode: number
  responseMessage: string
  data: T
}

export interface ServerError {
  success: boolean
  message: string
  err: Error
}
