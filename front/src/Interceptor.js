import axios from "axios";
import { useContext, useEffect } from "react";
import { DispatchContext, ModalOptionContext, UserStateContext } from "./App";
import { useNavigate } from "react-router-dom";

const Interceptor = ({ children }) => {
  const dispatch = useContext(DispatchContext);
  const { user } = useContext(UserStateContext);
  const { modalOptions, setModalOptions } = useContext(ModalOptionContext);
  const navigate = useNavigate();

  useEffect(() => {
    // 모든 요청을 가로채서 do something
    const axiosInterceptor = axios.interceptors.request.use((config) => {
      // 요청에 isHandlerEnabled이 있다면 (App.js에서 넣어주고있음)
      if (config.isHandlerEnabled) {
        // 모달 창 옵션을 설정한다
        console.log(config);
        modalOptions({
          state: true,
          description: `Request done successfully: ${config.url}`,
          title: "SUCCESS",
        });
      }
      return config;
    });

    // to do: token 만료되면 튕길 것(레이아웃에 반영하기)
    // --------------- 응답 -----------------------------
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        console.log("✅ 응답: ", response);
        // 403 : 인증 에러 권한 없음
        // 400 : 클라이언트가 잘못된 값 전달
        // 500 : 서버 에러
        return response;
      },
      (error) => {
        // 백엔드에 정확히 물어보기!
        if (error.statusCode === 401 || error.message === "토큰 만료") {
          console.log("error");
          sessionStorage.removeItem("userToken");
          dispatch({ type: "LOGOUT" });
          navigate("/");
        }
        return Promise.reject(error);
      }
    );
    // Clean up interceptors when the component unmounts
    return () => {
      axios.interceptors.request.eject(axiosInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [user, modalOptions, setModalOptions, dispatch, navigate]);
  return children;
};

export { Interceptor };