export interface IError {
  response: {
    data: {
      message: string
      error: string
    }

    status: number
  }
  message: string
}
