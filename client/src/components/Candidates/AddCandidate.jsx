import React, { useState, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { CandidateContext } from "../../context/CandidateContext";

const AddCandidate = () => {
  const { addCandidates } = useContext(CandidateContext);
const [sales_rep_emp_num, setSalesRepEmpNum] = useState(0);
const [candidate_aadhar, setCandidateAadhar] = useState("");
const [candidate_name, setCandidateName] = useState("");
const [candidate_mobile, setCandidateMobile] = useState("");
const [candidate_alt_mobile, setCandidateAltMobile] = useState("");
const [candidate_gender, setCandidateGender] = useState(0);
const [candidate_email, setCandidateEmail] = useState("");
const [candidate_dob, setCandidateDob] = useState("");
const [candidate_maritial_sts, setCandidateMaritialSts] = useState(0);
const [candidate_married_pwd, setCandidateMarriedPwd] = useState(0);
const [candidate_edu_qualification, setCandidateEduQualification] = useState(0);
const [candidate_caste, setCandidateCaste] = useState(0);
const [candidate_father_name, setCandidateFatherName] = useState("");
const [candidate_father_age, setCandidateFatherAge] = useState(0);
const [candidate_father_education, setCandidateFatherEducation] = useState(0);
const [candidate_father_occupation, setCandidateFatherOccupation] = useState(0);
const [candidate_father_mobile, setCandidateFatherMobile] = useState("");
const [candidate_father_income, setCandidateFatherIncome] = useState(0);
const [candidate_mother_name, setCandidateMotherName] = useState("");
const [candidate_mother_age, setCandidateMotherAge] = useState(0);
const [candidate_mother_education, setCandidateMotherEducation] = useState(0);
const [candidate_mother_occupation, setCandidateMotherOccupation] = useState(0);
const [candidate_mother_mobile, setCandidateMotherMobile] = useState("");
const [candidate_mother_income, setCandidateMotherIncome] = useState(0);
const [candidate_spouse_name, setCandidateSpouseName] = useState("");
const [candidate_spouse_age, setCandidateSpouseAge] = useState(0);
const [candidate_spouse_education, setCandidateSpouseEducation] = useState(0);
const [candidate_spouse_occupation, setCandidateSpouseOccupation] = useState(0);
const [candidate_spouse_income, setCandidateSpouseIncome] = useState(0);
const [candidate_door_no, setCandidateDoorNo] = useState("");
const [candidate_village, setCandidateVillage] = useState("");
const [candidate_gram_panchayat, setCandidateGramPanchayat] = useState("");
const [candidate_post_office, setCandidatePostOffice] = useState("");
const [candidate_mandal, setCandidateMandal] = useState("");
const [candidate_district, setCandidateDistrict] = useState("");
const [candidate_school, setCandidateSchool] = useState("");
const [candidate_special_school, setCandidateSpecialSchool] = useState(0);
const [candidate_school_board, setCandidateSchoolBoard] = useState(0);
const [candidate_college_name, setCandidateCollegeName] = useState("");
const [candidate_special_college, setCandidateSpecialCollege] = useState(0);
const [candidate_college_board, setCandidateCollegeBoard] = useState(0);
const [candidate_university_name, setCandidateUniversityName] = useState("");
const [candidate_special_university, setCandidateSpecialUniversity] = useState(0);
const [candidate_university_type, setCandidateUniversityType] = useState(0);
const [candidate_phd_college, setCandidatePhdCollege] = useState("");
const [candidate_phd_specialization, setCandidatePhdSpecialization] = useState("");
const [candidate_phd_university_type, setCandidatePhdUniversityType] = useState(0);
const [candidate_other_courses, setCandidateOtherCourses] = useState(0);
const [computer_skills, setComputerSkills] = useState(0);
const [typing_speed, setTypingSpeed] = useState(0);
const [is_employed, setIsEmployed] = useState(0);
const [last_salary, setLastSalary] = useState(0);
const [years_experience, setYearsExperience] = useState(0);
const [experience1, setExperience1] = useState("");
const [experience2, setExperience2] = useState("");
const [bank_name, setBankName] = useState("");
const [account_no, setAccountNo] = useState("");
const [branch_name, setBranchName] = useState("");
const [ifsc_code, setIfscCode] = useState("");
const [know_driving, setKnowDriving] = useState(0);
const [have_license, setHaveLicense] = useState(0);
const [driving_license_no, setDrivingLicenseNo] = useState("");
const [own_vehicle, setOwnVehicle] = useState(0);
const [vehicle_number, setVehicleNumber] = useState("");
const [health_issues, setHealthIssues] = useState(0);
const [issue_type, setIssueType] = useState(0);
const [no_family_member, setNoFamilyMember] = useState(0);
const [pwd_family, setPwdFamily] = useState(0);
const [no_pwd_family_member, setNoPwdFamilyMember] = useState(0);
const [member1_name, setMember1Name] = useState("");
const [member1_relation, setMember1Relation] = useState(0);
const [member1_gender, setMember1Gender] = useState(0);
const [member1_age, setMember1Age] = useState(0);
const [member1_education, setMember1Education] = useState(0);
const [member1_occupation, setMember1Occupation] = useState(0);
const [member1_income, setMember1Income] = useState(0);
const [member2_name, setMember2Name] = useState("");
const [member2_relation, setMember2Relation] = useState(0);
const [member2_gender, setMember2Gender] = useState(0);
const [member2_age, setMember2Age] = useState(0);
const [member2_education, setMember2Education] = useState(0);
const [member2_occupation, setMember2Occupation] = useState(0);
const [member2_income, setMember2Income] = useState(0);
const [member3_name, setMember3Name] = useState("");
const [member3_relation, setMember3Relation] = useState(0);
const [member3_gender, setMember3Gender] = useState(0);
const [member3_age, setMember3Age] = useState(0);
const [member3_education, setMember3Education] = useState(0);
const [member3_occupation, setMember3Occupation] = useState(0);
const [member3_income, setMember3Income] = useState(0);
const [member4_name, setMember4Name] = useState("");
const [member4_relation, setMember4Relation] = useState(0);
const [member4_gender, setMember4Gender] = useState(0);
const [member4_age, setMember4Age] = useState(0);
const [member4_education, setMember4Education] = useState(0);
const [member4_occupation, setMember4Occupation] = useState(0);
const [member4_income, setMember4Income] = useState(0);
const [member5_name, setMember5Name] = useState("");
const [member5_relation, setMember5Relation] = useState(0);
const [member5_gender, setMember5Gender] = useState(0);
const [member5_age, setMember5Age] = useState(0);
const [member5_education, setMember5Education] = useState(0);
const [member5_occupation, setMember5Occupation] = useState(0);
const [member5_income, setMember5Income] = useState(0);
const [member6_name, setMember6Name] = useState("");
const [member6_relation, setMember6Relation] = useState(0);
const [member6_gender, setMember6Gender] = useState(0);
const [member6_age, setMember6Age] = useState(0);
const [member6_education, setMember6Education] = useState(0);
const [member6_occupation, setMember6Occupation] = useState(0);
const [member6_income, setMember6Income] = useState(0);
const [candidate_contact_no, setCandidateContactNo] = useState("");
const [is_disable, setIsDisable] = useState(0);
const [disable_certificate, setDisableCertificate] = useState(0);
const [no_disable_certificate, setNoDisableCertificate] = useState(0);
const [disability_type, setDisabilityType] = useState(0);
const [disability_percent, setDisabilityPercent] = useState(0);
const [dependent, setDependent] = useState(0);
const [disability_pension, setDisabilityPension] = useState(0);
const [no_disability_pension, setNoDisabilityPension] = useState(0);
const [availed_schemes_knowledge, setAvailedSchemesKnwoledge] = useState(0);
const [availed_schemes, setAvailedSchemes] = useState(0);
const [ration_card_no, setRationCardNo] = useState("");
const [voter_id_no, setVoterIdNo] = useState("");
const [pan_card_no, setPanCardNo] = useState("");
const [disability_cert_no, setDisablityCertNo] = useState("");
const [ssc_proof_no, setSscProofNo] = useState("");
const [ssc_memo_no, setSscMemoNo] = useState("");
const [hsc_memo_no, setHscMemoNo] = useState("");
const [grad_memo_no, setGradMemoNo] = useState("");
const [pg_memo_no, setPgMemoNo] = useState("");
const [phd_no, setPhdNo] = useState("");
const [tech_qualification_memo_no, setTechQualificationMemoNo] = useState("");
const [vocatioanl_memo_no, setVocationalMemoNo] = useState("");
const [income_cert_no, setIncomeCertNo] = useState("");
const [marriage_cert_no, setMarriageCertNo] = useState("");
const [diploma_memo_no, setDiplomaMemoNo] = useState(0);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await BasePath.post("/candidates", {
        sales_rep_emp_num,
        candidate_aadhar,
        candidate_name,
        candidate_mobile,
        candidate_alt_mobile,
        candidate_gender,
        candidate_email,
        candidate_dob,
        candidate_maritial_sts,
        candidate_married_pwd,
        candidate_edu_qualification,
        candidate_caste,
        candidate_father_name,
        candidate_father_age,
        candidate_father_education,
        candidate_father_occupation,
        candidate_father_mobile,
        candidate_father_income,
        candidate_mother_name,
        candidate_mother_age,
        candidate_mother_education,
        candidate_mother_occupation,
        candidate_mother_mobile,
        candidate_mother_income,
        candidate_spouse_name,
        candidate_spouse_age,
        candidate_spouse_education,
        candidate_spouse_occupation,
        candidate_spouse_income,
        candidate_door_no,
        candidate_village,
        candidate_gram_panchayat,
        candidate_post_office,
        candidate_mandal,
        candidate_district,
        candidate_school,
        candidate_special_school,
        candidate_school_board,
        candidate_college_name,
        candidate_special_college,
        candidate_college_board,
        candidate_university_name,
        candidate_special_university,
        candidate_university_type,
        candidate_phd_college,
        candidate_phd_specialization,
        candidate_phd_university_type,
        candidate_other_courses,
        computer_skills,
        typing_speed,
        is_employed,
        last_salary,
        years_experience,
        experience1,
        experience2,
        bank_name,
        account_no,
        branch_name,
        ifsc_code,
        know_driving,
        have_license,
        driving_license_no,
        own_vehicle,
        vehicle_number,
        health_issues,
        issue_type,
        no_family_member,
        pwd_family,
        no_pwd_family_member,
        member1_name,
        member1_relation,
        member1_gender,
        member1_age,
        member1_education,
        member1_occupation,
        member1_income,
        member2_name,
        member2_relation,
        member2_gender,
        member2_age,
        member2_education,
        member2_occupation,
        member2_income,
        member3_name,
        member3_relation,
        member3_gender,
        member3_age,
        member3_education,
        member3_occupation,
        member3_income,
        member4_name,
        member4_relation,
        member4_gender,
        member4_age,
        member4_education,
        member4_occupation,
        member4_income,
        member5_name,
        member5_relation,
        member5_gender,
        member5_age,
        member5_education,
        member5_occupation,
        member5_income,
        member6_name,
        member6_relation,
        member6_gender,
        member6_age,
        member6_education,
        member6_occupation,
        member6_income,
        candidate_contact_no,
        is_disable,
        disable_certificate,
        no_disable_certificate,
        disability_type,
        disability_percent,
        dependent,
        disability_pension,
        no_disability_pension,
        availed_schemes_knowledge,
        availed_schemes,
        ration_card_no,
        voter_id_no,
        pan_card_no,
        disability_cert_no,
        ssc_proof_no,
        ssc_memo_no,
        hsc_memo_no,
        grad_memo_no,
        pg_memo_no,
        phd_no,
        tech_qualification_memo_no,
        vocatioanl_memo_no,
        diploma_memo_no,
        income_cert_no,
        marriage_cert_no
        
      }

      );
      console.log(response.data.data);
      addCandidates(response.data.data.Candidates);
      alert('Candidate Added');
    } catch (err) {
      alert(err)
      console.log(err);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCandidateData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await BasePath.post("/candidates", candidateData);
  //     console.log(response.data.data);
  //     addCandidates(response.data.data.Candidates);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <>
      <div className="container">
        <h4>Add A Candidate</h4>
        <div className="mb-4">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="container mt-5">
                <div className="accordion accordion-flush " id="accordionExample">

                  {/* Personal Data Information */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="PersonalData" data-toggle="collapse" data-target="#contentOne" aria-expanded="true" aria-controls="contentOne">
                      Candidate's Personal Information</h5>
                    <div id="contentOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          <div className="col-md-3 mb-2" >
                            <label 
                            htmlFor="candidate_aadhar"
                            >Enter Aadhar Number:</label>
                            <input
                              type="text"
                              placeholder="Enter Aadhar number"
                              pattern="^[2-9]{1}[0-9]{11}$"
                              title="Enter a valid 12 digit Aadhar Number"
                              
                              className="form-control"
                              required
                              
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_name">Candidate Name:</label>
                            <input type="text" placeholder="Enter Candidate's Name"
                              pattern="^[A-Za-z]{1,80}$" maxLength="80"
                              value={candidate_name}
                              onChange={(e) => setCandidateName(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_mobile">Mobile Number:</label>
                            <input type="tel" placeholder="Enter Mobile No."
                              pattern="[6-9]{1}[0-9]{9}" title="Enter 10 digit Mobile Number"
                              value={candidate_mobile}
                              onChange={(e) => setCandidateMobile(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_alt_mobile">Alternate Mobile Number:</label>
                            <input type="tel" placeholder="Enter Alt. Mobile No."
                              pattern="[6-9]{1}[0-9]{9}" title="Enter 10 digit Alt Mobile Number"
                              value={candidate_alt_mobile}
                              onChange={(e) => setCandidateAltMobile(e.target.value)}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_gender">Select Gender:</label>
                            <input type="number"
                              value={candidate_gender}
                              onChange={(e) => setCandidateGender(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_email">Candidate Email ID:</label>
                            <input type="text" placeholder="Enter Candidate's Email ID"
                              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" maxLength="80"
                              value={candidate_email}
                              onChange={(e) => setCandidateEmail(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_dob">Select Date of Birth:</label>
                            <input type="date" placeholder="Select DOB"
                              value={candidate_dob}
                              onChange={(e) => setCandidateDob(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_maritial_sts">Select Maritial Status:</label>
                            <input type="dropdown"
                              value={candidate_maritial_sts}
                              onChange={(e) => setCandidateMaritialSts(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_married_pwd">Married Disabled?</label>
                            <input type="dropdown"
                              value={candidate_married_pwd}
                              onChange={(e) => setCandidateMarriedPwd(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_edu_qualification">Education Qualification:</label>
                            <input type="dropdown"
                              value={candidate_edu_qualification}
                              onChange={(e) => setCandidateEduQualification(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_caste ">Caste:</label>
                            <input type="dropdown"
                              value={candidate_caste}
                              onChange={(e) => setCandidateCaste(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FAMILY DETAILS */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="FamilyData" data-toggle="collapse" data-target="#contentTwo" aria-expanded="false" aria-controls="contentTwo">
                      Family Member's Data</h5>
                    <div id="contentTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                      <div className="card-body">
                          {/* <!-- H4 Fathers Details --> */}
                          <div className="form-row">
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_father_name">Father's Name:</label>
                              <input type="text" placeholder="Enter Father's Name"
                                pattern="^[A-Za-z]{1,80}$" maxLength="80"
                                value={candidate_father_name}
                                onChange={(e) => setCandidateFatherName(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_father_age">Father's Age</label>
                              <input type="number"
                                value={candidate_father_age}
                                onChange={(e) => setCandidateFatherAge(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_father_education">Father's Education Qualification:</label>
                              <input type="dropdown"
                                value={candidate_father_education}
                                onChange={(e) => setCandidateFatherEducation(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_father_occupation">Father's Occupation:</label>
                              <input type="dropdown"
                                value={candidate_father_occupation}
                                onChange={(e) => setCandidateFatherOccupation(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>

                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_father_mobile">Father's Mobile Number:</label>
                              <input type="number" placeholder="Enter Mobile No."
                                pattern="/^[1-9][0-9]{9}$/gm" title="Enter 10 digit Mobile Number"
                                value={candidate_father_mobile}
                                onChange={(e) => setCandidateFatherMobile(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_father_income">Father's Income:</label>
                              <input type="dropdown"
                                value={candidate_father_income}
                                onChange={(e) => setCandidateFatherIncome(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>


                          </div>
                          {/* <!-- H4 Mothers Details --> */}
                          <div className="form-row">
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_name">Mother's Name:</label>
                              <input
                                type="text"
                                placeholder="Enter Mother's Name"
                                pattern="^[A-Za-z]{1,80}$"
                                maxLength="80"
                                value={candidate_mother_name}
                                onChange={(e) => setCandidateMotherName(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_age">Mother's Age</label>
                              <input
                                type="number"
                                value={candidate_mother_age}
                                onChange={(e) => setCandidateMotherAge(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_education">Mother's Education Qualification:</label>
                              <input
                                type="dropdown"
                                value={candidate_mother_education}
                                onChange={(e) => setCandidateMotherEducation(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_occupation">Mother's Occupation:</label>
                              <input
                                type="dropdown"
                                value={candidate_mother_occupation}
                                onChange={(e) => setCandidateMotherOccupation(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>

                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_mobile">Mother's Mobile Number:</label>
                              <input
                                type="number"
                                placeholder="Enter Mobile No."
                                pattern="^[1-9][0-9]{9}$"
                                title="Enter 10 digit Mobile Number"
                                value={candidate_mother_mobile}
                                onChange={(e) => setCandidateMotherMobile(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_income">Mother's Income:</label>
                              <input
                                type="dropdown"
                                value={candidate_mother_income}
                                onChange={(e) => setCandidateMotherIncome(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>


                          {/* <!-- H4 Spouse Details --> */}
                          {/* <!-- H4 Spouse Details --> */}
                          <div className="form-row">
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_spouse_name">Spouse's Name:</label>
                              <input
                                type="text"
                                placeholder="Enter Spouse's Name"
                                pattern="^[A-Za-z]{1,80}$"
                                maxLength="80"
                                value={candidate_spouse_name}
                                onChange={(e) => setCandidateSpouseName(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_spouse_age">Spouse's Age</label>
                              <input
                                type="number"
                                value={candidate_spouse_age}
                                onChange={(e) => setCandidateSpouseAge(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              {/* <!-- ToDo --> */}
                              <label htmlFor="candidate_spouse_education">Spouse's Education Qualification:</label>
                              <input
                                type="dropdown"
                                value={candidate_spouse_education}
                                onChange={(e) => setCandidateSpouseEducation(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              {/* <!-- ToDo --> */}
                              <label htmlFor="candidate_spouse_occupation">Spouse's Occupation:</label>
                              <input
                                type="dropdown"
                                value={candidate_spouse_occupation}
                                onChange={(e) => setCandidateSpouseOccupation(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>

                            {/* <div className="col-md-3 mb-2" >
    <label htmlFor="candidate_spouse_mobile">Spouse's Mobile Number:</label>
    <input
      type="number"
      placeholder="Enter Mobile No."
      pattern="^[1-9][0-9]{9}$"
      title="Enter 10 digit Mobile Number"
      value={candidateSpouseMobile}
      onChange={(e) => setCandidateSpouseMobile(e.target.value)}
      className="form-control"
      required
    />
  </div> */}
                            <div className="col-md-3 mb-2" >
                              {/* <!-- ToDo --> */}
                              <label htmlFor="candidate_spouse_income">Spouse's Income:</label>
                              <input
                                type="dropdown"
                                value={candidate_spouse_income}
                                onChange={(e) => setCandidateSpouseIncome(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Data Information */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="ResidentialData" data-toggle="collapse" data-target="#contentThree" aria-expanded="false" aria-controls="contentThree">
                      Residential Data </h5>
                    <div id="contentThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_door_no">Candidate Door No.:</label>
                            <input
                              type="number"
                              placeholder="Door No."
                              maxLength="10"
                              value={candidate_door_no}
                              onChange={(e) => setCandidateDoorNo(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_village">Village Name:</label>
                            <input
                              type="text"
                              placeholder="Village Name."
                              maxLength="30"
                              value={candidate_village}
                              onChange={(e) => setCandidateVillage(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_gram_panchayat">Gram Panchayat:</label>
                            <input
                              type="text"
                              placeholder="Gram Panchayat Name."
                              maxLength="30"
                              value={candidate_gram_panchayat}
                              onChange={(e) => setCandidateGramPanchayat(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_post_office">Post Office:</label>
                            <input
                              type="text"
                              placeholder="Post Office"
                              maxLength="10"
                              value={candidate_post_office}
                              onChange={(e) => setCandidatePostOffice(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_mandal">Mandal:</label>
                            <input
                              type="text"
                              placeholder="Mandal"
                              maxLength="10"
                              value={candidate_mandal}
                              onChange={(e) => setCandidateMandal(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_district">District Name:</label>
                            <input
                              type="text"
                              placeholder="District Name"
                              maxLength="10"
                              value={candidate_district}
                              onChange={(e) => setCandidateDistrict(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Personal Data Information */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="EducationData" data-toggle="collapse" data-target="#contentFour" aria-expanded="false" aria-controls="contentFour">
                      Education Data Information</h5>
                    <div id="contentFour" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          {/* <!-- EDUCATION DETAILS --> */}
                          {/* <!-- School --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_school">School Name:</label>
                            <input
                              type="text"
                              placeholder="School Name"
                              maxLength="80"
                              value={candidate_school}
                              onChange={(e) => setCandidateSchool(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_special_school">Special School?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={candidate_special_school}
                              onChange={(e) => setCandidateSpecialSchool(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_school_board">School Board:</label>
                            <input
                              type="dropdown"
                              placeholder="School Board"
                              value={candidate_school_board}
                              onChange={(e) => setCandidateSchoolBoard(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          {/* <!-- College --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_college_name">College Name:</label>
                            <input
                              type="text"
                              placeholder="College Name"
                              maxLength="80"
                              value={candidate_college_name}
                              onChange={(e) => setCandidateCollegeName(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_special_college">Special College?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={candidate_special_college}
                              onChange={(e) => setCandidateSpecialCollege(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_college_board">College Board:</label>
                            <input
                              type="dropdown"
                              placeholder="College Board"
                              value={candidate_college_board}
                              onChange={(e) => setCandidateCollegeBoard(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          {/* <!-- University --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_university_name">University Name:</label>
                            <input
                              type="text"
                              placeholder="University Name"
                              maxLength="80"
                              value={candidate_university_name}
                              onChange={(e) => setCandidateUniversityName(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_special_university">Special University?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={candidate_special_university}
                              onChange={(e) => setCandidateSpecialUniversity(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_university_type">University Type:</label>
                            <input
                              type="dropdown"
                              placeholder="University Type"
                              value={candidate_university_type}
                              onChange={(e) => setCandidateUniversityType(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          {/* <!-- PHD --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_phd_college">PHD College Name:</label>
                            <input
                              type="text"
                              placeholder="PHD College Name"
                              maxLength="80"
                              value={candidate_phd_college}
                              onChange={(e) => setCandidatePhdCollege(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_phd_specialization">PHD Specialization</label>
                            <input
                              type="text"
                              placeholder="Candidate PHD Specialization"
                              maxLength="80"
                              value={candidate_phd_specialization}
                              onChange={(e) => setCandidatePhdSpecialization(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_phd_university_type">PHD University Type:</label>
                            <input
                              type="dropdown"
                              placeholder="PHD University Type"
                              value={candidate_phd_university_type}
                              onChange={(e) => setCandidatePhdUniversityType(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_other_courses">Candidate Other Courses:</label>
                            <input
                              type="dropdown"
                              placeholder="Other Courses"
                              value={candidate_other_courses}
                              onChange={(e) => setCandidateOtherCourses(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>


                  {/* Skills & Employment Information */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="Skills&EmploymentData" data-toggle="collapse" data-target="#contentFive" aria-expanded="false" aria-controls="contentFive">
                      Skills & Employment Information</h5>
                    <div id="contentFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          {/* <!-- SKILLS --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="computer_skills">Computer Skills:</label>
                            <input
                              type="dropdown"
                              placeholder="Computer Skills"
                              value={computer_skills}
                              onChange={(e) => setComputerSkills(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="typing_speed">Typing Speed:</label>
                            <input
                              type="dropdown"
                              placeholder="Words per min"
                              value={typing_speed}
                              onChange={(e) => setTypingSpeed(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          {/* <!-- Employment Details --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="is_employed">Employed?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={is_employed}
                              onChange={(e) => setIsEmployed(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="last_salary">Last Salary</label>
                            <input
                              type="dropdown"
                              placeholder="Per Annum"
                              value={last_salary}
                              onChange={(e) => setLastSalary(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="years_experience">Years of Experience:</label>
                            <input
                              type="dropdown"
                              placeholder="Years of Experience"
                              value={years_experience}
                              onChange={(e) => setYearsExperience(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="experience1">Experience 1:</label>
                            <input
                              type="text"
                              placeholder="Experience 1"
                              maxLength="10"
                              value={experience1}
                              onChange={(e) => setExperience1(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="experience2">Experience 2:</label>
                            <input
                              type="text"
                              placeholder="Experience 2"
                              maxLength="10"
                              value={experience2}
                              onChange={(e) => setExperience2(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* Bank Details */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="BankDetails" data-toggle="collapse" data-target="#contentSix" aria-expanded="false" aria-controls="contentSix">
                      Bank Details</h5>
                    <div id="contentSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          {/* <!-- BANK DETAILS --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="bank_name">Bank Name:</label>
                            <input
                              type="text"
                              placeholder="Bank Name"
                              maxLength="100"
                              value={bank_name}
                              onChange={(e) => setBankName(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="account_no">Account Number:</label>
                            <input
                              type="text"
                              placeholder="Bank Account Number"
                              maxLength="50"
                              value={account_no}
                              onChange={(e) => setAccountNo(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="branch_name">Branch Name:</label>
                            <input
                              type="text"
                              placeholder="Branch Name"
                              maxLength="50"
                              value={branch_name}
                              onChange={(e) => setBranchName(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="ifsc_code">IFSC Code:</label>
                            <input
                              type="text"
                              placeholder="IFSC Code"
                              maxLength="10"
                              value={ifsc_code}
                              onChange={(e) => setIfscCode(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* Driving and Health Information */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="Driving&HealthData" data-toggle="collapse" data-target="#contentTen" aria-expanded="false" aria-controls="contentTen">
                      Driving and Health Information</h5>
                    <div id="contentTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          {/* <!-- DRIVING DETAILS --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="know_driving">Do you know Driving?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={know_driving}
                              onChange={(e) => setKnowDriving(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="have_license">Do you have License?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={have_license}
                              onChange={(e) => setHaveLicense(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="driving_license_no">License Number:</label>
                            <input
                              type="text"
                              placeholder="Enter License Number"
                              maxLength="10"
                              value={driving_license_no}
                              onChange={(e) => setDrivingLicenseNo(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="own_vehicle">Do you own Vehicle?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={own_vehicle}
                              onChange={(e) => setOwnVehicle(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="vehicle_number">Vehicle Number:</label>
                            <input
                              type="text"
                              placeholder="Enter Vehicle Number"
                              maxLength="10"
                              value={vehicle_number}
                              onChange={(e) => setVehicleNumber(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          {/* <!-- HEALTH DETAILS --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="health_issues">Health Issues:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Health Issue"
                              value={health_issues}
                              onChange={(e) => setHealthIssues(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="issue_type">Health Issues Type:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Health Issue Type"
                              value={issue_type}
                              onChange={(e) => setIssueType(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* PWD Family Individual Information */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="PwdFamilyData" data-toggle="collapse" data-target="#contentSeven" aria-expanded="false" aria-controls="contentSeven">
                      PWD Family Information</h5>
                    <div id="contentSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          {/* <!-- Family Details --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="no_family_member">Number of Members in Family:</label>
                            <input
                              type="dropdown"
                              placeholder="No. of Family Members"
                              value={no_family_member}d
                              onChange={(e) => setNoFamilyMember(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="pwd_family">Anyone PWD?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={pwd_family}
                              onChange={(e) => setPwdFamily(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="no_pwd_family_member">No. of PWD Members:</label>
                            <input
                              type="dropdown"
                              placeholder="No. of PWD Members"
                              value={no_pwd_family_member}
                              onChange={(e) => setNoPwdFamilyMember(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          {/* <!-- Individual Family Member Details 1 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_name">Name:</label>
                            <input
                              type="dropdown"
                              placeholder="Enter Name"
                              value={member1_name}
                              onChange={(e) => setMember1Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_relation">Relation?</label>
                            <input
                              type="dropdown"
                              placeholder="Select your relation"
                              value={member1_relation}
                              onChange={(e) => setMember1Relation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_gender">Gender:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Gender"
                              value={member1_gender}
                              onChange={(e) => setMember1Gender(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_age">Age:</label>
                            <input
                              type="number"
                              placeholder="Enter Age"
                              value={member1_age}
                              onChange={(e) => setMember1Age(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_education">Select Education:</label>
                            <input
                              type="dropdown"
                              placeholder="Education"
                              value={member1_education}
                              onChange={(e) => setMember1Education(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_occupation">Occupation:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Occupation"
                              value={member1_occupation}
                              onChange={(e) => setMember1Occupation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_income">Income:</label>
                            <input
                              type="dropdown"
                              placeholder="Income"
                              value={member1_income}
                              onChange={(e) => setMember1Income(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          {/* <!-- Individual Family Member Details 2 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_name">Name:</label>
                            <input
                              type="dropdown"
                              placeholder="Enter Name"
                              value={member2_name}
                              onChange={(e) => setMember2Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_relation">Relation?</label>
                            <input
                              type="dropdown"
                              placeholder="Select your relation"
                              value={member2_relation}
                              onChange={(e) => setMember2Relation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_gender">Gender:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Gender"
                              value={member2_gender}
                              onChange={(e) => setMember2Gender(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_age">Age:</label>
                            <input
                              type="number"
                              placeholder="Enter Age"
                              value={member2_age}
                              onChange={(e) => setMember2Age(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_education">Select Education:</label>
                            <input
                              type="dropdown"
                              placeholder="Education"
                              value={member2_education}
                              onChange={(e) => setMember2Education(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_occupation">Occupation:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Occupation"
                              value={member2_occupation}
                              onChange={(e) => setMember2Occupation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_income">Income:</label>
                            <input
                              type="dropdown"
                              placeholder="Income"
                              value={member2_income}
                              onChange={(e) => setMember2Income(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          {/* <!-- Individual Family Member Details 3 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_name">Name:</label>
                            <input
                              type="dropdown"
                              placeholder="Enter Name"
                              value={member3_name}
                              onChange={(e) => setMember3Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_relation">Relation?</label>
                            <input
                              type="dropdown"
                              placeholder="Select your relation"
                              value={member3_relation}
                              onChange={(e) => setMember3Relation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_gender">Gender:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Gender"
                              value={member3_gender}
                              onChange={(e) => setMember3Gender(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_age">Age:</label>
                            <input
                              type="number"
                              placeholder="Enter Age"
                              value={member3_age}
                              onChange={(e) => setMember3Age(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_education">Select Education:</label>
                            <input
                              type="dropdown"
                              placeholder="Education"
                              value={member3_education}
                              onChange={(e) => setMember3Education(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_occupation">Occupation:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Occupation"
                              value={member3_occupation}
                              onChange={(e) => setMember3Occupation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_income">Income:</label>
                            <input
                              type="dropdown"
                              placeholder="Income"
                              value={member3_income}
                              onChange={(e) => setMember3Income(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          {/* <!-- Individual Family Member Details 4 --> */}
                          {/* <!-- Individual Family Member Details 4 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_name">Name:</label>
                            <input
                              type="dropdown"
                              placeholder="Enter Name"
                              value={member4_name}
                              onChange={(e) => setMember4Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_relation">Relation?</label>
                            <input
                              type="dropdown"
                              placeholder="Select your relation"
                              value={member4_relation}
                              onChange={(e) => setMember4Relation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_gender">Gender:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Gender"
                              value={member4_gender}
                              onChange={(e) => setMember4Gender(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_age">Age:</label>
                            <input
                              type="number"
                              placeholder="Enter Age"
                              value={member4_age}
                              onChange={(e) => setMember4Age(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_education">Select Education:</label>
                            <input
                              type="dropdown"
                              placeholder="Education"
                              value={member4_education}
                              onChange={(e) => setMember4Education(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_occupation">Occupation:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Occupation"
                              value={member4_occupation}
                              onChange={(e) => setMember4Occupation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_income">Income:</label>
                            <input
                              type="dropdown"
                              placeholder="Income"
                              value={member4_income}
                              onChange={(e) => setMember4Income(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          {/* <!-- Individual Family Member Details 5 --> */}
                          {/* <!-- Individual Family Member Details 5 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_name">Name:</label>
                            <input
                              type="dropdown"
                              placeholder="Enter Name"
                              value={member5_name}
                              onChange={(e) => setMember5Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_relation">Relation?</label>
                            <input
                              type="dropdown"
                              placeholder="Select your relation"
                              value={member5_relation}
                              onChange={(e) => setMember5Relation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_gender">Gender:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Gender"
                              value={member5_gender}
                              onChange={(e) => setMember5Gender(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_age">Age:</label>
                            <input
                              type="number"
                              placeholder="Enter Age"
                              value={member5_age}
                              onChange={(e) => setMember5Age(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_education">Select Education:</label>
                            <input
                              type="dropdown"
                              placeholder="Education"
                              value={member5_education}
                              onChange={(e) => setMember5Education(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_occupation">Occupation:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Occupation"
                              value={member5_occupation}
                              onChange={(e) => setMember5Occupation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_income">Income:</label>
                            <input
                              type="dropdown"
                              placeholder="Income"
                              value={member5_income}
                              onChange={(e) => setMember5Income(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          {/* <!-- Individual Family Member Details 6 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_name">Name:</label>
                            <input
                              type="dropdown"
                              placeholder="Enter Name"
                              value={member6_name}
                              onChange={(e) => setMember6Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_relation">Relation?</label>
                            <input
                              type="dropdown"
                              placeholder="Select your relation"
                              value={member6_relation}
                              onChange={(e) => setMember6Relation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_gender">Gender:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Gender"
                              value={member6_gender}
                              onChange={(e) => setMember6Gender(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_age">Age:</label>
                            <input
                              type="number"
                              placeholder="Enter Age"
                              value={member6_age}
                              onChange={(e) => setMember6Age(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_education">Select Education:</label>
                            <input
                              type="dropdown"
                              placeholder="Education"
                              value={member6_education}
                              onChange={(e) => setMember6Education(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_occupation">Occupation:</label>
                            <input
                              type="dropdown"
                              placeholder="Select Occupation"
                              value={member6_occupation}
                              onChange={(e) => setMember6Occupation(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_income">Income:</label>
                            <input
                              type="dropdown"
                              placeholder="Income"
                              value={member6_income}
                              onChange={(e) => setMember6Income(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Disability Specific Information */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="DisabilityData" data-toggle="collapse" data-target="#contentEight" aria-expanded="false" aria-controls="contentEight">
                      Disability Information</h5>
                    <div id="contentEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          {/* <!-- DISABILITY SPECIFIC INFO --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="is_disable">Are you a person with Disability?</label>
                            <input type="dropdown" placeholder="Yes/No"
                              value={is_disable}
                              onChange={(e) => setIsDisable(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disable_certificate">f “Yes” do you have Disability Certificate?</label>
                            <input type="dropdown" placeholder="Yes/No"
                              value={disable_certificate}
                              onChange={(e) => setDisableCertificate(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="no_disable_certificate">If “No” reason for not having Disability Certificate:</label>
                            <input type="dropdown" placeholder="Select reason"
                              value={no_disable_certificate}
                              onChange={(e) => setNoDisableCertificate(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disability_type">Type of Disability?</label>
                            <input type="dropdown" placeholder="Select Type"
                              value={disability_type}
                              onChange={(e) => setDisabilityType(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disability_percent">Percentage of Disability?</label>
                            <input type="dropdown" placeholder="Yes/No"
                              value={disability_percent}
                              onChange={(e) => setDisabilityPercent(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="dependent">Are you a dependent for your day-to-day activities?</label>
                            <input type="dropdown" placeholder="Yes/No"
                              value={dependent}
                              onChange={(e) => setDependent(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          {/* <!-- Disability Pension Information --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disability_pension">Are you availing Disability Pension?</label>
                            <input
                              type="dropdown"
                              placeholder="Yes/No"
                              value={disability_pension}
                              onChange={(e) => setDisabilityPension(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="no_disability_pension">If 'No', Select Reason</label>
                            <input
                              type="dropdown"
                              placeholder="Select Reason"
                              value={no_disability_pension}
                              onChange={(e) => setNoDisabilityPension(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          {/* <!-- Awareness/Utilization of PwD Schemes --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="availed_schemes_knowledge">Do you have any idea about the following schemes</label>
                            <input
                              type="dropdown"
                              placeholder="Select all you know"
                              value={availed_schemes_knowledge}
                              onChange={(e) => setAvailedSchemesKnwoledge(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="availed_schemes">Schemes availed/availing</label>
                            <input
                              type="dropdown"
                              placeholder="Select schemes"
                              value={availed_schemes}
                              onChange={(e) => setAvailedSchemes(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>



                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Govenment ID Card Information */}
                  <div className="card" style={{
                    paddingBottom: "0px"
                  }}>
                    <h5 id="IdentityData" data-toggle="collapse" data-target="#contentNine" aria-expanded="false" aria-controls="contentNine">
                      Government Identification Information</h5>
                    <div id="contentNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="form-row">
                          {/* <!-- Government Document Numbers --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="ration_card_no">Ration Card No:</label>
                            <input
                              type="text"
                              placeholder="Enter Ration Card No."
                              pattern="^([a-zA-Z0-9]){8,12}\s*$"
                              value={ration_card_no}
                              onChange={(e) => setRationCardNo(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="voter_id_no">Voter ID:</label>
                            <input
                              type="text"
                              placeholder="Enter Voter ID"
                              pattern="^[A-Z]{3}[0-9]{7}$"
                              value={voter_id_no}
                              onChange={(e) => setVoterIdNo(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="pan_card_no">PAN Card No:</label>
                            <input
                              type="text"
                              placeholder="Enter PAN Card No."
                              pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
                              value={pan_card_no}
                              onChange={(e) => setPanCardNo(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disability_cert_no">Disability Certificate Number:</label>
                            <input
                              type="text"
                              placeholder="Enter Disability Certificate Number"
                              maxLength="10"
                              value={disability_cert_no}
                              onChange={(e) => setDisablityCertNo(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          {/* Add similar modifications for other fields as needed */}

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="marriage_cert_no">Marriage Certificate Number:</label>
                            <input
                              type="text"
                              placeholder="Enter Marriage Certificate Number"
                              maxLength="10"
                              value={marriage_cert_no}
                              onChange={(e) => setMarriageCertNo(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* Add Candidate button */}
          <div className="form-row d-flex justify-content-center">
            <div className="col text-center">
              {/* <button
                type="submit"
                value="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Add Candidate
              </button> */}
              <input type="submit"></input>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCandidate;