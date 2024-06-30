import React, { useRef, useEffect, useState } from 'react';
import './App.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Snowfall from 'react-snowfall';

// icons
import { FaDiscord } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';
import { MdVolumeOff } from 'react-icons/md';
import { MdVolumeUp } from 'react-icons/md';

// video
const videoLink = '/video1.mp4';

// audio
const audioLink = '/audio.mp3';

const links = [
  {
    icon: <FaDiscord />,
    title: 'Discord',
    link: 'https://discord.com/invite/3d2kfQB3VP',
  },
  {
    icon: <FaSpotify />,
    title: 'Spotify',
    link: 'https://open.spotify.com/user/4fdakmnp6zzblm5qizzk6fg5m',
  },
  {
    icon: <FaPaypal />,
    title: 'Paypal',
    link: 'https://paypal.me/caspistol',
  },
];

function App() {
  const coverRef = useRef(null);
  // const videoRef = useRef(null);
  const audioRef = useRef(null);
  const cardRef = useRef(null);

  const [mute, setMute] = useState(false);

  const tl = gsap.timeline();

  const handleCoverClick = () => {
    tl.to(coverRef.current, {
      duration: 0.6,
      y: '-100%',
      display: 'none',
    });

    audioRef.current.play();
    audioRef.current.currentTime = 20;
    audioRef.current.volume = 0.6;
  };

  const handleMute = () => {
    if (mute) {
      audioRef.current.volume = 1;
      setMute(false);
    } else {
      audioRef.current.volume = 0;
      setMute(true);
    }
  };

  return (
    <div className="wrapper">
      {/* background with video */}
      <div className="background">
        {/* <video
          ref={videoRef}
          muted
          loop
          autoPlay
          playsInline
          className="background__item"
          src={videoLink}
          type="video/mp4"
        ></video> */}
        <audio
          ref={audioRef}
          loop
          autoPlay
          playsInline
          className="background__item"
          src={audioLink}
        ></audio>
      </div>

      {/* overlay */}
      <div className="overlay">
        {/* <Snowfall
          color="white"
          snowflakeCount={200}
          opacity={1}
        /> */}
      </div>

      {/* foreground */}
      <div className="foreground">
        <div
          className="mute"
          onClick={() => handleMute()}
        >
          {mute ? <MdVolumeOff /> : <MdVolumeUp />}
        </div>
        <div
          ref={cardRef}
          className="foreground__card"
        >
          <div className="foreground__profile">
            <div className="foreground__profile__image"></div>
            <div className="foreground__profile__title">cassesamesyrup</div>
            <div className="foreground__profile__desc">discord.gg/wwest</div>
          </div>
          <div className="foreground__links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="foreground__links__item"
              >
                <div className="foreground__links__item__icon">{link.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* cover */}
      <div
        ref={coverRef}
        onClick={() => handleCoverClick()}
        className="cover"
      >
        <div className="cover__icon">𐕣 ⚝ 𐕣</div>
        <div className="cover__text">[click anywhere]</div>
      </div>
    </div>
  );
}

export default App;
