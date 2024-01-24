import React, { useEffect, useContext } from "react";
import BasePath from "../../apis/BasePath";
import { UserMasterContext } from "../../context/UserMasterContext";
import { useHistory } from "react-router-dom";
import DataTable from 'datatables.net-dt';
import 'datatables.net-responsive-dt';


const UserMasterList = () => {
  const { userMasters, setUserMasters } = useContext(UserMasterContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BasePath.get("/userMasters");
        setUserMasters(response.data.data.User_Masters);
        let table = new DataTable('#UserMastersTable', {
          "language":{
            "zeroRecords": "No Employee found"
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
  }, [setUserMasters]);

  const handleDelete = async (e, um_seq) => {
    e.stopPropagation();
    try {
      // const response = 
      await BasePath.delete(`/userMasters/${um_seq}`);
      setUserMasters(
        userMasters.filter((userMaster) => {
          return userMaster.um_seq !== um_seq;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e, um_seq) => {
    e.stopPropagation();
    history.push(`/userMasters/${um_seq}/update`);
  };

  const handleUserMasterSelect = (um_seq) => {
    history.push(`/userMasters/${um_seq}`);
  };

  return (
    <>
    <h4>
      User List
    </h4>
    <div className="table-responsive">
      <table
      id="UserMastersTable" className="table table-sm table-striped table-hover table-bordered table-condensed"
      cellSpacing="0"
      width="100%"
      >
        <thead className =" thead-dark">
          <tr>
            <th scope="col">Role</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Unique ID</th>
            <th scope="col">ID Type</th>
            <th scope="col">Department</th>
          </tr>
        </thead>
        <tbody>
          {userMasters &&
            userMasters.map((userMaster) => {
              return (
                <tr>
                  <td>{userMaster.um_role}</td>
                  <td
                  onClick={() => handleUserMasterSelect(userMaster.um_seq)}
                  key={userMaster.um_seq}
                  >{userMaster.um_name}</td>
                  <td>{userMaster.um_address}</td>
                  <td>{userMaster.um_email}</td>
                  <td>{userMaster.um_unique_id}</td>
                  <td>{userMaster.um_id_type}</td>
                  <td>{userMaster.um_dept}</td>
                  {/* <td>
                    <button
                      onClick={(e) => handleUpdate(e, userMaster.um_seq)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, userMaster.um_seq)}
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
    </>
  );
};

export default UserMasterList;
