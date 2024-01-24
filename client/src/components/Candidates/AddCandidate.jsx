import React, { useState, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { useParams} from "react-router-dom";
import { CandidateContext } from "../../context/CandidateContext";
import dropdownOptions from '../../dropDownOptions.json';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import Header from "../../routes/Header";
// import "../../css/login.css"


const AddCandidate = () => {
const { vol_id } = useParams();
const { addCandidates } = useContext(CandidateContext);
const [sales_rep_emp_num, setSalesRepEmpNum] = useState(`${vol_id}`);
const [candidate_aadhar, setCandidateAadhar] = useState(null);
const [candidate_name, setCandidateName] = useState(null);
const [candidate_mobile, setCandidateMobile] = useState(null);
const [candidate_alt_mobile, setCandidateAltMobile] = useState(null);
const [candidate_gender, setCandidateGender] = useState(null);
const [candidate_email, setCandidateEmail] = useState(null); 
const [candidate_dob, setCandidateDob] = useState(null);
const [candidate_maritial_sts, setCandidateMaritialSts] = useState(null);
const [candidate_married_pwd, setCandidateMarriedPwd] = useState(null);
const [candidate_edu_qualification, setCandidateEduQualification] = useState(null);
const [candidate_caste, setCandidateCaste] = useState(null);
const [candidate_father_name, setCandidateFatherName] = useState(null);
const [candidate_father_age, setCandidateFatherAge] = useState(null);
const [candidate_father_education, setCandidateFatherEducation] = useState(null);
const [candidate_father_occupation, setCandidateFatherOccupation] = useState(null);
const [candidate_father_mobile, setCandidateFatherMobile] = useState(null);
const [candidate_father_income, setCandidateFatherIncome] = useState(null);
const [candidate_mother_name, setCandidateMotherName] = useState(null);
const [candidate_mother_age, setCandidateMotherAge] = useState(null);
const [candidate_mother_education, setCandidateMotherEducation] = useState(null);
const [candidate_mother_occupation, setCandidateMotherOccupation] = useState(null);
const [candidate_mother_mobile, setCandidateMotherMobile] = useState(null);
const [candidate_mother_income, setCandidateMotherIncome] = useState(null);
const [candidate_spouse_name, setCandidateSpouseName] = useState(null);
const [candidate_spouse_age, setCandidateSpouseAge] = useState(null);
const [candidate_spouse_education, setCandidateSpouseEducation] = useState(null);
const [candidate_spouse_occupation, setCandidateSpouseOccupation] = useState(null);
const [candidate_spouse_income, setCandidateSpouseIncome] = useState(null);
const [candidate_door_no, setCandidateDoorNo] = useState(null);
const [candidate_village, setCandidateVillage] = useState(null);
const [candidate_gram_panchayat, setCandidateGramPanchayat] = useState(null);
const [candidate_post_office, setCandidatePostOffice] = useState(null);
const [candidate_mandal, setCandidateMandal] = useState(null);
const [candidate_district, setCandidateDistrict] = useState(null);
const [candidate_school, setCandidateSchool] = useState(null);
const [candidate_special_school, setCandidateSpecialSchool] = useState(null);
const [candidate_school_board, setCandidateSchoolBoard] = useState(null);
const [candidate_college_name, setCandidateCollegeName] = useState(null);
const [candidate_special_college, setCandidateSpecialCollege] = useState(null);
const [candidate_college_board, setCandidateCollegeBoard] = useState(null);
const [candidate_university_name, setCandidateUniversityName] = useState(null);
const [candidate_special_university, setCandidateSpecialUniversity] = useState(null);
const [candidate_university_type, setCandidateUniversityType] = useState(null);
const [candidate_phd_college, setCandidatePhdCollege] = useState(null);
const [candidate_phd_specialization, setCandidatePhdSpecialization] = useState(null);
const [candidate_phd_university_type, setCandidatePhdUniversityType] = useState(null);
const [candidate_other_courses, setCandidateOtherCourses] = useState(null);
const [computer_skills, setComputerSkills] = useState(null);
const [typing_speed, setTypingSpeed] = useState(null);
const [is_employed, setIsEmployed] = useState(null);
const [last_salary, setLastSalary] = useState(null);
const [years_experience, setYearsExperience] = useState(null);
const [experience1, setExperience1] = useState(null);
const [experience2, setExperience2] = useState(null);
const [bank_name, setBankName] = useState(null);
const [account_no, setAccountNo] = useState(null);
const [branch_name, setBranchName] = useState(null);
const [ifsc_code, setIfscCode] = useState(null);
const [know_driving, setKnowDriving] = useState(null);
const [have_license, setHaveLicense] = useState(null);
const [driving_license_no, setDrivingLicenseNo] = useState(null);
const [own_vehicle, setOwnVehicle] = useState(null);
const [vehicle_number, setVehicleNumber] = useState(null);
const [health_issues, setHealthIssues] = useState(null);
const [issue_type, setIssueType] = useState(null);
const [no_family_member, setNoFamilyMember] = useState(null);
const [pwd_family, setPwdFamily] = useState(null);
const [no_pwd_family_member, setNoPwdFamilyMember] = useState(null);
const [member1_name, setMember1Name] = useState(null);
const [member1_relation, setMember1Relation] = useState(null);
const [member1_gender, setMember1Gender] = useState(null);
const [member1_age, setMember1Age] = useState(null);
const [member1_education, setMember1Education] = useState(null);
const [member1_occupation, setMember1Occupation] = useState(null);
const [member1_income, setMember1Income] = useState(null);
const [member2_name, setMember2Name] = useState(null);
const [member2_relation, setMember2Relation] = useState(null);
const [member2_gender, setMember2Gender] = useState(null);
const [member2_age, setMember2Age] = useState(null);
const [member2_education, setMember2Education] = useState(null);
const [member2_occupation, setMember2Occupation] = useState(null);
const [member2_income, setMember2Income] = useState(null);
const [member3_name, setMember3Name] = useState(null);
const [member3_relation, setMember3Relation] = useState(null);
const [member3_gender, setMember3Gender] = useState(null);
const [member3_age, setMember3Age] = useState(null);
const [member3_education, setMember3Education] = useState(null);
const [member3_occupation, setMember3Occupation] = useState(null);
const [member3_income, setMember3Income] = useState(null);
const [member4_name, setMember4Name] = useState(null);
const [member4_relation, setMember4Relation] = useState(null);
const [member4_gender, setMember4Gender] = useState(null);
const [member4_age, setMember4Age] = useState(null);
const [member4_education, setMember4Education] = useState(null);
const [member4_occupation, setMember4Occupation] = useState(null);
const [member4_income, setMember4Income] = useState(null);
const [member5_name, setMember5Name] = useState(null);
const [member5_relation, setMember5Relation] = useState(null);
const [member5_gender, setMember5Gender] = useState(null);
const [member5_age, setMember5Age] = useState(null);
const [member5_education, setMember5Education] = useState(null);
const [member5_occupation, setMember5Occupation] = useState(null);
const [member5_income, setMember5Income] = useState(null);
const [member6_name, setMember6Name] = useState(null);
const [member6_relation, setMember6Relation] = useState(null);
const [member6_gender, setMember6Gender] = useState(null);
const [member6_age, setMember6Age] = useState(null);
const [member6_education, setMember6Education] = useState(null);
const [member6_occupation, setMember6Occupation] = useState(null);
const [member6_income, setMember6Income] = useState(null);
const [candidate_contact_no, setCandidateContactNo] = useState(null);
const [is_disable, setIsDisable] = useState(null);
const [disable_certificate, setDisableCertificate] = useState(null);
const [no_disable_certificate, setNoDisableCertificate] = useState(null);
const [disability_type, setDisabilityType] = useState(null);
const [disability_percent, setDisabilityPercent] = useState(null);
const [dependent, setDependent] = useState(null);
const [disability_pension, setDisabilityPension] = useState(null);
const [no_disability_pension, setNoDisabilityPension] = useState(null);
const [availed_schemes_knowledge, setAvailedSchemesKnwoledge] = useState(null);
const [availed_schemes, setAvailedSchemes] = useState(null);
const [ration_card_no, setRationCardNo] = useState(null);
const [voter_id_no, setVoterIdNo] = useState(null);
const [pan_card_no, setPanCardNo] = useState(null);
const [disability_cert_no, setDisablityCertNo] = useState(null);
const [ssc_proof_no, setSscProofNo] = useState(null);
const [ssc_memo_no, setSscMemoNo] = useState(null);
const [hsc_memo_no, setHscMemoNo] = useState(null);
const [grad_memo_no, setGradMemoNo] = useState(null);
const [pg_memo_no, setPgMemoNo] = useState(null);
const [phd_no, setPhdNo] = useState(null);
const [tech_qualification_memo_no, setTechQualificationMemoNo] = useState(null);
const [vocatioanl_memo_no, setVocationalMemoNo] = useState(null);
const [income_cert_no, setIncomeCertNo] = useState(null);
const [marriage_cert_no, setMarriageCertNo] = useState(null);
const [diploma_memo_no, setDiplomaMemoNo] = useState(null);


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
      // console.log(response.data.data);
      addCandidates(response.data.data.Candidates);
      alert('Candidate Added');
    } catch (err) {
      alert(err)
      console.log(err);
    }
  };

  return (
    <>
      <Header/>
      <div className="container">
        <h4 className="titleHeader">Add A Candidate</h4>
        <div className="mb-4">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="container mt-2">
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
                            >Enter Aadhar Number:<span class="req">*</span></label>
                            <input
                              type="text"
                              placeholder="Enter Aadhar number"
                              pattern="^[2-9]{1}[0-9]{11}$"
                              title="Enter a valid 12 digit Aadhar Number"
                              onChange={(e) => setCandidateAadhar(e.target.value)}
                              className="form-control"
                              required                            
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_name">Candidate Name:<span class="req">*</span></label>
                            <input type="text" placeholder="Enter Candidate's Name"
                              pattern="^[A-Za-z]{1,80}$" maxLength="80"
                              value={candidate_name}
                              onChange={(e) => setCandidateName(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_mobile">Mobile Number:<span class="req">*</span></label>
                            <input type="tel" placeholder="Enter Mobile No."
                              pattern="[6-9]{1}[0-9]{9}" title="Enter 10 digit Mobile Number"
                              value={candidate_mobile}
                              onChange={(e) => setCandidateMobile(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_alt_mobile">Alternate Mobile Number:<span class="req">*</span></label>
                            <input type="tel" placeholder="Enter Alt. Mobile No."
                              pattern="[6-9]{1}[0-9]{9}" title="Enter 10 digit Alt Mobile Number"
                              value={candidate_alt_mobile}
                              onChange={(e) => setCandidateAltMobile(e.target.value)}
                              className="form-control"
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_gender">Select Gender:<span class="req">*</span></label>
                              <InputGroup>
                                <select className="custom-select" 
                                value={candidate_gender}
                                onChange={(e) => setCandidateGender(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.gender.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                    
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_email">Candidate Email ID:<span class="req">*</span></label>
                            <input type="text" placeholder="Enter Candidate's Email ID"
                              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" maxLength="80"
                              value={candidate_email}
                              onChange={(e) => setCandidateEmail(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_dob">Select Date of Birth:<span class="req">*</span></label>
                            <input type="date" placeholder="Select DOB"
                              value={candidate_dob}
                              onChange={(e) => setCandidateDob(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_maritial_sts">Select Maritial Status:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_maritial_sts}
                                onChange={(e) => setCandidateMaritialSts(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.maritialStaus.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_married_pwd">Married Disabled?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_married_pwd}
                                onChange={(e) => setCandidateMarriedPwd(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_edu_qualification">Education Qualification:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_edu_qualification}
                                onChange={(e) => setCandidateEduQualification(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_caste ">Caste:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_caste}
                                onChange={(e) => setCandidateCaste(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.caste.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
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
                          {/* <fieldset class="scheduler-border">
                          <legend class="scheduler-border">Fathers's Data:</legend> */}
                            <div className="form-row">
                              <div className="col-md-3 mb-2" >
                                <label htmlFor="candidate_father_name">Father's Name:<span class="req">*</span></label>
                                <input type="text" placeholder="Enter Father's Name"
                                  pattern="^[A-Za-z]{1,80}$" maxLength="80"
                                  value={candidate_father_name}
                                  onChange={(e) => setCandidateFatherName(e.target.value)}
                                  className="form-control"
                                  required
                                />
                              </div>
                              <div className="col-md-3 mb-2" >
                                <label htmlFor="candidate_father_age">Father's Age<span class="req">*</span></label>
                                <input type="number"
                                  value={candidate_father_age}
                                  onChange={(e) => setCandidateFatherAge(e.target.value)}
                                  className="form-control"
                                  required
                                />
                              </div>
                              <div className="col-md-3 mb-2" >
                                <label htmlFor="candidate_father_education">Father's Education Qualification:<span class="req">*</span></label>
                                <InputGroup>
                                <select className="custom-select" 
                                value={candidate_father_education}
                                onChange={(e) => setCandidateFatherEducation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                              </div>
                              <div className="col-md-3 mb-2" >
                                <label htmlFor="candidate_father_occupation">Father's Occupation:<span class="req">*</span></label>
                                <InputGroup>
                                <select className="custom-select" 
                                value={candidate_father_occupation}
                                onChange={(e) => setCandidateFatherOccupation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                              </div>

                              <div className="col-md-3 mb-2" >
                                <label htmlFor="candidate_father_mobile">Father's Mobile Number:<span class="req">*</span></label>
                                <input type="number" placeholder="Enter Mobile No."
                                  pattern="/^[1-9][0-9]{9}$/gm" title="Enter 10 digit Mobile Number"
                                  value={candidate_father_mobile}
                                  onChange={(e) => setCandidateFatherMobile(e.target.value)}
                                  className="form-control"
                                  required
                                />
                              </div>
                              <div className="col-md-3 mb-2" >
                                <label htmlFor="candidate_father_income">Father's Income:<span class="req">*</span></label>
                                <InputGroup>
                                <select className="custom-select" 
                                value={candidate_father_income}
                                onChange={(e) => setCandidateFatherIncome(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                              </div>


                            </div>
                          {/* </fieldset> */}
                          {/* <!-- H4 Mothers Details --> */}
                          <div className="form-row">
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_name">Mother's Name:<span class="req">*</span></label>
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
                              <label htmlFor="candidate_mother_age">Mother's Age<span class="req">*</span></label>
                              <input
                                type="number"
                                value={candidate_mother_age}
                                onChange={(e) => setCandidateMotherAge(e.target.value)}
                                className="form-control"
                                required
                              />
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_education">Mother's Education Qualification:<span class="req">*</span></label>
                              <InputGroup>
                                <select className="custom-select" 
                                value={candidate_mother_education}
                                onChange={(e) => setCandidateMotherEducation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                            </div>
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_occupation">Mother's Occupation:<span class="req">*</span></label>
                              <InputGroup>
                                <select className="custom-select" 
                                value={candidate_mother_education}
                                onChange={(e) => setCandidateMotherEducation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                            </div>

                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_mother_mobile">Mother's Mobile Number:<span class="req">*</span></label>
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
                              <label htmlFor="candidate_mother_income">Mother's Income:<span class="req">*</span></label>
                              <InputGroup>
                                <select className="custom-select" 
                                value={candidate_mother_income}
                                onChange={(e) => setCandidateMotherIncome(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                            </div>
                          </div>


                          {/* <!-- H4 Spouse Details --> */}
                          {/* <!-- H4 Spouse Details --> */}
                          <div className="form-row">
                            <div className="col-md-3 mb-2" >
                              <label htmlFor="candidate_spouse_name">Spouse's Name:<span class="req">*</span></label>
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
                              <label htmlFor="candidate_spouse_age">Spouse's Age<span class="req">*</span></label>
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
                              <label htmlFor="candidate_spouse_education">Spouse's Education Qualification:<span class="req">*</span></label>
                              <InputGroup>
                                <select className="custom-select" 
                                value={candidate_spouse_education}
                                onChange={(e) => setCandidateSpouseEducation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                            </div>
                            <div className="col-md-3 mb-2" >
                              {/* <!-- ToDo --> */}
                              <label htmlFor="candidate_spouse_occupation">Spouse's Occupation:<span class="req">*</span></label>
                              <InputGroup>
                                <select className="custom-select" 
                                value={candidate_spouse_occupation}
                                onChange={(e) => setCandidateSpouseOccupation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                            </div>
                            <div className="col-md-3 mb-2" >
                              {/* <!-- ToDo --> */}
                              <label htmlFor="candidate_spouse_income">Spouse's Income:<span class="req">*</span></label>
                              <InputGroup>
                                <select className="custom-select" 
                                value={candidate_spouse_income}
                                onChange={(e) => setCandidateSpouseIncome(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
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
                            <label htmlFor="candidate_door_no">Candidate Door No.:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_village">Village Name:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_gram_panchayat">Gram Panchayat:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_post_office">Post Office:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_mandal">Mandal:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_district">District Name:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_school">School Name:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_special_school">Special School?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_special_school}
                                onChange={(e) => setCandidateSpecialSchool(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_school_board">School Board:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_school_board}
                                onChange={(e) => setCandidateSchoolBoard(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.schoolBoardType.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>

                          {/* <!-- College --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_college_name">College Name:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_special_college">Special College?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_special_college}
                                onChange={(e) => setCandidateSpecialCollege(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_college_board">College Board:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_college_board}
                                onChange={(e) => setCandidateCollegeBoard(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.intermediateBoardType.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          {/* <!-- University --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_university_name">University Name:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_special_university">Special University?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_special_university}
                                onChange={(e) => setCandidateSpecialUniversity(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_university_type">University Type:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_university_type}
                                onChange={(e) => setCandidateUniversityType(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.universityType.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          {/* <!-- PHD --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_phd_college">PHD College Name:<span class="req">*</span></label>
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
                            <label htmlFor="candidate_phd_specialization">PHD Specialization<span class="req">*</span></label>
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
                            <label htmlFor="candidate_phd_university_type">PHD University Type:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_phd_university_type}
                                onChange={(e) => setCandidatePhdUniversityType(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.universityType.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="candidate_other_courses">Candidate Other Courses:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={candidate_other_courses}
                                onChange={(e) => setCandidateOtherCourses(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.otherCourses.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
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
                            <label htmlFor="computer_skills">Computer Skills:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={computer_skills}
                                onChange={(e) => setComputerSkills(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.skills.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="typing_speed">Typing Speed:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={typing_speed}
                                onChange={(e) => setTypingSpeed(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.typingSpeed.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          {/* <!-- Employment Details --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="is_employed">Employed?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={is_employed}
                                onChange={(e) => setIsEmployed(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="last_salary">Last Salary<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={last_salary}
                                onChange={(e) => setLastSalary(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.lastSalary.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="years_experience">Years of Experience:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={years_experience}
                                onChange={(e) => setYearsExperience(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yearsOfExperience.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="experience1">Experience 1:<span class="req">*</span></label>
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
                            <label htmlFor="experience2">Experience 2:<span class="req">*</span></label>
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
                            <label htmlFor="bank_name">Bank Name:<span class="req">*</span></label>
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
                            <label htmlFor="account_no">Account Number:<span class="req">*</span></label>
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
                            <label htmlFor="branch_name">Branch Name:<span class="req">*</span></label>
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
                            <label htmlFor="ifsc_code">IFSC Code:<span class="req">*</span></label>
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
                            <label htmlFor="know_driving">Do you know Driving?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={know_driving}
                                onChange={(e) => setKnowDriving(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="have_license">Do you have License?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={have_license}
                                onChange={(e) => setHaveLicense(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="driving_license_no">License Number:<span class="req">*</span></label>
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
                            <label htmlFor="own_vehicle">Do you own Vehicle?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={own_vehicle}
                                onChange={(e) => setOwnVehicle(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="vehicle_number">Vehicle Number:<span class="req">*</span></label>
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
                            <label htmlFor="health_issues">Health Issues:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={health_issues}
                                onChange={(e) => setHealthIssues(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="issue_type">Health Issues Type:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={issue_type}
                                onChange={(e) => setIssueType(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.typeIssue.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
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
                            <label htmlFor="no_family_member">Number of Members in Family:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={no_family_member}
                                onChange={(e) => setNoFamilyMember(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.noFamilyMembers.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="pwd_family">Anyone PWD?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={pwd_family}
                                onChange={(e) => setPwdFamily(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="no_pwd_family_member">No. of PWD Members:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={no_pwd_family_member}
                                onChange={(e) => setNoPwdFamilyMember(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.noFamilyMembers.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          {/* <!-- Individual Family Member Details 1 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_name">Name:<span class="req">*</span></label>
                            <input
                              type="text"
                              placeholder="Enter Name"
                              value={member1_name}
                              onChange={(e) => setMember1Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_relation">Relation?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member1_relation}
                                onChange={(e) => setMember1Relation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.relation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_gender">Gender:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member1_gender}
                                onChange={(e) => setMember1Gender(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.gender.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_age">Age:<span class="req">*</span></label>
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
                            <label htmlFor="member1_education">Select Education:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member1_education}
                                onChange={(e) => setMember1Education(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_occupation">Occupation:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member1_occupation}
                                onChange={(e) => setMember1Occupation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member1_income">Income:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member1_income}
                                onChange={(e) => setMember1Income(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          {/* <!-- Individual Family Member Details 2 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_name">Name:<span class="req">*</span></label>
                            <input
                              type="text"
                              placeholder="Enter Name"
                              value={member2_name}
                              onChange={(e) => setMember2Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_relation">Relation?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member2_relation}
                                onChange={(e) => setMember2Relation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.relation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_gender">Gender:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member2_gender}
                                onChange={(e) => setMember2Gender(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.gender.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_age">Age:<span class="req">*</span></label>
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
                            <label htmlFor="member2_education">Select Education:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member2_education}
                                onChange={(e) => setMember2Education(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_occupation">Occupation:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member2_occupation}
                                onChange={(e) => setMember2Occupation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member2_income">Income:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member2_income}
                                onChange={(e) => setMember2Income(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          {/* <!-- Individual Family Member Details 3 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_name">Name:<span class="req">*</span></label>
                            <input
                              type="text"
                              placeholder="Enter Name"
                              value={member3_name}
                              onChange={(e) => setMember3Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_relation">Relation?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member3_relation}
                                onChange={(e) => setMember3Relation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.relation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_gender">Gender:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member3_gender}
                                onChange={(e) => setMember3Gender(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.gender.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_age">Age:<span class="req">*</span></label>
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
                            <label htmlFor="member3_education">Select Education:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member3_education}
                                onChange={(e) => setMember3Education(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_occupation">Occupation:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member3_occupation}
                                onChange={(e) => setMember3Occupation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member3_income">Income:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member3_income}
                                onChange={(e) => setMember3Income(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          {/* <!-- Individual Family Member Details 4 --> */}
                          {/* <!-- Individual Family Member Details 4 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_name">Name:<span class="req">*</span></label>
                            <input
                              type="text"
                              placeholder="Enter Name"
                              value={member4_name}
                              onChange={(e) => setMember4Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_relation">Relation?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member4_relation}
                                onChange={(e) => setMember4Relation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.relation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_gender">Gender:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member4_gender}
                                onChange={(e) => setMember4Gender(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.gender.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_age">Age:<span class="req">*</span></label>
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
                            <label htmlFor="member4_education">Select Education:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member4_education}
                                onChange={(e) => setMember4Education(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_occupation">Occupation:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member4_occupation}
                                onChange={(e) => setMember4Occupation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member4_income">Income:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member4_income}
                                onChange={(e) => setMember4Income(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          {/* <!-- Individual Family Member Details 5 --> */}
                          {/* <!-- Individual Family Member Details 5 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_name">Name:<span class="req">*</span></label>
                            <input
                              type="text"
                              placeholder="Enter Name"
                              value={member5_name}
                              onChange={(e) => setMember5Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_relation">Relation?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member5_relation}
                                onChange={(e) => setMember5Relation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.relation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_gender">Gender:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member5_gender}
                                onChange={(e) => setMember5Gender(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.gender.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_age">Age:<span class="req">*</span></label>
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
                            <label htmlFor="member5_education">Select Education:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member5_education}
                                onChange={(e) => setMember5Education(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_occupation">Occupation:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member5_occupation}
                                onChange={(e) => setMember5Occupation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member5_income">Income:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member5_income}
                                onChange={(e) => setMember5Income(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          {/* <!-- Individual Family Member Details 6 --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_name">Name:<span class="req">*</span></label>
                            <input
                              type="text"
                              placeholder="Enter Name"
                              value={member6_name}
                              onChange={(e) => setMember6Name(e.target.value)}
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_relation">Relation?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member6_relation}
                                onChange={(e) => setMember6Relation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.relation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_gender">Gender:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member6_gender}
                                onChange={(e) => setMember6Gender(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.gender.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_age">Age:<span class="req">*</span></label>
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
                            <label htmlFor="member6_education">Select Education:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member6_education}
                                onChange={(e) => setMember6Education(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Qualification.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_occupation">Occupation:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member6_occupation}
                                onChange={(e) => setMember6Occupation(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.occupation.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="member6_income">Income:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={member6_income}
                                onChange={(e) => setMember6Income(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.Income.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
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
                            <label htmlFor="is_disable">Are you a person with Disability?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={is_disable}
                                onChange={(e) => setIsDisable(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disable_certificate">If “Yes” do you have Disability Certificate?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={disable_certificate}
                                onChange={(e) => setDisableCertificate(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="no_disable_certificate">If “No” reason for not having Disability Certificate:<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={no_disable_certificate}
                                onChange={(e) => setNoDisableCertificate(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.noDisabilityCert.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disability_type">Type of Disability?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={disability_type}
                                onChange={(e) => setDisabilityType(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.disabilityType.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disability_percent">Percentage of Disability?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={disability_percent}
                                onChange={(e) => setDisabilityPercent(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.percentDisability.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="dependent">Are you a dependent for your day-to-day activities?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={dependent}
                                onChange={(e) => setDependent(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>
                          {/* <!-- Disability Pension Information --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="disability_pension">Are you availing Disability Pension?<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={disability_pension}
                                onChange={(e) => setDisabilityPension(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.yesNo.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="no_disability_pension">If 'No', Select Reason<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={no_disability_pension}
                                onChange={(e) => setNoDisabilityPension(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.noDisabilityCert.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          {/* <!-- Awareness/Utilization of PwD Schemes --> */}
                          <div className="col-md-3 mb-2" >
                            <label htmlFor="availed_schemes_knowledge">Do you have any idea about the following schemes<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={availed_schemes_knowledge}
                                onChange={(e) => setAvailedSchemesKnwoledge(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.awareOfSchemes.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
                          </div>

                          <div className="col-md-3 mb-2" >
                            <label htmlFor="availed_schemes">Schemes availed/availing<span class="req">*</span></label>
                            <InputGroup>
                                <select className="custom-select" 
                                value={availed_schemes}
                                onChange={(e) => setAvailedSchemes(e.target.value)}
                              >
                                  <option selected disabled>Please select</option>
                                  {dropdownOptions.awareOfSchemes.map((option, index) => (
                                    <option key={index} value={option}>
                                      {option}
                                    </option>
                                  ))}
                                  
                                </select>
                              </InputGroup>
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
                            <label htmlFor="ration_card_no">Ration Card No:<span class="req">*</span></label>
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
                            <label htmlFor="voter_id_no">Voter ID:<span class="req">*</span></label>
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
                            <label htmlFor="pan_card_no">PAN Card No:<span class="req">*</span></label>
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
                            <label htmlFor="disability_cert_no">Disability Certificate Number:<span class="req">*</span></label>
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
                            <label htmlFor="marriage_cert_no">Marriage Certificate Number:<span class="req">*</span></label>
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
                <button
                  type="submit"
                  value="submit"
                  // className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Add Candidate
                </button>
                {/* <input type="submit"></input> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCandidate;