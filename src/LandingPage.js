import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  useColorModeValue,
  Flex,
  Center,
  Badge,
  chakra,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
const LandingPage = () => {
  const bg = '#1233fa';
  const bgbg = 'gray.800';

  // const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

  console.log('bg', bg);
  return (
    <Flex
      backgroundImage={process.env.PUBLIC_URL + '/dither-crop.png'}
      bgPos="top left 0px"
      bgSize={['240px', '360px', '480px']}
      backgroundRepeat="no-repeat"
      w="100%"
      minH="100vh"
      direction="column"
      bgColor={bgbg}
      minW="360px"
    >
      {/* <Flex w="100%" h="22px" placeContent="flex-end">
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex> */}
      <Center>
        <VStack
          spacing={8}
          flexBasis={'1px'}
          minW="320px"
          maxW="1337px"
          flexGrow={1}
          pt="33px"
          ml={['24px', '280px', '360px']}
          mr={['24px', '70px', '360px']}
          // bgColor="gray.500"
          // minH="200vh"
          pb="420px"
        >
          <Box
            bgColor={bg}
            py={2}
            px={6}
            boxShadow="2xl"
            alignSelf={['flex-end', 'flex-start']}
            borderRadius="md"
            bgGradient={('#1233fa', 'gray800')}
            mb={['240px', '42px', null]}
          >
            <Text
              zIndex={100}
              fontSize={['26px', '24px', '36px']}
              color="gray.400"
            >
              Tim Pechersky
            </Text>
          </Box>
          <VStack id="findme" w="100%" spacing={16}>
            <VStack spacing={6}>
              <Badge
                variant="solid"
                colorScheme="blue"
                color="gray.400"
                fontSize="24px"
                alignSelf="flex-start"
              >
                In t(r)o
              </Badge>
              <chakra.span textAlign="justify" fontSize="18px">
                <Text pt={1}>
                  I believe everything is Dao, everyone has it's part in this
                  world.
                </Text>
                <Text pt={1}>
                  We, Humans, are here for purpose - to take care about life on
                  Earth.{' '}
                </Text>{' '}
                <Text pt={1}>
                  We are One with Universe and trough our natural curiosity and
                  play we are slowly learning this fact, as any other living
                  creature does.
                </Text>{' '}
                <Text pt={4}>
                  I love brain breeze, cup of tea, mindfulness and meeting new
                  exciting people. So, please, - get in touch!
                </Text>{' '}
              </chakra.span>
            </VStack>
            <VStack spacing={6} w="100%">
              <Badge
                variant="solid"
                colorScheme="blue"
                fontSize="24px"
                color="gray.400"
                alignSelf="flex-start"
              >
                Present
              </Badge>
              <chakra.span textAlign="justify" fontSize="18px" w="100%">
                <Text pt={1}>
                  Exploring digital spaces of blockchain applications. Learning.
                  Enjoying nature. Moving towards my play.
                </Text>
              </chakra.span>
            </VStack>
            <VStack spacing={6}>
              <Badge
                variant="solid"
                colorScheme="blue"
                fontSize="24px"
                color="gray.400"
                alignSelf="flex-start"
              >
                Past
              </Badge>
              <chakra.span textAlign="justify" fontSize="18px">
                <Text pt={4}>
                  I've started my creative path from zero. Back in 2008 I got
                  money to buy my first soldering iron by writing course works
                  for other students in University.
                </Text>
                <Text pt={6}>
                  Since then I've participated in many various projects of
                  different industries and roles.
                </Text>
                <Text pt={6}>Here is some in reverse chronological order:</Text>
                <UnorderedList pl={2}>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        <Link href="www.moonstream.to">
                          Moonstream
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        is an open source tool for analyzing and performing
                        actions based on analytics at <b>Blockchain</b>. Working
                        on Web3 technologies is crucial as I believe this
                        together with Quantum technology - is the future.
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        I've started working with things I've always dreamed to
                        - Open Source. Together with{' '}
                        <Link href="https://www.linkedin.com/in/neeraj-kashyap-784035b8">
                          Neeraj Kashyap
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        and few other fellows we started working on web project{' '}
                        <Link href="https://bugout.dev">
                          Bugout - developer tools analytics
                          <ExternalLinkIcon mx="2px" />
                        </Link>
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        Since recently I got more excited by programming. My
                        previous background was mostly Electronics/Radio
                        engineering and I was very excited to jump in to
                        software development as something yet unknown.
                      </Text>
                      <Text pt={2}>
                        I started with simple web development, and then kept on
                        with playing around with Machine Learning and Data
                        Science projects
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        Its worth to particularly mention{' '}
                        <Link href="https://www.ericasynths.lv/shop/standalone-instruments-1/zen-delay/">
                          Zen Delay <ExternalLinkIcon mx="2px" />
                        </Link>
                        , since this is a device which I designed almost
                        completely on my own - from hardware, schematics, down
                        to writing C code. This work is devoted to my love and
                        passion about music, and audio processing
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        I've been combining position of CEO with Head of R&D at{' '}
                        <Link href="https://teknologic.lv" whiteSpace="nowrap">
                          SIA Teknologic <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        for several years.
                      </Text>{' '}
                      <Text pt={2}>
                        This was great experience, we've build many devices for
                        companies such as{' '}
                        <Link href="https://coastalamusements.com/">
                          Coastal Amusements <ExternalLinkIcon mx="2px" />
                        </Link>
                        ,{' '}
                        <Link href="https://ericasynths.lv/">
                          Erica Synths
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        ,
                        <Link href="https://barix.com/">
                          Barix
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        ,
                        <Link href="https://leclanche.com/">
                          Leclanche
                          <ExternalLinkIcon mx="2px" />
                        </Link>
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        I was Product Owner at{' '}
                        <Link href="https://uavfactory.com" whiteSpace="nowrap">
                          UAV Factory <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        where I brought to live their Tracking Antenna project,
                        set up documentation, team spirit, as well as got some
                        RF parts of their system operational
                      </Text>
                    </chakra.span>
                  </ListItem>

                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        I was doing Radio Frequency engineering at{' '}
                        <Link href="https://saftehnika.com" whiteSpace="nowrap">
                          SAF Tehnika <ExternalLinkIcon mx="2px" />
                        </Link>
                      </Text>{' '}
                      <Text pt={1}>
                        That was great place, by many means best I've worked so
                        far. I was working on top edge, state of art, you name
                        it - technology of future. 5G, IoT. I was designing
                        microwave filters, antennas, writing patent
                        applications, doing proper {'R&D'} work with reporting
                        directly to CTO
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <Text>
                      I graduated Master Studies in Riga Technical University
                      with great joy. My favorite subject back then -
                      Electrodynamics, defined my thesis and first role.
                    </Text>
                  </ListItem>
                </UnorderedList>
              </chakra.span>
            </VStack>
            <VStack spacing={6}>
              <Badge
                variant="solid"
                colorScheme="teal"
                color="gray.400"
                fontSize="24px"
                alignSelf="flex-start"
              >
                V1Sion
              </Badge>
              <chakra.span textAlign="justify" fontSize="18px">
                <Text pt={4}>
                  All living creatures are programmed by their very being to
                  fight against entropy. Ants are digging in to earth to get air
                  inside soil, and that effectively reduces the process of
                  entry, which in geology appears as concentration of heavy
                  materials in earth center.
                </Text>{' '}
                <Text pt={4}>
                  Trees are pulling carbon out from air and soil to structure it
                  against entropy
                </Text>{' '}
                <Text pt={4}>
                  In that manner humans mining and pumping oil from ground are
                  serving same purpose.
                </Text>{' '}
                <Text pt={4}>
                  What makes a difference for us is our intellectual
                  capabilities. We are able to cause ecological disaster, but we
                  are also only ones who are able to stop one!
                </Text>{' '}
                <Text pt={4}>
                  We are in our way of understanding this scale. At the and
                  there is only Dao. Dao is eternal but it has no meaning. Only
                  when we fully understand Dao, we can reach our true
                  capabilities.
                </Text>{' '}
                <Text pt={4}>To succeed we have to solve several issues:</Text>{' '}
                <UnorderedList>
                  <ListItem pt={3}>
                    <Text>
                      Endless openness - There should be no place for hiding
                      lies. It never helps. Lies only multiply itself as tumor
                      does. Financial systems, elections, Scientific researches
                      - all must be fully transparent.
                    </Text>
                  </ListItem>
                  <ListItem pt={3}>
                    <Text>
                      Decentralization - there should be no one authority above
                      rest. Stability should be common concern rather than
                      concern of one. Only sharing responsibility we can grow.
                    </Text>
                  </ListItem>
                  <ListItem pt={3}>
                    <Text>
                      Redefining cities to stop pollution - Taking step back and
                      reconsidering how we live is necessary! Anthropologists
                      know that every archeological human settlement can be
                      studies by garbage pile next to it.
                    </Text>
                    <Text pt={1}>
                      Now days we already start polluting space around
                      geostationary orbit without even realizing it. Redefining
                      our city and intercity communication is essential to
                      reduce waste, packaging and transportation expenses.
                    </Text>
                  </ListItem>
                  <ListItem pt={3}>
                    <Text>
                      Resource based economy - we should reach toward counting
                      our assets in resources Planet has, not rather resources
                      we can afford to buy
                    </Text>
                  </ListItem>
                  <ListItem pt={3}>
                    <Text>
                      Universal income - we should work not because we have to,
                      rather we want to work because that is joy of our life
                    </Text>
                  </ListItem>
                  <ListItem pt={3}>
                    <Text>
                      Respect the nature - we should limit our technological
                      society to new refined cities that are interconnected by
                      closed loop transportation systems. Step out from these
                      cities should be very sharp transaction from civilization
                      down to lone of Mother nature
                    </Text>
                  </ListItem>
                </UnorderedList>
              </chakra.span>
            </VStack>
            <VStack spacing={6} w="100%">
              <Badge
                variant="solid"
                colorScheme="purple"
                fontSize="24px"
                color="gray.400"
                alignSelf="flex-start"
              >
                Presence
              </Badge>
              <chakra.span textAlign="justify" fontSize="18px" w="100%">
                <Text py={1}>You can look me up as @peersky :</Text>
                <Link display="block" href="https://github.com/peersky">
                  Github <ExternalLinkIcon mx="2px" />
                </Link>
                <Link display="block" href="https://linkedin.com/in/peersky">
                  Linkedin <ExternalLinkIcon mx="2px" />
                </Link>
              </chakra.span>
            </VStack>
            <VStack spacing={6} w="100%">
              <Badge
                variant="solid"
                colorScheme="purple"
                fontSize="24px"
                color="gray.400"
                alignSelf="flex-start"
              >
                Contact
              </Badge>
              <chakra.span textAlign="justify" fontSize="18px" w="100%">
                {`Email -----------> `}t [at] peersky [dot] xyz
                <Link display="block" href="https://github.com/peersky">
                  Github <ExternalLinkIcon mx="2px" />
                </Link>
                <Link display="block" href="https://linkedin.com/in/peersky">
                  Linkedin <ExternalLinkIcon mx="2px" />
                </Link>
              </chakra.span>
            </VStack>
          </VStack>
        </VStack>
      </Center>
      <Text p={4}>&copy; Tim Pechersky 2021 </Text>
    </Flex>
  );
};

export default LandingPage;
