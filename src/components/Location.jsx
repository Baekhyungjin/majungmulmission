import React from 'react';
import { MapPin, Navigation, Car } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section className="section location" id="location">
      <div className="container">
        <h2 className="section-title">오시는 길</h2>
        
        <div className="location-container">
          <div className="map-placeholder" style={{ padding: 0, overflow: 'hidden', display: 'block' }}>
            {/* 임베딩을 위한 iframe 사용 (브라우저 정책에 따라 화면이 제한될 수 있으므로 링크 버튼도 함께 제공) */}
            <iframe 
              src="https://naver.me/5jXbqxMg" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen="" 
              loading="lazy"
              title="마중물 선교센터 위치"
            ></iframe>
          </div>
          
          <div className="text-center mb-8">
            <a 
              href="https://naver.me/5jXbqxMg" 
              target="_blank" 
              rel="noreferrer"
              className="btn-map"
            >
              네이버 지도 큰 화면으로 보기
            </a>
          </div>
          
          <div className="address-info grid grid-cols-2 gap-8">
            <div className="address-card">
              <div className="address-header">
                <Navigation className="address-icon" size={24} />
                <h3 className="address-title">센터 주소</h3>
              </div>
              <p className="address-text">
                마중물 선교센터 & 함께걷는교회<br/>
                <strong>경기도 안양시 만안구 예술공원로 187, 2층</strong>
              </p>
            </div>
            
            <div className="address-card">
              <div className="address-header">
                <Car className="address-icon" size={24} />
                <h3 className="address-title">주차 안내</h3>
              </div>
              <p className="address-text">
                단풍한정식 주차장<br/>
                <strong>경기도 안양시 만안구 예술공원로 213</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
