import React from 'react';
import './Logo.css';

class Logo extends React.Component {
  render() {
    return (
      <>
        <div className="logo">
          <div className="logo__title">🍺 Beer API example</div>
          <div className="logo__author">
            work for react-2023-q4 course by{' '}
            <a href="https://app.rs.school/profile?githubId=nikolai-minkevich">
              Nikolai Minkevich
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Logo;
