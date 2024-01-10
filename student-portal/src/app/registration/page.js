export default function registration() {
  return (
    <div class="card container p-4 col-md-4">
      <div class=" bg-white text-center">
        <h2>Registration</h2>
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0"></blockquote>
        <form>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Name</label>
            <input
              type="text"
              id="firstName"
              class="form-control"
              placeholder="Enter the name"
              required=""
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Last name</label>
            <input
              type="text"
              id="lastName"
              class="form-control"
              placeholder="Enter the father name"
              required=""
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              placeholder="name@gmail.com"
              required=""
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Password</label>
            <input
              type="text"
              id="password"
              class="form-control"
              placeholder="487845@#$561"
              required=""
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              class="form-control"
              placeholder="487845@#$561"
              required=""
            />
          </div>
          <div class="form-group">
          <input type="radio" name="gender" value="male" /> Male &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="radio" name="gender" value="female" /> Female
          </div>
         
          <div class="form-group">
            <label for="exampleFormControlSelect1">Address</label>
            <input
              type="text"
              id="address"
              class="form-control"
              placeholder="Enter the address"
              required=""
            />
          </div>
          <div id="registerButton" class="text-center">
            <a
              type="submit"
              class="btn btn-primary btn-lg m-2 "
              href="javascript:void(0)"
              onclick="createRegData()"
            >
              {" "}
              Submit
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
