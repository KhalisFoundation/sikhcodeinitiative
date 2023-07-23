import * as React from "react";
// import a from "next/link";
// import FooterLine from "./foot-heading";
// import logo from "../img/logo.svg";
import facebook from "./img/social/facebook.svg";
import instagram from "./img/social/instagram.svg";
import linkedin from "./img/social/logo-linkedin.svg";
import twitter from "./img/social/logo-twitter.svg";
import rightIcon from "./img/right-icon.svg";
import Image from 'next/image'

// import Olyetta from "../img/girlicon.svg";
// import SocialArrow from "../img/social-arrow.svg";

const Footer = () => {


  return (
    <footer className="footer has-background-light has-text-white-ter">
      <div className="content has-text-centered has-text-white-ter">
        <div className="has-text-white-ter">
          <div className=" container content has-text-centered">
            <div className="columns is-centered p-0" >
              <div className="column is-one-third p-0">
                <div className="contact-div">
                  <h1 className=" px-5 is-size-4 has-text-weight-bold	has-text-black has-text-left">
                    Sikh Youth Coding Initiative


                  </h1>
                  <p className="is-size-6 has-text-left px-5 has-text-weight-bold has-text-black">
                    Empowering The Youth in Punjab: Coding a Bright Future                  </p>
                </div>
              </div>
              <div className="column is-one-third p-0">
                <div className="contact-div">
                  <h1 className="px-5 is-size-4 has-text-weight-bold	has-text-black has-text-left">
                    Menu                  </h1>
                  <div className="px-5" style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start"
                  }}>
                    <a target="_blank" className="is-size-5 py-2  has-text-black is-flex is-align-items-center	" href="https://khalisfoundation.org/about/privacy-policy/">
                      Privacy
                    </a>
                    <a target="_blank" className="is-size-5 py-2  has-text-black is-flex is-align-items-center	" href="https://khalisfoundation.org/">
                      About Us</a>
                    <a target="_blank" className="is-size-5 py-2  has-text-black is-flex is-align-items-center	" href="https://dvnetwork.org/projects/sikh-youth-coding-initiative">

                      Donate
                    </a>
                  </div>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="container">
                  <p className="px-5 is-size-4 has-text-weight-bold	has-text-black has-text-left">
                    Social Media
                  </p>
                  <div className="is-flex is-align-items-center is-justify-content-flex-start	 px-5">
                    <a target="_blank"
                      className="py-2 px-2"
                      title="facebook"
                      href="https://www.facebook.com/KhalisFoundation"
                      
                    >
                      <div className="is-flex is-flex-direction-row	is-align-items-center	">
                        <Image style={{
                          background:"white",
                          borderRadius:"6px", 
                        }} src={facebook} alt="Facebook" width={50} height={50} />
                      </div>
                    </a>
                    <a target="_blank"
                      className="py-2 px-2"
                      title="instagram"
                      href="https://www.instagram.com/khalisfound/"
                    >
                      <div className="is-flex is-flex-direction-row	is-align-items-center	">
                        <Image style={{
                          background:"white",
                          borderRadius:"6px"
                        }}  src={instagram} alt="instagram" width={50} height={50} />
                      </div>
                    </a>
                    <a target="_blank"
                      className="py-2 px-2"
                      title="twitter"
                      href="https://twitter.com/khalisfound"
                    >
                      <div className="is-flex is-flex-direction-row	is-align-items-center	">
                        <Image style={{
                          background:"white",
                          borderRadius:"6px"
                        }}  src={twitter} alt="twitter" width={50} height={50} />
                      </div>
                    </a>
                    <a target="_blank"
                      className="py-2 px-2"
                      title="linkedin"
                      href="https://www.linkedin.com/company/khalis-foundation/"
                    >
                      <div className="is-flex is-flex-direction-row	is-align-items-center 	">
                        <Image style={{
                          background:"white",
                          borderRadius:"6px"
                        }}  src={linkedin} alt="linkedin" width={50} height={50} />
                      </div>
                    </a>
                  </div>


                </div>
              </div>

            </div>
          </div>
    

          <div>
            <div className="container">
              <p className="body-text  has-text-black ">
                © {new Date().getFullYear()}                     Sikh Youth Coding Initiative

              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;