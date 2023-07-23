import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SEO from "../components/SEO";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../utils";
export default function Home({ posts }) {
  // const [currentText, setCurrentText] = useState(0);
  // const textArray = [
  //   "The idea is to reach out to today's Sikh youth and help them achieve purity and truthfulness in their lives.  ",
  //   ' "Khalis" meaning pure or truth, refers to the Sikh lifestyle of leading an honest and truthful life  ',
  //   "Khalis Foundation is dedicated to raising awareness of Sikh culture and lifestyle through various services such as media, apps and books.    ",
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentText((prev) => (prev + 1) % textArray.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [textArray.length]);
  return (
    <>
      <SEO />
      <div className="section section--gradient">
        <section className="hero header " style={{
          // height:"300px"
        }}>
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
                  <div className="is-flex is-align-items-center-mobile is-justify-content-center-mobile">
                    <Link href='https://form.jotform.com/232005203095038 ' className="py-2	button is-link   is-black" style={{ marginTop: 15 }}>
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
                <div className=" m-0 p-0 has-background-link">
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
                        className="mr-3 py-2	button is-light is-outlined  is-black"
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
                            <p className="is-size-1 has-text-white has-font-weight-bold my-3">
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
                            <p className="is-size-1 has-text-light my-3 has-font-weight-bold">
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
                            <p className="is-size-1 has-text-light my-3 has-font-weight-bold">
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
                            <p className="is-size-1 has-text-light my-3 has-font-weight-bold">
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
                            <p className="is-size-4 has-text-light my-2">
                              Unlimited
                            </p>
                            <p className="is-size-4 has-text-light mt-2">
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
                <p className="has-text-left-mobile subtitle is-4 py-1" style={{
                  maxWidth: "900px"
                }}>
                  Are you passionate about coding and eager to make a meaningful impact?

                </p>
                <p className="has-text-left-mobile subtitle is-4 py-1" style={{
                  maxWidth: "900px"
                }}>
                  Join us at the Sikh Youth Coding Initiative and be a part of something
                  transformative! We are calling on open source contributors
                  like you to empower the Sikh youth in Punjab with the gift of technology.

                </p>
                <div>
                  <Link href='https://form.jotform.com/232005203095038 ' className="py-1	button is-link   is-black" style={{ marginTop: 15 }}>
                    Express Interest
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
        <div className="is-divider"></div>
        <section className="section has-background-light">
          <div className="container has-text-centered">
            <div className="columns is-centered" style={{ padding: "2rem" }}>
              <div className="column">
                <div className="card">

                  <div className="card-content p-2">
                    <div className="media">
                      <div className="media-content py-4 px-5 is-flex is-flex-direction-column	is-justify-content-space-between is-align-items-center			" style={{
                        height: "170px"
                      }}>
                        <p className="has-text-weight-semibold	 is-size-6 has-text-left as-text-black">We are ready to make an impact to empower Sikh Youth in Punjab.
                        </p>
                        < p className="has-text-weight-bold" style={{
                          maxWidth: "fit-content"
                        }} >
                          <Link
                            href='https://dvnetwork.org/projects/sikh-youth-coding-initiative'
                            className="has-text-link"
                          >
                            Donate Now
                          </Link>
                        </p>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content p-2">
                    <div className="media">
                      <div className="media-content py-4 px-5 is-flex is-flex-direction-column	is-justify-content-space-between	is-align-items-center	" style={{
                        height: "170px"
                      }}>
                        <p className="has-text-weight-semibold	 is-size-6 has-text-left has-text-black">We are the pioneers of open source apps such as Sundar Gutka and SikhiToTheMax.</p>

                        < p className="has-text-weight-bold" style={{
                          maxWidth: "fit-content"
                        }}  ><Link href='https://github.com/KhalisFoundation' className="has-text-link"
                        >
                            Browse Repositries
                          </Link></p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">
                  <div className="card-content p-2">
                    <div className="media">
                      <div className="media-content py-4 px-5 is-flex is-flex-direction-column	is-justify-content-space-between is-align-items-center	" style={{
                        height: "170px"
                      }}>
                        <p className="has-text-weight-semibold	 is-size-6 has-text-left as-text-black">Join us as a mentor</p>

                        < p className="has-text-weight-bold" style={{
                          maxWidth: "fit-content"
                        }}  ><Link href='https://form.jotform.com/232005203095038 ' className="has-text-link">
                            Contact us
                          </Link></p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        <section className="section">
          <div className="container" style={{ maxWidth: "640px" }}>
            <div className="content pt-5 ">
              <h1 className="has-text-centered is-2 py-5">Latest Updates</h1>
              {posts &&
                posts?.map((post) => (
                  <div key={post.id}>
                    <article className={`blog-list-item tile is-child    py-3`}>
                      {/* <header>
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <Image
                              src={post.frontmatter.featuredimage}
                              width={900}
                              height={800}
                            />
                          </div>
                        ) : null}
                      </header> */}
                      <div className="column is-12 featured-content ">
                        <Link href={`/news/${post.slug}`}                    >
                          <h3 className=" mx-4 py-1 has-text-dark is-size-4 has-font-weight-bold has-text-black" >
                            {post.frontmatter.title}
                          </h3>
                        </Link>
                        <h3 className=" post-category px-3 is-size-6 ">
                          {new Date(post.frontmatter.date).toLocaleDateString()}
                        </h3>

                        <p className=" mx-3 pt-1 post-excerpt">
                          {post.frontmatter.description}
                        </p>

                      </div>

                      <Link
                        className="button mx-3 is-link mb-4 px-3"
                        href={`/news/${post.slug}`}
                      >
                        Read more
                      </Link>
                    </article>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("news"));
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("news", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter: {
        ...frontmatter,
        date: frontmatter.date.toISOString(),
      },
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}