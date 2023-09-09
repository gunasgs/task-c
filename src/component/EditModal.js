import React from "react";

function EditModal({ formik }) {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md">
        <div class="modal-content ">
          <div class="modal-header ">
            <h5 class="modal-title " id="exampleModalLabel">
              Edit
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div className="container-fluid ">
              <div class="row g-4  ">
                <form className="form-box" onSubmit={formik.handleSubmit}>
                  <div class="mb-3 ">
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

                  <button
                    type="submit"
                    class="btn edit-btn w-100 "
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
