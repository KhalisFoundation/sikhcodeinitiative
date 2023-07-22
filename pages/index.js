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
                    <Link href='https://form.jotform.com/232005203095038 ' className="py-2	button is-light is-outlined  is-black" style={{ marginTop: 15 }}>
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
        <div class="is-divider"></div>
        <section class="section">
          <div class="container has-text-centered">
            <div class="columns is-centered" style={{ padding: "2rem" }}>
              <div class="column">
                <div class="card">

                  <div class="card-content p-2">
                    <div class="media">
                      <div class="media-content py-4 px-5 is-flex is-flex-direction-column	is-justify-content-space-between is-align-items-center			" style={{
                        height: "170px"
                      }}>
                        <p class="has-text-weight-light	 is-3 has-text-left">We are ready to make an impact to empower Sikh Youth in Punjab.
                        </p>
                        < p className="button  is-dark " style={{
                          maxWidth: "fit-content"
                        }} >
                          <Link
                            href='https://dvnetwork.org/projects/sikh-youth-coding-initiative'
                            className="has-text-light"
                          >
                            Donate Now
                          </Link>
                        </p>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="card-content p-2">
                    <div class="media">
                      <div class="media-content py-4 px-5 is-flex is-flex-direction-column	is-justify-content-space-between	is-align-items-center	" style={{
                        height: "170px"
                      }}>
                        <p class="has-text-weight-light	 is-3 has-text-left">We are the pioneers of open source apps such as Sundar Gutka and SikhiToTheMax.</p>

                        < p className="button  is-dark " style={{
                          maxWidth: "fit-content"
                        }} ><Link href='https://github.com/KhalisFoundation' className="has-text-light"
                        >
                            Browse Repositries
                          </Link></p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <div class="card">
                  <div class="card-content p-2">
                    <div class="media">
                      <div class="media-content py-4 px-5 is-flex is-flex-direction-column	is-justify-content-space-between is-align-items-center	" style={{
                        height: "170px"
                      }}>
                        <p class="has-text-weight-light	 is-3 has-text-left">Join us as a mentor</p>
                       
                        < p className="button  is-dark " style={{
                          maxWidth: "fit-content"
                        }} ><Link href='https://form.jotform.com/232005203095038 ' className="has-text-light">
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
              {/* {posts &&
                posts?.map((post) => (
                  <div key={post.id}>
                    <article className={`blog-list-item tile is-child    py-3`}>
                      <header>
                        {post.frontmatter.featuredimage ? (
                          <div className="featured-thumbnail">
                            <Image
                              src={post.frontmatter.featuredimage}
                              width={900}
                              height={800}
                            />
                          </div>
                        ) : null}
                      </header>
                      <h2>
                        <Link
                          className=" has-text-dark is-size-2 has-font-weight-bold"
                          href={`/news/${post.slug}`}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h2>
                      <p className="pt-3 body-text">
                        {post.frontmatter.description}
                      </p>

                      <span className=" is-block date-text	">
                        {new Date(post.frontmatter.date).toDateString()}
                      </span>

                      <Link
                        className="button is-small is-black "
                        href={`/news/${post.slug}`}
                      >
                        Read more
                      </Link>
                    </article>
                  </div>
                ))} */}
            </div>
          </div>
        </section>
        <section class="section px-6 py-6">
          <div class="columns is-multiline">
            {posts?.map((post) => (
              <div class="column  is-rounded post is-4 mb-5">
                <article class="columns  card is-multiline">
                  {/* <div class="column  mt-2 is-12 post-img" style={{
                    height: 200,
                    position: "relative",
                    width: "100%",
                    // display: '-ms-inline-flexbox',
                    // flexDirection: "column",
                    // justifyContent: "flex-start",
                    // alignItems: "flex-start"

                  }}>
                    <Image
                      src={post.frontmatter.featuredimage}
                      // width={450}
                      // height={300}
                      fill={true}
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "contain" }}
                    />
                  </div> */}
                  <div class="column is-12 featured-content ">
                    <Link href={`/news/${post.slug}`}                    >
                      <h3
                        className=" mx-4 pt-2 has-text-dark is-size-4 has-font-weight-bold has-text-black" >{post.frontmatter.title}
                      </h3>
                    </Link>

                    <p class=" mx-3 pt-1 post-excerpt">                        {post.frontmatter.description}
                    </p>
                    <h3 class="heading post-category px-3">                        {new Date(post.frontmatter.date).toLocaleDateString()}</h3>

                    <Link
                      className="button mx-3 is-link mb-4 px-3"
                      href={`/news/${post.slug}`}
                    >
                      Read more
                    </Link>
                  </div>
                </article>

              </div>
            ))}

            {/*            
            <div class="column is-4">
              <div class="content is-medium">
                <h2 class="subtitle is-5 has-text-grey">May 25, 2023</h2>
                <h1 class="title has-text-black is-3">Getting Started</h1>
                <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                  minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div> */}
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
  console.log("posts", posts);

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}