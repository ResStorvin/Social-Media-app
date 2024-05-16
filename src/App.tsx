import { Routes, Route } from 'react-router-dom';  // i can wrap everything in main section

import "./globals.css";
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
import { Home } from './_root/pages';
import AuthLayout from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes , everybody will able to see the signUP and signIN*/}  
        <Route element={ <AuthLayout/>}> 
        <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>

        {/* Private Routes, you will be able to see only if ur singIN */}
        <Route element= {<RootLayout/>}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}
export default App;