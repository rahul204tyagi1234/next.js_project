import Image from "next/image";
import Header from "./header/page";
import Footer from "./footer/page";
import styles from "./page.module.css";
import Link from "next/link";

// <!--------import bootstrap---------->

export default function Home() {
  return (
    <main>
      <Header />
      <h2 className="h">
        <strong>Your Online Journey Starts Here:</strong>
      </h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="card cd text-center ">
              <img
                src="https://media.istockphoto.com/id/525409809/photo/teacher-and-students-in-classroom-during-lesson.jpg?s=612x612&w=0&k=20&c=SL2mO_Xl58IKYccvX5s_AGPdXJkEF4L0dMgtRVOjKAU="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Teachers</h5>
                <p className="card-text">
                  Teachers are the ones who open the minds of the young ones to
                  the world. They impart knowledge and show them what matters
                  the most. Teachers have a lot of students to take care of, and
                  they all look the same in the eyes of a teacher;
                </p>
                <a href="/registration" className="btn btn-primary">
                  Go Teachers
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="card cd text-center">
              <img
                src="https://media.istockphoto.com/id/1278976555/photo/happy-high-school-girl-using-laptop-in-classroom.jpg?s=612x612&w=0&k=20&c=d5XDR674Adb-yzGTtsqw07OgILDAEsHzgNIFTt14SWk="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Students</h5>
                <p className="card-text">
                  Student life is one of the most memorable phases of a person’s
                  life. The phase of student life builds the foundation of our
                  life. In student life, we do not just learn from books. We
                  learn to grow emotionally, physically,
                </p>
                <a href="/registration" className="btn btn-primary">
                  Go Students
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="card cd text-center">
              <img
                src="https://media.istockphoto.com/id/1059187270/photo/mom-yells-showing-mistake-in-daughters-homework.jpg?s=612x612&w=0&k=20&c=eueWOku8Rxa14OpMWqon9ls5GaWxcQbWqDnIpPKlF_w="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Parents</h5>
                <p className="card-text">
                  My parents are my strength who support me at every stage of
                  life. I cannot imagine my life without them. My parents are
                  like a guiding light who take me to the right path whenever I
                  get lost. My mother is a homemaker.
                </p>
                <a href="/registration" className="btn btn-primary">
                  Go Parents
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="card cd text-center">
              <img
                src="https://media.istockphoto.com/id/1459126246/photo/walking-to-class.jpg?s=612x612&w=0&k=20&c=96hTSCN6GNBHZaGbjssMUYSNrJrjdOt5xmN4GQS48U4="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Principal</h5>
                <p className="card-text">
                  Good morning students, staff, and parents. I hope you are all
                  doing well and are ready to embark on a new academic journey.
                  Today, I am here to welcome all of our students to the new
                  academic session.
                </p>
                <a href="/registration" className="btn btn-primary">
                  Go Principal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className=" title text-center">
        <b>Website Templates, Made Easy.</b>
      </h2>
      <h3>
        <p className=" getStarted text-center">
          Explore responsive, stunning <u>customizable website template</u>{" "}
          designs tailored to thrive in your industry.
        </p>
      </h3>
      <h3 className="getStarte ">
        <u>Create Your Website Now &gt; </u>
      </h3>
      <div id="carouselExampleCaptions container between" className="carousel slide" >
        {/* <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}

        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner container-fluid">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://previews.customer.envatousercontent.com/files/339337128/z/img/simple-ver-9.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div
              className="carousel-item container-fluid"
              data-bs-interval="2000"
            >
              <img
                src="https://previews.customer.envatousercontent.com/files/339337128/z/img/navigation-thumbnails-ver-1.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item container-fluid">
              <img
                src="https://previews.customer.envatousercontent.com/files/339337128/z/img/simple-ver-2.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <br></br>
      <br></br>
      <br></br>

      <div className="container-fluid"id="Built area" >
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="text-center ">
              <ul className="container Nunito Sans sans-serif">
                <h3> Monday</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.{" "}
                </p>

                <h3> Tuesday</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>

                <h3> Wednesday</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>

                <h3> Thursday</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>

                <h3> Friday</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>

                <h3> Saturday</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>

                <h3> Sunday</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="title  text-center"> Dream it , Built it .</div>
            <div className=" text-center">
              <img
                src="https://www.divi-pixel.com/wp-content/uploads/2022/06/text-highlighter-demos.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="title  text-center"> Dream it , Built it .</div>
            <div className=" ">
              <img
                src="https://www.divi-pixel.com/wp-content/uploads/2022/06/text-highlighter.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className=" text-center">
              <ul className="container Nunito Sans sans-serif">
                <h3> January</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.{" "}
                </p>
                <h3> February</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>
                <h3> March</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>
                <h3> April</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>
                <h3> May</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>
                <h3> June</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>
                <h3> July</h3>
                <p>
                  {" "}
                  Student life is meant to help us learn discipline and study.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
  <button class="btn btn-primary "  type="button">Button</button>
</div> */}
      <br></br>
      <br></br>
      <div className="title  text-center" id="Notifications area">Notifications , Updates</div>
      <br></br>
      <br></br>

      <div className="accordion container" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <b>Today Update</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <b>One Day Ago</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <b>Two Day Ago</b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>

      <Footer />
    </main>
  );
}
