import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={`${import.meta.env.BASE_URL}bg-video.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content container flex flex-col items-center justify-center text-center">
        <h2 className="hero-subtitle">마중물 선교센터 & 함께걷는교회</h2>
        <h1 className="hero-title">한 바가지의 헌신으로<br />생명을 깨우다</h1>
        <p className="hero-description">
          세상 속에 숨겨진 하나님의 은혜와 생명을 길어 올리는<br/>
          희생적 헌신의 마중물이 되겠습니다.
        </p>
      </div>
    </section>
  );
};

export default Hero;
