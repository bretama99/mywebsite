"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  ChevronRight,
  Github,
  Code,
  Layers,
  Database,
  Cloud,
  ArrowRight,
  Moon,
  Sun,
  Briefcase,
} from "lucide-react"
import { useTheme } from "next-themes"
import { ParticlesContainer } from "@/components/particles-container"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { AnimatedCounter } from "@/components/animated-counter"
import { SkillBar } from "@/components/skill-bar"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Function to toggle theme
  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  const positions = [
    {
      text: "Full Stack Developer",
    },
    {
      text: "Mobile App Developer",
    },
    {
      text: "ScrumMaster",
    },
    {
      text: "Junior ML Engineer",
    },
  ]

  const stats = [
    { label: "Years Experience", value: 5 },
    { label: "Projects Completed", value: 40 },
    { label: "Client Satisfaction", value: 100 },
    { label: "Technologies", value: 15 },
  ]

  const skills = [
    { name: "Java & Spring Boot", level: 99 },
    { name: "JavaScript & Vue.js", level: 97 },
    { name: "PHP & Laravel", level: 95 },
    { name: "Flutter & Mobile Dev", level: 96 },
    { name: "AWS & Cloud Services", level: 90 },
  ]

  const projects = [
    {
      title: "Electronic Medical Record",
      description: "Comprehensive Healthcare Management System",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Java", "Spring Boot", "VueJs", "MySQL", "AWS"],
      link: "#",
    },
    {
      title: "Electronic Prescription",
      description: "Digital Prescription & Medication Management",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Java", "Spring Boot", "VueJs", "MySQL", "Flutter"],
      link: "http://eprescription.medcoanalytics.com",
    },
    {
      title: "Electronic Pharmacy",
      description: "Pharmacy Management & Inventory System",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Java", "Spring Boot", "VueJs", "MySQL", "AWS"],
      link: "#",
    },
    {
      title: "Food Order & Delivery",
      description: "Restaurant Ordering & Delivery Platform",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Spring Boot", "VueJs", "PostgreSQL", "Flutter", "AWS"],
      link: "#",
    },
    {
      title: "Jewelry Management System",
      description: "Inventory & Sales System for Jewelry Businesses",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      link: "#",
    },
    {
      title: "Saving and Credit Transaction System",
      description: "Financial Management Platform for Credit Unions",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Java", "Spring Boot", "Angular", "Oracle", "AWS"],
      link: "#",
    },
    {
      title: "COVID-19 Advanced Laboratory Management",
      description: "Testing & Results Tracking for Medical Labs",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["PHP", "Laravel", "Vue.js", "MySQL", "Docker"],
      link: "#",
    },
    {
      title: "Emotion Based Music Player",
      description: "AI-Powered Music Recommendation System",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
      link: "#",
    },
    {
      title: "Inventory Management System",
      description: "Warehouse & Stock Management Solution",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      link: "#",
    },
    {
      title: "School Management System",
      description: "Educational Institution Administration Platform",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "Online Shopping & Retail Solution",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Java", "Spring Boot", "Vue", "PostgreSQL", "AWS"],
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-primary">BTG</span>
              <span className="hidden md:inline-block font-bold">Brhane Teamrat Gidey</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#about" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#experience" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#skills" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Button variant="default" size="sm" className="hidden md:flex">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              {mounted && (
                <Button variant="ghost" size="icon" aria-label="Toggle Theme" className="ml-2" onClick={toggleTheme}>
                  {resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
          <ParticlesContainer />
          <motion.div
            className="container px-4 md:px-6 z-10 flex flex-col items-center text-center"
            style={{ opacity, scale, y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-8">
              <div className="relative w-40 h-40 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 animate-spin-slow blur-xl opacity-50"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary">
                  <Image src="/images/profile.png" alt="Brhane Teamrat Gidey" fill className="object-cover" priority />
                </div>
              </div>
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Brhane Teamrat Gidey
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <TypewriterEffect words={positions} className="text-xl md:text-2xl" />
                </motion.div>
                <motion.p
                  className="mx-auto max-w-[700px] text-muted-foreground md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Crafting innovative digital solutions for global clients
                </motion.p>
              </div>
              <motion.div
                className="flex flex-wrap justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button asChild variant="default" size="lg" className="rounded-full">
                  <Link href="#contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="#projects">
                    View Projects
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="default" size="lg" className="rounded-full">
                  <Link href="https://www.upwork.com/freelancers/brhaneg" target="_blank">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Hire on Upwork
                  </Link>
                </Button>
                <Button asChild variant="default" size="lg" className="rounded-full">
                  <Link href="https://www.freelancer.com/u/bretama9" target="_blank">
                    <Briefcase className="mr-2 h-4 w-4" />
                    Hire on Freelancer
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                className="flex justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
                  <Link href="https://linkedin.com/in/bretama" target="_blank">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
                  <Link href="mailto:brhane.teamrat.gidey@gmail.com">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
                  <Link href="tel:+393512558241">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="sr-only">Phone</span>
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="icon" className="rounded-full bg-primary/10 hover:bg-primary/20">
                  <Link href="#" target="_blank">
                    <Github className="h-5 w-5 text-primary" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              <ChevronRight className="h-8 w-8 rotate-90" />
              <span className="sr-only">Scroll Down</span>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-primary/10 to-purple-600/10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    <AnimatedCounter from={0} to={stat.value} duration={2} />
                    {stat.label === "Client Satisfaction" && "%"}
                    {stat.label === "Years Experience" && "+"}
                    {stat.label === "Projects Completed" && "+"}
                    {stat.label === "Technologies" && "+"}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col md:flex-row gap-12 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    About Me
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Passionate Full Stack Developer & Cloud Expert
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I am a highly skilled software engineer with a background in computer science and engineering. I
                    possess extensive experience in Java, PHP, JavaScript, and Dart with a proven ability to lead
                    software engineering teams and manage projects to successful completion.
                  </p>
                  <p>
                    As a Top-Rated Freelancer, I've achieved 100% job success on Upwork and maintained 5-star ratings on
                    Freelancer.com. I bring strong cloud computing expertise in AWS, GCP, Azure, and cPanel, along with
                    a successful freelance track record working with companies across the globe (US, France,
                    Philippines, UK, India, Canada).
                  </p>
                  <p>
                    I'm passionate about delivering high-quality software solutions, optimizing cloud infrastructure,
                    and collaborating with global clients. I'm committed to exceeding expectations and ensuring client
                    satisfaction through innovative and efficient development practices.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-primary" />
                    <span>Rende, Italy</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="mr-2 h-4 w-4 text-primary" />
                    <span>brhane.teamrat.gidey@gmail.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="mr-2 h-4 w-4 text-primary" />
                    <span>+393512558241</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button asChild variant="default">
                    <Link href="#contact">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-purple-600 opacity-30 blur-xl"></div>
                <div className="relative bg-card rounded-xl overflow-hidden shadow-xl">
                  <div className="grid grid-cols-2 gap-1 p-1">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="p-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <SkillBar name={skill.name} level={skill.level} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 md:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                  Experience
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                My Professional Journey
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A timeline of my career growth and achievements
              </p>
            </motion.div>
            <div className="mx-auto max-w-5xl">
              <div className="relative border-l-2 border-primary pl-8 ml-4 md:ml-0">
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute w-6 h-6 bg-primary rounded-full -left-[13px] top-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold flex items-center">
                          Software Developer - Freelancer
                          <Badge className="ml-2">Current</Badge>
                        </h3>
                        <p className="text-muted-foreground">Upwork & Freelancer.com</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>December 2022 - Present</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>
                        Creating software solutions by designing, developing, and implementing applications using Java,
                        Spring boot, JavaScript, VueJs, Laravel, and Flutter
                      </li>
                      <li>
                        Writing high-quality, maintainable code and conducting thorough testing to ensure software
                        reliability
                      </li>
                      <li>
                        Working closely with product managers and conducting regular maintenance, updates, and
                        enhancements
                      </li>
                      <li>
                        Managing and coordinating software development projects, adhering to timelines and budgets
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute w-6 h-6 bg-muted rounded-full -left-[13px] top-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Software Developer - Medco Technology Solutions</h3>
                        <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>March 2020 - September 2023</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Translated user requirements into functional designs and architectural plans</li>
                      <li>Designed and optimized database structures to support software functionality</li>
                      <li>Deployed software applications onto servers or to cloud platforms</li>
                      <li>Implemented security best practices to protect software applications</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute w-6 h-6 bg-muted rounded-full -left-[13px] top-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">ScrumMaster - Upwork</h3>
                        <p className="text-muted-foreground">Remote</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>June 2024 - February 2025</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Led Scrum ceremonies to drive efficient collaboration and ensure focused team delivery</li>
                      <li>Removed impediments and protected the team from external distractions</li>
                      <li>Coached teams on Agile best practices, fostering continuous improvement</li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute w-6 h-6 bg-muted rounded-full -left-[13px] top-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">IT Consultant - Nayna Saving and Credit</h3>
                        <p className="text-muted-foreground">Mekelle, Ethiopia</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>September 2019 - March 2020</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Designed, developed and maintained financial software systems</li>
                      <li>Consulted the General Manager and higher officials on Information Technology services</li>
                      <li>Implemented the latest IT systems to create secure and sustainable information sharing</li>
                      <li>Developed new strategies and IT procedures to increase efficiency</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                  Skills
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                My Technical Expertise
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A comprehensive toolkit of technologies and frameworks
              </p>
            </motion.div>
            <div className="mx-auto max-w-5xl">
              <Tabs defaultValue="programming" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                  <TabsTrigger
                    value="programming"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    Programming
                  </TabsTrigger>
                  <TabsTrigger
                    value="frameworks"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Layers className="mr-2 h-4 w-4" />
                    Frameworks
                  </TabsTrigger>
                  <TabsTrigger
                    value="databases"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Database className="mr-2 h-4 w-4" />
                    Databases
                  </TabsTrigger>
                  <TabsTrigger
                    value="cloud"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Cloud className="mr-2 h-4 w-4" />
                    Cloud & DevOps
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="programming" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Java/Spring boot", "PHP/Laravel", "JavaScript/Vue/React", "Flutter", "Dart", "C/C++", "HTML/CSS", "TypeScript", "ScrumMaster"].map(
                      (skill, index) => (
                        <motion.div
                          key={skill}
                          className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-purple-600/20 p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <span className="text-4xl mb-2">{skill.charAt(0)}</span>
                          <span className="font-medium">{skill}</span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="frameworks" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Spring Boot", "Laravel", "VueJs", "ReactJs", "Flutter", "Android", "WordPress", "Express"].map(
                      (skill, index) => (
                        <motion.div
                          key={skill}
                          className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-purple-600/20 p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <span className="text-4xl mb-2">{skill.charAt(0)}</span>
                          <span className="font-medium">{skill}</span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="databases" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["MySQL", "PostgreSQL", "MariaDB", "SQL Server", "Oracle", "SQLite", "MongoDB", "Redis"].map(
                      (skill, index) => (
                        <motion.div
                          key={skill}
                          className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-purple-600/20 p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <span className="text-4xl mb-2">{skill.charAt(0)}</span>
                          <span className="font-medium">{skill}</span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="cloud" className="mt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["AWS", "GCP", "Azure", "cPanel", "Docker", "Kubernetes", "CI/CD", "Git"].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-purple-600/20 p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <span className="text-4xl mb-2">{skill.charAt(0)}</span>
                        <span className="font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                  Projects
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Featured Projects</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Showcasing my best work and technical achievements
              </p>
            </motion.div>
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button variant="outline" size="lg" className="rounded-full">
                  View All Projects
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                  Education
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Education & Certifications
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                My academic background and professional development
              </p>
            </motion.div>
            <div className="mx-auto max-w-5xl">
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-primary to-purple-600 p-1">
                    <CardHeader className="bg-card">
                      <CardTitle>Bachelor's Degree in Computer Science and Engineering</CardTitle>
                      <CardDescription>Mekelle University, Ethiopia</CardDescription>
                    </CardHeader>
                    <CardContent className="bg-card pt-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>September 2014 - July 2019</span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <strong>GPA:</strong> 3.82/4.00
                        </p>
                        <p className="text-sm">
                          <strong>Thesis:</strong> Emotion Based Music Player
                        </p>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>

              <h3 className="text-xl font-bold mb-6">Professional Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Spring MVC, Spring Boot and Rest Controllers",
                    provider: "Coursera",
                    date: "June 2022 - September 2022",
                    link: "https://www.coursera.org/account/accomplishments/verify/DW3JH3K99FK8",
                  },
                  {
                    title: "Building Scalable Java Microservices",
                    provider: "Coursera",
                    date: "May 2022 - September 2022",
                    link: "https://www.coursera.org/account/accomplishments/verify/MNV4DLXNRYPY",
                  },
                  {
                    title: "DevOps on AWS: Code, Build, and Test",
                    provider: "Coursera",
                    date: "July 2022 - November 2022",
                    link: "https://www.coursera.org/account/accomplishments/verify/8U7RZXRXNHLG",
                  },
                  {
                    title: "AWS Cloud Practitioner Essentials",
                    provider: "Coursera",
                    date: "August 2022 - November 2022",
                    link: "https://www.coursera.org/account/accomplishments/verify/6VSXQKCMBCAW",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-base">{cert.title}</CardTitle>
                        <CardDescription>{cert.provider}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>{cert.date}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <Link href={cert.link} target="_blank" className="flex items-center justify-center">
                            Verify
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-block">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                  Contact
                </div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Let's discuss your project and how I can help bring your ideas to life
              </p>
            </motion.div>
            <div className="mx-auto max-w-5xl">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Reach out to me through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full p-3 bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-muted-foreground">brhane.teamrat.gidey@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full p-3 bg-primary/10">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Phone</p>
                          <p className="text-sm text-muted-foreground">+393512558241</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full p-3 bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Location</p>
                          <p className="text-sm text-muted-foreground">Rende, Italy</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full p-3 bg-primary/10">
                          <Linkedin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">LinkedIn</p>
                          <p className="text-sm text-muted-foreground">linkedin.com/in/bretama</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
              <Link href="/" className="flex items-center space-x-2">
                <span className="inline-block font-bold text-primary">BTG</span>
                <span className="hidden md:inline-block font-bold">Brhane Teamrat Gidey</span>
              </Link>
              <p className="text-center text-sm text-muted-foreground md:text-left">
                © 2025 Brhane Teamrat Gidey. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link href="https://linkedin.com/in/bretama" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link href="mailto:brhane.teamrat.gidey@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link href="tel:+393512558241">
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Phone</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon" className="rounded-full">
                <Link href="#" target="_blank">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
