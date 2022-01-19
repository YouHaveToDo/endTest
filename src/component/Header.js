import React from "react";
import MenuIcon from "../images/icon-menu.png";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as Noti } from "../images/noti.svg";
import { ReactComponent as New } from "../images/new.svg";
import { ReactComponent as More } from "../images/more.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="nav">
        <div className="navLeft">
          <img src={MenuIcon} alt="tabMenu" />
          <h1>wanted</h1>
        </div>
        <div className="navMid">
          <ul>
            <li className="mo">
              <a href="#">홈</a>
            </li>
            <li>
              <a href="#">채용</a>
            </li>
            <li>
              <a href="#">이벤트</a>
            </li>
            <li className="noneMo">
              <a href="#">직군별 연봉</a>
            </li>
            <li className="noneMo">
              <a href="#">이력서</a>
            </li>
            <li className="tabInfo new noneMo">
              <a href="#">커뮤니티</a>
            </li>
            <li className="noneMo">
              <a href="#">프리랜서</a>
            </li>
            <li className="tabInfo beta noneMo">
              <a href="#">AI 합격예측</a>
            </li>
          </ul>
        </div>

        <div className="navRight">
          <ul>
            <li>
              <Search />
            </li>
            <li>
              <Noti />
            </li>
            <li className="tablet">
              <More />
            </li>
            <li className="pc">
              <div className="userCircleImg">
                <span>
                  <New />
                </span>
              </div>
            </li>
            <li className="pc">
              <p>기업 서비스</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
