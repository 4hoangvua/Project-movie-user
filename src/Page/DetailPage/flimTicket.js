import React from "react";
import "./filmTicket.scss";
import { useSelector, useDispatch } from "react-redux";

function FlimTicket() {
  const { movieDetail, listHeThongRap } = useSelector((state) => {
    return {
      movieDetail: state.movieD.movieDetail,
      listHeThongRap: state.movieD.movieDetail.heThongRapChieu,
    };
  });
  console.log(listHeThongRap);

  return (
    <div className="container">
      <div className="row">
        <div className="col-left col-lg-8">
          <div className="content">
            <div className="wrapper">
              <h2>
                Lịch chiếu <span>{movieDetail.tenPhim}</span>
              </h2>
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
                  // let key;
                  // for (let key in item.cumRapChieu) {
                  //   item.cumRapChieu[key].tenCumRap;
                  // }
                  return (
                    <div className="wrapper">
                      <div className="address d-flex">
                        <img src={item.logo} alt="address" />
                        <div className="address-title d-flex flex-column">
                          <h4>{item.tenHeThongRap}</h4>
                          <span>{item.cumRapChieu[0].diaChi}</span>
                        </div>
                      </div>
                      <h3>2D Phụ đề</h3>
                      <div className="movie-time">
                        <button style={{ width: "200px" }}>
                          {
                            // item.cumRapChieu[index].lichChieuPhim[i]
                            //   .ngayChieuGioChieu
                          }
                        </button>
                      </div>
                      {/* <div>
                          {
                            item.cumRapChieu[index].lichChieuPhim[index + 1]
                              .maLichChieu
                          }
                        </div> */}
                    </div>
                  );
                })}
              </div>
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
                <div className="related-item">
                  <img
                    src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fcinema%2Fs256x384%2Fmomo-cdn-api-220615131921-637908959613939882.jpg&w=384&q=75"
                    alt="pic"
                  />
                  <a href="#">
                    <div className="age">13+</div>
                    <div className="related-title">
                      Thám Tử Lừng Danh Conan: Nàng Dâu Halloween
                    </div>
                    <span>Hoạt Hình, Hình Sự</span>
                  </a>
                </div>
                <div className="related-item">
                  <img
                    src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fcinema%2Fs256x384%2Fmomo-cdn-api-220615131921-637908959613939882.jpg&w=384&q=75"
                    alt="pic"
                  />
                  <a href="#">
                    <div className="age">13+</div>
                    <div className="related-title">
                      Thám Tử Lừng Danh Conan: Nàng Dâu Halloween
                    </div>
                    <span>Hoạt Hình, Hình Sự</span>
                  </a>
                </div>
                <div className="related-item">
                  <img
                    src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fcinema%2Fs256x384%2Fmomo-cdn-api-220615131921-637908959613939882.jpg&w=384&q=75"
                    alt="pic"
                  />
                  <a href="#">
                    <div className="age">13+</div>
                    <div className="related-title">
                      Thám Tử Lừng Danh Conan: Nàng Dâu Halloween
                    </div>
                    <span>Hoạt Hình, Hình Sự</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlimTicket;
