import { Box, Avatar, extendTheme } from "@chakra-ui/react";
import "./App.css";
import Repos from "./components/repos";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Box bg="#121414">

        <Box as="section" className="about" m='0 auto' maxWidth='1000px' >
          <Box className="about_me" display="flex" gap="15rem" py="5rem">
            <Box className="profile_image">
              <Avatar
                size="2xl"
                name="Kennymartin16"
                src="https://avatars.githubusercontent.com/u/145867885?s=400&u=7351cdf5f09780f4abe24901a0aefe6f42ed8860&v=4"
              />
            </Box>
            <Box as="b" maxWidthw="400px" color="#b2a6a6">
              Hi, I’m Kenechukwu Martin Oguejiofor. I’m interested in fullstack
              development and everything that makes the web and mobile application
              works. I’m currently learning javascript and trying to cope with React. I’m looking to collaborate
              on open source projects. Interests: Crypto and loves to crack puzzles. <br></br>How to reach me kenechukwumartin4@gmail.com
               
            </Box>
          </Box>
        </Box>
      </Box>

      <Repos />


    </>
  );
}

export default App;
