import { Box } from '@chakra-ui/react';
import React from 'react';
import { Oval } from 'react-loader-spinner';

const LoadingIndicator = () => {
    return (
        <Box
            className='fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-center items-center'
        >
            {/* <Box
                className='spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full'
            /> */}
            <Oval visible={true} height="40" width='40' color='#1052FE' ariaLabel='oval-loading' strokeWidth={4} />
        </Box>
    )
}

export default LoadingIndicator;