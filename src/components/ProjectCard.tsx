import { Card, CardHeader, CardContent } from "@/components/ui/card"

interface CardProps {
    imageLink: string;
    title: string;
    description: string;
    projectLink: string;
}

const ProjectCard = ({imageLink, title, description, projectLink}: CardProps) => {
  return (
        <Card>
            <CardHeader>
                <img
                    src={`${imageLink}`}
                    width="400"
                    height="225"
                    alt="Project"
                    className="aspect-[16/9] overflow-hidden rounded-t-xl object-cover"
                />
            </CardHeader>
            <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground">
                    {description}  <p><a className="text-[#A1326F]" href={`${projectLink}`}>Go to</a></p>
                </p>
            </CardContent>
        </Card>
  )
}

export default ProjectCard
