import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Rsvp() {
  return (
    <div>
      <Head>
        <title>Ian & Theresa 2022 | August 5th, 2022 Wedding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      {/*
      <iframe
        style={{
          display: "block",
          width: "100%",
          height: "900px",
          border: "none",
          overflow: "visible",
        }}
        src="https://withjoy.com/ianandtheresa2022/rsvp"
      ></iframe>
    */}

      <div className="container" style={{ height: "600px" }}>
        <div className="animate__animated animate__fadeIn">
          <div className="row align-items-center text-center">
            <div className="col-lg-12">
              <h1 className="it-title text-primary ">rsvp</h1>
            </div>
          </div>
        </div>
        <div className="row align-items-center" >
          <div className="offset-lg-3 col-lg-6 text-center">
            <div className="it-lead">Coming soon! <br/>Please check back when you recieve your invitation.</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
