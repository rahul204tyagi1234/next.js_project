// import { useState } from "react";

export default function LiveChat() {
  return (
    <div>
      <div class="card chat-form live-chat ">
        <h5 class="card-header bg-primary bg-opacity-50">Live chat</h5>
        <div class="card-body">
            <div class=" send-message message">
              <p class="small mb-0">
                Hello and thank you for visiting MDBootstrap. Please click the
                video below.
              </p>
            </div>
            <br></br>
            <div class="receve-message ">
              <p class="small mb-0">
                Hello and thank you for visiting MDBootstrap. Please click the
                video below.
              </p>
            </div>
            <div className="form-group">
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
              <a href="#" class="btn btn-primary">
                Send
              </a>
            </div>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
