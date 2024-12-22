import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CardProps {
    imageLink: string;
    title: string;
    description: string;
    projectLink: string;
    onViewLyrics?: () => void;
    lyrics?: string;
}

const ProjectCard = ({imageLink, title, description, projectLink, lyrics, onViewLyrics}: CardProps) => {
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
                        {description} 
                        <div className="flex items-center justify-start gap-3 mt-3">
                            <p><a className="text-[#A1326F]" href={`${projectLink}`}>Go to</a></p>
                            <Button 
                                onClick={onViewLyrics} 
                                className={`${lyrics && lyrics !== "" ? "" : "hidden"} bg-[#A1326F] hover:bg-[#8B2A5E] text-white duration-500`}
                            >
                                View Lyrics
                            </Button>
                        </div>
                    </p>
            </CardContent>
        </Card>
  )
}

export default ProjectCard
