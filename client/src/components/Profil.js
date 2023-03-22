import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { logout, userCurrent } from "../JS/userSlice/userSlice";
import "./userProfil.css";
import { commandedelete, commandeget } from "../JS/commandeSlice";
import Welcome from "./Welcome";
import TBodyRow from "./TBodyRow";
import { addproduct } from "../JS/productslice";

function Profil({ ping, setping }) {
  useEffect(() => {
    dispatch(userCurrent());

    dispatch(commandeget());
  }, []);
  const user = useSelector((state) => state.user?.user);
  const products = useSelector((state) => state.product?.productList);
  const [show, setShow] = useState(false);
  const [newUser, setNewUser] = useState({});
  const [newProductAdd, setNewProductAdd] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setcategory] = useState("command");

  return (
    <div className="welcome">
      <div style={{ height: 100 }}>
        <Welcome />
      </div>
      {show && <div className="modal-add-product">
        <input placeholder="Product NAme" type="text" onChange={(e) => setNewProductAdd({ ...newProductAdd, nameproduct:e.target.value})}/>
        <input placeholder="Image Link" type="text" onChange={(e) => setNewProductAdd({ ...newProductAdd, img:e.target.value})}/>
        <input placeholder="Categorie" type="text"  onChange={(e)=>setNewProductAdd({...newProductAdd,categorie:e.target.value})}/>
        <input placeholder="Prix " type="number"  onChange={(e)=>setNewProductAdd({...newProductAdd,Prix:e.target.value})}/>
        <input placeholder="Description" type="text" onChange={(e) => setNewProductAdd({ ...newProductAdd, description:e.target.value})}/>
        <div
        style={{display:'flex',marginLeft:150,justifyContent:"center"}}
        > <button style={{
          backgroundColor: "white",
          padding: '8px 20px',
          borderRadius: 10,
          float: "right",
          marginRight: 100,
          marginBottom: 50,
          backgroundColor:"red",
          color:"white"
        }} onClick={() => setShow(false)}>Cancel</button>
          <button style={{
            backgroundColor: "white",
            padding: '8px 30px',
            borderRadius: 10,
            float: "right",
            marginRight: 100,
            marginBottom: 50,
            backgroundColor: "green",
            color: "white"
          }} onClick={() =>{ dispatch(addproduct(newProductAdd));setping(!ping);setShow(false)}}>Add</button></div>
      </div>}
      <div>
        <div className="row" style={{ width: 1148, marginLeft: 48 }}>
          <div className="col-md-12">
            <ol className="breadcrumb">
              <h6 style={{ fontWeight: "bolder", fontSize: 24 }}>
                Informations personnelles
              </h6>
            </ol>
          </div>
        </div>
        {user ? (
          <div className="container" style={{ marginTop: 110 }}>
            <div className="main-body" style={{ margin: 20 }}>
              {/* /Breadcrumb */}
              <div className="row gutters-sm">
                <div
                  className="col-md-4 mb-3"
                  style={{ marginTop: 20, borderRadius: 20 }}
                >
                  <div
                    className="card"
                    style={{
                      marginLeft: -100,
                      marginTop: -120,
                      width: 400,
                      height: 350,
                    }}
                  >
                    <div className="card-body profile-info">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="me.jpg"
                          alt="Admin"
                          class="rounded-circle p-1 bg-light"
                          width="120"
                          height="130"
                        />
                        <div className="mt-3">
                          <h4>
                            {user?.name} {user?.LastName}
                          </h4>
                          <p className="text-secondary mb-1">
                            Full Stack Developer
                          </p>
                          <p className="text-muted font-size-sm"></p>

                          {/* <button className="btn btn-primary">Changer votre photo</button> */}
                        </div>
                      </div> <button style={{
                      color:"red"
                    }}
                    onClick={()=>{window.localStorage.removeItem('token');setping(!ping);setTimeout(() => {
                      navigate('/')
                    }, 1000);}}
                    >Deconnection</button>
                    </div>
                   
                  </div>
                </div>

                <div className="col-md-8">
                  <div
                    className="card mb-3 "
                    style={{
                      marginLeft: -10,
                      marginTop: -100,
                      width: 665,
                      height: 350,
                    }}
                  >
                    <div className="card-body profile-info">
                      <div className="input-row">
                        <div className="col-sm-3">
                          <h4
                            className="mb-0"
                            style={{ color: "blue", fontWeight: 700 }}
                          >
                            Prénom
                          </h4>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            onChange={(e) =>
                              setNewUser({ ...newUser, name: e.target.value })
                            }
                            type="text"
                            class="form-control"
                            name="name"
                            value={user?.name}
                          />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="col-sm-3">
                          <h4
                            className="mb-0"
                            style={{ color: "blue", fontWeight: 700 }}
                          >
                            Nom
                          </h4>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            onChange={(e) =>
                              setNewUser({
                                ...newUser,
                                LastName: e.target.value,
                              })
                            }
                            type="text"
                            class="form-control"
                            value={user?.LastName}
                          />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="col-sm-3">
                          <h4
                            className="mb-0"
                            style={{ color: "blue", fontWeight: 700 }}
                          >
                            Email
                          </h4>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            onChange={(e) =>
                              setNewUser({ ...newUser, email: e.target.value })
                            }
                            type="text"
                            class="form-control"
                            value={user?.email}
                          />
                        </div>
                      </div>
                      <div className="input-row">
                        <div className="col-sm-3">
                          <h4
                            className="mb-0"
                            style={{ color: "blue", fontWeight: 700 }}
                          >
                            Téléphone
                          </h4>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            class="form-control"
                            value="21546879"
                          />
                        </div>
                      </div>
                      <button onClick={() => dispatch()}>Edit</button>
                      {/*  <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Bay Area, San Francisco, CA
                      </div>
                    </div>
                    <hr /> */}
                      <div className="row">
                        <div className="col-sm-12">
                          {/* <button variant="primary" onClick={()=> {dispatch(editUser(user._id,{name,lastName,email,password,imageUrl,isAdmin,phone})); alert("Votre profile est modifié")}}> Enregistrer </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2 style={{ marginTop: 150, marginLeft: 600 }}> </h2>
        )}

        {/*Reservation List */}
        <div>
          <button
            onClick={() => setShow(true)}
            style={{
              backgroundColor: "white",
              padding: 8,
              borderRadius: 10,
              float: "right",
              marginRight: 100,
              marginBottom: 50,
            }}
          >
            ADD Product
          </button>
          <Table
            striped
            bordered
            hover
            style={{ width: "100%", fontSize: "20px" }}
          >
            <thead>
              <tr>
                <th>Product image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>x</th>
              </tr>
            </thead>

            {products?.map((el) => (
              <TBodyRow el={el} ping={ping} setping={setping} />
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Profil;

//  <button  onClick={() => {
//             setTimeout(() => {localStorage.removeItem("token");

//               navigate("/logi");
//             }, 1000);}} >logout</button>
