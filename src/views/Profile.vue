<template>
  <body class="nav-fixed">
    <!-- Navbar Items-->

    <div id="">
      <div id="">
        <main>
          <!-- Main page content-->
          <div class="container-xl px-4 mt-4">
            <!-- Account page navigation-->

            <hr class="mt-0 mb-4" />
            <div class="row">
              <div class="col-xl-4">
                <!-- Profile picture card-->
              </div>
              <div class="col-xl-12">
                <!-- Account details card-->
                <div class="card mb-4">
                  <div class="card-header">Account Details</div>
                  <div class="card-body">
                    <form>
                      <!-- Form Row-->
                      <div class="row gx-3 mb-3">
                        <!-- Form Group (first name)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputFirstName"
                            >First name</label
                          >
                          <input
                            class="form-control"
                            id="inputFirstName"
                            type="text"
                            placeholder="Enter your first name"
                            value="Valerie"
                          />
                        </div>
                        <!-- Form Group (last name)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputLastName"
                            >Last name</label
                          >
                          <input
                            class="form-control"
                            id="inputLastName"
                            type="text"
                            placeholder="Enter your last name"
                            value="Luna"
                          />
                        </div>
                      </div>
                      <!-- Form Row        -->
                      <div class="row gx-3 mb-3">
                        <!-- Form Group (organization name)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputOrgName"
                            >Phone Number</label
                          >
                          <input
                            class="form-control"
                            id="inputOrgName"
                            type="phone"
                            placeholder="Enter your organization name"
                            value="(857)763-684X"
                          />
                        </div>
                        <!-- Form Group (location)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputLocation"
                            >Location</label
                          >
                          <input
                            class="form-control"
                            id="inputLocation"
                            type="text"
                            placeholder="Enter your location"
                            value="San Francisco, CA"
                          />
                        </div>
                      </div>
                      <!-- Form Group (email address)-->
                      <div class="mb-3">
                        <label class="small mb-1" for="inputEmailAddress"
                          >Email address</label
                        >
                        <input
                          class="form-control"
                          id="inputEmailAddress"
                          type="email"
                          placeholder="Enter your email address"
                          value="name@example.com"
                        />
                      </div>
                      <!-- Form Row-->
                      <div class="row gx-3 mb-3">
                        <!-- Form Group (phone number)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="Password"
                            >Password</label
                          >
                          <input
                            class="form-control"
                            id="inputPassword"
                            type="tel"
                            placeholder="************"
                            value=""
                          />
                        </div>
                        <!-- Form Group (birthday)-->
                        <div class="col-md-6">
                          <label class="small mb-1" for="inputBirthday"
                            >Confirm Password</label
                          >
                          <input
                            class="form-control"
                            id="confirmPass"
                            type="text"
                            name="confirmPass"
                            placeholder="*************"
                            value=""
                          />
                        </div>
                      </div>
                      <!-- Save changes button-->
                      <button class="btn btn-primary" type="button">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer class="footer-admin mt-auto footer-light">
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
