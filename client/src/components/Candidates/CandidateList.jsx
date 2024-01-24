import React, { useEffect, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { useHistory } from "react-router-dom";
import { CandidateContext } from "../../context/CandidateContext";
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';

const CandidateList = () => {



  const { candidates, setCandidates } = useContext(CandidateContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get("/candidates");
        setCandidates(response.data.data.userCandidateData);
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
      } catch (err) {}
    };

    fetchData();
  }, [setCandidates]);
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
    <h4>
    Candidate List
    </h4>
    <div className="container mt-3">
      <div className="table-responsive">
        <table className="table table-striped table-hover row-border" 
        id="CandidateTable">
          <thead className =" thead-dark">
            <tr className="bg-primary">
              <th scope="col">Name</th>
              <th scope="col">Mother Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">Spouse Name</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Gender</th>
              <th scope="col">Maritial Status</th>
              <th scope="col">Phone</th>
              <th scope="col">Mobile</th>
              <th scope="col">Alt Mobile</th>
              <th scope="col">Fax</th>
              <th scope="col">Email</th>
              <th scope="col">Is Disable</th>
              <th scope="col">Qualification</th>
              <th scope="col">Occupation</th>
              <th scope="col">PAN</th>
              <th scope="col">Aadhar</th>
              <th scope="col">Passport</th>
              <th scope="col">Reg Date</th>
              <th scope="col">Disability</th>
              <th scope="col">Type of Disability</th>
              <th scope="col">Percent Disability</th>
              {/* <th scope="col">Update</th>
              <th scope="col">Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {candidates &&
              candidates.map((candidate) => {
                return (
                  <tr key={candidate.candidate_id}>
                    <td
                    onClick={() => handleCandidateSelect(candidate.candidate_id)}
                    >{candidate.candidate_name}</td>
                    <td>{candidate.candidate_mother_name}</td>
                    <td>{candidate.candidate_father_name}</td>
                    <td>{candidate.candidate_spouse_name}</td>
                    <td>{candidate.candidate_dob}</td>
                    <td>{candidate.candidate_gender}</td>
                    <td>{candidate.candidate_maritial_sts}</td>
                    <td>{candidate.candidate_phone}</td>
                    <td>{candidate.candidate_mobile}</td>
                    <td>{candidate.candidate_alt_mobile}</td>
                    <td>{candidate.candidate_fax}</td>
                    <td>{candidate.candidate_email}</td>
                    <td>{candidate.candidate_is_disable}</td>
                    <td>{candidate.candidate_edu_qualification}</td>
                    <td>{candidate.candidate_occupation}</td>
                    <td>{candidate.candidate_pan}</td>
                    <td>{candidate.candidate_aadhar}</td>
                    <td>{candidate.candidate_passport}</td>
                    <td>{candidate.candidate_reg_date}</td>
                    <td>{candidate.candidate_disability}</td>
                    <td>{candidate.candidate_type_disability}</td>
                    <td>{candidate.candidate_percent_disability}</td>
                    
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
    </>
  );
};

export default CandidateList;
