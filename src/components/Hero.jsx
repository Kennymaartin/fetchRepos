import "../App.css";
import { Box, Avatar, Text } from "@chakra-ui/react";

const Hero = () => {
    return (
        <>
            <Box bg="#121414">

                <Box as="section" className="about" m='0 auto' maxWidth='1000px' >
                    <Box className="about_me" display="flex" flexDirection={{ base: 'column', md: 'row' }} gap={{base: '2rem', md: '15rem'}} py="5rem" px="2rem" alignItems="center"
                        textAlign="center" justifyContent={{base: "center", md: "between"}}>
                        <Box className="profile_image">
                            <Avatar
                                size="2xl"
                                name="Kennymaartin"
                                src="https://avatars.githubusercontent.com/u/145867885?s=400&u=7351cdf5f09780f4abe24901a0aefe6f42ed8860&v=4"
                            />
                        </Box>
                        <Text as="b" maxWidth="400px" color="#b2a6a6" fontSize={['12px', '16px', '20px']}>
                            Hi, I&apos;m KennyMartin. I&apos;m interested in fullstack
                            development and everything that makes the web and mobile application
                            works. I&apos;m currently exploring Vue, Angular and NextJs I&apos;m looking to collaborate
                            on open source projects. Interests: Crypto and loves to crack puzzles. <br></br>How to reach me kenechukwumartin4@gmail.com

                        </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Hero;