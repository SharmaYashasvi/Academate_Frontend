import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = ({ color = 'yellow.500' }) => {
  return (
    <VStack h="100vh" justifyContent={'center'}>
      <div style={{ transform: 'scale(3)' }}>
        <Spinner
          // thickness="2px"
          // speed="0.65s"
          // emptyColor="transparent"
          color={color}
          size="xl"
          thickness="3px"
          speed="0.65s"
          emptyColor="gray.200"
          // color='blue.500'
          // size='xl'
        />
      </div>
    </VStack>
  );
};

export default Loader;
