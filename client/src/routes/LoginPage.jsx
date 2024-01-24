import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import '../css/login.css';
import { VolunteerContext } from '../context/VolunteerContext';
import { UserMasterContext } from '../context/UserMasterContext';
import BasePath from '../apis/BasePath';
import Header from './Header';

const LoginPage = () => {
  const { volunteers, setVolunteers } = useContext(VolunteerContext);
  const { userMasters, setUserMasters } = useContext(UserMasterContext);

  var login_um_seq, login_vol_id = "";

  const [um_login_id, setUmLoginId] = useState('');
  const [um_password, setUmPassword] = useState('');

  const { um_seq } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userResponse, volunteerResponse] = await Promise.all([
          BasePath.get(`/userMasters`),
          BasePath.get(`/volunteers`),
        ]);

        setUserMasters(userResponse.data.data.User_Masters);
        setVolunteers(volunteerResponse.data.data.Volunteers);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [um_seq, setUserMasters, setVolunteers]);

  const handleLogin = () => {
    const isUserMasterValid = userMasters.find(
      (user) => user.um_login_id === um_login_id && user.um_password === um_password,
    );

    const isVolunteerValid = volunteers.find(
      (volunteer) => volunteer.um_login_id === um_login_id && volunteer.um_password === um_password,
    );
    
      
    if (isUserMasterValid) {
      login_um_seq = isUserMasterValid.um_seq
      localStorage.setItem("user-info",JSON.stringify(isUserMasterValid))
    } else if (isVolunteerValid) {
      login_vol_id = isVolunteerValid.vol_id
      localStorage.setItem("user-info",JSON.stringify(isVolunteerValid))
    }

    if (isUserMasterValid) {
      history.push(`/userMasters/${login_um_seq}`);
    }else if(isVolunteerValid){
      history.push(`/volunteers/${login_vol_id}`);
    } 
    else {
      window.alert("Invalid Login credentials")
      console.log('Invalid login credentials');
      // Optionally, you can reset the input fields or show an error message to the user
    }
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <>
    <Header/>
    <div className="inner-container">
      <h1>Login</h1>
      <hr />

      <div className="row">
        <div className="col-sm">
          <label>Staff ID : </label>
          <input 
            type="text"
            className="form-control"
            value={um_login_id}
            onChange={(e) => setUmLoginId(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm">
          <label>Password : </label>
          <input
            type="password"
            className="form-control"
            name="password"
            required
            value={um_password}
            onChange={(e) => setUmPassword(e.target.value)}
          />
        </div>
      </div>

      <div>
        <div className="row">
        <div className="col-sm">
          <button className="register" onClick={handleRegister}>Create an Account</button>
        </div>
        <div className="col-sm">
          <button onClick={handleLogin}>Login</button>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
