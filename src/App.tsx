import { useQuery } from "@tanstack/react-query"
import { testApi } from "@/services/sampleService"
import { Box, Flex, Text } from "@radix-ui/themes"

function App() {
  const { data } = useQuery({ queryKey: ["users"], queryFn: () => testApi() })
  return (
    <Box>
      <Text size="4" weight="bold">
        Radix UI component
      </Text>
      <Flex gap="3" direction="column" className="my-5">
        {data?.map(({ name, id }: { name: string; id: number }) => (
          <Text key={id} size="2">
            {name}
          </Text>
        ))}
      </Flex>
      <p className="text-red-500 font-extrabold  mt-5 text-3xl">Tailwind</p>
      <div>Headwind</div>
    </Box>
  )
}

export default App
