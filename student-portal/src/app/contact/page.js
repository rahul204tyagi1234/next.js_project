import Header from "../header/page"
import Footer from "../footer/page"

export default function about(){
    return(
      <div>
        <Header/>
        <div className="card container p-2 col-md-4">
        <div className="bg-white text-center">
          <h2>Contact Us</h2>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0"></blockquote>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name</label>
              <input
                type="text"
                className="form-control"
                // placeholder="Enter the name"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Email</label>
              <input
                type="text"
                className="form-control"
                // placeholder="name@gmail.com"
                required=""
              />
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
            <div className="text-center">
              <button type="button" className="btn btn-primary btn-lg m-2" >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
      </div>
    )
}