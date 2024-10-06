import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function BioData() {
  return (
    <div className="w-full bg-primary text-primary-foreground py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
        <Avatar className="h-24 w-24 mb-6">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1838097908811599872/c9JNghdB_400x400.jpg" alt="Rizuka Miku Foto Profile" />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">💖 Rizuka Miku ✨</h1>
        <div className="grid grid-cols-4 gap-2 text-muted-foreground mb-8">
          <div>
            <span className="font-medium">Tanggal Lahir:</span> 13 Agustus
          </div>
          <div>
            <span className="font-medium">Zodiac:</span> Leo
          </div>
          <div>
            <span className="font-medium">Tinggi:</span> 150cm
          </div>
          <div>
            <span className="font-medium">Oshi Mark:</span> 💖✨
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3 w-full max-w-2xl">
          <a className="flex items-center gap-2 text-muted-foreground" href='https://www.youtube.com/@RizukaMiku_Vtuber'>
            <YoutubeIcon className="h-4 w-4" />
            <span>Rizuka Miku Ch.</span>
          </a>
          <a href='https://x.com/Rizuka_Miku' className="flex items-center gap-2 text-muted-foreground">
            <XIcon className="h-4 w-4" />
            <span>@Rizuka_Miku</span>
          </a>
          <a href='https://www.instagram.com/rizuka_miku/' className="flex items-center gap-2 text-muted-foreground">
            <InstagramIcon className="h-4 w-4" />
            <span>rizuka_miku</span>
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-3 w-full max-w-2xl mt-8">
          <a href='https://trakteer.id/RizukaMiku' className="flex items-center gap-2 text-muted-foreground">
            <GiftIcon className="h-4 w-4" />
            <span>Rizuka Miku</span>
          </a>
          <a href='https://www.tiktok.com/@rizuka.miku' className="flex items-center gap-2 text-muted-foreground">
            <TikTokIcon className="h-4 w-4" />
            <span>Rizuka Miku</span>
          </a>
          <a href='https://open.spotify.com/artist/0LEPzZBneLQkMtKti7pjFW?si=BKmEAbBDQDqn9ynjYzM0lQ&nd=1&dlsi=450b2fc5151247f0' className="flex items-center gap-2 text-muted-foreground">
            <SpotifyIcon className="h-4 w-4" />
            <span>Rizuka Miku</span>
          </a>
        </div>
      </div>
    </div>
  )
}

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15s3-1.5 8 0" />
        <path d="M7 11.5s4.5-2 10 0" />
        <path d="M7 8.5s6-2.5 10 0" />
      </svg>
    );
  }
  


function GiftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}


function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}


function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="48px"
        height="48px"
        viewBox="0 0 48 48"
        fill="none"
      >
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path
            d="M38.0766847,15.8542954 C36.0693906,15.7935177 34.2504839,14.8341149 32.8791434,13.5466056 C32.1316475,12.8317108 31.540171,11.9694126 31.1415066,11.0151329 C30.7426093,10.0603874 30.5453728,9.03391952 30.5619062,8 L24.9731521,8 L24.9731521,28.8295196 C24.9731521,32.3434487 22.8773693,34.4182737 20.2765028,34.4182737 C19.6505623,34.4320127 19.0283477,34.3209362 18.4461858,34.0908659 C17.8640239,33.8612612 17.3337909,33.5175528 16.8862248,33.0797671 C16.4386588,32.6422142 16.0833071,32.1196657 15.8404292,31.5426268 C15.5977841,30.9658208 15.4727358,30.3459348 15.4727358,29.7202272 C15.4727358,29.0940539 15.5977841,28.4746337 15.8404292,27.8978277 C16.0833071,27.3207888 16.4386588,26.7980074 16.8862248,26.3604545 C17.3337909,25.9229017 17.8640239,25.5791933 18.4461858,25.3491229 C19.0283477,25.1192854 19.6505623,25.0084418 20.2765028,25.0219479 C20.7939283,25.0263724 21.3069293,25.1167239 21.794781,25.2902081 L21.794781,19.5985278 C21.2957518,19.4900128 20.7869423,19.436221 20.2765028,19.4380839 C18.2431278,19.4392483 16.2560928,20.0426009 14.5659604,21.1729264 C12.875828,22.303019 11.5587449,23.9090873 10.7814424,25.7878401 C10.003907,27.666593 9.80084889,29.7339663 10.1981162,31.7275214 C10.5953834,33.7217752 11.5748126,35.5530237 13.0129853,36.9904978 C14.4509252,38.4277391 16.2828722,39.4064696 18.277126,39.8028054 C20.2711469,40.1991413 22.3382874,39.9951517 24.2163416,39.2169177 C26.0948616,38.4384508 27.7002312,37.1209021 28.8296253,35.4300711 C29.9592522,33.7397058 30.5619062,31.7522051 30.5619062,29.7188301 L30.5619062,18.8324027 C32.7275484,20.3418321 35.3149087,21.0404263 38.0766847,21.0867664 L38.0766847,15.8542954 Z"
            fill="#FFF"
          />
        </g>
      </svg>
    );
  }
  
  