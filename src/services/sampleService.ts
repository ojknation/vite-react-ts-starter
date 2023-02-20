import { IError } from "@/types"
import Api from "@/utils/api"
import handleApiError from "@/utils/handleApiError"

export const testApi = async (params?: Record<string, unknown>) => {
  try {
    const { data } = await Api.get("/users", params)
    return data
  } catch (e) {
    throw new Error(handleApiError(e as IError))
  }
}
