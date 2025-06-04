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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, Outlet} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";




function Repos() {
  const [apiData, setApiData] = useState([]);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const firstIndex = indexOfLastRecord - recordsPerPage;
  const records = apiData.slice(firstIndex, indexOfLastRecord);
  const noOfPages = Math.ceil(apiData.length / recordsPerPage);
  const numbers = [...Array(noOfPages + 1).keys()].slice(1);

  useEffect(() => {
    fetch("https://api.github.com/users/kennymartin16/repos")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
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
          <Text fontSize={"2xl"} as={"b"}>
            List of Repositories:
          </Text>
          <Spacer />
          <Input placeholder="Looking a repository?" w="500px" borderColor="#000" />
        </Box>

        <TableContainer
          // display={{ sm: "", xl: "block" }}
          borderRadius="20px"
          border="2px solid #000"
        >
          <Table variant={"striped"} colorScheme="brand.white">
            <Thead bg="#121414" height="70px">
              <Tr>
                <Th color="white">Created Date</Th>
                <Th color="white">Repository Name</Th>
                <Th color="white">Language</Th>
                <Th color="black"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {records
                .filter((repo) => {
                  return search.toLowerCase() === ""
                    ? repo
                    : repo.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((repo) => {
                  return (
                    <Tr key={repo.id}>
                      <Td>{repo.created_at}</Td>
                      <Td>{repo.name}</Td>
                      <Td>
                        <Button
                          borderRadius={20}

                          hover={{
                            bg: 'green',
                          }}
                        >
                          {repo.language}
                        </Button>
                      </Td>
                      <Td>
                        <Link to={`/Repo/${repo.name}`}>
                          <Button variant="primary">Details</Button>
                        </Link>
                      </Td>
                    </Tr>
                  );
                })}
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
};


export default Repos;