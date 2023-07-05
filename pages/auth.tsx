import Input from "@/components/input.component";
const Auth = () => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-center bg-cover">
      <div className="bg-black h-full w-full bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" alt="logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black px-16 py-16 bg-opacity-70 self-center mt-2 lg: w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
                Sign in
            </h2>
            <Input />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
