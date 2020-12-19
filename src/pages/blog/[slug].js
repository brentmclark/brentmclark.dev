import fs from "fs"
import path from "path"

import React from "react"
import { useRouter } from "next/router"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import matter from "gray-matter"
import { MDXProvider } from "@mdx-js/react"

import Layout from "components/layout"
import PageWrapper from "components/PageWrapper"
import SEO from "components/seo"
import SyntaxHighlighter from "components/SyntaxHighlighter"

const components = {
  pre: props => <div {...props} />,
  code: SyntaxHighlighter,
  inlineCode: props => (
    <code
      style={{
        background: "var(--color-5)",
        padding: ".1em",
        color: "var(--color-tertiary)",
      }}
      {...props}
    />
  ),
  ul: props => <ul {...props} className="list-disc list-inside"></ul>,
  ol: props => <ol {...props} className="list-decimal list-inside"></ol>,
}

const Post = props => {
  const { body, frontMatter } = props
  if (body == null) {
    return <div>Loading</div>
  }
  const router = useRouter()
  const content = hydrate(body)
  const formattedArticleDate = new Date(frontMatter.date).toLocaleString([], {
    dateStyle: "long",
    timeStyle: "short",
  })
  return (
    <Layout
      location={router.location}
      title={`${frontMatter.title} :: Brent M. Clark`}
    >
      <SEO
        title={frontMatter.title}
        description={frontMatter.description || frontMatter.excerpt}
      />
      <PageWrapper>
        <article>
          <header>
            <small className={`font-bold opacity-75 text-gray-700 my-2`}>
              {formattedArticleDate}
            </small>
            <h1 className={`text-5xl font-semibold leading-snug text-blue-600`}>
              {frontMatter.title}
            </h1>
          </header>
          <MDXProvider components={components} >
            <main className={`leading-relaxed mt-10`} id="blog-container">
              {content}
            </main>
          </MDXProvider>
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
  return {
    paths: [{ params: { slug: "*" } }],
    fallback: true,
  }
}

async function getStaticProps(context) {
  const { params } = context

  const postPath = path.join(process.cwd(), `content/blog/${params.slug}.mdx`)
  const post = fs.readFileSync(postPath)
  const { content, data } = matter(post)
  const mdxSource = await renderToString(content)
  return {
    props: { body: mdxSource, frontMatter: data },
  }
}

export { Post as default, getStaticPaths, getStaticProps }
