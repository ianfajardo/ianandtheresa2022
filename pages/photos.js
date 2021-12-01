import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";

export default function Photos() {
  return (
    <div>
      <Head>
        <title>Ian & Theresa 2022 | August 5th, 2022 Wedding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="it-container details-bg">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="it-title text-white text-primary animate__animated animate__fadeInDown">
                Photos
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="it-section sm animate__animated animate__fadeInUp">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img src="/3.jpg" alt="" className="img-fluid" />
              </div>
              <div className="col-lg-6">
                <div className="it-date-box">
                  <div className="it-date-label">The Date</div>
                  <div className="it-date">August 5th, 2022</div>
                  <div className="it-location">Virginia Beach, VA</div>

                  <div>
                    <a href="#" className="btn btn-secondary me-2 mb-2 mt-3">
                      RSVP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
