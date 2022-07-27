import React, { useEffect } from "react";
import "./filmTicket.scss";
import { useSelector, useDispatch } from "react-redux";
import { getDanhSachPhim } from "../../reducers/listFilm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function FlimTicket() {
  // const {} = useSelector((state) => state.movieD);
  const { movieDetail, listHeThongRapChieu, listMovie } = useSelector(
    (state) => {
      return {
        movieDetail: state.movieD.movieDetail,
        listHeThongRapChieu: state.movieD.movieDetail.heThongRapChieu,
        listMovie: state.listFilm.listFilm,
      };
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDanhSachPhim("gp01"));
  }, []);

  const list = listMovie.filter((item, index) => {
    return item.dangChieu === true;
  });

  const nowList = list.slice(0, 4);
  return (
    <div className="container">
      <div className="row">
        <div className="col-left col-lg-8">
          <div className="content">
            <div className="wrapper">
              <h2>
                Lịch chiếu <span>{movieDetail.tenPhim}</span>
              </h2>
              {movieDetail.sapChieu ? (
                <div>
                  <div className="showtimes">
                    <div className="schedule d-flex justify-content-start">
                      <div className="week active flex-column d-flex justify-content-center align-items-center">
                        <span className="number d-flex justify-content-center align-items-center">
                          21
                        </span>
                        <span className="day">Thứ 2</span>
                      </div>
                      <div className="week flex-column d-flex justify-content-center align-items-center">
                        <span className="number d-flex justify-content-center align-items-center">
                          21
                        </span>
                        <span className="day">Thứ 3</span>
                      </div>
                      <div className="week flex-column d-flex justify-content-center align-items-center">
                        <span className="number d-flex justify-content-center align-items-center">
                          21
                        </span>
                        <span className="day">Thứ 4</span>
                      </div>
                      <div className="week flex-column d-flex justify-content-center align-items-center">
                        <span className="number d-flex justify-content-center align-items-center">
                          21
                        </span>
                        <span className="day">Thứ 5</span>
                      </div>
                      <div className="week flex-column d-flex justify-content-center align-items-center">
                        <span className="number d-flex justify-content-center align-items-center">
                          21
                        </span>
                        <span className="day">Thứ 6</span>
                      </div>
                      <div className="week flex-column d-flex justify-content-center align-items-center">
                        <span className="number d-flex justify-content-center align-items-center">
                          21
                        </span>
                        <span className="day">Thứ 7</span>
                      </div>
                      <div className="week flex-column d-flex justify-content-center align-items-center">
                        <span className="number d-flex justify-content-center align-items-center">
                          21
                        </span>
                        <span className="day">Chủ nhật</span>
                      </div>
                    </div>
                  </div>

                  <div className="cinema d-flex">
                    {movieDetail.heThongRapChieu?.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="wrapper d-flex justify-content-start">
                            <div className="cinema-btn d-flex justify-content-between align-items-center flex-column ">
                              <div className="cinema-wrapper">
                                <img src={item.logo} alt="cinema" />
                              </div>
                              <span>{item.maHeThongRap}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="cinema-time">
                    {movieDetail.heThongRapChieu?.map((item, index) => {
                      return item.cumRapChieu.map((item2) => {
                        return (
                          <div key={index} className="wrapper">
                            <div className="address d-flex">
                              <img src={item.logo} alt="address" />
                              <div className="address-title d-flex flex-column">
                                <h4>{item2.tenCumRap}</h4>
                                <span>{item2.diaChi}</span>
                              </div>
                            </div>
                            <h3>2D Phụ đề</h3>
                            <div className="movie-time">
                              {item2.lichChieuPhim.map((item3, index) => {
                                return (
                                  <NavLink
                                    key={index}
                                    className="button-link"
                                    to={`/ticket/${item3.maLichChieu}`}
                                    style={{ width: "200px" }}
                                  >
                                    {item3.ngayChieuGioChieu}
                                  </NavLink>
                                );
                              })}
                            </div>
                          </div>
                        );
                      });
                    })}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    border: "1px solid #e0e0e0",
                    padding: "30px",
                    paddingTop: "0",
                  }}
                >
                  <img
                    src="https://static.mservice.io/next-js/_next/static/public/cinema/not-found.svg"
                    alt="error"
                  />
                  <h4
                    style={{
                      fontSize: "1rem",
                      lineHeight: " 1.75rem",
                      fontWeight: "600",
                    }}
                  >
                    Úi, hôm nay chưa có suất chiếu
                  </h4>
                  <span style={{ fontSize: ".8rem", lineHeight: " 1.25rem" }}>
                    Bạn hãy thử tìm phim khác nhé
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-right col-lg-4">
          <div className="content">
            <div className="wrapper">
              <div className="rate">
                <div className="item d-flex">
                  <div className="icon">
                    <img
                      src="https://traffic-edge04.cdn.vncdn.io/cinema/img/fcac498b-a28c-4591-9273-59666a811a29-11595253614011640.png"
                      alt="like"
                    />
                    <span className="rate-percent">0%</span>
                    <span className="rate-number">100 đánh giá</span>
                    <button className="rate-view">Xem đánh giá</button>
                  </div>
                  <div className="comment">
                    <div className="comment-item">
                      <div>
                        <img
                          src="https://s3-ap-southeast-1.amazonaws.com/avatars.mservice.io/uploads/cinema-2.0/46927677544512767-ttdg-2021-dien-vien%403x.png"
                          alt="rate"
                        />
                        <span>Diễn viên rất hợp vai</span>
                      </div>
                    </div>
                    <div className="comment-item">
                      <div>
                        <img
                          src="https://s3-ap-southeast-1.amazonaws.com/avatars.mservice.io/uploads/cinema-2.0/46927989756678107-ttdg-2021-kich-ban%403x.png"
                          alt="rate"
                        />
                        <span>Đầy bất ngờ</span>
                      </div>
                    </div>
                    <div className="comment-item">
                      <div>
                        <img
                          src="https://s3-ap-southeast-1.amazonaws.com/avatars.mservice.io/uploads/cinema-2.0/46927989756678107-ttdg-2021-kich-ban%403x.png"
                          alt="rate"
                        />
                        <span>Tinh tế</span>
                      </div>
                    </div>
                    <div className="comment-item">
                      <div>
                        <img
                          src="https://s3-ap-southeast-1.amazonaws.com/avatars.mservice.io/uploads/cinema-2.0/46926679176908462-ttdg-2021-xuc-dong%403x.png"
                          alt="rate"
                        />
                        <span>Sụt sịt rồi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="related">
                <h3>Phim đang chiếu</h3>

                {nowList.map((item, index) => {
                  return (
                    <div key={index} className="related-item">
                      <img src={item.hinhAnh} alt="pic" />
                      <div className="film-related">
                        <div className="related-title">{item.tenPhim}</div>
                        <div className="age">
                          Đánh giá: {item.danhGia}
                          <span>/10</span>
                        </div>
                        <a
                          href={`${item.maPhim}`}
                          className="btn-ticket"
                          type="button"
                        >
                          Mua vé
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlimTicket;
