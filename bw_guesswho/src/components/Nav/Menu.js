import React from 'react';
import { NavLink } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';
import { AiOutlineMenu } from 'react-icons/ai';

import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/core';

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <AiOutlineMenu className='nav-open' onClick={onOpen} />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <IoMdClose className='nav-close' onClick={onClose} />

          <DrawerBody className='drawer-body'>
            <NavLink to='/home-page' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/account' className='nav-link'>
              Account
            </NavLink>
            <NavLink to='/settings' className='nav-link'>
              Settings
            </NavLink>
            <NavLink
              to='/logout'
              onClick={() => localStorage.clear()}
              className='nav-link'
            >
              Log Out
            </NavLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
