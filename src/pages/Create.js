import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Navbar } from "../component/Navbar";

function Create() {
  let navigate = useNavigate();
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
        await axios.post(
          // "https://www.melivecode.com/api/attractions/create",
          "https://62519153dfa31c1fbd6fbf0f.mockapi.io/data",
          values
          // {
          //   headers: {
          //     Authorization: `Bearer ${window.localStorage.getItem(`token`)}`,
          //   },
          // }
        );

        swal(" Added Successfull", {
          icon: "success",
          timer: 2000,
        });
        navigate("/home");
      } catch (error) {
        console.log(" added error" + error);
      }
    },
  });
  return (
    <>
      <Navbar />
      <div className="container form-con">
        <form className="form-box" onSubmit={formik.handleSubmit}>
          <div class="mb-3 mt-4">
            <label class="form-label">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Detail</label>
            <textarea
              type="text"
              name="detail"
              id="detail"
              onChange={formik.handleChange}
              value={formik.values.detail}
              className="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Coverimage</label>
            <input
              type="text"
              name="coverimage"
              id="coverimage"
              onChange={formik.handleChange}
              value={formik.values.coverimage}
              className="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Latitude</label>
            <input
              type="text"
              name="latitude"
              id="latitude"
              onChange={formik.handleChange}
              value={formik.values.latitude}
              className="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Longitude</label>
            <input
              type="text"
              name="longitude"
              id="longitude"
              onChange={formik.handleChange}
              value={formik.values.longitude}
              className="form-control"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary submit-btn w-100">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Create;
