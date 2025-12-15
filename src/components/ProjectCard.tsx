import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CardProps {
    imageLink: string;
    title: string;
    description: string;
    projectLink: string;
    onViewLyrics?: () => void;
    lyrics?: string;
    key?: React.Key;
}

const ProjectCard = ({imageLink, title, description, projectLink, lyrics, onViewLyrics}: CardProps) => {
  return (
        <Card className="overflow-hidden rounded-xl flex flex-col h-full">
            <CardHeader className="p-0">
                <img
                    src={`${imageLink}`}
                    width="400"
                    height="225"
                    alt="Project"
                    className="w-full h-40 md:h-48 lg:h-56 object-cover"
                />
            </CardHeader>
            <CardContent className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
                <p className="text-muted-foreground text-black dark:text-gray-300 break-words">
                    {description}
                </p>
                <div className="flex items-center justify-start gap-3 mt-3">
                    <p><a className="text-[#A1326F] dark:text-pink-400" href={`${projectLink}`}>Go to</a></p>
                    <Button 
                        onClick={onViewLyrics} 
                        className={`${lyrics && lyrics !== "" ? "" : "hidden"} bg-[#A1326F] hover:bg-[#8B2A5E] text-white duration-500 dark:bg-pink-600 dark:hover:bg-pink-700`}
                    >
                        View Lyrics
                    </Button>
                </div>
            </CardContent>
        </Card>
  )
}

export default ProjectCard
