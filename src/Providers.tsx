import { theme } from "@/theme"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ChakraProvider } from "@chakra-ui/react"

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
})

const Providers = (props: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>{props.children}</ChakraProvider>
    </QueryClientProvider>
  )
}

export default Providers
