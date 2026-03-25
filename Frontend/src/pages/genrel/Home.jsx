import React from 'react';
import '../../styles/reels.css';
import VideoReel from '../../components/VideoReel';

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
  return (
    <div className="reels-container" role="main" aria-label="Video reels">
      {sampleVideos.map(v => (
        <VideoReel
          key={v.id}
          src={v.src}
          author={v.author}
          caption={v.caption}
          storeUrl={v.storeUrl}
        />
      ))}
    </div>
  );
};

export default Home;
