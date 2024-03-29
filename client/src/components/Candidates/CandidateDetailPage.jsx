import React, { useContext, useEffect } from "react";
import { useParams , useHistory} from "react-router-dom";
import BasePath from "../../apis/BasePath";
import { CandidateContext } from "../../context/CandidateContext";
import Header from "../../routes/Header";

const CandidateDetailPage = () => {
  const { candidate_id } = useParams();
  const { selectedCandidate, setSelectedCandidate } = useContext(
    CandidateContext
  );
  // const {vol_id} = useParams();
  let history = useHistory();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/candidates/${candidate_id}`);
        console.log(response);
        
        setSelectedCandidate(response.data.data.Candidates);
        } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  
  let loggedInUser = localStorage.getItem('user-info') ?
                      JSON.parse(localStorage.getItem('user-info')) : [];

  const handleBack = () => {
    history.push(`/volunteers/${selectedCandidate.sales_rep_emp_num}`);
  };

  return (
    <><Header/>
    <div>
      {/* <button onClick={handleBack}>
        Back
      </button> */}
      {selectedCandidate && (
        <>
        <div className="row">
            <div className="col-lg"
                style={{
              display:"flex",
              justifyContent: "right"
                }}>
                {
                    <button className= "backButton" onClick={handleBack}
                    style={{
                      margin: "-10px 20px -65px 0px"
                    }}  
                    >Back</button>
                  }
                </div>                  
          </div>
          <h4 className="titleHeader">
            Candidate Details
          </h4>
          <div className="container">
            <div className="row">
              <div className="col-lg">
                  <h6>Candidate Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_name}
              </div>
              <div className="col-lg"></div>
              <div className="col-lg">
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Mother's Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_mother_name}
              </div>
                <div className="col-lg">
                  <h6>Father's Name : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_father_name}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Spouse Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_spouse_name}
              </div>
                <div className="col-lg">
                  <h6>DOB :  </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_dob}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Gender : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_gender}
              </div>
                <div className="col-lg">
                  <h6>Maritial Status: </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_maritial_sts}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Candidate Phone : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_phone}
              </div>
                <div className="col-lg">
                  <h6>Phone : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_phone}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Mobile Number : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_mobile}
              </div>
                <div className="col-lg">
                  <h6>Alternate Mobile Number : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_alt_mobile}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Fax : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_fax}
              </div>
                <div className="col-lg">
                  <h6>Email ID : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_email}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Is Disable : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_is_disable}
              </div>
                <div className="col-lg">
                  <h6>Education Qualification : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_edu_qualification}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6> father Occupation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_father_occupation}
              </div>
                <div className="col-lg">
                  <h6>Pan Card: </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_pan_card_no}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Aadhar : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_aadhar}
              </div>
                <div className="col-lg">
                  <h6>Passport : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_passport}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Registration Date : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_reg_date}
              </div>
                <div className="col-lg">
                  <h6>Disability : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_disability}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Type  Disability : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_type_disability}
              </div>
                <div className="col-lg">
                  <h6>Percent Disability : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_percent_disability}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>candidate alt number  : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_alt_mobile}
              </div>
                <div className="col-lg">
                  <h6>Married pwd ? : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_married_pwd}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>candidate caste : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_caste}
              </div>
                <div className="col-lg">
                  <h6>father Age : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_father_age}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>father education : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_father_education}
              </div>
                <div className="col-lg">
                  <h6>father occupation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_father_occupation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Father mobile no : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_father_mobile}
              </div>
                <div className="col-lg">
                  <h6>father income : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_father_income}
              </div>
            </div>
          <div className="row">
              <div className="col-lg">
                  <h6>Mother age : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_mother_age}
              </div>
                <div className="col-lg">
                  <h6>Mother education : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_mother_education}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Mother occupation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_mother_occupation}
              </div>
                <div className="col-lg">
                  <h6>Mother mobile no : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_mother_mobile}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Spouse age : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_spouse_age}
              </div>
                <div className="col-lg">
                  <h6>Spouse education : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_spouse_education}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Spouse occupation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_spouse_occupation}
              </div>
                <div className="col-lg">
                  <h6>Spouse income : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_spouse_income}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Mother occupation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_mother_occupation}
              </div>
                <div className="col-lg">
                  <h6>Mother mobile no : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_mother_mobile}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Village : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_village}
              </div>
                <div className="col-lg">
                  <h6>Gram panchayat : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_gram_panchayat}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Post office : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_post_office}
              </div>
                <div className="col-lg">
                  <h6>Mandal : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_mandal}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>District : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_district}
              </div>
                <div className="col-lg">
                  <h6>Mother mobile no : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_mother_mobile}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>School : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_school}
              </div>
                <div className="col-lg">
                  <h6>Special school : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_special_school}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>School Board : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_school_board}
              </div>
                <div className="col-lg">
                  <h6>College : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_college_name}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Special college : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_special_college}
              </div>
                <div className="col-lg">
                  <h6>College Board : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_college_board}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>University name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_university_name}
              </div>
                <div className="col-lg">
                  <h6>Special University : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_special_university}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>University type : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_university_type}
              </div>
                <div className="col-lg">
                  <h6>Phd college : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_phd_college}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Phd specialization : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_phd_specialization}
              </div>
                <div className="col-lg">
                  <h6>Phd university type: </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_phd_university_type}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Other Courses : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_other_courses}
              </div>
                <div className="col-lg">
                  <h6>Computer Skill : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_computer_skill}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Typing Speed : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_typing_speed}
              </div>
                <div className="col-lg">
                  <h6>Employed : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.candidate_is_employed}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Last Salary : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.candidate_last_salary}
              </div>
                <div className="col-lg">
                  <h6>Year Experience : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.year_experience}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Experience 1 : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.experience1}
              </div>
                <div className="col-lg">
                  <h6>Experience 2 : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.Experience2}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Bank Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.bank_name}
              </div>
                <div className="col-lg">
                  <h6>IFSC Code : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.ifsc_code}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Know Driving : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.know_driving}
              </div>
                <div className="col-lg">
                  <h6>have License : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.have_license}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Driving License no : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.driving_license_no}
              </div>
                <div className="col-lg">
                  <h6>Own Vehicle : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.own_vehicle}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Vehicle Number : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.vehicle_number}
              </div>
                <div className="col-lg">
                  <h6>Health issue : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.health_issue}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>No Family Member : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.no_family_member}
              </div>
                <div className="col-lg">
                  <h6>Pwd Family : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.pwd_family}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>NO Pwd Family Member : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.no_pwd_family_member}
              </div>
                <div className="col-lg">
                  <h6>Member1 Name  : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member1_name}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member1 Relation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member1_relation}
              </div>
                <div className="col-lg">
                  <h6>Member1 Gender : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member1_gender}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member1 Age : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member1_age}
              </div>
                <div className="col-lg">
                  <h6>Member1 Education : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member1_education}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member1_Occupation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member1_occupation}
              </div>
                <div className="col-lg">
                  <h6>Member1 Income : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member1_income}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member2 Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member2_name}
              </div>
                <div className="col-lg">
                  <h6>Member2 Relation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member2_relation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member2 Gender : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member2_gender}
              </div>
                <div className="col-lg">
                  <h6>Member2 Age : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member2_age}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member2 Education : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member2_education}
              </div>
                <div className="col-lg">
                  <h6>Member2 Occupation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member2_occupation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member2 Income : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member2_income}
              </div>
                <div className="col-lg">
                  <h6>Member3 Name : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member3_name}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member3 Relation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member3_relation}
              </div>
                <div className="col-lg">
                  <h6>Member3 gender : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member3_gender}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member3 age : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member3_age}
              </div>
                <div className="col-lg">
                  <h6>Member3 education : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member3_education}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member3 occupation : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member3_occupation}
              </div>
                <div className="col-lg">
                  <h6>Member3 income : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member3_income}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member4 Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member4_name}
              </div>
                <div className="col-lg">
                  <h6>Member4 relation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member4_relation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member4 gender : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member4_gender}
              </div>
                <div className="col-lg">
                  <h6>Member4 age : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member4_age}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member4 education : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member4_education}
              </div>
                <div className="col-lg">
                  <h6>Member4 occupation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member4_occupation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member4 income : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member4_income}
              </div>
                <div className="col-lg">
                  <h6>Member5 income : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member5_income}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member5 Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member5_name}
              </div>
                <div className="col-lg">
                  <h6>Member5 relation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member5_relation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member5 gender : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member5_gender}
              </div>
                <div className="col-lg">
                  <h6>Member5 age : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member5_age}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member5 education : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member5_education}
              </div>
                <div className="col-lg">
                  <h6>Member5 occupation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member5_occupation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member6 Name : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member6_Name}
              </div>
                <div className="col-lg">
                  <h6>Member6 relation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member6_relation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member6 gender : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member6_gender}
              </div>
                <div className="col-lg">
                  <h6>Member6 age : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member6_age}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member6 education : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member6_education}
              </div>
                <div className="col-lg">
                  <h6>Member6 occupation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member6_occupation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Member6 income : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.member6_income}
              </div>
                <div className="col-lg">
                  <h6>Member6 occupation : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.member6_occupation}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Disable Certificate : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.diable_certificate}
              </div>
                <div className="col-lg">
                  <h6>No disable cerf=tificate : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.no_disable_certificate}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Dependent : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.dependent}
              </div>
                <div className="col-lg">
                  <h6> disability Pension : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.disability_pension}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>No Disability Pension : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.no_disability_pension}
              </div>
                <div className="col-lg">
                  <h6> Availed schemes knowledge : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.availed_schemes_knowledge}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Availed Schemes : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.availed_schemes}
              </div>
                <div className="col-lg">
                  <h6> Ration Card : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.ration_card_no}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Voter Id no : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.voter_id_no}
              </div>
                <div className="col-lg">
                  <h6> Ration Card : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.ration_card_no}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Disability Certificate No : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.disability_certificate_no}
              </div>
                <div className="col-lg">
                  <h6>SSC Proof No : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.ssc_proof_no}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>SSC Memo No: </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.ssc_memo_no}
              </div>
                <div className="col-lg">
                  <h6>HSC Memo no : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.hsc_memo_no}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Grad Memo No: </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.grad_memo_no}
              </div>
                <div className="col-lg">
                  <h6>Pg Memo no : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.pg_memo_no}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Phd no: </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.phd_no}
              </div>
                <div className="col-lg">
                  <h6>Tech Qualification No : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.tech_qualification_memo_no}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Vocational Memo no : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.vocational_memo_no}
              </div>
                <div className="col-lg">
                  <h6>Diploma Memo No  : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.diploma_memo_no}
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6>Income Certificate No : </h6>
              </div>
              <div className="col-lg">
                {selectedCandidate.income_cert_no}
              </div>
                <div className="col-lg">
                  <h6>Marriage Certificate No  : </h6>
              </div>
              <div className="col-lg">
              {selectedCandidate.marriage_cert_no}
              </div>
            </div>
          </div>
            
        </>
      )}
    </div>
    </>
  );
};

export default CandidateDetailPage;
