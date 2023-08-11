import { APP_ROUTES } from './routes.ts'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx'
import Login from '../pages/Login/Login.tsx'
import Register from '../pages/Register/Register.tsx'
import ValidateAccount from '../pages/ValidateAccount/ValidateAccount.tsx'
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword.tsx'
import Properties from '../pages/Properties/Properties.tsx'
import Footer from '../components/organisms/Footer.tsx'

export default function RouterElement(): JSX.Element {
  const location = useLocation()
  return (
    <>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.REGISTER} element={<Register />} />
        <Route
          path={APP_ROUTES.VALIDATE_ACCOUNT}
          element={<ValidateAccount />}
        />
        <Route path={APP_ROUTES.FORGOT_PASSWORD} element={<ForgetPassword />} />
        <Route path={APP_ROUTES.PROPERTIES} element={<Properties />} />
      </Routes>
      {location.pathname !==
        (APP_ROUTES.LOGIN ||
          APP_ROUTES.REGISTER ||
          APP_ROUTES.RESET_PASSWORD) && <Footer />}
    </>
  )
}
