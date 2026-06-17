import React from 'react';
import { BookOpen, Video, Heart, Globe } from 'lucide-react';
import './Ministries.css';

const Ministries = () => {
  return (
    <section className="section section-alt ministries" id="ministries">
      <div className="container">
        <h2 className="section-title">사역 테마</h2>
        
        <div className="ministries-grid grid grid-cols-2 gap-8 mb-12">
          
          <div className="ministry-card">
            <div className="ministry-header">
              <BookOpen className="ministry-icon" size={32} />
              <h3 className="ministry-title">스터디 선교</h3>
            </div>
            <ul className="ministry-list">
              <li><strong>AI 교실:</strong> 지역사회 및 목회자 대상 AI 활용법 교육 (생성형 AI로 설교 준비 돕기 등)</li>
              <li><strong>영어 성경 아카데미:</strong> 청소년 및 성인 대상 영어 성경 공부 및 스터디 공부방 공간 제공</li>
              <li><strong>설교 아카데미:</strong> 차세대 사역자를 위한 설교 스킬 및 인문학적 소양 교육</li>
            </ul>
          </div>

          <div className="ministry-card">
            <div className="ministry-header">
              <Video className="ministry-icon" size={32} />
              <h3 className="ministry-title">미디어 & 문화 선교</h3>
            </div>
            <ul className="ministry-list">
              <li><strong>인터넷/영상 선교:</strong> 사역 활동 영상화 및 유튜브/SNS를 통한 복음 전파</li>
              <li><strong>뮤지컬 선교:</strong> 소규모 극 또는 낭독 뮤지컬 형태로 제작하여 교회 및 시설 순회 공연</li>
              <li><strong>기독교 유적지 연구:</strong> 국내 성지순례 코스 개발 및 디지털 가이드북 제작</li>
            </ul>
          </div>

          <div className="ministry-card">
            <div className="ministry-header">
              <Heart className="ministry-icon" size={32} />
              <h3 className="ministry-title">상담 & 복지 선교</h3>
            </div>
            <ul className="ministry-list">
              <li><strong>전문 상담 센터:</strong> 심리 상담 및 신앙 상담 서비스 제공 (대면/비대면)</li>
              <li><strong>실버 선교:</strong> 노인 대상 디지털 교육(키오스크 사용법 등) 및 치매 예방 프로그램 운영</li>
            </ul>
          </div>

          <div className="ministry-card">
            <div className="ministry-header">
              <Globe className="ministry-icon" size={32} />
              <h3 className="ministry-title">아웃리치 선교</h3>
            </div>
            <ul className="ministry-list">
              <li><strong>낙도/해외 선교:</strong> 연 1~2회 집중 사역. 영상/의료/교육 등 팀원들의 재능을 결합한 패키지 선교</li>
              <li><strong>거점 선교:</strong> 직접 가기 어려운 곳은 인터넷 선교 채널을 통해 지속적으로 소통</li>
            </ul>
          </div>

        </div>

        {/* Combined Banner Section */}
        <div className="ministry-banner">
          <img src={`${import.meta.env.BASE_URL}image1.png`} alt="사역 이미지 1" className="banner-img" />
          <img src={`${import.meta.env.BASE_URL}image2.png`} alt="사역 이미지 2" className="banner-img" />
        </div>
      </div>
    </section>
  );
};

export default Ministries;
