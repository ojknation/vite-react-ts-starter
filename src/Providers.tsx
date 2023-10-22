import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { Theme } from "@radix-ui/themes"

type Props = {
  children: React.ReactNode
}

const reactQueryConfig = {
  refetchOnWindowFocus: false,
  retry: true,
}

const mutationQueryConfig = {
  refetchOnWindowFocus: false,
  retry: false,
}

const defaultOptions = {
  queries: reactQueryConfig,
  mutations: mutationQueryConfig,
}

const queryClient = new QueryClient({
  defaultOptions,
  queryCache: new QueryCache({
    onError: (err, query) => {
      if (query?.meta?.errorMessage) {
        // handle error appropriately, e.g. show a toast notification
      }
    },
  }),
})

const Providers = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>{props.children}</Theme>
    </QueryClientProvider>
  )
}

export default Providers
