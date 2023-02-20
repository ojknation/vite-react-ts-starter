import { IError } from "@/types/error"
// This file contains configuration for handling error states from API after a request fails.

const handleApiError = (error: IError) => {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line
    console.warn(
      "[Axios Error]",
      error,
      error?.response?.data?.message,
      error?.message
    )
  }

  if (!error.response) return error.message || "Something went wrong"

  const { response } = error
  const { data } = response

  switch (response.status) {
    case 400:
      // This is dependent on how 400 error was handled on the server, so this might be refactored.
      return (
        (data.error && JSON.stringify(data.error)) ||
        data.message ||
        "Something went wrong"
      )
    case 404:
      return data.message || "Resource not found"
    case 401:
      return data.message || "Unauthorized"
    case 409:
      return "A duplicate already eists"
    default:
      return "Something went wrong"
  }
}

export default handleApiError
