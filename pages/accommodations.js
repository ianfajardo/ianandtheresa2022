import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Star from "../components/star";

export default function Details() {
  return (
    <div>
      <Head>
        <title>Ian & Theresa 2022 | August 5th, 2022 Wedding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <div className="page-bg accomodations animate__animated animate__fadeInRight">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h1 className="it-title text-white text-primary ">
                Accomodations
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="it-date-box full mb-0" style={{ paddingTop: "0" }}>
              <div class="it-preferred-hotel">
                <Star /> Preferred Hotel
              </div>
              <div className="it-date">Sheraton Norfolk Waterside Hotel</div>
              <div className="it-hotel-location">
                1396 Lynnhaven Pkwy, Virginia Beach, VA 23453
              </div>
              <p>
                For your convenience, a block of rooms has been reserved at the
                Sheraton Norfolk Waterside Hotel in Norfolk, VA. When calling to
                make your reservation, please mention the Riel-Fajardo wedding.
                Please call 757-622-6664 or use this link to make your
                reservation before July 5th, 2022.
              </p>
              <a
                target="_blank"
                className="btn btn-primary mt-2"
                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1639522353084&key=GRP&app=resvlink"
              >
                Book Here
              </a>
            </div>

            <img src="sheraton.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6">
            <div className="it-date-box">
              <div className="it-date-label">Other Hotels</div>
              <div className="it-date">Hilton Norfolk The Main</div>
              <div className="it-hotel-location">
                100 E Main St, Norfolk, VA 23510
              </div>
              <a
                target="_blank"
                className="btn btn-primary mt-3"
                href="https://www.themainnorfolk.com/"
              >
                Book Here
              </a>
            </div>
            <div className="it-date-box">
              <div className="it-date">Norfolk Waterside Marriott</div>
              <div className="it-hotel-location">
                235 E Main St, Norfolk, VA 23510
              </div>
              <a
                target="_blank"
                className="btn btn-primary mt-3"
                href="https://www.marriott.com/hotels/travel/orfws-norfolk-waterside-marriott/"
              >
                Book Here
              </a>
            </div>
            <div className="it-date-box">
              <div className="it-date">
                Glass Light Hotel & Gallery, Autograph Collection
              </div>
              <div className="it-hotel-location">
                201 Granby St, Norfolk, VA 23510
              </div>
              <p style={{ marginBottom: "0" }}>
                Enter code <strong>W14</strong> for 10% off on checkout{" "}
              </p>
              <a
                target="_blank"
                className="btn btn-primary mt-3"
                href="http://www.glasslighthotel.com/"
              >
                Book Here
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
