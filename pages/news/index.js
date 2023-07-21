import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "../../utils";
import Image from "next/image";
import Link from "next/link";
import SEO from "../../components/SEO";
export default function Home({ posts }) {
  console.log("posts", posts);
  return (
    <>
      <SEO title="News" />
      <section className="section">
        <div className="container" style={{ maxWidth: "640px" }}>
          <div className="content pt-5 ">
            <h1 className="has-text-centered">News</h1>
            {posts &&
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
              ))}
          </div>
        </div>
      </section>
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

// const  BlogRollTemplate=()=>{
//       const { data } = this.props;
//       const { edges: posts } = data.allMarkdownRemark;

//       return (
//         <div>
//           {posts &&
//             posts.map(({ node: post }) => (
//               <div key={post.id}>
//                 {/* Horizantol Rowl With Icon */}
//                 <DecorativeLive
//                   title={
//                     <svg
//                       width="42"
//                       height="42"
//                       viewBox="0 0 42 42"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         clipRule="evenodd"
//                         d="M32.976 22.254C32.5791 22.5044 32.1222 22.6418 31.6004 22.6418C30.3616 22.6418 28.2655 22.043 25.0458 20.8632C24.7161 20.7424 24.3713 20.6144 23.9921 20.4723C23.6232 20.3341 21.6633 19.5923 21.1455 19.3996C15.2352 17.2005 12.775 16.8749 10.2326 18.6104C8.59306 19.7289 7.43618 21.208 7.07445 22.6753C7.05288 22.7518 7.03586 22.8299 7.02357 22.9091C7.02106 22.9226 7.01917 22.9357 7.01788 22.9483C7.00604 23.0362 7 23.1254 7 23.2154C7 24.3235 7.90737 25.2219 9.02601 25.2219C10.1445 25.2219 11.051 24.3236 11.051 23.2154C11.051 22.1073 10.1447 21.2099 9.02601 21.2099C9.00799 21.2099 8.98999 21.2102 8.97204 21.2106C9.41091 20.878 9.92956 20.6925 10.5358 20.6925C11.2627 20.6925 12.1889 20.9084 13.5293 21.3649C14.2344 21.6051 17.1076 22.6771 17.6966 22.8869C18.8893 23.3116 19.9536 23.6571 21.0204 23.956C21.3928 24.0603 22.9471 24.5286 23.254 24.6178C24.4365 24.9615 25.3976 25.2009 26.331 25.3655C28.7052 25.7841 30.5636 25.6385 31.9036 24.7239C33.0249 23.9589 34.7063 22.515 34.9728 20.607C34.9719 20.602 34.971 20.597 34.9701 20.5921C34.9899 20.4793 35 20.3641 35 20.2475C35 19.1404 34.0926 18.242 32.9751 18.242C31.8566 18.242 30.949 19.1402 30.949 20.2475C30.949 21.3556 31.8564 22.254 32.9751 22.254C32.9754 22.254 32.9757 22.254 32.976 22.254Z"
//                         fill="#E0D9DC"
//                       />
//                     </svg>
//                   }
//                 />

//                 <article className={`blog-list-item tile is-child    `}>
//                   <header>
//                     {post.frontmatter.featuredimage ? (
//                       <div className="featured-thumbnail">
//                         <PreviewCompatibleImage
//                           imageInfo={{
//                             image: post.frontmatter.featuredimage,
//                             alt: `featured image thumbnail for post ${post.frontmatter.title}`,
//                             width:
//                               post.frontmatter.featuredimage.childImageSharp
//                                 .gatsbyImageData.width,
//                             height:
//                               post.frontmatter.featuredimage.childImageSharp
//                                 .gatsbyImageData.height,
//                           }}
//                         />
//                       </div>
//                     ) : null}
//                   </header>
//                   <h2>
//                     {/* <Link
//                       className="title has-text-primary heading1 "
//                       to={post.fields.slug}
//                     > */}
//                     {post.frontmatter.title}
//                     {/* </Link> */}
//                   </h2>
//                   <p className="pt-5 body-text">{post.frontmatter.description}</p>

//                   <span className=" is-block date-text	">
//                     {post.frontmatter.date}
//                   </span>

//                   <Link className=" is-link  read-more" to={post.fields.slug}>
//                     👉 Read more
//                   </Link>
//                 </article>
//               </div>
//             ))}
//         </div>
//       );
//     }
