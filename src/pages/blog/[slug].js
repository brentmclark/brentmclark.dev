import fs from "fs"
import path from "path"

import React from "react"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote'
import matter from "gray-matter"

import { getAllPosts } from "../../../lib/posts"
import Layout from "components/layout"
import PageWrapper from "components/PageWrapper"
import SEO from "components/seo"
import SyntaxHighlighter from "components/SyntaxHighlighter"

import externalLinks from 'remark-external-links'
import autolinkHeadings from 'rehype-autolink-headings'
import autoslugHeadings from 'rehype-slug'

const components = {
  pre: props => <div {...props} />,
  code: props => <SyntaxHighlighter {...props} />,
  ul: props => <ul {...props} className="list-disc list-inside"></ul>,
  ol: props => <ol {...props} className="list-decimal list-inside"></ol>,
}

const Post = props => {
  const { body, frontMatter } = props
  if (body == null) {
    return <div>Loading</div>
  }

  const formattedArticleDate = new Date(frontMatter.date).toLocaleString([], {
    dateStyle: "long",
  })
  return (
    <Layout>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description || frontMatter.excerpt}
      />
      <PageWrapper>
        <article>
          <header>
            <small>{formattedArticleDate}</small>
            <h1>{frontMatter.title}</h1>
          </header>
          
            <main className="prose">
              <MDXRemote {...body} components={components}/>
            </main>
          
        </article>

        {/* <nav className={`mt-4`}>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </PageWrapper>
    </Layout>
  )
}

async function getStaticPaths() {
  const posts = getAllPosts(["slug"])
  return {
    paths: posts.map(post => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

async function getStaticProps(context) {
  const { params } = context

  const postPath = path.join(process.cwd(), `content/blog/${params.slug}.mdx`)
  const post = fs.readFileSync(postPath)
  const { content, data } = matter(post)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [externalLinks],
      rehypePlugins: [autoslugHeadings, [autolinkHeadings, {behavior: 'wrap'}]]
    }
  })
  return {
    props: { body: mdxSource, frontMatter: data },
  }
}

export { Post as default, getStaticPaths, getStaticProps }
