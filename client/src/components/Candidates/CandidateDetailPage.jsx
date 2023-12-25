import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasePath from "../../apis/BasePath";
import { CandidateContext } from "../../context/CandidateContext";

const CandidateDetailPage = () => {
  const { candidate_id } = useParams();
  const { selectedCandidate, setSelectedCandidate } = useContext(
    CandidateContext
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/candidates/${candidate_id}`);
        console.log(response);
        
        setSelectedCandidate(response.data.data);
        } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {selectedCandidate && (
        <>
          <h4>
            Candidate Details
          </h4>
          <div className="container">
          <div className="row">
              <div className="col-lg">
                  <h6>Candidate ID : </h6>
              </div>
              <div className="col-lg">
                <label></label>
                {selectedCandidate.Candidates.candidate_id}
              </div>
                <div className="col-lg">
                  <h6>Sales Rep Employee Number : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.sales_rep_emp_num}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Candidate First Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_first_name}
              </div>
                <div className="col-lg">
                  <h6>Candidate Last Name : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_last_name}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Mother's Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_mother_name}
              </div>
                <div className="col-lg">
                  <h6>Father's Name : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.sales_rep_emp_num}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Spouse Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_spouse_name}
              </div>
                <div className="col-lg">
                  <h6>DOB :  </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_dob}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Gender : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_gender}
              </div>
                <div className="col-lg">
                  <h6>Maritial Status: </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_maritial_sts}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Candidate Phone : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_phone}
              </div>
                <div className="col-lg">
                  <h6>Phone : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_phone}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Mobile Number : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_mobile}
              </div>
                <div className="col-lg">
                  <h6>Alternate Mobile Number : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_alt_mobile}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Fax : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_fax}
              </div>
                <div className="col-lg">
                  <h6>Email ID : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_email}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Is Disable : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_is_disable}
              </div>
                <div className="col-lg">
                  <h6>Education Qualification : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_edu_qualification}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Occupation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_occupation}
              </div>
                <div className="col-lg">
                  <h6>Pan : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_pan}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Aadhar : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_aadhar}
              </div>
                <div className="col-lg">
                  <h6>Passport : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_passport}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Registration Date : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_reg_date}
              </div>
                <div className="col-lg">
                  <h6>Disability : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_disability}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Type  Disability : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.Candidates.cust_type_disability}
              </div>
                <div className="col-lg">
                  <h6>Percent Disability : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Candidates.cust_percent_disability}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CandidateDetailPage;
