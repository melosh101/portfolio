import * as React from "react"
import { cn } from "~/lib/utils"
 
const ProjectCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "dark:bg-slate-900 bg-gray-300 shadow-md shadow-slate-500 dark:shadow-slate-950 p-4 rounded-lg m-4 flex flex-col",
      className
    )}
    {...props}
  />
))
ProjectCard.displayName = "ProjectCard";


const ProjectTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3  ref={ref} className={cn("font-bold text-2xl", className)} {...props}/>
));


const ProjectDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-1", className)}
    {...props}
  />
))
ProjectDescription.displayName = "ProjectDescription";


const ProjectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
ProjectContent.displayName = "ProjectContent"

const ProjectFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-auto pt-4 gap-1 flex flex-col", className)}
    {...props}
  />
))
ProjectFooter.displayName = "ProjectFooter"


export {
  ProjectCard,
  ProjectTitle,
  ProjectContent,
  ProjectDescription,
  ProjectFooter
}