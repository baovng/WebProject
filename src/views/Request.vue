<template>
  <body class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container-xl px-4">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <!-- Basic registration form-->
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header justify-content-center">
                    <h3 class="fw-light my-4">Request Super Frog</h3>
                  </div>
                  <div class="card-body">
                    <!-- Registration form-->
                    <form>
                      <!-- Form Row-->
                      <div class="row gx-3">
                        <div class="col-md-6">
                          <!-- Form Group (first name)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputFirstName"
                              >First Name</label
                            >
                            <input
                              class="form-control"
                              id="inputFirstName"
                              type="text"
                              placeholder="Enter first name"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <!-- Form Group (last name)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputLastName"
                              >Last Name</label
                            >
                            <input
                              class="form-control"
                              id="inputLastName"
                              type="text"
                              placeholder="Enter last name"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- Form Group (email address)            -->
                      <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress"
                          >Email</label
                        >
                        <input
                          class="form-control"
                          id="inputEmailAddress"
                          type="email"
                          aria-describedby="emailHelp"
                          placeholder="Enter email address"
                        />
                      </div>

                      <!-- Form Group  Name -->
                      <div class="mb-3">
                        <label class="small mb-1" for="name">Event Name</label>
                        <input
                          class="form-control"
                          id="name"
                          type="text"
                          aria-describedby="emailHelp"
                          placeholder="Event Name"
                        />
                      </div>
                      <!-- For Group Date -->

                      <div class="row gx-3">
                        <div class="col-md-6">
                          <!-- Form Group (time)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputPassword"
                              >Date</label
                            >
                            <input
                              class="form-control"
                              id="date"
                              type="date"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <!-- Form Group (confirm password)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputConfirmPassword"
                              >Location</label
                            >
                            <input
                              class="form-control"
                              id="location"
                              type="location"
                              placeholder="Location"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- Form Row    -->
                      <div class="row gx-3">
                        <div class="col-md-6">
                          <!-- Form Group (time)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputPassword"
                              >Start Time</label
                            >
                            <input
                              class="form-control"
                              id="stime"
                              type="time"
                              placeholder="Start Time"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <!-- Form Group (confirm password)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="inputConfirmPassword"
                              >End Time</label
                            >
                            <input
                              class="form-control"
                              id="etime"
                              type="time"
                              placeholder="End Time"
                            />
                          </div>
                        </div>
                      </div>

                      <!-- Form Row    -->
                      <div class="row gx-3">
                        <div class="col-md-6">
                          <!-- Form Group (time)-->
                          <div class="mb-3">
                            <label class="small mb-1" for="theme">Theme</label>
                            <input
                              class="form-control"
                              id="theme"
                              type="text"
                              placeholder="Theme"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <!-- Form Group-->
                          <div class="mb-3">
                            <label class="small mb-1" for="description"
                              >Description</label
                            >
                            <input
                              class="form-control"
                              id="etime"
                              type="text"
                              placeholder="description"
                            />
                          </div>
                        </div>
                      </div>
                      <!-- Form Group (create account submit)-->
                      <a class="btn btn-primary btn-block" href=""
                        >Send Request</a
                      >
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutAuthentication_footer">
        <footer class="footer-admin mt-auto footer-dark">
          <div class="container-xl px-4">
            <div class="row">
              <div class="col-md-6 small">
                Copyright &copy; Your Website 2021
              </div>
              <div class="col-md-6 text-md-end small">
                <a href="#!">Privacy Policy</a>
                &middot;
                <a href="#!">Terms &amp; Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </body>
</template>

<style></style>
