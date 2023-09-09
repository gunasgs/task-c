import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useFormik } from "formik";
import EditModal from "../component/EditModal";

function Edit() {
  let params = useParams();
  let id = params.id;
  let navigate = useNavigate();

  const [view, setview] = useState([]);
  const [edit, setedit] = useState(false);
  const [loading, setloading] = useState(false);
  const [current, setcurrent] = useState("");

  async function fetchAll() {
    setloading(true);
    try {
      // let Data = await axios.get(
      //   `https://www.melivecode.com/api/auth/attractions/${params.id}`,
      //   {
      //     headers: {
      //       Authorization: window.localStorage.getItem("token"),
      //     },
      //   }
      // );
      let Data = await axios.get(
        `https://62519153dfa31c1fbd6fbf0f.mockapi.io/data/${id}`
      );

      setview(Data.data);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  }
  let handleEdit = async (id) => {
    try {
      let edit = await axios.get(
        `https://62519153dfa31c1fbd6fbf0f.mockapi.io/data/${id}`
      );
      formik.setValues({
        name: edit.data.name,
        detail: edit.data.detail,
        coverimage: edit.data.coverimage,
        latitude: edit.data.latitude,
        longitude: edit.data.longitude,
      });
      setcurrent(edit.data.id);
      setedit(true);
    } catch (error) {
      alert("Something went wrong");
    }
  };
  let formik = useFormik({
    initialValues: {
      name: "",
      detail: "",
      coverimage: "",
      latitude: "",
      longitude: "",
    },
    onSubmit: async (values) => {
      try {
        if (edit) {
          await axios.put(
            `https://62519153dfa31c1fbd6fbf0f.mockapi.io/data/${current}`,
            values
          );
          fetchAll();
          swal(" Updated Successfull", {
            icon: "success",
            timer: 2000,
          });
          navigate("/home");
        } else {
          await axios.post(
            "https://62519153dfa31c1fbd6fbf0f.mockapi.io/data",
            values
          );
          fetchAll();
        }
      } catch (error) {
        alert("Something went wrong");
      }
    },
  });
  let handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://62519153dfa31c1fbd6fbf0f.mockapi.io/data/${id}`)
          .then(() => {
            fetchAll();
          });

        swal(" Data has been deleted!", {
          icon: "success",
          timer: 2000,
        });
        fetchAll();
        navigate("/home");
      } else {
      }
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 card-edit mb-2">
            {loading ? (
              <p className="loading home-loading">Loading ...</p>
            ) : (
              <div>
                <h3 class="card-title text-center my-3 ">{view.name}</h3>
                <img
                  src={view.coverimage}
                  className="edit-img"
                  alt="edit-img"
                />
                <p className="edit-detail">{view.detail}</p>
                <div className="d-flex justify-content-center ">
                  <button
                    className="btn edit-btn"
                    type="button"
                    onClick={() => handleEdit(view.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Edit
                  </button>
                  <EditModal formik={formik} />

                  <button
                    className="btn edit-btn2 ms-3"
                    onClick={() => handleDelete(view.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
