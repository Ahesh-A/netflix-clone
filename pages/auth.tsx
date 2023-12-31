import Input from "@/components/input.component";
import { useState, useCallback } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassowrd] = useState("");
  const [variant, setVariant] = useState("Login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVarinat) =>
      currentVarinat === "Login" ? "Register" : "Login"
    );
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black h-full w-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black px-16 py-16 bg-opacity-70 self-center mt-2 lg: w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'Register' && <Input
                label="UserName"
                onChange={(e: any) => setUserName(e.target.value)}
                id="username"
                type="text"
                value={username}
              />}
              <Input
                label="Email"
                onChange={(e: any) => setEmail(e.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(e: any) => setPassowrd(e.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === 'Register' ? 'Register': 'Login'}
            </button>
            <p className="text-neutral-500 mt-12">
              First time using Netflix?
              <span className="text-white ml-1 hover:underline cursor-pointer "
                onClick = {toggleVariant}
              >
                
                {variant === 'Register'? 'Login' : 'Create new account'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
