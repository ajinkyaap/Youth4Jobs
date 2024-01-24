import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { VolunteerContext } from "../../context/VolunteerContext";
import BasePath from "../../apis/BasePath";
import { CandidateContext } from "../../context/CandidateContext";
import Header from "../../routes/Header";
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

const VolunteerDetailPage = () => {
  const { vol_id } = useParams();
  const { selectedVolunteer, setSelectedVolunteer } = useContext(
    VolunteerContext
  );
  let history = useHistory();
  const { candidates, setCandidates } = useContext(CandidateContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/volunteers/${vol_id}`);
        setSelectedVolunteer(response.data.data);


        const userCandidateDataResponse = await BasePath.get(`/userCandidates/${vol_id}`);
        setCandidates(userCandidateDataResponse.data.data.userCandidateData);
        console.log(`Candidates for ${vol_id}`, candidates)
        let table = new DataTable('#CandidateTable', {
          "language":{
            "zeroRecords": "No Candidate found"
            },
            "processing": true,
            "scrollX": true,
            "scrollY": true,
            "fixedColumns": true,
            "scrollCollapse": true,
          // responsive: true,
          
      });
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [setCandidates]);

  

  const handleDelete = async (e, candidate_id) => {
    e.stopPropagation();
    try {
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

  const handleAddCandidate = () => {
    history.push(`/volunteers/${vol_id}/addCandidate`);
  };

  return (
    <>
    <Header/>
      <div className="container">
        <div className="mb-4">
          <form action="">
            <div className="form-row">
              <div className="container mt-0">
                <div className="row mt-1">
                  <div className="col-lg"></div>
                  <div className="col-lg"></div>
                  <div className="col-lg"></div>
                  <div className="col-lg"></div>
                  <div className="col-lg">
                    <button onClick={handleAddCandidate}>Add Candidate</button>
                  </div>
                </div>

                <div className="accordion accordion-flush " id="accordionExampleVolunteer">
                  {selectedVolunteer && (
                    <>
                      <h4 id="VolunteerData" data-toggle="collapse" data-target="#volunteerData" aria-expanded="true" aria-controls="volunteerData">
                        {selectedVolunteer.Volunteers.um_name}'s Data</h4>
                      <div className="card">
                        <div id="volunteerData" className="collapse show" aria-labelledby="volunteerData" data-parent="#accordionExampleVolunteer">
                          <div className="card-body">
                            <div className="container">

                              <div className="row">

                                <div className="col-lg">
                                  <h6>Name : </h6>
                                </div>
                                <div className="col-lg">{selectedVolunteer.Volunteers.um_name}</div>
                                <div className="col-lg">
                                  <h6>Email ID : </h6>
                                </div>
                                <div className="col-lg">{selectedVolunteer.Volunteers.um_email}</div>
                              </div>
                              <div className="row">
                                <div className="col-lg">
                                  <h6>Address : </h6>
                                </div>
                                <div className="col-lg">{selectedVolunteer.Volunteers.um_address}</div>

                                <div className="col-lg"></div>
                                <div className="col-lg"></div>
                              </div>
                              <div className="row">

                              </div>

                              <div className="row">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      </>
                  )}
                  </div>


                      {/* User's Candidate Data */}
                      <h4>
                        Candidate Data
                      </h4>
                      
                      <div className="table-responsive">
                        <table className="table table-striped table-hover row-border" id="CandidateTable">
                          <thead className=" thead-dark">
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Date of Birth</th>
                              <th scope="col">Gender</th>
                              <th scope="col">Maritial Status</th>
                              <th scope="col">Phone</th>
                              <th scope="col">Mobile</th>
                              <th scope="col">Alternate Mobile</th>
                              <th scope="col">Fax</th>
                              <th scope="col">Email</th>
                              <th scope="col">Education Qualification</th>
                              <th scope="col">Occupation</th>
                              <th scope="col">PAN</th>
                              <th scope="col">Aadhar</th>
                              <th scope="col">Passport</th>

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

                                    <td>{candidate.candidate_name}</td>
                                    <td>{candidate.candidate_dob}</td>
                                    <td>{candidate.candidate_gender}</td>
                                    <td>{candidate.candidate_maritial_sts}</td>
                                    <td>{candidate.candidate_phone}</td>
                                    <td>{candidate.candidate_mobile}</td>
                                    <td>{candidate.candidate_alt_mobile}</td>
                                    <td>{candidate.candidate_fax}</td>
                                    <td>{candidate.candidate_email}</td>
                                    <td>{candidate.candidate_edu_qualification}</td>
                                    <td>{candidate.candidate_occupation}</td>
                                    <td>{candidate.candidate_pan}</td>
                                    <td>{candidate.candidate_aadhar}</td>
                                    <td>{candidate.candidate_passport}</td>

                                    {/* <td>
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
                                  </td> */}
                                  </tr>
                                );
                              })}

                          </tbody>
                        </table>
                      </div>
                    
              </div>
            </div>
          </form>
        </div>
      </div>


    
    </>
  );
};

export default VolunteerDetailPage;
