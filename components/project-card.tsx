"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Project images - using placeholder images with project-specific text
  const projectImages = {
    "Electronic Medical Record":
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&h=600&auto=format&fit=crop",
    "Electronic Prescription":
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&h=600&auto=format&fit=crop",
    "Electronic Pharmacy":
      "https://images.unsplash.com/photo-1587854680352-936b22b91030?q=80&w=800&h=600&auto=format&fit=crop",
    "Food Order & Delivery":
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&h=600&auto=format&fit=crop",
    "Emotion Based Music Player":
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&h=600&auto=format&fit=crop",
    "Inventory Management System":
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&h=600&auto=format&fit=crop",
    "School Management System":
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&h=600&auto=format&fit=crop",
    "E-Commerce Platform":
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&h=600&auto=format&fit=crop",
    "Jewelry Management System":
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&h=600&auto=format&fit=crop",
    "Saving and Credit Transaction System":
      "https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=800&h=600&auto=format&fit=crop",
    "COVID-19 Advanced Laboratory Management":
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&h=600&auto=format&fit=crop",
  }

  const imageUrl = projectImages[project.title] || project.image

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden border-none shadow-lg h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement
              target.src = `/placeholder.svg?height=600&width=800&text=${encodeURIComponent(project.title)}`
              console.log(`Image failed to load for ${project.title}, using fallback`)
            }}
            crossOrigin="anonymous"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-white/80 text-sm">{project.description}</p>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Button variant="outline" size="sm">
              View Details
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            {project.link !== "#" && (
              <Button variant="ghost" size="sm" asChild>
                <Link href={project.link} target="_blank" className="flex items-center">
                  Live Demo
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
