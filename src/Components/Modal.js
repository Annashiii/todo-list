import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'

export default function BasicUsage({children, handleClose, handleClickOpen, open}) {

  return (
    <>
      <Button onClick={handleClickOpen}>+</Button>

      <Modal isOpen={open} onClose={handleClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>What's Due?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}