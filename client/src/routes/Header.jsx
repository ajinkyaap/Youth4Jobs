import y4jIcon from "../Y4jIcon.jpg";
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "../css/App.css"

const Header = () => {
  const [storedObject, setStoredObject] = useState(null);

  // const handleHomeClick = () => {
  //   history.push("/");
  // };

  useEffect(() => {
    // Retrieve the object from localStorage
    const storedObjectString = localStorage.getItem('user-info');
    
    if (storedObjectString) {
      // Parse the string to convert it back to an object
      const parsedObject = JSON.parse(storedObjectString);

      // Set the object in state
      setStoredObject(parsedObject);
    }
  }, []);

  const history = useHistory();
  const handleLogOut = async () => {
    await localStorage.clear();
      history.push("/");
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-toggleable-sm fixed-top">
        <div className="navbar-header ml-3">
          <img
            id="Y4jIcon"
            src={y4jIcon}
            width="110"
            height="40"
            className="d-inline-block align-top"
            alt="Y4JIcon"
          />
        </div>
        
        <span style={{
          // alignContent:"center"
        }}>
          {storedObject && "Welcome  " + storedObject.um_name}
          {storedObject && 
          <button type="button" onClick={handleLogOut}
                style={{
                  margin:  "0px 0px 0px 10px",
                  display:"inline",
                  height: "30px",
                  width: "auto",
                  padding: "5px",
                  fontSize: "16px",
                  backgroundColor: "#808080",
                  borderRadius:"0px"
                }}>
                Log Out
              </button>
              }
        </span>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button> */}

         <div className="collapse navbar-collapse topnav-right" id="navbarMenu">
          <ul className="navbar-nav ml-auto">

            {storedObject && 
            <li className="nav-item active">
            <button type="button" onClick={handleLogOut}
                style={{
                  margin: "5px 10px 30px 0px",
                  display:"block",
                  height: "0.5px",
                  width: "auto",
                  padding: "0px",
                  fontSize: "16px"
                }}>
                Log Out
              </button>
            </li>
            }
            <li className="nav-item">
              <button type="button" className="footer-buttton" data-toggle="modal" data-target="#contactUs"
                style={{
                  margin: "5px 10px 30px 0px",
                  display:"block",
                  height: "0.5px",
                  width: "auto",
                  padding: "0px",
                  fontSize: "16px"
                }}>
                Contact Us
              </button>
            </li>
          </ul>
        </div>

      </nav>
      {/* Contact Us */}
      <div className="modal fade" id="contactUs" role="dialog" aria-labelledby="contactUsTitle" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="contactUsTitle">Contact Us</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body align-center">
              Email : youth4jobs@abc.com
              <br></br>
              Mobile Number : 9876543219
            </div>
            <div className="modal-footer">
              <button type="button" className="ok-button" data-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>
      {/* PRIVACY POLICY*/}
      <div className="modal fade" id="privacyPolicy" 
      // tabindex="-1" 
      role="dialog" aria-labelledby="privacyPolicyTitle" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="privacyPolicyTitle">Privacy Policy</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body align-center">
              Privacy Policy here...
            </div>
            <div className="modal-footer">
            <button type="button" className="ok-button" data-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>
      {/* TERMS and CONDITIONS */}
      <div className="modal fade" id="termsAndConditions" 
      // tabindex="-1"
       role="dialog" aria-labelledby="termsAndConditionsTitle" aria-hidden="true">
        <div className="modal-dialog" >
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title" id="termsAndConditionsTitle">Terms And Conditions</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body align-center">
              Terms and Conditions here...
            </div>
            <div className="modal-footer">
            <button type="button" className="ok-button" data-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>
      
      <footer
        className="navbar mt-auto py-3 fixed-bottom"
        style={{
          position: "flex",
          bottom: "0",
          width: "100%",
          height: "2em",
          fontSize: "12px",
          lineHeight: "1.5",
        }}
      >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button type="button" className="footer-buttton" data-toggle="modal" data-target="#privacyPolicy"
              style={{
                marginTop:"-10px",
                display:"block",
                height: "0.5px",
                width: "auto",
                fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
                fontSize: "12px",
                padding: "0px",
                marginLeft: "20px",
              }}>
                Privacy Policy
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="footer-buttton" data-toggle="modal" data-target="#termsAndConditions"
              style={{
                marginTop:"-10px",
                
                marginLeft: "120px",
                display:"block",
                height: "0.5px",
                width: "auto",
                fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
                fontSize: "12px",
                padding: "0px"
              }}>
                Terms And Conditions
              </button>
            </li>
            <li className="nav-item">
              <button type="button" className="footer-buttton" data-toggle="modal" data-target="#contactUs"
              style={{
                marginTop:"-10px",
                
                marginLeft: "270px",
                display:"block",
                height: "0.5px",
                width: "auto",
                fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
                fontSize: "12px",
                padding: "0px"
              }}>
                Contact Us
              </button>
            </li>
          </ul>
      </footer>
    </>
  );
};

export default Header;