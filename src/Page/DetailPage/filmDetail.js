import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./filmDetail.scss";

// import { getMovieDetail } from "../../reducers/movieDetail";

function FilmDetail() {
  const { movieDetail } = useSelector((state) => state.movieD);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-left col-lg-4">
          <div className="content">
            <div className="wrapper">
              <img src={movieDetail.hinhAnh} alt="pic" />
            </div>
          </div>
        </div>
        <div className="col-right col-lg-8">
          <div className="content">
            <div className="wrapper">
              {movieDetail.hot ? <div className="film-hot">Hot</div> : ""}
              <div className="name">{movieDetail.tenPhim}</div>
              <div className="hastag">{movieDetail.biDanh}</div>
              <div className="rate-film d-flex">
                <span className="rate-film-title">IMDb</span>
                <span className="rate-num">
                  <span className="mom">{movieDetail.danhGia}</span>/10
                </span>
              </div>
              <h3>Nội dung</h3>
              <div className="content-film">{movieDetail.moTa}</div>
              <div className="description">
                <div className="date">
                  <span className="title">Ngay chieu</span>
                  <span>{movieDetail.ngayKhoiChieu}</span>
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
