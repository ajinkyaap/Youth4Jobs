import React, { useState, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { VolunteerContext } from "../../context/VolunteerContext";

const AddVolunteer = () => {
  const { addVolunteers } = useContext(VolunteerContext);
  const [vol_id, setVolId] = useState(0);
  const [um_seq, setUmSeq] = useState(0);
  const [um_login_id, setUmLoginId] = useState("");
  const [um_password, setUmPassword] = useState("");
  const [um_role, setUmRole] = useState(12);
  const [um_name, setUmName] = useState("");
  const [um_address, setUmAddress] = useState("");
  const [um_email, setUmEmail] = useState("");
  const [um_unique_id, setUmUniqueId] = useState("");
  const [um_id_type, setUmIdType] = useState(0);
  const [um_dept, setUmDept] = useState(0);
  const [um_login_sts, setUmLoginSts] = useState(0);
  const [um_created_time, setUmCreatedTime] = useState("");
  const [um_last_login, setUmLastLogin] = useState("");
  const [um_ln_attempts, setUmLnAttempts] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await BasePath.post("/volunteer", {
        vol_id,
        um_seq,
        um_login_id,
        um_password,
        um_role,
        um_name,
        um_address,
        um_email,
        um_unique_id,
        um_id_type,
        um_dept,
        um_login_sts,
        um_created_time,
        um_last_login,
        um_ln_attempts
      }

      );
      addVolunteers(response.data.data.Volunteers);
      alert('Volunteer Added');
    } catch (err) {
      alert(err)
      console.log(err);
    }



  };
  return (
    <>
    <h4> Add A Volunteer</h4>
        <div className="mb-4" >
          <form action="">
            <div className="form-row">
              <div className="col">
              <label class="form-label">Set UM Seq Num</label>
                <input
                  value={um_seq}
                  onChange={(e) => setUmSeq(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="User Seq Number"
                  required
                />
              </div>
              <div className="col">
                <label class="form-label">Set UM Login</label>
                <input
                  value={um_login_id}
                  onChange={(e) => setUmLoginId(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="um_login_id"
                  required
                />
              </div>
              <div className="col">
              <label class="form-label">Set Password</label>
                <input
                  value={um_password}
                  onChange={(e) => setUmPassword(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="um_password"
                  required
                />
              </div>
              <div className="col">
              <label class="form-label">Role</label>
                <input
                  value="12"
                  onChange={(e) => setUmRole(e.target.value)}
                  className="form-control"
                  type="number"
                  placeholder="um_role"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
            <label class="form-label">Name</label>
                <input
                  value={um_name}
                  onChange={(e) => setUmName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Um Name"
                  required
                />
              </div>
              <div className="col">
              <label class="form-label">Address</label>
                <input
                  value={um_address}
                  onChange={(e) => setUmAddress(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="um_address"
                  required
                />
              </div>
              <div className="col">
              <label class="form-label">Email</label>
                <input
                  value={um_email}
                  onChange={(e) => setUmEmail(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="um_email"
                />
              </div>
              <div className="col">
              <label class="form-label">Unique ID</label>
                <input
                  value={um_unique_id}
                  onChange={(e) => setUmUniqueId(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="um_unique_id"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
              <label class="form-label">UM ID</label>
                <input
                  value={um_id_type}
                  onChange={(e) => setUmIdType(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="um_id_type"
                />
              </div>
              <div className="col">
              <label class="form-label">Department</label>
                <input
                  value={um_dept}
                  onChange={(e) => setUmDept(e.target.value)}
                  className="form-control"
                  type="number"
                  placeholder="um_dept"
                />
              </div>
              <div className="col">
              <label class="form-label">Login Status</label>
                <input
                  value={um_login_sts}
                  onChange={(e) => setUmLoginSts(e.target.value)}
                  className="form-control"
                  type="number"
                  placeholder="um_login_sts"
                />
              </div>
              <div className="col">
              <label class="form-label">Login Created Time</label>
                <input
                  value={um_created_time}
                  onChange={(e) => setUmCreatedTime(e.target.value)}
                  className="form-control"
                  type="date"
                  placeholder="um_created_time"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col">
              <label class="form-label">Last Login</label>
                <input
                  value={um_last_login}
                  onChange={(e) => setUmLastLogin(e.target.value)}
                  type="date"
                  className="form-control"
                  placeholder="um_last_login"
                />
              </div>
              <div className="col">
              <label class="form-label">Um Ln Attempts</label>
                <input
                  value={um_ln_attempts}
                  onChange={(e) => setUmLnAttempts(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="um_ln_attempts"
                />
              </div>
              <div className="col">
              <label class="form-label">Vol Id</label>
                <input
                  value={vol_id}
                  onChange={(e) => setVolId(e.target.value)}
                  className="form-control"
                  type="text"
                  placeholder="Vol ID"
                />
              </div>
              <div className="col text-center">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary"
                style={{

                  marginTop: "25px",
                  width: "150px"
                }}
                
              >
                Add
              </button>
              </div>
            </div>
          </form>
        </div>
    </>
  );
};

export default AddVolunteer;
