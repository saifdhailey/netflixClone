import React from 'react';
import './Secondpage.css';

const secondPage =[
  {
    id:1,
    text1:'Enjoy on your TV.',
    text2:'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    img:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
    status:'text-image-row'
  },
  {
    id:2,
    text1:'Download your shows to watch offline.',
    text2:'Save your favourites easily and always have something to watch.',
    img:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
    status:'text-image-reverse'
  },
  {
    id:3,
    text1:'Watch everywhere.',
    text2:'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    img:'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png',
    status:'text-image-row'
  },
  {
    id:4,
    text1:'Create profiles for children.',
    text2:'Send children on adventures with their favourite characters in a space made just for them-free with your membership.',
    img:'https://occ-0-3082-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420',
    status:'text-image-reverse'
  },
]

const imageDiv = secondPage.map(data=>(
    <div key={data.id} className='vise-verse'>
      <div><hr style={{height:'10px',margin:'0',backgroundColor:'grey'}}/></div>
      <div className={data.status}>
        <div className='text'>
          <h1>{data.text1}</h1>
          <h2>{data.text2}</h2>
        </div>  
        <img className='tv-image' src={data.img} alt='#'>
        </img>
      </div>
    </div>
))

export const Secondpage = () => {
  return (
    <div>
      {imageDiv}
    </div>
    )
}