import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { VolunteerContext } from "../../context/VolunteerContext";
import BasePath from "../../apis/BasePath";
import { CandidateContext } from "../../context/CandidateContext";
// import StarRating from "../components/StarRating";
// import Reviews from "../ components/Reviews";
// import AddReview from "../components/AddReview";

const VolunteerDetailPage = () => {
  const { vol_id } = useParams();
  // const { um_seq } = useParams();
  const { selectedVolunteer, setSelectedVolunteer } = useContext(
    VolunteerContext
  );
  let history = useHistory();
  const { candidates, setCandidates } = useContext(CandidateContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/volunteer/${vol_id}`);
        setSelectedVolunteer(response.data.data);
        console.log("User Details " +response);


        const userCandidateDataResponse = await BasePath.get(`/userCandidates/${vol_id}`);
        setCandidates(userCandidateDataResponse.data.data.userCandidateData);
        console.log("User Volunteer Data " + userCandidateDataResponse.data.data);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setCandidates]);

  //UserCandidateData Fetch
  
  // let history = useHistory();
  // useEffect(() => {
  //   const fetchData1 = async () => {
  //     try {
  //       const userCandidateDataResponse = await BasePath.get(`/userCandidates/${um_seq}`);
  //       console.log(userCandidateDataResponse.data.data);
  //       setCandidates(userCandidateDataResponse.data.data.userCandidateData);
  //       // console.log(setCandidates);
  //     } catch (err) {}
  //   };

  //   fetchData1();
  // }, [setCandidates]);
  // console.log("Outside UseEfffect : "+ setCandidates);

  const handleDelete = async (e, candidate_id) => {
    e.stopPropagation();
    try {
      // const response = 
      await BasePath.delete(`/candidates/${candidate_id}`);
      setCandidates(
        candidates.filter((candidate) => {
          return candidate.candidate_id !== candidate_id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, candidate_id) => {
    e.stopPropagation();
    history.push(`/candidates/${candidate_id}/update`);
  };

  const handleCandidateSelect = (candidate_id) => {
    history.push(`/candidates/${candidate_id}`);
  };

  return (
    <>

    {/* User Details */}
    <div>
      {selectedVolunteer && (
        <>
          <h4>
            {selectedVolunteer.Volunteers.um_name}'s Data
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-lg">
                  <h6>UM Sequence : </h6>
              </div>
              <div className="col-lg">
                {selectedVolunteer.Volunteers.um_seq}
              </div>
                <div className="col-lg">
                  <h6>UM Login ID : </h6>
              </div>
              <div className="col-lg">
              {selectedVolunteer.Volunteers.um_login_id}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Role : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_role}</div>
                <div className="col-lg">
                  <h6>UM Name : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_name}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Address : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_address}</div>
                <div className="col-lg">
                  <h6>UM Email ID : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_email}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Unique ID : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_unique_id}</div>
                <div className="col-lg">
                  <h6>UM Department : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_dept}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>UM Login Status : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_login_sts}</div>
                <div className="col-lg">
                  <h6>UM Created Time: </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_created_time}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                <div className="col"></div>
                  <h6>UM Last Login : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_last_login}</div>
                <div className="col-lg">
                  <h6>UM Ln Attempts : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_ln_attempts}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                <div className="col"></div>
                  <h6>Volunteer Id : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_last_login}</div>
                <div className="col-lg">
                  <h6>UM Ln Attempts : </h6>
              </div>
              <div className="col-lg">{selectedVolunteer.Volunteers.um_ln_attempts}</div>
            </div>
          </div>
          

          {/* User's Candidate Data */}
          <h4>
          {selectedVolunteer.Volunteers.um_name}'s Candidate Data
          </h4>
          <div className="table-responsive">
            <table className="table table-sm table-striped table-hover table-bordered table-condensed"
            
            style={{
              position: "relative"
            }}>
              <thead className =" thead-dark">
                <tr className="bg-primary">
                  <th scope="col">candidate_id</th>
                  <th scope="col">Sales Rep Emp Num</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Mother's Name</th>
                  <th scope="col">Father's Name</th>
                  <th scope="col">Spouse Name</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Maritial Status</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Alternate Mobile</th>
                  <th scope="col">Fax</th>
                  <th scope="col">Email</th>
                  <th scope="col">is Disable</th>
                  <th scope="col">Education Qualification</th>
                  <th scope="col">Occupation</th>
                  <th scope="col">PAN</th>
                  <th scope="col">Aadhar</th>
                  <th scope="col">Passport</th>
                  <th scope="col">Registration Date</th>
                  <th scope="col">Disability</th>
                  <th scope="col">Type Disability</th>
                  <th scope="col">Percent Disability</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {candidates &&
                  candidates.map((candidate) => {
                    return (
                      <tr
                        onClick={() => handleCandidateSelect(candidate.candidate_id)}
                          key={candidate.candidate_id}
                      >
                        <td>{candidate.candidate_id}</td>
                        <td>{candidate.sales_rep_emp_num}</td>
                        <td>{candidate.cust_first_name}</td>
                        <td>{candidate.cust_last_name}</td>
                        <td>{candidate.cust_mother_name}</td>
                        <td>{candidate.cust_father_name}</td>
                        <td>{candidate.cust_spouse_name}</td>
                        <td>{candidate.cust_dob}</td>
                        <td>{candidate.cust_gender}</td>
                        <td>{candidate.cust_maritial_sts}</td>
                        <td>{candidate.cust_phone}</td>
                        <td>{candidate.cust_mobile}</td>
                        <td>{candidate.cust_alt_mobile}</td>
                        <td>{candidate.cust_fax}</td>
                        <td>{candidate.cust_email}</td>
                        <td>{candidate.cust_is_disable}</td>
                        <td>{candidate.cust_edu_qualification}</td>
                        <td>{candidate.cust_occupation}</td>
                        <td>{candidate.cust_pan}</td>
                        <td>{candidate.cust_aadhar}</td>
                        <td>{candidate.cust_passport}</td>
                        <td>{candidate.cust_reg_date}</td>
                        <td>{candidate.cust_disability}</td>
                        <td>{candidate.cust_type_disability}</td>
                        <td>{candidate.cust_percent_disability}</td>
                        
                        <td>
                          <button
                            onClick={(e) => handleUpdate(e, candidate.candidate_id)}
                            className="btn btn-warning"
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={(e) => handleDelete(e, candidate.candidate_id)}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                {/* <tr>
                  <td>mcdonalds</td>
                  <td>New YOrk</td>
                  <td>$$</td>
                  <td>Rating</td>
                  <td>
                    <button className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>

                <tr>
                  <td>mcdonalds</td>
                  <td>New YOrk</td>
                  <td>$$</td>
                  <td>Rating</td>
                  <td>
                    <button className="btn btn-warning">Update</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>

    
    </>
  );
};

export default VolunteerDetailPage;
