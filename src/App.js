import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import DetailTour from "./pages/DetailTour";
import Payment from "./pages/Payment";
import PaymentPending from "./pages/PaymentPending";
import Profile from "./pages/Profile";
import IncomeTrip from "./pages/IncomeTrip";
import PrivateRootUser from "./components/PrivateRootUser";
import PrivateRootAdmin from "./components/PrivateRootAdmin";
import { useContext, useEffect, useState } from "react";
import ListTransaksi from "./pages/ListTransaksi";
import AddTrip from "./pages/AddTrip";

import { API, setAuthToken } from "./config/api";
import { UserContext } from "./context/userContext";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  // let navigate = useNavigate();
  // Mengambil data Login dari Local Storage

  const role = localStorage.getItem("role");
  const [modalCountry, setModalCountry] = useState(false);

  const [Number, SetNumber] = useState(0);

  const [DataPay, SetDataPay] = useState([]);

  const [state, dispatch] = useContext(UserContext);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 400) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      console.log(payload);
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/detail/:id"
            element={<DetailTour Number={Number} SetNumber={SetNumber} />}
          />
          <Route
            path="/"
            element={<Home Number={Number} DataPay={DataPay} />}
          />

          {/* Private Rooting untuk User */}
          <Route element={<PrivateRootUser dataLog={role} />}>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/payment/:id"
              element={
                <Payment
                  Number={Number}
                  DataPay={DataPay}
                  SetDataPay={SetDataPay}
                />
              }
            />
            <Route
              path="/paymentpending"
              element={<PaymentPending DataPay={DataPay} />}
            />
          </Route>

          {/* Private Rooting untuk Admin */}
          <Route element={<PrivateRootAdmin dataLog={role} />}>
            <Route path="/transaksilist" element={<ListTransaksi />} />
            <Route
              path="/incometrip"
              element={
                <IncomeTrip
                  modalCountry={modalCountry}
                  setModalCountry={setModalCountry}
                />
              }
            />
            <Route path="/addtrip" element={<AddTrip />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
