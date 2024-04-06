import React from "react"
import { getAllPosts } from "../../lib/posts"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "components/postCard"

const BlogIndex = ({ location, allPosts }) => {
  return (
    <Layout location={location} title="Brent M. Clark">
      <SEO title="Home" />
      <div>
        <p>
          Hello 👋
          <br />
          <br />
          I'm Brent, a principal software engineer with a career-long focus on UIs and
          APIs. I specialize in the manufacturing and distribution industries and really enjoy the blend of physical and digital tech that comes along with this space.
          I also prefer to focus on smaller companies; ranging from pre-seed startups to a few thousand employees.
        </p>
        <br />
        <br />
        <p>Enough about me though, check out my blog below.  It's always hand-crafted with no AI.</p>
        <br />
        <br />
        <h2>Blog</h2>
        <div id="postsContainer">
          {allPosts.map(post => {
            const title = post.title || post.slug
            let url = `/blog/${post.slug}`

            return (
              <PostCard
              key={post.slug}
              to={url}
              title={title}
              description={post.description}
              date={post.date}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["slug", "title", "date", "description"])
  return {
    props: { allPosts },
  }
}

export default BlogIndex
