export default function ChatingId() {
  return (
    // <-------------------Start chat page ------------------>
    <div className="container-sm rounded">
      <div className="card  ">
        <h5 className="card-header bg-primary bg-opacity-50">Live chat</h5>
        <div className="card-body">
          <div className=" form-control chat-message-input-colur">
            <p className="small mb-0">
              Hello and thank you for visiting MDBootstrap. Please click the
              video below.
            </p>
          </div>
          <br></br>
          <div className=" form-control chat-message-colur">
            <p className="small mb-0">
              Hello and thank you for visiting MDBootstrap. Please click the
              video below.
            </p>
          </div>
          <div className="form-group ">
            <label htmlFor="exampleFormControlSelect2">Message</label>

            <textarea
              className="form-control"
              name=""
              id=""
              cols="15"
              rows="5"
              required=""
            ></textarea>
          </div>
          <br></br>
          <div className="form-group">
            <a href="#" className="btn btn-primary">
              Send
            </a>
          </div>
        </div>
      </div>
    </div>
    // <-------------------End chat page--------------------->
  );
}
