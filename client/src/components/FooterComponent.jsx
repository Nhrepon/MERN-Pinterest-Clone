import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const FooterComponent = () => {


  // Go to top ---------------------------------------------
  $(function(){
    var gotoTop = $(".goto-top");
    gotoTop.click(function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      //$("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });



  return (
    <div className="container-fluid bg-success text-light mt-5">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-4">
            <h4>About us</h4>
            <hr />
            <p>
              MERN E-commerce app is a simple web application with super
              performance ...
            </p>
            <p>
              MERN E-commerce app is a simple web application with super
              performance ...
            </p>
          </div>
          <div className="col-md-4">
            <h4>Important link</h4>
            <hr />
            <ul className="">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>News letter</h4>
            <hr />
            <div className="row">
              <div className="col-12">
                <form>
                  <input
                    type="email"
                    className="form-control my-2"
                    id="email"
                    placeholder="Enter email address"
                    //value=""
                    required
                  />
                  <button
                    className="btn btn-outline-light bg-success"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-12 text-center">
            <p>Copyright@2024 NHRepon.com</p>
          </div>
          <button
            className="goto-top rounded-circle text-center text-success fw-bold fs-4 d-flex align-items-center justify-content-center shadow-sm overflow-hidden"
            title="Go to top"
          >
            {/* <img src="/back-to-top.svg" alt="back-to-top" className="w-100"></img> */}
            {/* <i class="bi bi-chevron-up fw-bolder fs-2"></i> */}
            <svg
              width="80px"
              height="80px"
              viewBox="0 0 32 32"
              fill="#198754"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.413,17.387,14,14.754V22.02A1.979,1.979,0,0,0,15.98,24h.04A1.979,1.979,0,0,0,18,22.02V15.057l.26.042,2.248,2.227a2.091,2.091,0,0,0,2.657.293A1.973,1.973,0,0,0,23.42,14.6L17.346,8.581a2.017,2.017,0,0,0-2.833,0l-5.934,6a1.97,1.97,0,0,0,0,2.806A2.016,2.016,0,0,0,11.413,17.387Z"/>
              <path d="M16,32A16,16,0,1,0,0,16,16,16,0,0,0,16,32ZM16,4A12,12,0,1,1,4,16,12.013,12.013,0,0,1,16,4Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;