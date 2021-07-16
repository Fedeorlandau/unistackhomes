import React from "react";
import { VStack, CloseButton, Button } from "@chakra-ui/react";
import { AiFillHome, AiOutlineInbox } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  bg: string;
}
export const MobileNavbar = ({ isOpen, onClose, bg }: MobileNavbarProps) => {
  return (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
      zIndex={9}
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={onClose}
      />
      <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
        Dashboard
      </Button>
      <Button
        w="full"
        variant="solid"
        colorScheme="brand"
        leftIcon={<AiOutlineInbox />}
      >
        Inbox
      </Button>
      <Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
        Videos
      </Button>
    </VStack>
  );
};
