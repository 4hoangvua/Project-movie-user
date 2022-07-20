import React from "react";
import { useSelector } from "react-redux";
import "./filmDetail.scss";

function FilmDetail() {
  const { movieDetail } = useSelector((state) => state.movieD);
  console.log(movieDetail.maPhim);
  // goi  /api/QuanLyRap/LayThongTinLichChieuPhim nhap (maPhim) de lay du lieu
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-left col-lg-4">
          <div className="content">
            <div className="wrapper">
              <img
                src="https://static.mservice.io/cinema/s256x384/momo-cdn-api-220615131921-637908959613939882.jpg"
                alt="pic"
              />
            </div>
          </div>
        </div>
        <div className="col-right col-lg-8">
          <div className="content">
            <div className="wrapper">
              <div className="name">
                Thám Tử Lừng Danh Conan: Nàng Dâu Halloween
              </div>
              <div className="hastag">
                Conan The Detective: The Bride Of Halloween · 2022 · 111 phút
              </div>
              <h3>Nội dung</h3>
              <div className="content-film">
                Tại Shibuya náo nhiệt mùa Halloween, Thiếu úy Sato Miwako khoác
                lên mình chiếc váy cưới tinh khôi trong tiệc cưới như cổ tích,
                và người đàn ông bên cạnh cô không ai khác ngoài Trung sĩ Takagi
                Wataru. Trong giây phút trọng đại, một nhóm người xấu ập vào tấn
                công, Trung sĩ Takagi liều mình bảo vệ Sato. Anh tai qua nạn
                khỏi, nhưng Sato chết lặng khi nhìn thấy bóng ma Thần Chết trong
                giây phút sinh tử của Takagi. Điều này khiến cô nhớ lại cái chết
                của đồng nghiệp, cũng là người cô từng yêu trước đây, Thanh tra
                Matsuda Jinpei. Cùng lúc này, hung thủ của vụ đánh bom liên tiếp
                mà Matsuda điều tra năm xưa đã vượt ngục thành công. Khi Conan
                tìm đến Furuya Rei (hay Amuro Toru), người bạn cùng khóa với
                Matsuda, cậu được nghe câu chuyện liên quan đến vụ đánh bom với
                kẻ thủ ác mang bí danh "Plamya". Hôn lễ nguy hiểm nhất thế giới,
                buổi dạ hành đẫm máu tại Shibuya vào đêm Halloween sắp sửa bắt
                đầu.
              </div>
              <div className="description">
                <div className="date">
                  <span className="title">Ngay chieu</span>
                  <span>21/07/2022</span>
                </div>
                <div className="category">
                  <span className="title">The loai</span>
                  <span>Anime</span>
                </div>
                <div className="country">
                  <span className="title">Quoc gia</span>
                  <span>Nhat Ban</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmDetail;
