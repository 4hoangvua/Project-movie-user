import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userLoginActive } from "../../reducers/singin";
import {
  Container,
  ContainerLogin,
  CLogin,
  Form,
  CClose,
  Close,
  Titile,
  LoginName,
  LogoLogin,
  LogoPassword,
  Name,
  LoginPassword,
  Password,
  Button,
  Footer,
  SingUp,
  ErrorSpan,
} from "./LoginElement";
const Login = () => {
  const { userLogin } = useSelector((state) => state.sig);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
  });
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(userLoginActive(values));
  };
  return (
    <Container>
      {userLogin && <Navigate to="/" replacet={true} />}
      <ContainerLogin>
        <CLogin>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <CClose to="/">
              <Close />
            </CClose>
            <Titile>Login</Titile>
            <LoginName>
              <LogoLogin />
              <Name
                type="text"
                placeholder="Username"
                {...register("taiKhoan", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9]{5,}$/,
                    message:
                      "Tài khoản bao gồm các kí tự hoa, thường, số và ít nhất 5 kí tự",
                  },
                })}
              />
              {errors.taiKhoan && (
                <ErrorSpan>{errors.taiKhoan?.message}</ErrorSpan>
              )}
            </LoginName>
            <LoginPassword>
              <LogoPassword />
              <Password
                type="password"
                placeholder="Passord"
                {...register("matKhau", {
                  required: {
                    value: true,
                    message: "Mật khẩu không được để trống",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "Mật khẩu ít nhất một chữ cái, một số và ít nhất 8 kí tự",
                  },
                })}
              />
              {errors.matKhau && (
                <ErrorSpan>{errors.matKhau?.message}</ErrorSpan>
              )}
            </LoginPassword>
            <Button>Login</Button>
            <Footer>
              Don't have taiKhoan yet?
              <SingUp to="/register"> Signup now</SingUp>
            </Footer>
          </Form>
        </CLogin>
      </ContainerLogin>
    </Container>
  );
};

export default Login;
