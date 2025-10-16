import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UserDetail() {
  const { userId } = useParams(); // <- URL의 id 받아옴
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`/users/${userId}`) // 이 ID로 백엔드에 조회 요청
      .then((res) => setUser(res.data));
  }, [userId]);

  return user ? (
    <div id="page-top">
      <h2>{user.name} 상세 정보</h2>
      <p>아이디: {user.id}</p>
      <p>이메일: {user.email}</p>
    </div>
  ) : (
    <p>로딩 중...</p>
  );
}
