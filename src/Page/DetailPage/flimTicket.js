import React from "react";
import "./filmTicket.scss";
import { useSelector, useDispatch } from "react-redux";

function FlimTicket() {
  const { movieDetail } = useSelector((state) => state.movieD);
  console.log(movieDetail);

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
              <div className="cinema">
                <div className="wrapper d-flex justify-content-start">
                  <div className="cinema-btn d-flex justify-content-between align-items-center flex-column ">
                    <div className="cinema-wrapper">
                      <img
                        src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fplacebrand%2Fs%2Fmomo-upload-api-190709165424-636982880641515855.jpg&w=48&q=75"
                        alt="cinema"
                      />
                    </div>
                    <span>CGV</span>
                  </div>
                  {/* <div className="cinema-btn d-flex justify-content-between align-items-center flex-column ">
                    <div className="cinema-wrapper">
                      <img
                        src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fblogscontents%2Fmomo-upload-api-210604170617-637584231772974269.png&w=48&q=75"
                        alt="cinema"
                      />
                    </div>
                    <span>Lotte</span>
                  </div>
                  <div className="cinema-btn d-flex justify-content-between align-items-center flex-column ">
                    <div className="cinema-wrapper">
                      <img
                        src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fcinema%2Fmomo-upload-api-211123095138-637732578984425272.png&w=48&q=75"
                        alt="cinema"
                      />
                    </div>
                    <span>Galaxy</span>
                  </div> */}
                </div>
              </div>
              <div className="cinema-time">
                <div className="address d-flex">
                  <img
                    src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fplacebrand%2Fs%2Fmomo-upload-api-190709165424-636982880641515855.jpg&w=48&q=75"
                    alt="address"
                  />
                  <div className="address-title d-flex flex-column">
                    <h4>Lotte Cộng Hòa</h4>
                    <span>Tầng 7, Cantavil Premier, Số 1 đường cộng hoà</span>
                  </div>
                </div>
                <h3>2D Phụ đề</h3>
                <div className="movie-time">
                  <button>17:00</button>
                  <button>19:00</button>
                  <button>22:00</button>
                  <button>17:00</button>
                  <button>19:00</button>
                  <button>22:00</button>
                </div>
              </div>
              <div className="cinema-time">
                <div className="address d-flex">
                  <img
                    src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fplacebrand%2Fs%2Fmomo-upload-api-190709165424-636982880641515855.jpg&w=48&q=75"
                    alt="address"
                  />
                  <div className="address-title d-flex flex-column">
                    <h4>Lotte Cộng Hòa</h4>
                    <span>Tầng 7, Cantavil Premier, Số 1 đường cộng hoà</span>
                  </div>
                </div>
                <h3>2D Phụ đề</h3>
                <div className="movie-time">
                  <button>17:00</button>
                  <button>19:00</button>
                  <button>22:00</button>
                  <button>17:00</button>
                  <button>19:00</button>
                  <button>22:00</button>
                </div>
              </div>
              <div className="cinema-time">
                <div className="address d-flex">
                  <img
                    src="https://momo.vn/_next/image?url=https%3A%2F%2Fstatic.mservice.io%2Fplacebrand%2Fs%2Fmomo-upload-api-190709165424-636982880641515855.jpg&w=48&q=75"
                    alt="address"
                  />
                  <div className="address-title d-flex flex-column">
                    <h4>Lotte Cộng Hòa</h4>
                    <span>Tầng 7, Cantavil Premier, Số 1 đường cộng hoà</span>
                  </div>
                </div>
                <h3>2D Phụ đề</h3>
                <div className="movie-time">
                  <button>17:00</button>
                  <button>19:00</button>
                  <button>22:00</button>
                  <button>17:00</button>
                  <button>19:00</button>
                  <button>22:00</button>
                </div>
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
