// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// export default function Viewuser() {
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const result = await axios.get(`http://localhost:8080/user/${id}`);
//     setUser(result.data);
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
//           <h2 className="text-center m-4">User Details</h2>
//           <p> meow
//             {user.errormessage}
//           </p>
//           <div className="card">
//             <div className="card-header">
//               Details of user id : {user.id}
//               <ul className="list-group list-group-flush">
//                 <li className="list-group-item">
//                   <b>Name:</b>
//                   {user.name}
//                 </li>
//                 <li className="list-group-item">
//                   <b>UserName:</b>
//                   {user.username}
//                 </li>
//                 <li className="list-group-item">
//                   <b>Email:</b>
//                   {user.email}
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <Link className="btn btn-primary my-2" to={"/"}>
//             Back to Home
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewuser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage("User not found.");
      } else {
        setErrorMessage("An error occurred while fetching user data.");
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          {errorMessage ? (
            <div className="alert alert-danger text-center">{errorMessage}</div>
          ) : (
            <div className="card">
              <div className="card-header">
                Details of user id : {user.id}
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Name:</b> {user.name}
                  </li>
                  <li className="list-group-item">
                    <b>UserName:</b> {user.username}
                  </li>
                  <li className="list-group-item">
                    <b>Email:</b> {user.email}
                  </li>
                </ul>
              </div>
            </div>
          )}

          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
