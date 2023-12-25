import React, { useEffect, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { useHistory } from "react-router-dom";
import { CandidateContext } from "../../context/CandidateContext";
// import StarRating from "./StarRating";

const CandidateList = (props) => {
  const { candidates, setCandidates } = useContext(CandidateContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get("/candidates");
        console.log(response.data.data);
        setCandidates(response.data.data.Candidates);
        // console.log(setCandidates);
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

  // const renderRating = (userMaster) => {
  //   if (!restaurant.count) {
  //     return <span className="text-warning">0 reviews</span>;
  //   }
  //   return (
  //     <>
  //       <StarRating rating={restaurant.id} />
  //       <span className="text-warning ml-1">({restaurant.count})</span>
  //     </>
  //   );
  // };

  return (
    <>
    <h4>
    Candidate List
    </h4>
    <div className="table-responsive">
      <table className="table table-sm table-striped table-hover table-bordered"
      
      style={{
        position: "relative"
      }}>
        <thead className =" thead-dark">
          <tr className="bg-primary"
          style={{
            
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: "11px"

          }}>
            <th scope="col">Candidate ID</th>
            <th scope="col">Sales Rep Emp No</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">mother Name</th>
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
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {candidates &&
            candidates.map((candidate) => {
              return (
                <tr>
                  <td
                  onClick={() => handleCandidateSelect(candidate.candidate_id)}
                  // key={candidate.candidate_id}
                  style={{
                    // position: "absolute"
                    // marginRi
                  }}
                  >{candidate.candidate_id}
                  </td>
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
  );
};

export default CandidateList;
