import React, { useContext } from "react";
import logo from "../images/logo.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";
import { Context } from "../context";

const Nav = () => {
  const { filter, searchText } = useContext(Context);
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <Nuv>
      <nav className="navbar">
        <div className="container-fluid">
          <Link to="/">
            <img id="logo" src={logo} alt="" />
          </Link>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              enterButton
              onChange={searchText.bind(this)}
              onSearch={onSearch}
              value={filter}
            />
          </Space>
          <div className="icons pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-arrow-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
           <Link to="/deta"> <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg></Link>
            <select name="language" id="language">
              <option value="rus">Русский</option>
              <option value="uzbek">O'zbek</option>
            </select>

            <Link to="/page">
              <button type="button" class="btn btn-primary position-relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-bag"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                  <span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </Link>
            <b>0 СУМ</b>
          </div>
        </div>
      </nav>
      <div className="empty"></div>
    </Nuv>
  );
};

const Nuv = styled.div`
  #logo {
    margin-top: 10px;
    width: 250px;
    height: 60px !important;
    padding-left: 30px;
  }

  .icons {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
  b {
    padding-top: 10px;
    margin-left: -25px;
  }
  nav input {
    width: 400px !important;
  }
  .empty {
    height: 60px;
    width: 100%;
    background-image: linear-gradient(
      115deg,
      hsl(240deg 100% 20%) 17%,
      hsl(227deg 100% 25%) 51%,
      hsl(224deg 100% 29%) 59%,
      hsl(223deg 100% 33%) 62%,
      hsl(222deg 100% 37%) 63%,
      hsl(221deg 100% 40%) 65%,
      hsl(221deg 100% 42%) 67%,
      hsl(220deg 100% 45%) 71%,
      hsl(220deg 100% 48%) 80%,
      hsl(220deg 100% 50%) 100%
    );
  }
`;
export default Nav;
