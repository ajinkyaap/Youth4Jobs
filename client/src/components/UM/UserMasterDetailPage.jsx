import React, { useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserMasterContext } from "../../context/UserMasterContext";
import BasePath from "../../apis/BasePath";
import { CandidateContext } from "../../context/CandidateContext";
import { VolunteerContext } from "../../context/VolunteerContext";
import Header from "../../routes/Header";
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';


const UserMasterDetailPage = () => {
  const { um_seq } = useParams();
  const { selectedUserMaster, setSelectedUserMaster } = useContext(
    UserMasterContext
  );
  let history = useHistory();
  const { volunteers, setVolunteers } = useContext(VolunteerContext);
  // setVolunteers(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get(`/userMasters/${um_seq}`);
        setSelectedUserMaster(response.data.data.User_Masters);


        const userVolunteerDataResponse = await BasePath.get(`/userVolunteers/${um_seq}`);
        setVolunteers(userVolunteerDataResponse.data.data.userVolunteers);
        console.log("User Volunteers", userVolunteerDataResponse.data.data.userVolunteers)

        let table = new DataTable('#VolunteersTable', {
          "language":{
            "zeroRecords": "No Volunteer found"
            },
            "processing": true,
            "scrollX": true,
            "scrollY": true,
            "fixedColumns": true,
            "scrollCollapse": true,
          
      });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [setVolunteers]);

  // console.log("Volunteers", volunteers)

  const handleDelete = async (e, vol_id) => {
    e.stopPropagation();
    try {
      await BasePath.delete(`/volunteer/${vol_id}`);
      setVolunteers(
        volunteers.filter((volunteer) => {
          return volunteer.vol_id !== vol_id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, vol_id) => {
    e.stopPropagation();
    history.push(`/volunteers/${vol_id}/update`);
  };

  const handleVolunteerSelect = (vol_id) => {
    history.push(`/volunteers/${vol_id}`);
  };

  return (
    <>
    <Header/>
    {/* User Details */}
    <div >
    <div className="accordion accordion-flush " id="accordionExampleVolunteer">
      {selectedUserMaster && (
        <>
          <h4 className="titleHeader" id="VolunteerData" data-toggle="collapse" data-target="#userMasterData" aria-expanded="true" aria-controls="userMasterData">
            Employee : {selectedUserMaster.um_name}'s Data
          </h4>
          <div className="card">
            <div id="userMasterData" className="collapse show" aria-labelledby="userMasterData" data-parent="#accordionExampleVolunteer">
              <div className="card-body">
                <div className="container">

            <div className="row" >
            <div className="col-lg">
                  <h6> Name : </h6>
              </div>
              <div className="col-lg" >{selectedUserMaster.um_name}</div>
              <div className="col-lg">
                  <h6> Email ID : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.um_email}</div>
            </div>
            <div className="row">
              <div className="col-lg">
                  <h6> Address : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.um_address}</div>
              <div className="col-lg">
                  <h6> Mobile No : </h6>
              </div>
              <div className="col-lg">{selectedUserMaster.um_mobile_no}</div>
                
            </div>
            </div>
            </div>
          </div>

          </div>
        </>
      )}
    </div>

          {/* User's Volunteer Data */}
          <h4>
          Volunteer List
          </h4> 
          <div className="table-responsive">
            <table className="table table-striped table-hover row-border"
            id="VolunteersTable"
            style={{
              width:"100%"
            }}>
              <thead className =" thead-dark">
                <tr className="bg-primary">
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Email</th>
                  <th scope="col">ID Type</th>
                  <th scope="col">Department</th>
                </tr>
              </thead>
              <tbody >
                {volunteers &&
                  volunteers.map((volunteer) => {
                    return (
                      <tr
                        onClick={() => handleVolunteerSelect(volunteer.vol_id)}
                          key={volunteer.vol_id}
                      >
                        <td>{volunteer.um_name}</td>
                        <td>{volunteer.um_address}</td>
                        <td>{volunteer.um_email}</td>
                        <td>{volunteer.um_id_type}</td>
                        <td>{volunteer.um_dept}</td>
                        {/* <td>
                          <button
                            onClick={(e) => handleUpdate(e, volunteer.vol_id)}
                            className="btn btn-warning"
                          >
                            Update
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={(e) => handleDelete(e, volunteer.vol_id)}
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

export default UserMasterDetailPage;
