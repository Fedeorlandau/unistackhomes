import React, { useEffect, useRef } from 'react';

import {
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  chakra,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import NextLink from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '../Logo/Logo';
import Features from './Features';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue('white', 'gray.800');
  const ref = useRef<HTMLHeadingElement>(null);
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current
    ? ref.current?.getBoundingClientRect()
    : {};

  const { scrollY } = useViewportScroll();
  const cl = useColorModeValue('gray.800', 'white');
  const { onOpen, isOpen, onClose } = useDisclosure();

  useEffect(() => scrollY.onChange(() => setY(scrollY.get())), [scrollY]);

  return (
    <>
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex align="flex-start" mr={4}>
              <NextLink href="/" passHref>
                <Link>
                  <HStack>
                    <Logo height={16} width={16} />
                  </HStack>
                </Link>
              </NextLink>
            </Flex>
            <Flex>
              <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
                <NextLink href="/suscribe" passHref>
                  <Link
                    bg={bg}
                    as={Button}
                    color="gray.500"
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: cl }}
                    _focus={{ boxShadow: 'none', color: cl }}
                  >
                    Suscribe
                  </Link>
                </NextLink>
                <Popover trigger="hover">
                  <PopoverTrigger>

                    <Link
                      as={Button}
                      bg={bg}
                      color="gray.500"
                      display="inline-flex"
                      alignItems="center"
                      fontSize="md"
                      _hover={{ color: cl }}
                      _focus={{ boxShadow: 'none', color: cl }}
                      rightIcon={<IoIosArrowDown />}
                    >

                      Build
                    </Link>

                  </PopoverTrigger>
                  <PopoverContent
                    _focus={{ boxShadow: 'md' }}
                    left={0}
                    w="100vw"
                    maxW="1200px"
                  >
                    <Features />
                  </PopoverContent>
                </Popover>

              </HStack>
            </Flex>
            <Spacer />
            <Flex justify="flex-end" align="center" color="gray.400">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={onOpen}
              />
            </Flex>
          </Flex>
          <MobileNavbar onClose={onClose} isOpen={isOpen} bg={bg} />
        </chakra.div>
      </chakra.header>
    </>
  );
}
