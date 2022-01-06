import React from 'react';
import {
  Box,
  Text,
  Link,
  VStack,
  Flex,
  Center,
  Badge,
  chakra,
  UnorderedList,
  ListItem,
  Image,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
const LandingPage = () => {
  const bg = '#1233fa';
  const bgbg = 'gray.800';

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
              fontSize={['18px', '24px', '36px']}
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
                <Text pt={4}>
                  Bold and curious. Kind and playful. Dreamer and doer.
                </Text>
                <Text pt={4}>
                  Visionary for world of balance between science, sustainable
                  technology, life, love and wilderness.
                </Text>
                <Text pt={4}>
                  I believe life is a state, where each of us enters to live
                  trough our specific, unique experience.
                </Text>
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
                  Becoming mature web3 expert. Enjoying nature of Canary
                  islands. Finding myself in my own flow.
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
                  Ive been always fascinated by science and technology,
                  philosophy and adventures. Even though my childhood was not
                  easy, I got trough with my natural curiosity and books I had
                  around me at that time.
                  {/* <br /> My first technical project was audio amplifier
                  (exploded at my table back at 2008). In order to buy materials for it
                  and soldering tools I had to spent christmas writing course works for
                  other students. */}
                </Text>

                <Text pt={6}>
                  Here are some things I've done in reverse chronological order:
                </Text>
                <UnorderedList pl={2}>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        <Link href="www.moonstream.to" color="orange">
                          Moonstream
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        - an open source blockchain developer tool for web3.
                        Moonstream helps to understand how exactly people are
                        using your smart contracts, and provides infrastructure
                        around to ease deployment and control over web3
                        applications
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        <Link href="www.bugout.dev" color="orange">
                          Bugout
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        - developer tools analytics. It's purpose is to let
                        developers easily understand their user issues.
                      </Text>
                    </chakra.span>
                  </ListItem>

                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        <Link
                          href="https://www.ericasynths.lv/shop/standalone-instruments-1/zen-delay/"
                          color="orange"
                        >
                          Zen Delay
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        - This work is devoted to my love and passion about
                        music, and audio processing. <br />
                        Firmware contains multiple interpolation effects, low
                        latency real time data processing. Hardware consists of
                        two printed boards: DSP board (Cortex M4, 256 MB SDRAM,
                        HI-FI CoDecs). Analog board (Tube drive, analog VCF
                        filters with resonance control). <br />
                        In this project I've done almost all engineering work -
                        schematic design, layout, board bring up, debug.
                        Firmware (written in pure C) including peripheral
                        drivers, DSP algorithms etc.
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        <Link
                          href="https://teknologic.lv"
                          whiteSpace="nowrap"
                          color="orange"
                        >
                          SIA Teknologic <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        - I've been combining position of CEO with Head of{' '}
                        {'R&D'}
                      </Text>{' '}
                      <Text pt={2}>
                        We've designed many decent devices as ODM for companies
                        amongst which were:{` `}
                        <Link
                          href="https://coastalamusements.com/"
                          color="teal"
                          isExternal
                        >
                          Coastal Amusements <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        <Link
                          href="https://ericasynths.lv/"
                          color="teal"
                          isExternal
                        >
                          Erica Synths
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        <Link href="https://barix.com/" color="teal" isExternal>
                          Barix
                          <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        <Link
                          href="https://leclanche.com/"
                          color="teal"
                          isExternal
                        >
                          Leclanche
                          <ExternalLinkIcon mx="2px" />
                        </Link>
                        <Text pt={2}>
                          Company concept was to make a design studio in Latvia
                          and provide ODM service. I was managing client
                          relationships, managed fully company, projects,
                          roadmaps and delivery. Outsourced people to get things
                          done and of course had hands on myself.{' '}
                        </Text>
                        <Text pt={2}>
                          It was quite busy position for me. and when covid and
                          chip shortages impacted the industry I was happy to
                          put in pause to reconsider the business consept, and
                          went in to software development
                        </Text>
                      </Text>
                    </chakra.span>
                  </ListItem>
                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        <Link
                          href="https://uavfactory.com"
                          whiteSpace="nowrap"
                          color="orange"
                          isExternal
                        >
                          UAV Factory <ExternalLinkIcon mx="2px" />
                        </Link>{' '}
                        - Product Owner role where I restarted stale projects,
                        set up documentation, team spirit, as well as got some
                        hands in system parts which only I knew how to fix (RF)
                      </Text>
                    </chakra.span>
                  </ListItem>

                  <ListItem pt={3}>
                    <chakra.span>
                      <Text>
                        <Link
                          href="https://saftehnika.com"
                          whiteSpace="nowrap"
                          isExternal
                          color="orange"
                        >
                          SAF Tehnika <ExternalLinkIcon mx="2px" />
                        </Link>
                        - RF engineer in {`R&D`} department.
                      </Text>{' '}
                      <Text pt={1}>
                        I was working on state of art technologies. 5G, IoT. I
                        was designing microwave filters, antennas, writing
                        patent applications. Often I was directly reporting to
                        CTO.
                        <br />I learned much more than engineering or {`R&D`}{' '}
                        here. Scaling manufacturing issues, organizing
                        documentation and corporate culture. Importance of
                        ISO9001. Working in large collective and organizing my
                        own process within larger structure.
                      </Text>
                    </chakra.span>
                  </ListItem>
                </UnorderedList>
              </chakra.span>
            </VStack>
            <VStack spacing={6}>
              <Badge
                variant="solid"
                colorScheme="red"
                color="gray.400"
                fontSize="24px"
                alignSelf="flex-start"
              >
                Education
              </Badge>
              <chakra.span textAlign="justify" fontSize="18px">
                <Text>
                  MSc in Electronics engineering. Graduated in Riga Technical
                  university in 2012. <br />
                  Favorite subjects - Signal processing, Electrodynamics.
                </Text>
              </chakra.span>
            </VStack>
            <VStack spacing={6}>
              <Badge
                variant="solid"
                colorScheme="red"
                color="gray.400"
                fontSize="24px"
                alignSelf="flex-start"
              >
                Patents
              </Badge>
              <chakra.span textAlign="justify" fontSize="16px">
                <Link
                  href="https://www.lrpv.gov.lv/sites/lrpv/files/media_file/201408201.pdf"
                  // whiteSpace="nowrap"
                  isExternal
                  color="orange"
                >
                  ZEMAS STARPFREKVENCES SPEKTRA ANALIZATORS LV 14855 B · Issued
                  Aug 20, 2014 <ExternalLinkIcon mx="2px" />
                </Link>
                <br />
                <br />
                <Link
                  pt={2}
                  href="https://www.lrpv.gov.lv/sites/lrpv/files/media_file/201405201.pdf"
                  // whiteSpace="nowrap"
                  isExternal
                  color="orange"
                >
                  SPECTRUM ANALYZER OF ULTRA-LOW INTERMEDIATE FREQUENCY LV 14855
                  A · Issued May 20, 2014
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </chakra.span>
            </VStack>
            <VStack spacing={6}>
              <Badge
                variant="solid"
                colorScheme="red"
                color="gray.400"
                fontSize="24px"
                alignSelf="flex-start"
              >
                Papers
              </Badge>
              <chakra.span textAlign="justify" fontSize="16px">
                <Link
                  href="https://github.com/bugout-dev/moonstream/blob/main/datasets/nfts/papers/ethereum-nfts.pdf"
                  // whiteSpace="nowrap"
                  isExternal
                  color="orange"
                >
                  An analysis of 7,020,950 NFT transactions on the Ethereum
                  blockchain - October 22, 2021
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </chakra.span>
            </VStack>

            <VStack spacing={6} w="100%">
              <Badge
                variant="solid"
                colorScheme="teal"
                color="gray.400"
                fontSize="24px"
                alignSelf="flex-start"
              >
                During free time
              </Badge>
              <chakra.span textAlign="justify" fontSize="16px" w="100%">
                <Text pt={4}>
                  For many years now I am practicing flow arts, such as poi,
                  contact staff, levi stick, juggling. Such movement discipline
                  connects my body and my mind in one.
                </Text>{' '}
                <Text pt={4}>
                  Im passionate about music! I can play a little percussions,
                  pentatonic flute, slowly approaching guitar.
                </Text>{' '}
                <Text pt={4}>
                  Also find it very interesting to produce music in digital form
                  via sound synthesis and sampling. I am traveling around with
                  portable recorder which I use to sample unique sounds and use
                  it for beat making.
                </Text>{' '}
                <Text pt={4}>
                  I love nature and spending time in it. I've done hikes as long
                  as 230 km and up to 65km in a day.
                </Text>{' '}
                <Text pt={4}>I love to play chess once in a while</Text>{' '}
                <Text pt={4}>
                  Yoga and meditation - it is a form of self exploration
                </Text>{' '}
                <Text pt={4}>
                  In to water sports - surfing, recently completed PADI open
                  water course
                </Text>{' '}
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
                  We, humans, are here for a humble purpose of sustaining life
                  on Earth. Our highest virtue is to be like water - it brings
                  use to living creatures and does not fight them.
                </Text>{' '}
                <Text pt={4}>
                  To do so, we have to find our inner, social balance - which
                  comes in form of conscious use of resource, decentralization,
                  redefining our cities and social structure.
                </Text>{' '}
                <Text pt={4}>
                  All living creatures are programmed by their very being to
                  work against entropy. Ants are digging in to earth and hance
                  let air inside soil, and that effectively reduces the process
                  of entropy (which in geology can be observed as gravity force
                  that pulls heavy materials to the center of the Planet over
                  time).
                </Text>{' '}
                <Text pt={4}>
                  Similar way trees are structuring carbon above the soil.
                </Text>{' '}
                <Text pt={4}>
                  In that manner humans mining and pumping oil from ground are
                  serving same purpose. Hence I see current ecological issues as
                  temporary, human centric problems which, I'm certain - we can
                  solve.
                </Text>{' '}
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
                <Center pb={2}>
                  {`Email -----------> `}t [at] peersky [dot] xyz
                </Center>
                <Center>
                  <Image
                    color="teal"
                    bgColor={'gray.200'}
                    borderRadius="md"
                    filter={'alpha(opacity=50)'}
                    src={process.env.PUBLIC_URL + '/vcard-transparent.png'}
                    maxW={'420px'}
                  ></Image>
                </Center>
                <Center>
                  <Link
                    fontSize="12px"
                    href="https://qrcard.mindthealgorithm.com"
                  >
                    QR vcard generated with qrcard <ExternalLinkIcon mx="2px" />
                  </Link>
                </Center>
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
                DAO
              </Badge>
              <chakra.span textAlign="justify" fontSize="18px" w="100%">
                <Text py={1}>
                  Dao is endless. Dao that can be expressed in words - is not
                  constant Dao. Name that can be named is not constant Name.
                  Nameless is the beginning of Sky and Earth, one having name -
                  mother of all creations
                </Text>
                <Text pt={1}>
                  The Earth and the Sky are eternal. The Earth and the Sky are
                  eternal, because they exist not for themselves. That is the
                  reason why they can be eternal.
                </Text>
                <Text pt={1}>
                  This is the reason why the Wise puts himself behind others,
                  thanks to that he becomes first. He neglects his own life,
                  thereby his life gets spared.
                </Text>{' '}
                <Text pt={1}>
                  Does this happen because he neglects his interests? It's
                  opposite, he acts in his own interests!
                </Text>{' '}
              </chakra.span>
            </VStack>
          </VStack>
        </VStack>
      </Center>
      <Text p={4}>&copy; Tim Pechersky 2022 </Text>
    </Flex>
  );
};

export default LandingPage;
