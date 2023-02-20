import {
  Avatar,
  Button,
  Container,
  Input,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { testApi } from "@/services/sampleService"

const typographyMap: Record<number, string> = {
  0: "3xl",
  1: "2xl",
  2: "xl",
  3: "lg",
  4: "md",
  5: "sm",
  6: "xs",
}

function App() {
  const { data } = useQuery(["users"], () => testApi())
  return (
    <Container maxW="xl">
      <Stack mt={10} spacing={4} direction="row" align="center">
        <Button colorScheme="teal" size="xs">
          Button
        </Button>
        <Button colorScheme="teal" size="sm">
          Button
        </Button>
        <Button colorScheme="teal" size="md">
          Button
        </Button>
        <Button colorScheme="teal" size="lg">
          Button
        </Button>
      </Stack>
      <Stack my={5} direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="solid">
          Button
        </Button>
        <Button colorScheme="teal" variant="app-secondary">
          Button
        </Button>
        <Button colorScheme="teal" variant="app-primary">
          Button
        </Button>
        <Button colorScheme="teal" variant="link">
          Button
        </Button>
      </Stack>
      <Stack mb={5} spacing={3}>
        {data?.map(
          ({ name, id }: { name: string; id: number }, index: number) => (
            <Text key={id} fontSize={typographyMap[index] ?? "xs"}>
              {name}
            </Text>
          )
        )}
      </Stack>
      <Wrap>
        <WrapItem>
          <Avatar
            size="2xs"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </WrapItem>
        <WrapItem>
          <Avatar
            size="xs"
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />{" "}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="sm"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />{" "}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="md"
            name="Ryan Florence"
            src="https://bit.ly/ryan-florence"
          />{" "}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="lg"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />{" "}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="xl"
            name="Christian Nwamba"
            src="https://bit.ly/code-beast"
          />{" "}
        </WrapItem>
        <WrapItem>
          <Avatar
            size="2xl"
            name="Segun Adebayo"
            src="https://bit.ly/sage-adebayo"
          />{" "}
        </WrapItem>
      </Wrap>
      <Stack spacing={3}>
        <Input placeholder="extra small size" size="xs" />
        <Input placeholder="small size" size="sm" />
        <Input placeholder="medium size" size="md" />
        <Input placeholder="large size" size="lg" />
      </Stack>
    </Container>
  )
}

export default App
