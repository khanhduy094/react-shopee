import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../../assets/styles/ultis";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import InputPassWord from "../../../components/InputPassword/InputPassWord";
import InputText from "../../../components/InputText/InputText";
import { path } from "../../../constants/path";
import { rules } from "../../../constants/rules";
import * as S from "./register.style";

export default function Register() {
  const {
    handleSubmit,
    formState: { errors },
    getValues,
    control,

  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmedPassword: "",
    },
  });



  const handleRegister = async (data) => {
    

  };

  // useEffect(() =>  {
  //   http.get('products').then(res => {
  //     console.log(res);
  //   })
  // }, [])

  return (
 
      <S.StyleRegister>
        <S.Container className="container">
          <S.Banner></S.Banner>
          <S.FormWrapper>
            <S.FormTitle>Đăng ký</S.FormTitle>
            <S.Form noValidate onSubmit={handleSubmit(handleRegister)}>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={getValues("email")}
                      onChange={field.onChange}
                    />
                  )}
                />
                <ErrorMessage name="email" errors={errors} />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassWord
                      name="password"
                      placeholder="Mật khẩu"
                      value={getValues("password")}
                      onChange={field.onChange}
                    />
                  )}
                />
                <ErrorMessage name="password" errors={errors} />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="confirmedPassword"
                  control={control}
                  rules={{
                    ...rules.confirmedPassword,
                    validate: {
                      samePassword: (value) =>
                        value === getValues("password") ||
                        "Nhập lại mật khẩu không khớp",
                    },
                  }}
                  render={({ field }) => (
                    <InputPassWord
                      name="confirmedPassword"
                      placeholder="Nhập lại mật khẩu"
                      value={getValues("comfirmedPassword")}
                      onChange={field.onChange}
                    />
                  )}
                />
                <ErrorMessage name="confirmedPassword" errors={errors} />
              </S.FormControl>
              <S.FormButton>
                <Button type="submmit">Đăng ký</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn đã có tài khoản?</span>
              <Link to={path.login} className="link">
                Đăng nhập{" "}
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.Container>
      </S.StyleRegister>
    
  );
}
