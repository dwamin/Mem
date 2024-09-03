import React from 'react';
import { useParams, Link } from 'react-router-dom';

function YearPage() {
  const { year } = useParams();
  
  return (
    <div>
      <h2>{year}년</h2>
      <div className="person-list">
        {/* Replace with dynamic person data */}
        <div className="person">
          <img src="/path/to/image.jpg" alt="Person" />
          <p>이름</p>
          <Link to={`/person/1`}>상세정보</Link>
        </div>
        {/* Repeat for each person */}
      </div>
      <div className="navigation-buttons">
        <Link to={`/year/${parseInt(year) - 1}`}>이전 연도</Link>
        <Link to={`/year/${parseInt(year) + 1}`}>다음 연도</Link>
      </div>
    </div>
  );
}

export default YearPage;
