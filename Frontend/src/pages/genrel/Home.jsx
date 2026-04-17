import React, { useState } from 'react';
import '../../styles/reels.css';
import VideoReel from '../../components/VideoReel';
import axios from 'axios';
import { useEffect } from 'react';

const sampleVideos = [
  {
    id: 1,
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    author: 'DemoUser1',
    caption: 'Big Buck Bunny — demo clip. Great food and ambience at our store. Come visit!',
    storeUrl: 'https://example.com/store/1'
  },
  {
    id: 2,
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    author: 'DemoUser2',
    caption: 'Flower time-lapse. Try our seasonal menu and enjoy fresh flavors.',
    storeUrl: 'https://example.com/store/2'
  },
  {
    id: 3,
    src: 'https://www.w3schools.com/html/movie.mp4',
    author: 'DemoUser3',
    caption: 'Short demo. Fast delivery and best quality near you.',
    storeUrl: 'https://example.com/store/3'
  }
];



const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/food/',{
          withCredentials: true, // Include cookies if your backend uses sessions
        }); // Adjust the endpoint as needed
        setVideos(response.data.foodItems); // Assuming the response has a 'foodItems' array
        console.log('Fetched videos:', response.data.foodItems);
        // setVideos(response.data); // Uncomment if you implement state to store videos
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    
    
    fetchVideos();
  }, []);
  return (
    <div className="reels-container" role="main" aria-label="Video reels">
      {videos.map(v => (
        <VideoReel
          key={v._id}
          src={v.video}
          author={v.name}
          caption={v.description}
          storeUrl={v.foodPartner}
        />
      ))}
    </div>
  );
};

export default Home;
