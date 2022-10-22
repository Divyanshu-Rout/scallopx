import React from "react";
import "./AppLanding.css"

import { WhyImage } from "./AppLanding.styles";
import Fade from 'react-reveal/Fade';

import Footer from "../../components/SmallFooter/Footer";
console.log('this is onload')

// let cVid = document.getElementById("vidID");
// let cVid2 = document.getElementById("vidID2");
// let cVid3 = document.getElementById("vidID3");
// let cVid4 = document.getElementById("vidID4");
// let cTextId1 = document.getElementById("textId1");
// let cTextId2 = document.getElementById("textId2");
// let cTextId3 = document.getElementById("textId3");
// let cTextId4 = document.getElementById("textId4");
// let vid = document.getElementById("video01");
// let vid2 = document.getElementById("video02");
// let vid3 = document.getElementById("video03");
// let vid4 = document.getElementById("video04");

// vid.play();
const AppLanding = () => {
  const videoRef = React.useRef(null);
  const videoRef2 = React.useRef(null);
  const videoRef3 = React.useRef(null);
  const videoRef4 = React.useRef(null);

  React.useEffect(() => {
    const videoElement = videoRef.current;
    const videoElement2 = videoRef2.current;
    const videoElement3 = videoRef3.current;
    const videoElement4 = videoRef4.current;

    var cVid = document.getElementById("vidID");
    var cVid2 = document.getElementById("vidID2");
    var cVid3 = document.getElementById("vidID3");
    var cVid4 = document.getElementById("vidID4");

    var cTextId1 = document.getElementById("textId1");
    var cTextId2 = document.getElementById("textId2");
    var cTextId3 = document.getElementById("textId3");
    var cTextId4 = document.getElementById("textId4");
    cVid.classList.toggle("vid1");
    cTextId1.classList.add("showText");


    videoElement.play();
    videoElement.onended = () => {
      console.log('ended 1')
      cVid.classList.toggle("vid1");
      cVid2.classList.toggle("vid2");
      cTextId4.classList.remove("hideText");
      cTextId4.classList.remove("showText");
      cTextId1.classList.add("hideText");
      cTextId2.classList.add("showText");
      videoElement2.play();

    }
    videoElement2.onended = () => {
      console.log('ended 2');
      cVid2.classList.toggle("vid2");
      cVid3.classList.toggle("vid3");
      cTextId1.classList.remove("hideText");
      cTextId1.classList.remove("showText");
      cTextId2.classList.add("hideText");
      cTextId3.classList.add("showText");
      videoElement3.play();

    }
    videoElement3.onended = () => {
      console.log('ended 3');
      cVid3.classList.toggle("vid3");
      cVid4.classList.toggle("vid4");
      cTextId2.classList.remove("hideText");
      cTextId2.classList.remove("showText");
      cTextId3.classList.add("hideText");
      cTextId4.classList.add("showText");
      videoElement4.play();
    }
    videoElement4.onended = () => {
      console.log('ended 4');
      cVid4.classList.toggle("vid4");
      cVid.classList.toggle("vid1");
      cTextId3.classList.remove("hideText");
      cTextId3.classList.remove("showText");
      cTextId4.classList.add("hideText");
      cTextId1.classList.add("showText");
      videoElement.play();
    }
  });

  // Dispose the Video.js player when the functional component unmounts
  // React.useEffect(() => {
  //   return () => {
  //     if (playerRef.current) {
  //       playerRef.current.dispose();
  //       playerRef.current = null;
  //     }
  //   };
  // }, []);


  return (
    <>

      <nav>
        <div

          onClick={(e) => window.open("https://www.scallopx.com/")}
          class="logo">
          <img

            src={require('../../assets/appLandingAssets/Logo.svg').default}
            alt="Logo Image" />
        </div>
        {/* <div class="hamburger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div> */}
        <section>


        </section>
        <ul class="nav-links">
          <li>
            {/* <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle button-b" type="button" id="dropdownMenu2"
                data-toggle="dropdown" aria-expanded="false">
                Products
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">


                <a class="dropdown-item margin-o" target="blank" href="https://www.scallopx.com/">Earn</a>
                <a class="dropdown-item margin-o" target="blank" href="https://www.scallopx.com/">NFT</a>
                <a class="dropdown-item margin-o" target="blank" href="https://www.scallopx.com/">Token</a>
                <a class="dropdown-item margin-o" target="blank" href="https://scallopchain.com/landing">Scallop Chain</a>
                <a class="dropdown-item margin-o" target="blank" href="#">Scallop Stake</a>
                <a class="dropdown-item margin-o" target="blank" href="#">Scallop Swap</a>
              </div>
            </div> */}

          </li>
          <li>
            {/* <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle button-b" type="button" id="dropdownMenu2"
              data-toggle="dropdown" aria-expanded="false">
              About
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">


              <a class="dropdown-item margin-o" target="blank" href="https://www.scallopx.com/">Team</a>
              <a class="dropdown-item margin-o" target="blank" href="https://www.scallopx.com/">Backed by</a>
              <a class="dropdown-item margin-o" href="#">MahaDAO</a>
              <a class="dropdown-item margin-o" href="#">FAQs</a>

            </div>
          </div> */}

          </li>
          <li><a href="https://www.scallopx.com/">Home</a></li>
          <li><a target="blank" href="https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Scallop+Whitepaper.pdf">Light paper</a></li>

        </ul>
      </nav >

      <section className="head_conten">
        <div className="main_heading">
          <p className="start_use">Start using your crypto like never before</p>
          <div className="mobtezt"><p style={{ paddingBottom: 7 }}>from your mobile</p></div>

          <h4 style={{ color: "black" }}>Scallop merged crypto and fiat at one place to make your investment and use of your crypto and fiat more easy.
            you will
            get real experience of scallop ecosystem</h4>
        </div>

      </section>



      <Fade bottom delay={200}>
        <WhyImage>
          <section className="looper">
            <div className="img-wrap">
              <video autoPlay loop muted className="vid">
                <source src={"https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Videos/landingVideo.mp4"} type="video/mp4" />
              </video>
            </div>
            <img src={
              require("../../assets/appLandingAssets/looper.svg").default
            } alt="lpr" className="looperr" />



          </section>
        </WhyImage>
      </Fade>



      <section className="soon-sec sec_all">
        <p className="soon_avail"> <i>Soon Available</i></p>
        <a href="#"><img src={require('../../assets/appLandingAssets/playstorebanner.svg').default}
          alt="playstore" /></a>
        <a href="#"><img src={require('../../assets/appLandingAssets/appstore.svg').default} alt="appstore" /></a>
      </section>
      <div className="container relative2">

        <section className="sec_all">
          <div className="flex-container height400">
            <div className="flex-item-left ">
              <div style={{ marginLeft: -10, marginBottom: -10 }} id="vidID" className="none">
                <video width="266.83" ref={videoRef} height="553.89" muted className="vid">
                  <source
                    src={"https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Accounts+2.mp4"}
                    type="video/mp4" />
                </video>
              </div>


              <div id="vidID2" className="none">
                <video ref={videoRef2} width="266.83" height="553.89" muted className="vid">
                  <source
                    src={"https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/Buy%2C+Sell+%26+Exchange+2.mp4"}
                    type="video/mp4" />
                </video>
              </div>

              <div id="vidID3" className="none">
                <video ref={videoRef3} width="266.83" id="video03" height="553.89" muted className="vid">
                  <source
                    src={"https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/wallet_details.mp4"}
                    type="video/mp4" />
                </video>
              </div>

              <div id="vidID4" className="none">
                <video ref={videoRef4} width="266.83" id="video04" height="553.89" muted className="vid">
                  <source
                    src={"https://scallop-bucket.s3.eu-west-1.amazonaws.com/upload_file/SCALLOP1/video5.mp4"}
                    type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="flex-item-right scallop_account">
              <div id="textId1" className="text">
                <p>
                  <span className="sclpb">Scallop Banking Accounts</span>

                </p>
                <div className="row">
                  <div className="col-md-12 d-flex">
                    <img src={require('../../assets/appLandingImg/tick.svg').default} className="tikimg" />

                    <p className="data"> Open GBP and IBAN accounts for daily use, for both personal
                      and business
                      users.
                    </p>
                  </div>
                  <div className="col-md-12 d-flex">
                    <img src={require('../../assets/appLandingImg/tick.svg').default} className="tikimg" />
                    <p className="data">Open in minutes thanks to AI-Powered KYC
                      Receive Salary, Set up Direct Debits and Send & Receive transfers.</p>
                  </div>
                </div>
              </div>
              <div id="textId2" className="text">
                <p>
                  <span className="sclpb">Buy & Sell Crypto</span>

                </p>
                <div className="row">
                  <div className="col-md-12 d-flex">
                    <img src={require('../../assets/appLandingImg/tick.svg').default} className="tikimg" />
                    <p className="data"> Scallop crypto marketplace, where you can buy, sell and
                      exchange
                      different cryptocurrencies.
                    </p>
                  </div>
                  <div className="col-md-12 d-flex">
                    <img src={require('../../assets/appLandingImg/tick.svg').default} className="tikimg" />
                    <p className="data">Users can use the fiat account or multi-currency account
                      directly and
                      can access crypto wallets to store crypto assets.</p>
                  </div>
                </div>
              </div>
              <div id="textId3" className="text">
                <p>
                  <span className="sclpb">Crypto wallets</span>

                </p>
                <div className="row">
                  <div className="col-md-12 d-flex">
                    <img src={require('../../assets/appLandingImg/tick.svg').default} className="tikimg" />
                    <p className="data"> Inbuilt crypto wallets to easily access and store all your
                      assests in
                      wallets.
                    </p>
                  </div>
                  <div className="col-md-12 d-flex">
                    <img src={require('../../assets/appLandingImg/tick.svg').default} className="tikimg" />
                    <p className="data">You can create multiple crypto software wallets and also
                      allow to
                      connect your hardware wallet.</p>
                  </div>
                </div>
              </div>
              <div id="textId4" className="text">
                <p>
                  <span className="sclpb">Scallop Transfer</span>

                </p>
                <div className="row">
                  <div className="col-md-12 d-flex">
                    <img src={require('../../assets/appLandingImg/tick.svg').default} className="tikimg" />
                    <p className="data"> Scallop allows you to transfer Fiat and crypto directly
                      from account
                      and crypto wallet.
                    </p>
                  </div>
                  <div className="col-md-12 d-flex">
                    <img src={require('../../assets/appLandingImg/tick.svg').default} className="tikimg" />
                    <p className="data">We've created crypto payment infrastructure that establishes
                      a network
                      in which participants with diverse portfolios can
                      co-exist by leveraging the many benefits of smart contracts.</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>



      </div>
      <section className="sec_all main_table">
        <div className="container table-responsive custom-table-responsive">
          <table className="table custom-table">
            <thead>
              <tr>
                <th scope="col" className="table-font">Sno</th>
                <th scope="col" className="headtr table-font">Transaction Value & Volume</th>
                <th scope="col" className="table-font">Banking Limits</th>
                <th colspan="2" className="text-center table-font">Crypto Wallet LImits</th>

              </tr>
              <tr>
                <th scope="col">1</th>
                <th scope="col">Single transaction value(In & Out)</th>
                <th scope="col">2000 EUR</th>
                <th scope="col">10000 EUR</th>


              </tr>
              <tr>
                <th scope="col">2</th>
                <th scope="col">Daily transaction volume(In & Out)</th>
                <th scope="col">10</th>
                <th scope="col">100.000 EUR</th>

              </tr>
              <tr>
                <th scope="col">3</th>
                <th scope="col">Daily transaction value(In & Out)</th>
                <th scope="col">4000 EUR</th>


              </tr>
              <tr>
                <th scope="col">4</th>
                <th scope="col">Weekly transaction volume(In & Out)</th>
                <th scope="col">30</th>
                <th scope="col"></th>

              </tr>
              <tr>
                <th scope="col">5</th>
                <th scope="col">Weekly transaction value(In & Out)</th>
                <th scope="col">10000 EUR</th>


              </tr>
            </thead>

          </table>




          <table className="table custom-table custum_one">
            <thead>
              <tr>
                <th scope="col" className="text-center table-font ">Fees</th>
                <th scope="col" className="text-center table-font ">Any Exchange</th>
              </tr>
              <tr>
                <th scope="col">Basic Account</th>
                <th scope="col">1.5%</th>
              </tr>
              <tr>
                <th scope="col">Elite Account </th>
                <th scope="col">1%</th>
              </tr>

            </thead>

          </table>
        </div>

      </section>
      <section className="container">
        <section className="mock_up sec_all">
          <div className="flex-container height400">
            <div className="flex-item-left">

              <h3>Get the best experience
                of Scallop</h3>
              <div className="display-coming">
                <a href="#"><img

                  src={require('../../assets/appLandingAssets/button_1.svg').default}
                  alt="playstore" className="play_stay" /></a>
                <a href="#"><img

                  src={require('../../assets/appLandingAssets/button_2.svg').default}
                  alt="appstore" className="play_stay" /></a>


              </div>

              <h4 className="coming_soon">Coming Soon</h4>


            </div>

            <div className="flex-item-right">
              <img
                src={require('../../assets/appLandingAssets/Mockup.png').default}
                alt="iphone" className="mock_up_img" />

            </div>
          </div>
        </section>
        {/* <section className="sec_all">
          <div className="uptodate">
            <p>Stay Up to date With Scallop</p>
            <span className="updat_con">Stay connected with us to get latest update about scallop products and be the first to
              use.</span>

          </div>
        </section> */}
        <Footer />

      </section>
    </>
  );
};

export default AppLanding;