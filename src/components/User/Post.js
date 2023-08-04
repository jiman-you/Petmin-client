import React, { useState } from "react";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import { styled } from "styled-components";

const PostBtn = styled.button`
  padding: 3px 10px;
  border: 3px solid #ff8989;
  font-family: PreMedium;
  font-size: 18px;
  border-radius: 5px;
  color: #ff8989;
  background: #fff;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #ff8989;
    color: #fff;
    cursor: pointer;
  }
`;
const Post = () => {
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <PostBtn type="button" onClick={openPostCode}>
        주소검색
      </PostBtn>

      <div id="popupDom">
        {isPopupOpen && (
          <PopupDom>
            <PopupPostCode onClose={closePostCode} />
          </PopupDom>
        )}
      </div>
    </div>
  );
};

export default Post;
