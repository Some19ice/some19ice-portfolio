import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import portfolioProjects from '../../data/portfolio'
import { AiFillGithub } from "react-icons/ai"
import { FiExternalLink, FiArrowLeft } from "react-icons/fi"

export default function ProjectDetails({ project }) {
  if (!project) return null

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{`${project.title} | Project Details`}</title>
        <meta name="description" content={project.description} />
      </Head>

      <div className="max-w-4xl mx-auto">
        <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <FiArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <div className="bg-card rounded-xl overflow-hidden border border-border shadow-lg">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                <Badge variant="secondary" className="text-sm">
                  {project.category}
                </Badge>
              </div>
              <div className="flex gap-3">
                {project.demoUrl && (
                  <Button asChild variant="default">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  </Button>
                )}
                {project.codeUrl && (
                  <Button asChild variant="outline">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <AiFillGithub className="mr-2" /> View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <h3 className="text-xl font-semibold mb-3">Overview</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              {/* Add more detailed content here if available in the data */}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-3 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = portfolioProjects.map((project) => ({
    params: { slug: project.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = portfolioProjects.find((p) => p.slug === params.slug)

  return {
    props: {
      project,
    },
  }
}
