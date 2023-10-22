import { Box, Flex, Text } from "@radix-ui/themes"
import { useQuery } from "@tanstack/react-query"
import { testApi } from "@/services/sampleService"

function App() {
  const { data } = useQuery({ queryKey: ["users"], queryFn: () => testApi() })
  return (
    <Box className="w-[100%] justify-center items-center flex flex-col h-[100vh]">
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
      <p className="text-red-500 font-extrabold  mt-5 text-3xl">
        Tailwind styling
      </p>
    </Box>
  )
}

export default App
