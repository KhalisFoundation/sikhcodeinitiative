import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import PostContent from '../../components/Content'
export default function PostPage({
    frontmatter: { title, date, featuredimage ,categories , tags},
    slug,
    content,
}) {
    console.log(title, date, featuredimage ,categories , tags , content)
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: "640px" }}>
                <div className='pb-6'>
                    <h1 className="is-size-1 has-text-dark post-heading pt-3">{title}</h1>
                    {featuredimage ? (
                        <div className="featured-thumbnail pb-5">
                            <Image
                                src={featuredimage}
                                width={800}
                                height={800}
                            />
                        </div>
                    ) : null}
                    <div><p>{new Date(date).toDateString()}</p></div>
                    <PostContent content={content} />
                   
                   
                </div>
            </div>
        </section>


    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('news'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('news', slug + '.md'),
        'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter: {
                ...frontmatter,
                date: frontmatter.date.toISOString(),
            },
            slug,
            content,
        },
    }
}