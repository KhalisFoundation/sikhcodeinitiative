import React, { useState, useEffect } from "react";
import Seo from "../components/SEO";
import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";
export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const textArray = [
    "The idea is to reach out to today's Sikh youth and help them achieve purity and truthfulness in their lives.  ",
    ' "Khalis" meaning pure or truth, refers to the Sikh lifestyle of leading an honest and truthful life  ',
    "Khalis Foundation is dedicated to raising awareness of Sikh culture and lifestyle through various services such as media, apps and books.    ",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % textArray.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [textArray.length]);
  return (
    <>
      <SEO />
      <div className="section section--gradient">
        <section className="hero is-info ">
          <div className="hero-body">
            <div className="container" style={{
              height: "60vh"
            }}>
              <div className="columns">
                <div className="column py-6">
                  <h1 className="title has-text-centered-mobile pt-6 pb-4">Sikh Youth Coding Initiative</h1>
                  <p className="has-text-centered-mobile subtitle is-3 py-3">
                    2024 Program
                  </p>
                  <div>
                    <Link href='https://form.jotform.com/232005203095038 ' className="py-3 button is-size-6 is-link " style={{ marginTop: 15 }}>
                      Express Interest
                    </Link>
                  </div>

                </div>

                {/* <div className="column">
                  <Image
                    // src="img/undraw_wedding_t1yl.svg" 
                    src={apps}
                    width={400}
                    height={400}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="hero has-background-light" id="about">
          <div className=".container.is-fullhd	">
            <div className="columns features py-3 ">
              <div className="column is-6 my-0 mx-0 p-0 has-background-link">
                <div className="card m-0 p-0 has-background-link">
                  <div className="card-content p-6">
                    <div className="content m-4 px-3">
                      <h4 className="is-size-3 has-text-light py-2">
                        What is Sikh Youth Coding Initiative?
                      </h4>
                      <p className="is-size-5 py-2	has-text-light has-text-justified	">
                        The Sikh Youth Coding Initiative is a program launched by the Khalis Foundation with the aim of empowering the Sikh youth from Punjab in the field of technology. It seeks to bridge knowledge gaps hindering their market value by providing young coders with valuable skills, mentorship, and opportunities through a free, 10-week coding program.
                      </p>
                      <Link
                        href="/about"
                        className="mr-3 py-2	button is-light is-outlined is-large is-black"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-6 mx-0 has-background-info">
                <div className="p-6">
                  <div className="columns features py-3">
                    <div className="column is-4 mx-0">
                      <div className="card-content p-5">
                        <div className="content m-4">
                          <div className="is-flex is-flex-direction-column	">
                            <p className="is-size-1 has-text-light my-3">
                              20
                            </p>
                            <p className="is-size-5 has-text-light">
                              Candidates
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-4 mx-0">
                      <div className="card-content p-5">
                        <div className="content m-4">
                          <div className="is-flex is-flex-direction-column	">
                            <p className="is-size-1 has-text-light my-3">
                              10
                            </p>
                            <p className="is-size-5 has-text-light">
                              Groups
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>       <div className="column is-4 mx-0">
                      <div className="card-content p-5">
                        <div className="content m-4">
                          <div className="is-flex is-flex-direction-column	">
                            <p className="is-size-1 has-text-light my-3">
                              A+
                            </p>
                            <p className="is-size-5 has-text-light">
                              Mentorship
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="columns features py-3">
                    <div className="column is-4 mx-0">
                      <div className="card-content p-5">
                        <div className="content m-4">
                          <div className="is-flex is-flex-direction-column	">
                            <p className="is-size-1 has-text-light my-3">
                              10
                            </p>
                            <p className="is-size-5 has-text-light">
                              Weeks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-4 mx-0">
                      <div className="card-content p-5">
                        <div className="content m-4">
                          <div className="is-flex is-flex-direction-column	">
                            <p className="is-size-3 has-text-light my-2">
                              Unlimited
                            </p>
                            <p className="is-size-5 has-text-light">
                              Possibilities
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section">
          <div className="hero-body">
            <div className="container px-1">
              <div className="column py-3">
                <h1 className="title has-text-left-mobile pt-6 pb-4">Join as a Contributor</h1>
                <p className="has-text-left-mobile subtitle is-3 py-1" style={{
                  maxWidth: "900px"
                }}>
                  Are you passionate about coding and eager to make a meaningful impact?

                </p>
                <p className="has-text-left-mobile subtitle is-3 py-1" style={{
                  maxWidth: "900px"
                }}>
                  Join us at the Sikh Youth Coding Initiative and be a part of something
                  transformative! We are calling on open source contributors
                  like you to empower the Sikh youth in Punjab with the gift of technology.

                </p>
                <div>
                  <Link href='https://form.jotform.com/232005203095038 ' className="py-3 button is-size-6 is-primary " style={{ marginTop: 15 }}>
                    Express Interest
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div class="is-divider"></div>
        <section class="section">
          <div class="container has-text-centered">
            <div class="columns is-centered" style={{ padding: "2rem" }}>
              <div class="column">
                <div class="card">

                  <div class="card-content p-2">
                    <div class="media">
                      <div class="media-content py-4 px-5">
                        <p class="has-text-weight-bold	 is-3 has-text-centered">We are ready to make an impact to empower Sikh Youth in Punjab.
                        </p>
                        <Link href='https://dvnetwork.org/projects/sikh-youth-coding-initiative' className="button  is-link">
                        Donate Now
                      </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">

                  <div class="card-content p-2">
                    <div class="media">
                      <div class="media-content py-4 px-5">
                        <p class="has-text-weight-bold	 is-3 has-text-centered">We are the pioneers of open source apps such as Sundar Gutka and SikhiToTheMax.</p>
                        <Link href='https://github.com/KhalisFoundation' className="button  is-link">
                        Browse Repositries
                      </Link>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">

                  <div class="card-content p-2">
                    <div class="media">
                      <div class="media-content py-4 px-5">
                       
                        <p class="has-text-weight-bold	 is-3 has-text-centered">Join us as a mentor</p>
                       <hr/>
                        <Link href='https://form.jotform.com/232005203095038 ' className="button  is-link">
                        Contact us 
                      </Link>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
