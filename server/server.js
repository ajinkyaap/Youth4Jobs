

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require(".");

const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());

  /*  USER MASTER  */

// Create a User Mater
app.post("/api/v1/userMasters", async (req, res) => {
  // console.log(req.body);

  try {
    const results = await db.query (
      "INSERT INTO user_master (um_login_id, um_password, um_role, um_name, um_address, um_email, um_unique_id, um_id_type, um_dept, um_login_sts, um_created_time, um_last_login, um_ln_attempts, um_mobile_no) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *",
      [req.body.um_login_id, req.body.um_password, req.body.um_role, req.body.um_name, req.body.um_address, req.body.um_email, req.body.um_unique_id, req.body.um_id_type, req.body.um_dept, req.body.um_login_sts, req.body.um_created_time, req.body.um_last_login, req.body.um_ln_attempts, req.body.um_mobile_no]
    );
    // console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        User_Masters: results.rows[0],
      },
    });
  } catch (err) {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});


// Get all User Masters
app.get("/api/v1/userMasters", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const results = await db.query(
      "select * from user_master ORDER BY um_seq, um_role"
    );
    // console.log(results);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        User_Masters: results.rows,
      },
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});

//Get a user Master
app.get("/api/v1/userMasters/:um_seq", async (req, res) => {
  // console.log(req.params.um_seq);

  try {
    const results = await db.query(
      "select * from user_master where um_seq = $1",
      [req.params.um_seq]
    );
    // console.log("User Master length "+ results.length )
    // var size = results.rows.length;
    // console.log("results size "+ size);
    if(results.rows.length >= 1){
      res.status(200).json({
        status: "success",
        data: {
          User_Masters: results.rows[0],
          // reviews: reviews.rows,
        },
      });    
  }else{
    res.status(404).json({
      status: "error",
      error:{
        detail: "No User Master found"
      }
    })

  }
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});

// Update User Master

app.put("/api/v1/userMasters/:um_seq", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE user_master SET um_seq = $1, um_login_id = $2, um_password = $3, um_role =$4, um_name =$5, um_address=$6, um_email=$7, um_unique_id=$8, um_id_type=$9, um_dept=$10, um_login_sts=$11, um_created_time=$12, um_last_login=$13, um_ln_attempts=$14 where um_seq = $1 returning *",
      [req.body.um_seq, req.body.um_login_id, req.body.um_password, req.body.um_role, req.body.um_name, req.body.um_address, req.body.um_email, req.body.um_unique_id, req.body.um_id_type, req.body.um_dept, req.body.um_login_sts, req.body.um_created_time, req.body.um_last_login, req.body.um_ln_attempts]
    );

    res.status(200).json({
      status: "success",
      data: {
        User_Masters: results.rows[0],
      },
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
  // console.log(req.params.id);
  // console.log(req.body);
});

// Delete User Master

app.delete("/api/v1/userMasters/:um_seq", async (req, res) => {
  try {
    const results = db.query("DELETE FROM user_master where um_seq = $1", [
      req.params.um_seq,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});

// app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
//   try {
//     const newReview = await db.query(
//       "INSERT INTO reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;",
//       [req.params.id, req.body.name, req.body.review, req.body.rating]
//     );
//     console.log(newReview);
//     res.status(201).json({
//       status: "success",
//       data: {
//         review: newReview.rows[0],
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });


/* CandidateS */
// Create a User Mater
app.post("/api/v1/candidates", async (req, res) => {
  // console.log(req.body);

  try {
    const candidateData = await db.query(
      `INSERT INTO candidates (sales_rep_emp_num,
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
        availed_schemes_knwoledge,
        availed_schemes,
        ration_card_no,
        voter_id_no,
        pan_card_no,
        disablity_cert_no,
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
    ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
        $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
        $21, $22, $23, $24, $25, $26, $27, $28, $29, $30,
        $31, $32, $33, $34, $35, $36, $37, $38, $39, $40,
        $41, $42, $43, $44, $45, $46, $47, $48, $49, $50,
        $51, $52, $53, $54, $55, $56, $57, $58, $59, $60,
        $61, $62, $63, $64, $65, $66, $67, $68, $69, $70,
        $71, $72, $73, $74, $75, $76, $77, $78, $79, $80,
        $81, $82, $83, $84, $85, $86, $87, $88, $89, $90,
        $91, $92, $93, $94, $95, $96, $97, $98, $99, $100,
        $101, $102, $103, $104, $105, $106, $107, $108, $109, $110,
        $111, $112, $113, $114, $115, $116, $117, $118, $119, $120,
        $121, $122, $123, $124, $125, $126, $127, $128, $129, $130,
        $131, $132, $133, $134, $135, $136, $137
    ) RETURNING *`,
      [
    req.body.sales_rep_emp_num,
    req.body.candidate_aadhar,
    req.body.candidate_name,
    req.body.candidate_mobile,
    req.body.candidate_alt_mobile,
    req.body.candidate_gender,
    req.body.candidate_email,
    req.body.candidate_dob,
    req.body.candidate_maritial_sts,
    req.body.candidate_married_pwd,
    req.body.candidate_edu_qualification,
    req.body.candidate_caste,
    req.body.candidate_father_name,
    req.body.candidate_father_age,
    req.body.candidate_father_education,
    req.body.candidate_father_occupation,
    req.body.candidate_father_mobile,
    req.body.candidate_father_income,
    req.body.candidate_mother_name,
    req.body.candidate_mother_age,
    req.body.candidate_mother_education,
    req.body.candidate_mother_occupation,
    req.body.candidate_mother_mobile,
    req.body.candidate_mother_income,
    req.body.candidate_spouse_name,
    req.body.candidate_spouse_age,
    req.body.candidate_spouse_education,
    req.body.candidate_spouse_occupation,
    req.body.candidate_spouse_income,
    req.body.candidate_door_no,
    req.body.candidate_village,
    req.body.candidate_gram_panchayat,
    req.body.candidate_post_office,
    req.body.candidate_mandal,
    req.body.candidate_district,
    req.body.candidate_school,
    req.body.candidate_special_school,
    req.body.candidate_school_board,
    req.body.candidate_college_name,
    req.body.candidate_special_college,
    req.body.candidate_college_board,
    req.body.candidate_university_name,
    req.body.candidate_special_university,
    req.body.candidate_university_type,
    req.body.candidate_phd_college,
    req.body.candidate_phd_specialization,
    req.body.candidate_phd_university_type,
    req.body.candidate_other_courses,
    req.body.computer_skills,
    req.body.typing_speed,
    req.body.is_employed,
    req.body.last_salary,
    req.body.years_experience,
    req.body.experience1,
    req.body.experience2,
    req.body.bank_name,
    req.body.account_no,
    req.body.branch_name,
    req.body.ifsc_code,
    req.body.know_driving,
    req.body.have_license,
    req.body.driving_license_no,
    req.body.own_vehicle,
    req.body.vehicle_number,
    req.body.health_issues,
    req.body.issue_type,
    req.body.no_family_member,
    req.body.pwd_family,
    req.body.no_pwd_family_member,
    req.body.member1_name,
    req.body.member1_relation,
    req.body.member1_gender,
    req.body.member1_age,
    req.body.member1_education,
    req.body.member1_occupation,
    req.body.member1_income,
    req.body.member2_name,
    req.body.member2_relation,
    req.body.member2_gender,
    req.body.member2_age,
    req.body.member2_education,
    req.body.member2_occupation,
    req.body.member2_income,
    req.body.member3_name,
    req.body.member3_relation,
    req.body.member3_gender,
    req.body.member3_age,
    req.body.member3_education,
    req.body.member3_occupation,
    req.body.member3_income,
    req.body.member4_name,
    req.body.member4_relation,
    req.body.member4_gender,
    req.body.member4_age,
    req.body.member4_education,
    req.body.member4_occupation,
    req.body.member4_income,
    req.body.member5_name,
    req.body.member5_relation,
    req.body.member5_gender,
    req.body.member5_age,
    req.body.member5_education,
    req.body.member5_occupation,
    req.body.member5_income,
    req.body.member6_name,
    req.body.member6_relation,
    req.body.member6_gender,
    req.body.member6_age,
    req.body.member6_education,
    req.body.member6_occupation,
    req.body.member6_income,
    req.body.candidate_contact_no,
    req.body.is_disable,
    req.body.disable_certificate,
    req.body.no_disable_certificate,
    req.body.disability_type,
    req.body.disability_percent,
    req.body.dependent,
    req.body.disability_pension,
    req.body.no_disability_pension,
    req.body.availed_schemes_knwoledge,
    req.body.availed_schemes,
    req.body.ration_card_no,
    req.body.voter_id_no,
    req.body.pan_card_no,
    req.body.disablity_cert_no,
    req.body.ssc_proof_no,
    req.body.ssc_memo_no,
    req.body.hsc_memo_no,
    req.body.grad_memo_no,
    req.body.pg_memo_no,
    req.body.phd_no,
    req.body.tech_qualification_memo_no,
    req.body.vocatioanl_memo_no,
    req.body.diploma_memo_no,
    req.body.income_cert_no,
    req.body.marriage_cert_no
]);
    console.log(candidateData);
    res.status(201).json({
      status: "success",
      data: {
        Candidates: candidateData.rows[0],
      },
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});

// Get all Candidates
app.get("/api/v1/candidates", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const candidateData = await db.query(
      "select * from candidates ORDER BY candidate_id"
    );
    // console.log(candidateData);

    res.status(200).json({
      status: "success",
      results: candidateData.rows.length,
      data: {
        Candidates: candidateData.rows,
      }
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});

//Get a candidate by candidate ID
app.get("/api/v1/candidates/:candidate_id", async (req, res) => {
  // console.log(req.params.candidate_id);

  try {
    const candidateData = await db.query(
      "select * from candidates where candidate_id = $1",
      [req.params.candidate_id]
    );
    
    if(candidateData.rows.length >= 1){
    res.status(200).json({
      status: "success",
      data: {
        Candidates: candidateData.rows[0],
        // reviews: reviews.rows,
      },  
    });
  }else{
      res.status(404).json({
        status: "error",
        error:{
          detail: "No Candidate found"
        }
      })
  }
 } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});

// Update User Master

app.put("/api/v1/candidates/:candidate_id", async (req, res) => {
  try {
    const candidateData = await db.query(
      `UPDATE your_table_name
      SET 
        sales_rep_emp_num=$1,
        candidate_aadhar=$2,
        candidate_name=$3,
        candidate_mobile=$4,
        candidate_alt_mobile=$5,
        candidate_gender=$6,
        candidate_email=$7,
        candidate_dob=$8,
        candidate_maritial_sts=$9,
        candidate_married_pwd=$10,
        candidate_edu_qualification=$11,
        candidate_caste=$12,
        candidate_father_name=$13,
        candidate_father_age=$14,
        candidate_father_education=$15,
        candidate_father_occupation=$16,
        candidate_father_mobile=$17,
        candidate_father_income=$18,
        candidate_mother_name=$19,
        candidate_mother_age=$20,
        candidate_mother_education=$21,
        candidate_mother_occupation=$22,
        candidate_mother_mobile=$23,
        candidate_mother_income=$24,
        candidate_spouse_name=$25,
        candidate_spouse_age=$26,
        candidate_spouse_education=$27,
        candidate_spouse_occupation=$28,
        candidate_spouse_income=$29,
        candidate_door_no=$30,
        candidate_village=$31,
        candidate_gram_panchayat=$32,
        candidate_post_office=$33,
        candidate_mandal=$34,
        candidate_district=$35,
        candidate_school=$36,
        candidate_special_school=$37,
        candidate_school_board=$38,
        candidate_college_name=$39,
        candidate_special_college=$40,
        candidate_college_board=$41,
        candidate_university_name=$42,
        candidate_special_university=$43,
        candidate_university_type=$44,
        candidate_phd_college=$45,
        candidate_phd_specialization=$46,
        candidate_phd_university_type=$47,
        candidate_other_courses=$48,
        computer_skills=$49,
        typing_speed=$50,
        is_employed=$51,
        last_salary=$52,
        years_experience=$53,
        experience1=$54,
        experience2=$55,
        bank_name=$56,
        account_no=$57,
        branch_name=$58,
        ifsc_code=$59,
        know_driving=$60,
        have_license=$61,
        driving_license_no=$62,
        own_vehicle=$63,
        vehicle_number=$64,
        health_issues=$65,
        issue_type=$66,
        no_family_member=$67,
        pwd_family=$68,
        no_pwd_family_member=$69,
        member1_name=$70,
        member1_relation=$71,
        member1_gender=$72,
        member1_age=$73,
        member1_education=$74,
        member1_occupation=$75,
        member1_income=$76,
        member2_name=$77,
        member2_relation=$78,
        member2_gender=$79,
        member2_age=$80,
        member2_education=$81,
        member2_occupation=$82,
        member2_income=$83,
        member3_name=$84,
        member3_relation=$85,
        member3_gender=$86,
        member3_age=$87,
        member3_education=$88,
        member3_occupation=$89,
        member3_income=$90,
        member4_name=$91,
        member4_relation=$92,
        member4_gender=$93,
        member4_age=$94,
        member4_education=$95,
        member4_occupation=$96,
        member4_income=$97,
        member5_name=$98,
        member5_relation=$99,
        member5_gender=$100,
        member5_age=$101,
        member5_education=$102,
        member5_occupation=$103,
        member5_income=$104,
        member6_name=$105,
        member6_relation=$106,
        member6_gender=$107,
        member6_age=$108,
        member6_education=$109,
        member6_occupation=$110,
        member6_income=$111,
        candidate_contact_no=$112,
        is_disable=$113,
        disable_certificate=$114,
        no_disable_certificate=$115,
        disability_type=$116,
        disability_percent=$117,
        dependent=$118,
        disability_pension=$119,
        no_disability_pension=$120,
        availed_schemes_knwoledge=$121,
        availed_schemes=$122,
        ration_card_no=$123,
        voter_id_no=$124,
        pan_card_no=$125,
        disablity_cert_no=$126,
        ssc_proof_no=$127,
        ssc_memo_no=$128,
        hsc_memo_no=$129,
        grad_memo_no=$130,
        pg_memo_no=$131,
        phd_no=$132,
        tech_qualification_memo_no=$133,
        vocatioanl_memo_no=$134,
        diploma_memo_no=$135,
        income_cert_no=$136,
        marriage_cert_no=$137
      WHERE 
        candidate_id = $1
      RETURNING *;
      `,
      [[
        req.body.sales_rep_emp_num,
        req.body.candidate_aadhar,
        req.body.candidate_name,
        req.body.candidate_mobile,
        req.body.candidate_alt_mobile,
        req.body.candidate_gender,
        req.body.candidate_email,
        req.body.candidate_dob,
        req.body.candidate_maritial_sts,
        req.body.candidate_married_pwd,
        req.body.candidate_edu_qualification,
        req.body.candidate_caste,
        req.body.candidate_father_name,
        req.body.candidate_father_age,
        req.body.candidate_father_education,
        req.body.candidate_father_occupation,
        req.body.candidate_father_mobile,
        req.body.candidate_father_income,
        req.body.candidate_mother_name,
        req.body.candidate_mother_age,
        req.body.candidate_mother_education,
        req.body.candidate_mother_occupation,
        req.body.candidate_mother_mobile,
        req.body.candidate_mother_income,
        req.body.candidate_spouse_name,
        req.body.candidate_spouse_age,
        req.body.candidate_spouse_education,
        req.body.candidate_spouse_occupation,
        req.body.candidate_spouse_income,
        req.body.candidate_door_no,
        req.body.candidate_village,
        req.body.candidate_gram_panchayat,
        req.body.candidate_post_office,
        req.body.candidate_mandal,
        req.body.candidate_district,
        req.body.candidate_school,
        req.body.candidate_special_school,
        req.body.candidate_school_board,
        req.body.candidate_college_name,
        req.body.candidate_special_college,
        req.body.candidate_college_board,
        req.body.candidate_university_name,
        req.body.candidate_special_university,
        req.body.candidate_university_type,
        req.body.candidate_phd_college,
        req.body.candidate_phd_specialization,
        req.body.candidate_phd_university_type,
        req.body.candidate_other_courses,
        req.body.computer_skills,
        req.body.typing_speed,
        req.body.is_employed,
        req.body.last_salary,
        req.body.years_experience,
        req.body.experience1,
        req.body.experience2,
        req.body.bank_name,
        req.body.account_no,
        req.body.branch_name,
        req.body.ifsc_code,
        req.body.know_driving,
        req.body.have_license,
        req.body.driving_license_no,
        req.body.own_vehicle,
        req.body.vehicle_number,
        req.body.health_issues,
        req.body.issue_type,
        req.body.no_family_member,
        req.body.pwd_family,
        req.body.no_pwd_family_member,
        req.body.member1_name,
        req.body.member1_relation,
        req.body.member1_gender,
        req.body.member1_age,
        req.body.member1_education,
        req.body.member1_occupation,
        req.body.member1_income,
        req.body.member2_name,
        req.body.member2_relation,
        req.body.member2_gender,
        req.body.member2_age,
        req.body.member2_education,
        req.body.member2_occupation,
        req.body.member2_income,
        req.body.member3_name,
        req.body.member3_relation,
        req.body.member3_gender,
        req.body.member3_age,
        req.body.member3_education,
        req.body.member3_occupation,
        req.body.member3_income,
        req.body.member4_name,
        req.body.member4_relation,
        req.body.member4_gender,
        req.body.member4_age,
        req.body.member4_education,
        req.body.member4_occupation,
        req.body.member4_income,
        req.body.member5_name,
        req.body.member5_relation,
        req.body.member5_gender,
        req.body.member5_age,
        req.body.member5_education,
        req.body.member5_occupation,
        req.body.member5_income,
        req.body.member6_name,
        req.body.member6_relation,
        req.body.member6_gender,
        req.body.member6_age,
        req.body.member6_education,
        req.body.member6_occupation,
        req.body.member6_income,
        req.body.candidate_contact_no,
        req.body.is_disable,
        req.body.disable_certificate,
        req.body.no_disable_certificate,
        req.body.disability_type,
        req.body.disability_percent,
        req.body.dependent,
        req.body.disability_pension,
        req.body.no_disability_pension,
        req.body.availed_schemes_knwoledge,
        req.body.availed_schemes,
        req.body.ration_card_no,
        req.body.voter_id_no,
        req.body.pan_card_no,
        req.body.disablity_cert_no,
        req.body.ssc_proof_no,
        req.body.ssc_memo_no,
        req.body.hsc_memo_no,
        req.body.grad_memo_no,
        req.body.pg_memo_no,
        req.body.phd_no,
        req.body.tech_qualification_memo_no,
        req.body.vocatioanl_memo_no,
        req.body.diploma_memo_no,
        req.body.income_cert_no,
        req.body.marriage_cert_no
      ]
      ]
    );

    res.status(200).json({
      status: "success",
      data: {
        Candidates: candidateData.rows[0],
      },
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
  // console.log(req.params.id);
  // console.log(req.body);
});

// Delete User Master

app.delete("/api/v1/candidates/:candidate_id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM candidates where candidate_id = $1", [
      req.params.candidate_id,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});


//candidates for volunteers
app.get("/api/v1/userCandidates/:vol_id", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const userCandidateData = await db.query(
      "SELECT * FROM candidates INNER JOIN volunteers ON candidates.sales_rep_emp_num = volunteers.vol_id where sales_rep_emp_num=$1 ORDER BY candidate_id",
      [req.params.vol_id]
    );
    // console.log(userCandidateData);
    if(userCandidateData.rows.length >= 1){
      res.status(200).json({
        status: "success",
        results: userCandidateData.rows.length,
        data: {
          userCandidateData: userCandidateData.rows,
        },
      });
    }else{
      res.status(404).json({
        status: "error",
        error:{
          detail: "No Candidate found for Volunteer"
        }
      })
  }
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});


//Volunteer for UMs
app.get("/api/v1/userVolunteers/:um_seq", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const userVolunteerData = await db.query(
      "SELECT * FROM volunteers INNER JOIN user_master ON volunteers.um_seq = user_master.um_seq where user_master.um_seq=$1",
      [req.params.um_seq]
    );
    // console.log(userVolunteerData);
    if(userVolunteerData.rows.length >= 1){
      res.status(200).json({
        status: "success",
        results: userVolunteerData.rows.length,
        data: {
          userVolunteers: userVolunteerData.rows,
        }
      });
    }else{
      res.status(404).json({
        status: "error",
        error:{
          detail: "No Volunteer found for User Master"
        }
      })
  }
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});


////// Volunteers

app.post("/api/v1/volunteers", async (req, res) => {
  console.log(req.body);

  try {
    const results = await db.query(
      "INSERT INTO volunteers (um_seq, um_login_id, um_password, um_role, um_name, um_address, um_email, um_unique_id, um_id_type, um_dept, um_login_sts, um_created_time, um_last_login, um_ln_attempts,um_mobile_no) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) returning *",
      [req.body.um_seq, req.body.um_login_id, req.body.um_password, req.body.um_role, req.body.um_name, req.body.um_address, req.body.um_email, req.body.um_unique_id, req.body.um_id_type, req.body.um_dept, req.body.um_login_sts, req.body.um_created_time, req.body.um_last_login, req.body.um_ln_attempts, req.body.um_mobile_no]
    );
    // console.log(results);
    res.status(201).json({
      status: "success",
      data: {
        Volunteers: results.rows[0],
      },
    });
  } catch (err)  {
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});


// Get all Volunteers under User Master Um seq
app.get("/api/v1/volunteers", async (req, res) => {
  try {
    //const results = await db.query("select * from restaurants");
    const results = await db.query(
      "SELECT * FROM volunteers"
      //  INNER JOIN user_master ON volunteer.um_seq = user_master.um_seq where um_seq=$1 ORDER BY vol_id"
      // [req.params.um_seq]
    );
    // console.log(results);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        Volunteers: results.rows,
      }
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});

//// Get a Volunteer
app.get("/api/v1/volunteers/:vol_id", async (req, res) => {
  // console.log(req.params.um_seq);

  try {
    const results = await db.query(
      "select * from volunteers where vol_id = $1",
      [req.params.vol_id]
    );
    if(results.rows.length >= 1){
      res.status(200).json({
        status: "success",
        data: {
          Volunteers: results.rows[0],
          // reviews: reviews.rows,
        },
      });
    }else{
      res.status(404).json({
        status: "error",
        error:{
          detail: "No User Master found"
        }
      })
  }
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
});

//// Update volunteers

app.put("/api/v1/volunteers/:vol_id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE volunteers SET um_seq = $1, um_login_id = $2, um_password = $3, um_role =$4, um_name =$5, um_address=$6, um_email=$7, um_unique_id=$8, um_id_type=$9, um_dept=$10, um_login_sts=$11, um_created_time=$12, um_last_login=$13, um_ln_attempts=$14, vol_id=$15 where vol_id = $15 returning *",
      [req.body.um_seq, req.body.um_login_id, req.body.um_password, req.body.um_role, req.body.um_name, req.body.um_address, req.body.um_email, req.body.um_unique_id, req.body.um_id_type, req.body.um_dept, req.body.um_login_sts, req.body.um_created_time, req.body.um_last_login, req.body.um_ln_attempts, req.body.vol_id]
    );

    res.status(200).json({
      status: "success",
      data: {
        Volunteers: results.rows[0],
      },
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where,
        routine: err.routine
      }
    });
    console.log(err);
  }
  // console.log(req.params.id);
  // console.log(req.body);
});

//// Delete volunteers

app.delete("/api/v1/volunteers/:vol_id", async (req, res) => {
  try {
    const results = db.query("DELETE FROM volunteers where vol_id = $1", [
      req.params.vol_id,
    ]);
    res.status(204).json({
      status: "success",
    });
  } catch (err)  {
    const error = err;
    res.status(400).json({
      status: "error",
      error:{
        detail: err.detail,
        where: err.where
      }
    });
    console.log(err);
  }
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});


module.exports = app;