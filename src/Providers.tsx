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

const defaultOptions = {
  queries: reactQueryConfig,
  mutations: reactQueryConfig,
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
