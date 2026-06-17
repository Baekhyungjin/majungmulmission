import React from 'react';
import { Droplet, HeartHandshake, Users } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">설립 취지</h2>
        <div className="about-grid grid grid-cols-3 gap-8">
          
          <div className="about-card">
            <div className="about-icon-wrapper">
              <Droplet className="about-icon" size={40} />
            </div>
            <h3 className="about-title">희생적 헌신</h3>
            <p className="about-desc">
              깊은 땅속에 풍성한 생명수가 있어도, 마중물이 없으면 그 물을 끌어올릴 수 없습니다. 마중물 선교센터는 스스로가 먼저 한 바가지의 물이 되어 세상 속에 숨겨진 하나님의 은혜와 생명을 길어 올립니다.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon-wrapper">
              <HeartHandshake className="about-icon" size={40} />
            </div>
            <h3 className="about-title">복음의 연결</h3>
            <p className="about-desc">
              마중물은 메마른 펌프를 적시고 물줄기를 잇는 다리 역할을 합니다. 선교 현장과 후원자, 그리고 복음이 필요한 영혼들을 하나로 잇는 '영적 플랫폼'이 되어 복음의 강물이 흐르도록 돕습니다.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon-wrapper">
              <Users className="about-icon" size={40} />
            </div>
            <h3 className="about-title">찾아가는 선교</h3>
            <p className="about-desc">
              아직 주님을 알지 못하는 열방의 영혼들과 교회의 미래인 다음 세대를 향해 먼저 다가갑니다. 기다리는 선교를 넘어, 찾아가는 선교를 통해 하나님 나라의 잔치를 예비합니다.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
