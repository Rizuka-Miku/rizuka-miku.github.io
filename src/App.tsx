import Header from '@/components/Header'
import { useRef, useState, useEffect } from "react"
import ProjectCard from "./components/ProjectCard"
import MobileCarousel from './components/MobileCarousel'
import Modal from '@/components/Modal'
import BioData from './components/BioData'
import oriSong from '@/db/originalSong.json'
import coverSong from '@/db/coverSong.json'
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from '@/contexts/ThemeContext'


function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const oriRef = useRef<HTMLDivElement>(null)
  const coverRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const [selectedSong, setSelectedSong] = useState<typeof oriSong[0] | null>(null);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-[100dvh] overflow-x-hidden" ref={homeRef}>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectRef={oriRef} coverRef={coverRef}/>
      <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#A1326F] dark:bg-[#682048] h-screen">
          <div className="mt-5 px-4 lg:px-6">
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
                {isMobile ? (
                  <div className="flex justify-center">
                    <video
                      controls
                      autoPlay
                      muted
                      preload="metadata"
                      className="w-[320px] h-[180px] object-cover rounded"
                    >
                      <source src="/videos/intro.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="w-full max-w-[560px]">
                    <video
                      controls
                      autoPlay
                      muted
                      preload="metadata"
                      className="w-full aspect-video object-cover rounded"
                    >
                      <source src="/videos/intro.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
            </div>
          </div>
        </section>
          <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#253D57] dark:bg-[#0f1a2a]" ref={aboutRef}>
          <BioData />
        </section>
          <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900" ref={oriRef}>
          <div className="px-4 lg:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-black dark:text-white">Original Song</h2>
            <div className="block md:hidden">
              <MobileCarousel>
                {oriSong.map((song, index) => (
                  <ProjectCard key={index} imageLink={song.imageLink} title={song.title} description={song.description} projectLink={song.projectLink} lyrics={song.lyrics} onViewLyrics={() => setSelectedSong(song)}/>
                ))}
              </MobileCarousel>
            </div>
            <div className="hidden md:block">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {oriSong?.map((song,index) => (
                  <ProjectCard imageLink={song.imageLink} title={song.title} description={song.description} projectLink={song.projectLink}  key={index} lyrics={song.lyrics} onViewLyrics={() => setSelectedSong(song)}/>
                ))}
              </div>
            </div>
          </div>
          <Modal
             isOpen={!!selectedSong}
             onClose={() => setSelectedSong(null)}
             title={selectedSong?.title}
          >
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {selectedSong?.lyrics.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </Modal>
        </section>
          <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900" ref={coverRef}>
          <div className="px-4 lg:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-black dark:text-white">Cover Song</h2>
            <div className="block md:hidden">
              <MobileCarousel>
                {coverSong?.map((song,index) => (
                  <ProjectCard key={index} imageLink={song.imageLink} title={song.title} description={song.description} projectLink={song.projectLink}/>
                ))}
              </MobileCarousel>
            </div>
            <div className="hidden md:block">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {coverSong?.map((song,index) => (
                        <ProjectCard  imageLink={song.imageLink} title={song.title} description={song.description} key={index} projectLink={song.projectLink}/>
                    ))}
              </div>
            </div>
          </div>
        </section>
        <ScrollToTop />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 bg-white dark:bg-gray-900 lg:px-6 border-t">
        <p className="text-xs text-black dark:text-white">&copy; {year} Rizuka Miku.</p>
          {/* <ProjectCard imageLink='https://img.youtube.com/vi/xawGBRZn9VQ/hqdefault.jpg' title='Itoshisha no Defense' description='Itoshisha no Defense by JKT48' projectLink='https://www.youtube.com/watch?v=xawGBRZn9VQ'/> */}
          {/* <ProjectCard imageLink='https://img.youtube.com/vi/5729CtVSFGc/hqdefault.jpg' title='BINGO!' description='BINGO! by JKT48' projectLink='https://www.youtube.com/watch?v=5729CtVSFGc'/> */}
          {/* <ProjectCard imageLink='https://img.youtube.com/vi/gEX1Hr5lmU8/hqdefault.jpg' title='Seventeen (Cover by Rizuka Miku & Vhika Hikari)' description='Seventeen by JKT48' projectLink='https://www.youtube.com/watch?v=gEX1Hr5lmU8'/> */}
      </footer>
    </div>
    </ThemeProvider>
  )
}

export default App
