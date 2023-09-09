import React from "react";

function EditModal({ formik }) {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md">
        <div className="modal-content ">
          <div className="modal-header ">
            <h5 className="modal-title " id="exampleModalLabel">
              Edit
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid ">
              <div className="row g-4  ">
                <form className="form-box" onSubmit={formik.handleSubmit}>
                  <div className="mb-3 ">
                    <label className="form-label">Name</label>
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
                  <div className="mb-3">
                    <label className="form-label">Detail</label>
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
                  <div className="mb-3">
                    <label className="form-label">Coverimage</label>
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
                  <div className="mb-3">
                    <label className="form-label">Latitude</label>
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
                  <div className="mb-3">
                    <label className="form-label">Longitude</label>
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

                  <button
                    type="submit"
                    className="btn edit-btn w-100 "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
