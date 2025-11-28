import Head from 'next/head'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi"
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function BlogIndex({ posts }) {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Blog | Yakubu T. Umar</title>
        <meta name="description" content="Thoughts on web development, design, and technology by Yakubu T. Umar." />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
            <FiArrowLeft className="mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Thoughts on web development, design, and technology.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-muted-foreground mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-muted-foreground gap-4">
                <div className="flex items-center">
                  <FiCalendar className="mr-1" />
                  {post.date}
                </div>
                {post.readTime && (
                  <div className="flex items-center">
                    <FiClock className="mr-1" />
                    {post.readTime}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

// Calculate read time from content
function calculateReadTime(content) {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug: filename.replace(/\.md$/, ''),
      readTime: data.readTime || calculateReadTime(content),
      ...data,
    }
  })

  posts.sort((a, b) => (a.date > b.date ? -1 : 1))

  return { props: { posts } }
}
