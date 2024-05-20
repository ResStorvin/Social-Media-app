import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to ="/" />
      ) : (
          <>
            <section className="flex flex-1 justify-center items-center flex-col
            py-10">
              <Outlet /> {/* has to be on the page we are in such as SignUP or SignIn */}
            </section>
            
            <img src="/assets/images/side-img.svg"
              alt="logo"
              className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
            />
          </>
      )}
    </>
  )
}
export default AuthLayout;