import React from 'react';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const Navbar = () => {
    return (
        <Flex align="center" boxShadow="base" p="2" ab="2">
            <Box p="2">
                <Heading size="lg">E-commerce Support</Heading>
            </Box>
            <Spacer /> 
            <Box>
                <ColorModeSwitcher />
            </Box>
        </Flex>
    )
}

export default Navbar
