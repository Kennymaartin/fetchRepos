import {
  Box,
  Text,
  Spacer,
  Input,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  List,
  ListItem,
  Link as ChakraLink,
  Skeleton, SkeletonText
} from "@chakra-ui/react";
// import { Skeleton, SkeletonText } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Repos() {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const firstIndex = indexOfLastRecord - recordsPerPage;
  const records = apiData.slice(firstIndex, indexOfLastRecord);
  const noOfPages = Math.ceil(apiData.length / recordsPerPage);
  const numbers = [...Array(noOfPages + 1).keys()].slice(1);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("https://api.github.com/users/kennymaartin/repos")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);
  // console.log(useEffect());

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }

    // console.log("Previous Page");
  }

  function nextPage() {
    if (currentPage !== noOfPages) {
      setCurrentPage(currentPage + 1);
    }
    // console.log("Next Page");
  }

  function changeCurrentPage(e) {
    setCurrentPage(e);
  }

  return (
    <>
      <Box as="section" paddingTop={30}>
        <Box
          display={"flex"}
          flexDirection={{
            xl: "row",
            md: "row",
            lg: "row",
            sm: "column-reverse",
            base: "column-reverse",
          }}
          justifyContent={"center"}
          paddingBlock={4}
          paddingInline={2}
          gap={{
            xl: "none",
            md: "none",
            lg: "none",
            sm: "2",
            base: "2",
          }}
        >
          <SkeletonText isLoaded={!isLoading} noOfLines={1} spacing="4" skeletonHeight="6">
            <Text fontSize={"2xl"} as={"b"}>List of Repositories:</Text>
          </SkeletonText>

          <Spacer />
          <Input placeholder="Looking a repository?" w="500px" borderColor="#000"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
        </Box>

        <TableContainer
          // display={{ sm: "", xl: "block" }}
          borderRadius="20px"
          border="2px solid #000"
        >
          <Table variant={"striped"} colorScheme="brand.white">
            <Thead bg="#121414" height="70px" >
              <Tr>
                <Th color="white">Created Date</Th>
                <Th color="white">Repository Name</Th>
                <Th color="white">Language</Th>
                <Th color="white"></Th>
              </Tr>
            </Thead>


            <Tbody>
              {isLoading ? (
                // Show 5 skeleton rows (same number as `recordsPerPage`)
                [...Array(recordsPerPage)].map((_, index) => (
                  <Tr key={index}>
                    <Td><Skeleton height="20px" /></Td>
                    <Td><Skeleton height="20px" /></Td>
                    <Td><Skeleton height="20px" width="60%" /></Td>
                    <Td><Skeleton height="32px" width="80px" borderRadius="md" /></Td>
                  </Tr>
                ))
              ) : (
                records
                  .filter((repo) =>
                    search.toLowerCase() === ""
                      ? repo
                      : repo.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((repo) => (
                    <Tr key={repo.id}>
                      <Td>{repo.created_at ? new Date(repo.created_at).toLocaleDateString() : "N/A"}</Td>
                      <Td>{repo.name}</Td>
                      <Td>
                        <Button borderRadius={20} _hover={{ bg: '#897676' }}>
                          {repo.language}
                        </Button>
                      </Td>
                      <Td>
                        <Link to={`/repo/${repo.name}`}>
                          <Button colorScheme="teal">Details</Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))
              )}
            </Tbody>

          </Table>
        </TableContainer>

        <Box as="nav" paddingY={5}>
          <List
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={5}
          >
            <ListItem onClick={previousPage}>
              <ChakraLink>
                <Button
                  border={"2px solid #000"}
                  color="#100b00"
                  bg="transparent"
                  _hover={{
                    bg: "#121414",
                    color: "white",
                  }}
                >
                  Previous
                </Button>
              </ChakraLink>
            </ListItem>
            {numbers.map((number, index) => (
              <ListItem key={index}>
                <Button variant="primary">
                  <ChakraLink onClick={() => changeCurrentPage(number)}>
                    {number}
                  </ChakraLink>
                </Button>
              </ListItem>
            ))}
            <ListItem onClick={nextPage}>
              <Button
                border={"2px solid #000"}
                color="#121414"
                bg="transparent"
                _hover={{
                  bg: "#121414",
                  color: "white",
                }}
              >
                Next
              </Button>
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
}


export default Repos;