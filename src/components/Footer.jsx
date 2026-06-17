import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content flex justify-between items-center">
        
        <div className="footer-info">
          <h2 className="footer-title">마중물 선교센터 & 함께걷는교회</h2>
          <p className="footer-copy">© 2026 Majungmul Mission Center. All rights reserved.</p>
          <p className="footer-maker" style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>제작: 목회 AI 연구소 백형진 소장</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
