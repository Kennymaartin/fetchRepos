import { Box, Avatar, Input } from "@chakra-ui/react";
import "./App.css";
import "./components/repos";
import "./components/useFetch";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Box as="section" className="about">
        <Box className="about_me">
          <Box className="profile_image">
            <Avatar
              size="2xl"
              name="Kennymartin16"
              src="https://avatars.githubusercontent.com/u/145867885?s=400&u=7351cdf5f09780f4abe24901a0aefe6f42ed8860&v=4"
            />
          </Box>
          <Box as="p" w="500px" color="#b2a6a6">
            Hi, I’m Kenechukwu Martin Oguejiofor. I’m interested in fullstack
            development and everything that makes the web and mobile application
            works. I’m currently learning javascript. I’m looking to collaborate
            on open source projects. How to reach me kenechukwumartin4@gmail.com
            Pronouns: he/him <br></br> Fun fact: Crypto and loves to crack
            puzzles.
          </Box>
        </Box>

        <Input placeholder="Search for Repositories" w="700px" />
      </Box>

      <Box className="my_repos">
        <Box className='first_repo'>
        <Box className="kenny_repo" p="3rem">
          Kennymartin16
        </Box>
        <Box className="alt_repo" p="3rem">
          Second-Altschool-Assignment
        </Box>
        </Box>
        <Box className="second_repo">
          <Box className="profile_repo" p="3rem">
            Profile-Form
          </Box>
          <Box className="wp_repo" p="3rem">
            Wp-pusher
          </Box>
        </Box>

        <Box className="first_repo" p="3rem">
          Learning-git-v3
        </Box>
      </Box>
    </>
  );
}

export default App;
