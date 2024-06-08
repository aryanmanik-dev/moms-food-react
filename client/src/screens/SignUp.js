import React, { useState } from "react";

const SignUp = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fname ||
      !lname ||
      !email ||
      !password ||
      !gender ||
      !mobile ||
      !country
    ) {
      alert("Please fill the fields");
      return;
    }

    // const { email, password } = e.value;
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-md-12 m-5">
            <h2 className="text-center">Register Here!</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="First Name"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control "
                    value={lname}
                    onChange={(e) => {
                      setLname(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control "
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Gender</label>
                  <div className="d-flex">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label class="form-check-label">Female</label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      />
                      <label class="form-check-label">Other</label>
                    </div>
                  </div>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="number"
                    placeholder="Mobile"
                    className="form-control "
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label className="form-label">Country</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  >
                    <option selected>Choose Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-dark">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
