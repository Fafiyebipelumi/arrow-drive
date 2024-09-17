import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { Oval } from 'react-loader-spinner';

export const LoadingImage = () => {
    return (
        <Box
        className='fixed top-0 left-0 w-full h-full bg-white z-50 flex justify-center items-center'
        >
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'} gap={10}>
                <Image src={'/img/Arrow-drive.png'} alt='' width={150} height={150} />
                <Oval visible={true} height="30" width='30' color='#fff' ariaLabel='oval-loading' strokeWidth={4} />
            </Box>
        </Box>
    )
}

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