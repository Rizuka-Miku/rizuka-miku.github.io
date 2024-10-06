import Header from '@/components/Header'
import { useRef } from "react"
import ProjectCard from "./components/ProjectCard"
import BioData from './components/BioData'


function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col min-h-[100dvh]" ref={homeRef}>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef}/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#A1326F]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                      💖 Rizuka Miku ✨
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl text-white">
                      ✨ Menyinari kegelapan yang ada di hatimu! Halo semua, aku Rizuka Miku~ 💖✨
                  </p>
                </div>
              </div>
              <img
                src="https://pbs.twimg.com/media/F0IQdH4aMAEKzPB?format=jpg&name=large"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#253D57]" ref={aboutRef}>
          <BioData />
        </section>
        <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted" ref={projectRef}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Original Song</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ProjectCard imageLink='https://img.youtube.com/vi/D0YoypKJVwE/hqdefault.jpg' title='Rasa Cemasku' description='1st Original Song Rizuka Miku' projectLink='https://www.youtube.com/watch?v=D0YoypKJVwE'/>
              <ProjectCard imageLink='https://img.youtube.com/vi/WV1WzRi1OiA/hqdefault.jpg' title='Gemerlap Bintang' description='2nd Original Song Rizuka Miku' projectLink='https://www.youtube.com/watch?v=WV1WzRi1OiA'/>
              <ProjectCard imageLink='https://img.youtube.com/vi/fsWSYE1E8Eo/hqdefault.jpg' title='Dreamcatcher' description='2nd Original Song Rizuka Miku' projectLink='https://www.youtube.com/watch?v=fsWSYE1E8Eo'/>
            </div>
          </div>
        </section>
        <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted" ref={projectRef}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Cover Song</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <ProjectCard imageLink='https://img.youtube.com/vi/xawGBRZn9VQ/hqdefault.jpg' title='Itoshisha no Defense' description='Itoshisha no Defense by JKT48' projectLink='https://www.youtube.com/watch?v=xawGBRZn9VQ'/>
              <ProjectCard imageLink='https://img.youtube.com/vi/5729CtVSFGc/hqdefault.jpg' title='BINGO!' description='BINGO! by JKT48' projectLink='https://www.youtube.com/watch?v=5729CtVSFGc'/>
              <ProjectCard imageLink='https://img.youtube.com/vi/GRQ14yZh3KY/hqdefault.jpg' title='恋色' description='恋色 by もさを' projectLink='https://www.youtube.com/watch?v=GRQ14yZh3KY'/>
              <ProjectCard imageLink='https://img.youtube.com/vi/gEX1Hr5lmU8/hqdefault.jpg' title='Seventeen (Cover by Rizuka Miku & Vhika Hikari)' description='Seventeen by JKT48' projectLink='https://www.youtube.com/watch?v=gEX1Hr5lmU8'/>
              <ProjectCard imageLink='https://img.youtube.com/vi/CG9sYT70xHw/hqdefault.jpg' title='Heart Gata Virus (Cover by Rizuka Miku, Vhika Hikari, Mariela Riona)' description='Seventeen by JKT48' projectLink='https://www.youtube.com/watch?v=CG9sYT70xHw'/>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Rizuka Miku.</p>
      </footer>
    </div>
  )
}

export default App
