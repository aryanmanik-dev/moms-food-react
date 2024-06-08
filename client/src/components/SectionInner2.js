import React, { useState } from "react";
// import Food1 from "../assets/img/food-1.webp";
import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import Modal from "./Modal_1";
const SectionInner2 = (props) => {
  return (
    <div className="sectionInner2 container-fluid">
      <div className="row">
        <div className="col-md-4">
          <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div class="card">
              <div class="card-body d-flex flex-row">
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    Indian Meal Plan
                  </h5>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>

                <div className="mt-3 mb-3 d-flex justify-content-around">
                  <Button variant="primary" onClick={props.handleShow}>
                    Launch static backdrop modal
                  </Button>

                  <button type="button" class="btn btn-danger btn-rounded">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-4">
          <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div class="card">
              <div class="card-body d-flex flex-row">
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    Indian Meal Plan
                  </h5>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>

                <div className="mt-3 mb-3 d-flex justify-content-around">
                  <button type="button" class="btn btn-success btn-rounded">
                    Menu
                  </button>
                  <button type="button" class="btn btn-danger btn-rounded">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-4">
          <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div class="card">
              <div class="card-body d-flex flex-row">
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    Indian Meal Plan
                  </h5>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>

                <div className="mt-3 mb-3 d-flex justify-content-around">
                  <button type="button" class="btn btn-success btn-rounded">
                    Menu
                  </button>
                  <button type="button" class="btn btn-danger btn-rounded">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-md-4">
          <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div class="card">
              <div class="card-body d-flex flex-row">
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    Indian Meal Plan
                  </h5>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>

                <div className="mt-3 mb-3 d-flex justify-content-around">
                  <button type="button" class="btn btn-success btn-rounded">
                    Menu
                  </button>
                  <button type="button" class="btn btn-danger btn-rounded">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-4">
          <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div class="card">
              <div class="card-body d-flex flex-row">
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    Indian Meal Plan
                  </h5>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>

                <div className="mt-3 mb-3 d-flex justify-content-around">
                  <button type="button" class="btn btn-success btn-rounded">
                    Menu
                  </button>
                  <button type="button" class="btn btn-danger btn-rounded">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-4">
          <section class="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div class="card">
              <div class="card-body d-flex flex-row">
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    Indian Meal Plan
                  </h5>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>

                <div className="mt-3 mb-3 d-flex justify-content-around">
                  <button type="button" class="btn btn-success btn-rounded">
                    Menu
                  </button>
                  <button type="button" class="btn btn-danger btn-rounded">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="col-md-6">
          <section class="mx-auto my-5" style={{ maxWidth: "30rem" }}>
            <div class="card">
              <div class="card-body d-flex flex-row">
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    Indian Meal Plan
                  </h5>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>

                <div className="mt-3 mb-3 d-flex justify-content-around">
                  <button type="button" class="btn btn-success btn-rounded">
                    Menu
                  </button>
                  <button type="button" class="btn btn-danger btn-rounded">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-md-6">
          <section class="mx-auto my-5" style={{ maxWidth: "30rem" }}>
            <div class="card">
              <div class="card-body d-flex flex-row">
                <div>
                  <h5 class="card-title font-weight-bold mb-2">
                    Indian Meal Plan
                  </h5>
                </div>
              </div>
              <div
                class="bg-image hover-overlay ripple rounded-0"
                data-mdb-ripple-color="light"
              >
                <img
                  class="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Horizontal/Food/full page/2.jpg"
                  alt="Card image cap"
                />
                <a href="#!">
                  <div
                    class="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </a>

                <div className="mt-3 mb-3 d-flex justify-content-around">
                  <button type="button" class="btn btn-success btn-rounded">
                    Menu
                  </button>
                  <button type="button" class="btn btn-danger btn-rounded">
                    Select
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Wholesome Plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>FEATURES:</h6>
            <ul class="list-styled">
              <li>
                Specially crafted meals high on protein and antioxidants that
                are a treat for your taste buds
              </li>
              <li>Quality checked dishes made with best & fresh ingredients</li>
              <li>Dedicated Account Manager to assist you</li>
              <li>Fresh delivery at your doorstep</li>
            </ul>

            <button type="button" class="btn btn-danger btn-lg">
              Start Your Plan Now
            </button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}

        <Modal />
      </div>
    </div>
  );
};

export default SectionInner2;
