// RegisterForm.jsx

import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../css/Home.css'
import '../css/register.css';
import { VolunteerContext } from "../context/VolunteerContext";
import { UserMasterContext } from "../context/UserMasterContext";
import BasePath from "../apis/BasePath";
import { InputGroup } from 'reactstrap';

const RegisterForm = () => {
    const { addVolunteers } = useContext(VolunteerContext);
    const { addUserMasters } = useContext(UserMasterContext);
    const [um_seq, setUmSeq] = useState(null);
    const [um_login_id, setUmLoginId] = useState("");
    const [um_password, setUmPassword] = useState("");
    const [um_role, setUmRole] = useState(0);
    const [um_name, setUmName] = useState("");
    // const [um_address, setUmAddress] = useState("");
    const [um_email, setUmEmail] = useState("");
    const [um_mobile_no, setUmMobileNo] = useState("");

    const d = new Date();
    let hour = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let date = d.getDate();
    let mon = d.getMonth() + 1;
    let year = d.getFullYear();
    
    const [dropdownData, setDropdownData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await BasePath.get("/userMasters");
        setDropdownData(response.data.data.User_Masters); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    const submitVolunteer = async (e) => {
        e.preventDefault();

        try {
            const response = await BasePath.post("/volunteers", {
                um_seq,
                um_login_id,
                um_password,
                um_role : 12,
                um_name,
                // um_address,
                um_email,
                um_mobile_no,
                um_created_time: year + "-" + mon + "-" + date + "T" +hour +":" + mins+":" + secs
            }

            );
            // console.log(response.data.data);
            addVolunteers(response.data.data.Volunteers);
            alert('Volunteer Added');
            console.log("Um Sequence = " + um_seq)
            history.push("/");
        } catch (err) {
            alert(err)
            console.log(err);
        }
    };
    const submitEmployee = async (e) => {
        e.preventDefault();

        try {
            const response = await BasePath.post("/userMasters", {
                um_login_id,
                um_password,
                um_role : 11,
                um_name,
                // um_address,
                um_email,
                um_mobile_no,
                um_created_time: year + "-" + mon + "-" + date + "T" +hour +":" + mins+":" + secs
            }

            );
            // console.log(response.data.data);
            addUserMasters(response.data.data.User_Masters);
            alert('User Master Added');
            history.push("/");
        } catch (err) {
            alert(err)
            console.log(err);
        }
    };

    const history = useHistory();
    const handleLogin = () => {
        history.push("/");
    };

    return (
        <>
        <div className="signup-form">
            <form>
                <h2>Registration</h2>


                <div className="card">

                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{
                        alignSelf: "center"
                    }}>
                        <li className="nav-item text-center" style={{
                            paddingRight: "20px"
                        }}>
                        <a className="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Volunteer</a>
                        </li>
                        <li className="nav-item text-center">
                        <a className="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Employee</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="form px-4">

                                <label>Full Name</label>
                                <input type="text" className="form-control" name="um_name" placeholder="Full Name" required 
                                value={um_name}
                                onChange={(e) => setUmName(e.target.value)}
                                />
                                
                                <label> Select Employee </label>
                                <InputGroup  placeholder="Select an User Master">
                                <select className="custom-select"
                                value={um_seq}
                                onChange={(e) => setUmSeq(e.target.value)}
                                
                                >
                                <option class="custom-select" selected disabled>Please select</option>
                                  {dropdownData.map((item) => (
                                    <option 
                                    className="custom-select"
                                    key={item.um_seq}
                                    value={item.um_seq}
                                    >
                                        
                                        {item.um_name +" "+ item.um_email}
                                        
                                    </option>
                                    ))}
                                    
                                </select>
                              </InputGroup>
                              {/* <label>Derived Variable: {um_seq}</label> */}
                                <label>Login ID / Username</label>
                                <input type="text" className="form-control" name="login_id" placeholder="Login ID" required
                                value={um_login_id}
                                onChange={(e) => setUmLoginId(e.target.value)}
                                />
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" required 
                                value={um_password}
                                onChange={(e) => setUmPassword(e.target.value)}
                                />
                                <label>Mobile Number</label>
                                <input type="number" className="form-control" name="mobile_no" placeholder="Mobile No." required
                                value={um_mobile_no}
                                onChange={(e) => setUmMobileNo(e.target.value)}
                                />
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Email" required
                                value={um_email}
                                onChange={(e) => setUmEmail(e.target.value)}
                                />

                                <br></br>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-block" onClick={submitVolunteer}>Register Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="form px-4">

                                <label>Full Name</label>
                                <input type="text" className="form-control" name="um_name" placeholder="Full Name" required 
                                value={um_name}
                                onChange={(e) => setUmName(e.target.value)}
                                />

                                {/* <label>Unique ID</label>
                                <input type="text" className="form-control" name="unique_id" placeholder="Unique ID" required
                                value={um_unique_id}
                                onChange={(e) => setUmUniqueId(e.target.value)}
                                /> */}

                                <label>Login ID</label>
                                <input type="text" className="form-control" name="login_id" placeholder="Login ID" required
                                value={um_login_id}
                                onChange={(e) => setUmLoginId(e.target.value)}
                                />
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Password" required 
                                value={um_password}
                                onChange={(e) => setUmPassword(e.target.value)}
                                />
                                <label>Mobile Number</label>
                                <input type="number" className="form-control" name="um_mobile_no" placeholder="Mobile No." required
                                value={um_mobile_no}
                                onChange={(e) => setUmMobileNo(e.target.value)}
                                />
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Email" required
                                value={um_email}
                                onChange={(e) => setUmEmail(e.target.value)}
                                />
                                <div className="form-group">
                                    <button className="btn btn-lg btn-block" onClick={submitEmployee}>Register Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    Already have an account?
                    <span onClick={handleLogin}> Sign in</span>
                </div>
            </form>
        </div>
    </>
    );
};

export default RegisterForm;