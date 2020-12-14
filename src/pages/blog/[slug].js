import fs from "fs"
import path from "path"

import React from "react"
import { useRouter } from "next/router"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"

import Layout from "../../components/layout"
import PageWrapper from '../../components/PageWrapper'

const Post = props => {
  const { source } = props
  if (source == null) {
    return <div>Loading</div>
  }
  const router = useRouter()
  const { slug } = router.query
  const content = hydrate(source)
  return (
    <Layout>
      <PageWrapper>
        {content}
      </PageWrapper>
    </Layout>
  )
}

export default Post

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "*" } }],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context

  const postPath = path.join(
    process.cwd(),
    `src/posts/${params.slug}/index.mdx`
  )
  const post = fs.readFileSync(postPath)

  const mdxSource = await renderToString(post)
  return {
    props: { source: mdxSource },
  }
}
