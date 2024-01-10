export default function about(){
    return(
        <div class="card container p-2 col-md-4">
        <div class="bg-white text-center">
          <h2>Contact Us</h2>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0"></blockquote>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter the name"
                required=""
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="name@gmail.com"
                required=""
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">Message</label>
  
              <textarea
                class="form-control"
                name=""
                id=""
                cols="15"
                rows="5"
                required=""
              ></textarea>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-primary btn-lg m-2" >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}