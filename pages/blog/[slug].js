import Head from 'next/head'
import Link from 'next/link'
import { Badge } from "@/components/ui/badge"
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from "react-icons/fi"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function calculateReadTime(content) {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export default function BlogPost({ post }) {
  if (!post) return null

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{`${post.title} | Blog`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <FiArrowLeft className="mr-2" /> Back to Blog
        </Link>

        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center text-muted-foreground gap-4 md:gap-6 border-b border-border pb-8">
            {post.author && (
              <div className="flex items-center">
                <FiUser className="mr-2" />
                {post.author}
              </div>
            )}
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <FiClock className="mr-2" />
              {post.readTime}
            </div>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none prose-lg">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  )
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDirectory, `${params.slug}.md`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    props: {
      post: {
        slug: params.slug,
        content,
        readTime: data.readTime || calculateReadTime(content),
        ...data,
      },
    },
  }
}
