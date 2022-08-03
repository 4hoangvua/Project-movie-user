import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import {
  Container,
  ContainerLogin,
  CLogin,
  Form,
  CClose,
  Close,
  Titile,
  LoginName,
  Name,
  LoginPassword,
  Password,
  Button,
  Footer,
  SignIn,
  ErrorSpan,
  LoginNameAccount,
  LoginPhone,
  LoginEmail,
  LogoEmail,
  LogoAccount,
  LogoName,
  LogoPhone,
  LogoPassword,
} from "./RegisterElement";
import { userRegister } from "../../reducers/singin";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
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
    maNhom: string().default("GP01"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    try {
      await dispatch(userRegister(values)).unwrap();
      navigate("/signin");
    } catch (error) {}
  };
  return (
    <Container>
      <ContainerLogin>
        <CLogin>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <CClose to="/">
              <Close />
            </CClose>
            <Titile>Login In Using Email</Titile>
            <LoginNameAccount>
              <LogoAccount />
              <Name
                type="text"
                placeholder="Username"
                {...register("taiKhoan")}
              />
              {errors.taiKhoan && (
                <ErrorSpan>{errors.taiKhoan?.message}</ErrorSpan>
              )}
            </LoginNameAccount>
            <LoginPassword>
              <LogoPassword />
              <Password
                type="password"
                placeholder="Passord"
                {...register("matKhau")}
              />
              {errors.matKhau && (
                <ErrorSpan>{errors.matKhau?.message}</ErrorSpan>
              )}
            </LoginPassword>
            <LoginEmail>
              <LogoEmail />
              <Name type="email" placeholder="Email" {...register("email")} />
              {errors.email && <ErrorSpan>{errors.email?.message}</ErrorSpan>}
            </LoginEmail>
            <LoginPhone>
              <LogoPhone />
              <Name type="text" placeholder="Phone" {...register("soDt")} />
              {errors.soDt && <ErrorSpan>{errors.soDt?.message}</ErrorSpan>}
            </LoginPhone>
            <LoginName>
              <LogoName />
              <Name
                type="text"
                placeholder="First name"
                {...register("hoTen")}
              />
              {errors.hoTen && <ErrorSpan>{errors.hoTen?.message}</ErrorSpan>}
            </LoginName>
            <Button>SignUp</Button>
            <Footer>
              You have already account ?
              <SignIn to="/signin"> Signin now</SignIn>
            </Footer>
          </Form>
        </CLogin>
      </ContainerLogin>
    </Container>
  );
};

export default Register;
