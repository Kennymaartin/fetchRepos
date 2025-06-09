import { Link, useParams } from 'react-router-dom';
import useFetch from '../components/useFetch';
import { Center, Card, CardHeader, CardBody, Box, Heading, Text, Stack, StackDivider, Skeleton } from '@chakra-ui/react'
import { HiArrowNarrowLeft } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";


const RepoDetails = () => {
  const { repoName } = useParams();
  const { data: repo, isPending, error } = useFetch(`https://api.github.com/repos/kennymaartin/${repoName}`)
  console.log(repo)

  return (
    <>
      <Link to="/">
        <Box as='button' display="flex" gap="0.4rem" alignItems="center" margin='1rem' padding='0.5rem'
          _hover={{
            gap: "0.7rem",
            // bg: '#897676',
            // border: "2px solid #000",
            // rounded: "xl",
            textDecoration: "underline",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <HiArrowNarrowLeft />
          <Text className=''>Back</Text>
        </Box>
      </Link>
      <Card>
        {error && <Box color="red.500" p={4}> {error}</Box>}
        {/* {isPending && <Spinner size="lg" color="teal.500" />} */}

        {repo && (
          <div className='repo'>
            <Skeleton isLoaded={!isPending} p={6}>
              <CardHeader fontSize={"2xl"} as={"b"}>
                <Heading size='lg'> {repo.name} </Heading>
              </CardHeader>
            </Skeleton>
            <Skeleton isLoaded={!isPending} p={6}>
              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Description:
                    </Heading>
                    <Text pt='2' fontSize='sm' overflowWrap="break-word">
                      {repo.description || "No description available."}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Created at :
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {repo.created_at.slice(0, 10)}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Last Update :
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {repo.updated_at.slice(0, 10)}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size='xs' textTransform='uppercase'>
                      Size :
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                      {repo.size} kb
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Skeleton>

          </div>
        )}
        <Center as='button' margin="2rem"
          _hover={{
            textDecoration: "underline",
            gap: "0.2rem",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Link to={repo.html_url} target="_blank" rel="noopener noreferrer">
            <Text>Visit Github</Text>
          </Link>
          <BsArrowUpRight />
        </Center>
      </Card>
    </>
  )
}

export default RepoDetails;