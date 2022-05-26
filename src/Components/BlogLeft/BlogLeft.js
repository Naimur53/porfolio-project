import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SingleRecent from '../SingleRecent/SingleRecent';
import Comments from '../Comment/Comments'
import { Grid } from '@mui/material';
import Image from 'next/image';

const BlogLeft = () => {
    const data = [
        {
            mainSection: {
                img: "https://i.ibb.co/PMdzcvn/img-1.jpg",
                heading: "ONE DAY FASHION SHOOT",
                description: 'Curabitur eu congue erat. Donec posuere eu est eget egestas. Pellentesque porttitor blandit massa, nec luctus ligula facilisis sodales. Nam eu felis a ex efficitur faucibus in mollis arcu. Sed venenatis urna in lorem consequat rutrum. Nullam imperdiet arcu nec erat maximus faucibus...',
                location: 'Klik hier voor Nederlands',
                date: new Date().toDateString(),
            },
            sections: [{
                title: "The disappointment comes at home. ",
                img: [{ title: 'Ait Ben Haddou  Morocco: A first attempt under poor light conditions', url: 'https://i.ibb.co/hVm9s2y/20161021-AIT-BEN-HABBOU-351-Pano-1200x406.jpg' }],
                video: "",
                description: "I have a few golden rules. One of these rules, ‘Don’t try to organize, be on time and stay until you are completely satisfied.’ So I was on time. Sunset was expected around 7:30 and I was there at five. Camera tripod set up and the Nikon D5 on it. New pack of Marlboro in my pocket for the usual ‘Time killing smoking’. Slowly, bit by bit I see the light change. At that moment the light plan starts in my head. I take in some reference points. When the sun goes down there …. that is my moment. I do some spot measurements and light up another Marlboro. Just wait, this is going to be all right."
            }],
            tags: ['PHOTOGRAPHY', "FASHION", 'BLACK & WHITE'],
            love: 30,
            comments: [{
                id: 'id', user: {
                    displayName: 'JONE DOE',
                    photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
                },
                date: new Date().toDateString(),
                comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
            },
            {
                id: 'id', user: {
                    displayName: 'JONE DOE',
                    photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
                },
                date: new Date().toDateString(),
                comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
            }
            ]

        },
        {
            mainSection: {
                img: "https://i.ibb.co/PMdzcvn/img-1.jpg",
                heading: "ONE DAY FASHION SHOOT",
                description: 'Curabitur eu congue erat. Donec posuere eu est eget egestas. Pellentesque porttitor blandit massa, nec luctus ligula facilisis sodales. Nam eu felis a ex efficitur faucibus in mollis arcu. Sed venenatis urna in lorem consequat rutrum. Nullam imperdiet arcu nec erat maximus faucibus...',
                location: 'Klik hier voor Nederlands',
                date: new Date().toDateString(),
            },
            sections: [{
                title: "The disappointment comes at home. ",
                img: [{ title: 'Ait Ben Haddou  Morocco: A first attempt under poor light conditions', url: 'https://i.ibb.co/hVm9s2y/20161021-AIT-BEN-HABBOU-351-Pano-1200x406.jpg' }],
                video: "",
                description: "I have a few golden rules. One of these rules, ‘Don’t try to organize, be on time and stay until you are completely satisfied.’ So I was on time. Sunset was expected around 7:30 and I was there at five. Camera tripod set up and the Nikon D5 on it. New pack of Marlboro in my pocket for the usual ‘Time killing smoking’. Slowly, bit by bit I see the light change. At that moment the light plan starts in my head. I take in some reference points. When the sun goes down there …. that is my moment. I do some spot measurements and light up another Marlboro. Just wait, this is going to be all right."
            }],
            tags: ['PHOTOGRAPHY', "FASHION", 'BLACK & WHITE'],
            love: 30,
            comments: [{
                id: 'id', user: {
                    displayName: 'JONE DOE',
                    photoUrl: 'https://demo.themetorium.net/html/agatha/dark/assets/img/blog/small/avatar/avatar-1.jpg',
                },
                date: new Date().toDateString(),
                comment: 'Quis ante id eros orci eget. Ac egestas praesent aliquam nisl in vitae aliquam vitae. Vivamus sed elementum. Sem sed sed. Hendrerit elit eget sem pellentesque a. Velit elit lacinia mattis amet nunc. Fames ipsum rhoncus. Natoque posuere nam commodo mattis orci. Aliquet praesent tempor ac dolor aliquet.'
            }]

        }
    ]
    const photos = [
        {
            _id: "62817590f683697073c38859",
            url: 'https://i.ibb.co/W2MHbNw/West-africa008.jpg',
            name: 'West-africa008',
            love: 0
        },
        {
            _id: "62817590f683697073c3885a",
            url: 'https://i.ibb.co/DbPW9BL/West-africa009.jpg',
            name: 'West-africa009',
            love: 0
        },
        {
            _id: "62817590f683697073c3885b",
            url: 'https://i.ibb.co/Pw8vRVL/West-africa010.jpg',
            name: 'West-africa010',
            love: 0
        },
        {
            _id: "62817590f683697073c3885c",
            url: 'https://i.ibb.co/f4sR0Rs/West-africa011.jpg',
            name: 'West-africa011',
            love: 0
        },
        {
            _id: "62817590f683697073c3885d",
            url: 'https://i.ibb.co/WD5VHmx/West-africa012.jpg',
            name: 'West-africa012',
            love: 0
        },
        {
            _id: "62817590f683697073c3885e",
            url: 'https://i.ibb.co/zP5twt5/West-africa013.jpg',
            name: 'West-africa013',
            love: 0
        },
        {
            _id: "62817590f683697073c3885f",
            url: 'https://i.ibb.co/9Y3tydH/West-africa014.jpg',
            name: 'West-africa014',
            love: 0
        },
        {
            _id: "62817590f683697073c38860",
            url: 'https://i.ibb.co/5k1bqkV/West-africa015.jpg',
            name: 'West-africa015',
            love: 0
        },
        {
            _id: "62817590f683697073c3885f",
            url: 'https://i.ibb.co/9Y3tydH/West-africa014.jpg',
            name: 'West-africa014',
            love: 0
        },
        {
            _id: "62817590f683697073c38860",
            url: 'https://i.ibb.co/5k1bqkV/West-africa015.jpg',
            name: 'West-africa015',
            love: 0
        },
        {
            _id: "62817590f683697073c3885f",
            url: 'https://i.ibb.co/9Y3tydH/West-africa014.jpg',
            name: 'West-africa014',
            love: 0
        },
        {
            _id: "62817590f683697073c38860",
            url: 'https://i.ibb.co/5k1bqkV/West-africa015.jpg',
            name: 'West-africa015',
            love: 0
        },
        {
            _id: "62817590f683697073c38861",
            url: 'https://i.ibb.co/1LjJtHr/West-africa016.jpg',
            name: 'West-africa016',
            love: 0
        },
        {
            _id: "62817590f683697073c38861",
            url: 'https://i.ibb.co/1LjJtHr/West-africa016.jpg',
            name: 'West-africa016',
            love: 0
        },
        {
            _id: "62817590f683697073c38861",
            url: 'https://i.ibb.co/1LjJtHr/West-africa016.jpg',
            name: 'West-africa016',
            love: 0
        },
    ]
    return (
        <div className='pr-4'>
            <div className='w-3/4 relative mb-5'>
                <input type="text" placeholder='search' className='block w-full rounded-full p-2 px-3  border border-gray-600 bg-black' />
                <SearchIcon className='absolute right-4 top-3 text-gray-400'></SearchIcon>
            </div>
            <h2 className='font-light text-2xl mt-10 mb-5'>Recent posts</h2>
            {
                data.map((singleData, i) => <SingleRecent key={i} data={singleData}></SingleRecent>)
            }
            {
                data.map((singleData, i) => <SingleRecent key={i} data={singleData}></SingleRecent>)
            }
            <h2 className='font-light text-2xl mt-10 mb-5'>Most loved posts</h2>
            {
                data.map((singleData, i) => <SingleRecent key={i} data={singleData}></SingleRecent>)
            }
            <div>
                <h2 className='font-light text-2xl mt-10 mb-5'>Recent comment</h2>

                {data[0].comments.map((singleData, i) => <Comments small key={i} data={singleData}></Comments>)}
            </div>
            <div>
                <h2 className='font-light text-2xl mt-10 mb-5'>PHOTO STREAM</h2>
                <Grid container spacingY={1}>
                    {
                        photos.slice(0, 12).map(photo => <Grid item xs={3} key={photo._id}><Image src={photo.url} alt="gallary" height={85} width={85} ></Image></Grid>)
                    }
                    <Grid item xs={3}>

                    </Grid>

                </Grid>

            </div>

        </div>
    );
};

export default BlogLeft;