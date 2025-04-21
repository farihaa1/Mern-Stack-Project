import React from "react";
import { LoginForm } from "../../components/login-form";
import { ImCross } from "react-icons/im";
import pizza from "../../assets/pizza.png"
import { useNavigate } from "react-router";

const Login = () => {
    const navigate = useNavigate();

    const handleNav =()=>{
        navigate("/")
    }


  return (
    <div className="flex relative min-h-svh flex-col items-center justify-center bg-muted  p-6 md:p-10">
      <div className="fixed z-0 -top-50 blur-[2px]  -left-50"><img src={pizza} alt="" /></div>

      <div onClick={handleNav} className="z-10 hover:scale-  fixed top-10 right-30">
        <ImCross />
      </div>
      <div className="w-full z-10 max-w-sm md:max-w-3xl p-0">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
