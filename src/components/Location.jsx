import React from 'react';
import { MapPin, Navigation, Car } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section className="section location" id="location">
      <div className="container">
        <h2 className="section-title">오시는 길</h2>
        
        <div className="location-container">
          <div className="map-placeholder">
            <div className="map-ui">
              <MapPin size={48} className="map-icon" style={{ margin: '0 auto' }} />
              <p style={{ marginTop: '1rem', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                아래 버튼을 눌러 네이버 지도에서<br/>상세한 위치와 길찾기를 확인해 보세요.
              </p>
              <a 
                href="https://naver.me/5jXbqxMg" 
                target="_blank" 
                rel="noreferrer"
                className="btn-map"
              >
                네이버 지도 열기
              </a>
            </div>
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
