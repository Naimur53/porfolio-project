import { Avatar } from '@mui/material';
import { data } from 'autoprefixer';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { allData } from '../../dataSlice/dataSlice';
import ShareLove from '../ShareLove/ShareLove';

const MainSection = () => {
    const { blogDetails } = useSelector(allData);
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='pb-5 flex mt-5'>
                    <div className='mr-4'>
                        <Avatar src='https://i.ibb.co/5LwPHgJ/20190320-WEST-AFRICA-FROM-GUNJUR-TO-BASSE-2964-removebg-preview.png' alt="blog " sx={{
                            width: 40, height: 40
                        }}></Avatar>
                    </div>
                    <div>
                        <h1 className='text-md text-gray-300 '>AUTHOR: MR JOHN</h1>
                        <h3 className='text-sm font-light text-gray-300'>{new Date(blogDetails.date).toDateString()}</h3>
                    </div>
                </div>
                <ShareLove></ShareLove>
            </div>
            <div>
                <p className='text-gray-300'>{blogDetails.description}</p>
            </div>
        </>
    );
};

export default MainSection;