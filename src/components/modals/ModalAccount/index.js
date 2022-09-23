import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import dayjs from "dayjs";
import {
  CModalAccount,
  ReactAccount,
  ContenAccount,
  ContentHistory,
  LogoAccount,
  Name,
  Row,
  Col,
  Button,
  LogoPassword,
  LogoName,
  LogoEmail,
  LogoPhone,
  ErrorSpan,
  LogoUser,
  CloseModalButton,
  Background,
  CColHis,
} from "./ModalAccountElement";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getInfoUser,
  resetToken,
  updateInfoUser,
} from "../../../reducers/singin";
const ModalAccount = () => {
  const { taiKhoan } = useParams();
  const { infoUser, userLogin } = useSelector((state) => state.sig);
  const [isPassword, setIsPassword] = useState(true);
  const dispatch = useDispatch();
  const isRef = useRef(false);
  useEffect(() => {
    dispatch(getInfoUser(taiKhoan));
  }, [userLogin]);
  useEffect(() => {
    if (!isRef.current) {
      isRef.current = true;
      return;
    }

    setValue("taiKhoan", infoUser.taiKhoan);
    setValue("email", infoUser.email);
    setValue("matKhau", infoUser.matKhau);
    setValue("hoTen", infoUser.hoTen);
    setValue("soDt", infoUser.soDT);
    setValue("maLoaiNguoiDung", infoUser.maLoaiNguoiDung);
  }, [infoUser]);
  useEffect(() => {
    return () => {
      dispatch(resetToken());
    };
  }, []);
  const schema = object({
    taiKhoan: string()
      .required("Tài khoản không được để trống")
      .matches(
        /^[a-zA-Z0-9]{5,}$/,
        "Tài khoản chỉ gồm chữ hoa, thường, số và ít nhất 5 kí tự"
      ),
    matKhau: string()
      .required("Mật khẩu không được để trống")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Mật khẩu ít nhất một chữ cái, một số và ít nhất 8 kí tự"
      ),
    email: string()
      .required("Email không được để trống")
      .email("Email không đúng định dạng"),
    soDt: string()
      .required("Phải là số")
      .matches(/^[0-9]+$/, "Must be only digits")
      .max(11, "Không quá 11 số"),
    hoTen: string().required("Tên không được để trống"),
    maLoaiNguoiDung: string().required("Tên không được để trống"),
    maNhom: string().default("GP01"),
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const onSubmit = async (values) => {
    dispatch(updateInfoUser(values));
  };

  if (Object.keys(infoUser).length === 0) return;
  return (
    <>
      <Background>
        <CModalAccount>
          <NavLink to="/">
            <CloseModalButton className="fixed-bottom" />
          </NavLink>
          <ReactAccount>
            <ContenAccount>
              <h3 className="text-center mt-2">Cài đặt tài khoản chung</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <Col>
                    <LogoAccount />
                    <Name
                      type="text"
                      placeholder="Account"
                      {...register("taiKhoan")}
                    />
                    {errors.taiKhoan && (
                      <ErrorSpan>{errors.taiKhoan?.message}</ErrorSpan>
                    )}
                  </Col>
                  <Col>
                    <LogoPassword />
                    <Name
                      type={isPassword ? "password" : "text"}
                      placeholder="Password"
                      {...register("matKhau")}
                    />
                    <input
                      type="checkbox"
                      onClick={() => setIsPassword(!isPassword)}
                    />
                    <small className="fs-6"> Show password</small>
                    {errors.matKhau && (
                      <ErrorSpan>{errors.matKhau?.message}</ErrorSpan>
                    )}
                  </Col>
                  <Col>
                    <LogoName />
                    <Name
                      type="text"
                      placeholder="First name"
                      {...register("hoTen")}
                    />
                    {errors.hoTen && (
                      <ErrorSpan>{errors.hoTen?.message}</ErrorSpan>
                    )}
                  </Col>
                  <Col>
                    <LogoEmail />
                    <Name
                      type="email"
                      placeholder="Email"
                      {...register("email")}
                    />
                    {errors.email && (
                      <ErrorSpan>{errors.email?.message}</ErrorSpan>
                    )}
                  </Col>
                  <Col>
                    <LogoPhone />
                    <Name
                      type="text"
                      placeholder="Number phone"
                      {...register("soDt")}
                    />
                    {errors.soDt && (
                      <ErrorSpan>{errors.soDt?.message}</ErrorSpan>
                    )}
                  </Col>
                  <Col>
                    <LogoUser />
                    <Name
                      type="text"
                      placeholder="Loại người dùng"
                      value="Custom"
                      disabled
                    />
                  </Col>
                  <Col className="d-flex justify-content-end">
                    <Button>Update</Button>
                  </Col>
                </Row>
              </form>
            </ContenAccount>
            <ContentHistory className="text-center">
              <h3 className=" w-100">Lịch sử đặt vé</h3>
              <CColHis>
                <div className="row d-md-flex text-dark justify-content-md-center w-100">
                  {infoUser?.thongTinDatVe.map((user, index) => {
                    return (
                      <div
                        className="col-sm-4 card p-2 text-center"
                        key={user.maVe}
                      >
                        <div>
                          <img
                            className="card-img-top "
                            src={user.hinhAnh}
                            alt={user.name}
                            style={{ width: "10rem", height: "12rem" }}
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title text-danger">
                            Tên Phim: {user.tenPhim}
                          </h5>
                          <h6 className="text-dark">
                            Ngày đặt:{" "}
                            {dayjs(user.ngayDat).format("DD/MM/YYYY ~ h:mm A")}
                          </h6>
                          <p className="text-success">
                            Thời lượng: {user.thoiLuongPhim}, Giá vé:{" "}
                            {user.giaVe}
                          </p>
                          {user.danhSachGhe.map((lt, index) => {
                            if (index === 0) {
                              return (
                                <div className="text-warning" key={index}>
                                  <h4>Tên rạp: {lt.tenHeThongRap}</h4>
                                  <p>{lt.tenRap}</p>
                                  <span className="text-primary">
                                    Ghế {lt.tenGhe},
                                  </span>
                                </div>
                              );
                            } else {
                              return (
                                <span className="text-primary" key={index}>
                                  Ghế {lt.tenGhe},
                                </span>
                              );
                            }
                          })}

                          <a href="#" className="btn btn-primary d-block">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CColHis>
            </ContentHistory>
          </ReactAccount>
        </CModalAccount>
      </Background>
    </>
  );
};

export default ModalAccount;
