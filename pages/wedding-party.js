import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function WeddingParty() {
  return (
    <div>
      <Head>
        <title>Ian & Theresa 2022 | August 5th, 2022 Wedding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-bg wedding animate__animated animate__fadeInRight">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="it-title text-white text-primary ">
                Wedding Party
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="it-date-box">
              <div className="it-date-label">Bridesmaids</div>
              <div className="it-location">Angelique Ellorin</div>
              <div className="it-location">Helena Ellorin</div>

              <div className="it-location">Aralee Fajardo</div>
              <div className="it-location">Danielle Salcedo</div>
              <div className="it-location">Joanne Fitts</div>
              <div className="it-location">Michelle Tran</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="it-date-box">
              <div className="it-date-label">Groomsmen</div>
              <div className="it-location">Andrew Huynh</div>
              <div className="it-location">Mark Salcedo</div>

              <div className="it-location">Benjamin Amarillo</div>
              <div className="it-location">James Sagayno</div>
              <div className="it-location">Joe Borja</div>
              <div className="it-location">Matthew Miranda</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
