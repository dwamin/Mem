import React from 'react';
import { useParams } from 'react-router-dom';

function PersonDetailPage() {
  const { id } = useParams();
  
  // Replace with dynamic person data fetching
  return (
    <div>
      <h2>상세정보</h2>
      {/* Replace with person details */}
      <img src="/path/to/portrait.jpg" alt="Portrait" />
      <p>이름: 홍길동</p>
      <p>함께한 기간: 2015-2018</p>
      <p>헤어진 이유: 관심 감소</p>
      <p>특징: 예술적</p>
      <p>캐릭터리스틱: 창의적인 아이디어 제공</p>
    </div>
  );
}

export default PersonDetailPage;
