import React from "react";
import "./NavbarCustomer.css";
import { Link } from "react-router-dom";

function NavbarCustomer() {
  return (
    <div>
      <div className="w-[70%] m-auto">
        <div className="my-[10px] flex justify-end gap-[30px] text-base cursor-pointer font-black font-mono">
          <div className="tinmoi">
            <i className="fa-sharp fa-solid fa-tags" />
            TIN MỚI &amp; ƯU ĐÃI
          </div>
          <div className="vecuatoi">
            <i className="fa-solid fa-ticket"></i> VÉ CỦA TÔI
          </div>
          <Link to={"/login"}>
            <i className="fa-solid fa-circle-user" /> ĐĂNG NHẬP/ĐĂNG KÝ
          </Link>
        </div>
      </div>
      <div className="header-page">
        <div className="flex justify-center gap-[70px] my-[20px] cursor-pointer pt-[30px]">
          <div>
            <a href="#">
              <img src="./image/logo.png" alt="" />
            </a>
          </div>
          <div className="flex gap-[70px] font-bold pt-[20px] ">
            <div className="movie">
              <p>PHIM</p>
              <div className="movie-status">
                <ul>
                  <li>Phim Đang Chiếu</li>
                  <li>Phim Sắp Chiếu</li>
                </ul>
              </div>
            </div>
            <div className="theater">
              <p className="w-[70px]">Rạp CGV</p>
              <div className="theater-status">
                <ul>
                  <li>Tất Cả Các Rạp</li>
                  <li>Rạp 3D</li>
                  <li>Rạp 2D</li>
                </ul>
              </div>
            </div>
            <div className="member">
              <p>THÀNH VIÊN</p>
              <div className="member-status">
                <ul>
                  <li>
                    <Link to={"/profile"}>Tài Khoản CGV</Link>
                  </li>
                  <li>Quyền Lợi</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#" className="cine">
            <img src="./image/mua-ve-ngay.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavbarCustomer;
