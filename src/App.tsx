import Header from '@/components/Header'
import { useRef, useState } from "react"
import ProjectCard from "./components/ProjectCard"
import Modal from '@/components/Modal'
import BioData from './components/BioData'
import oriSong from '@/db/originalSong.json'
import coverSong from '@/db/coverSong.json'
import ScrollToTop from '@/components/ScrollToTop'
import CustomSlider from '@/components/CustomSlider'


function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const oriRef = useRef<HTMLDivElement>(null)
  const coverRef = useRef<HTMLDivElement>(null)
  const isMobile = window.innerWidth < 768

  const [selectedSong, setSelectedSong] = useState<typeof oriSong[0] | null>(null);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="flex flex-col min-h-[100dvh]" ref={homeRef}>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectRef={oriRef} coverRef={coverRef}/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#A1326F] h-screen">
          <div className="container mt-5 px-4 md:px-6">
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
                    <iframe width="320" height="180" src="https://www.youtube.com/embed/mtCh0rIBoc8?autoplay=1&si=aAk0u7apRupYYhTc&mute=1" title="【MODEL SHOWCASE】 Rizuka Miku - INTRO (Starlight) Short ver" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  </div>
                ) : (
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/mtCh0rIBoc8?autoplay=1&si=aAk0u7apRupYYhTc&mute=1" title="【MODEL SHOWCASE】 Rizuka Miku - INTRO (Starlight) Short ver" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                )}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-[#253D57]" ref={aboutRef}>
          <BioData />
        </section>
        <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted" ref={oriRef}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Original Song</h2>
            {isMobile ? (
              <>
                <CustomSlider slidesLength={oriSong.length}>
                  {oriSong.map((song,index) => (
                    <ProjectCard imageLink={song.imageLink} title={song.title} description={song.description} projectLink={song.projectLink} key={index} lyrics={song.lyrics} onViewLyrics={() => setSelectedSong(song)}/>
                  ))}
                  </CustomSlider >
              </>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {oriSong?.map((song,index) => (
                  <ProjectCard imageLink={song.imageLink} title={song.title} description={song.description} projectLink={song.projectLink}  key={index} lyrics={song.lyrics} onViewLyrics={() => setSelectedSong(song)}/>
                ))}
              </div>
            )}
          </div>
          <Modal
             isOpen={!!selectedSong}
             onClose={() => setSelectedSong(null)}
             title={selectedSong?.title}
          >
            <p className="text-sm text-gray-700">
              {selectedSong?.lyrics.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </Modal>
        </section>
        <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted" ref={coverRef}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Cover Song</h2>
            {isMobile ? 
              (
                <>
                  <CustomSlider slidesLength={coverSong.length}>
                    {coverSong?.map((song,index) => (
                      <ProjectCard  imageLink={song.imageLink} title={song.title} description={song.description} key={index} projectLink={song.projectLink}/>
                    ))}
                  </CustomSlider>
                </>
              )
            : (
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {coverSong?.map((song,index) => (
                        <ProjectCard  imageLink={song.imageLink} title={song.title} description={song.description} key={index} projectLink={song.projectLink}/>
                    ))}
              </div>
            )}
          </div>
        </section>
        <ScrollToTop />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; {year} Rizuka Miku.</p>
          {/* <ProjectCard imageLink='https://img.youtube.com/vi/xawGBRZn9VQ/hqdefault.jpg' title='Itoshisha no Defense' description='Itoshisha no Defense by JKT48' projectLink='https://www.youtube.com/watch?v=xawGBRZn9VQ'/> */}
          {/* <ProjectCard imageLink='https://img.youtube.com/vi/5729CtVSFGc/hqdefault.jpg' title='BINGO!' description='BINGO! by JKT48' projectLink='https://www.youtube.com/watch?v=5729CtVSFGc'/> */}
          {/* <ProjectCard imageLink='https://img.youtube.com/vi/gEX1Hr5lmU8/hqdefault.jpg' title='Seventeen (Cover by Rizuka Miku & Vhika Hikari)' description='Seventeen by JKT48' projectLink='https://www.youtube.com/watch?v=gEX1Hr5lmU8'/> */}
      </footer>
    </div>
  )
}

export default App
