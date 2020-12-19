import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const portfolioDirectory = join(process.cwd(), "content/portfolio")

export function getPageSlugs() {
  return fs.readdirSync(portfolioDirectory)
}

export function getPageBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = join(portfolioDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPages(fields = []) {
  const slugs = getPageSlugs()
  const pages = slugs
    .map(slug => getPageBySlug(slug, fields))
    // sort pages by date in descending order
    .sort((page1, page2) => (page1.date > page2.date ? "-1" : "1"))
  return pages
}
