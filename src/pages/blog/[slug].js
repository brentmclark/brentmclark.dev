import fs from "fs"
import path from "path"

import { useRouter } from "next/router"

import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"

const Post = props => {
  const { source } = props
  console.log({ source })
  if (source == null) {
    return <div>Loading</div>
  }
  const router = useRouter()
  const { slug } = router.query
  const content = hydrate(source)
  return (
    <div>
      <p>Slug: {slug}</p>
      <div>{content}</div>
    </div>
  )
}

export default Post

// import Test from '../components/test'

// const components = { Test }

// export default function TestPage({ source }) {
//   const content = hydrate(source)
//   return <div className="wrapper">{content}</div>
// }

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

  // MDX text - can be from a local file, database, anywhere
  //   const source = 'Some **mdx** text, with a component <Test />'
  const mdxSource = await renderToString(post)
  return {
    props: { source: mdxSource },
  }
}
