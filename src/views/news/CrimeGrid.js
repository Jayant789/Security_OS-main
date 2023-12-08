import React from 'react';
import './CrimeGrid.css';

let crimeData = [
  {
    id: 54,
    headline: "Majority of LGBT+ people face abuse on London transport as bystanders 'do nothing to help'",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article24281057.ece/ALTERNATES/s1200/1_GettyImages-1248436346.jpg',
    link: 'https://www.mylondon.news/news/transport/majority-lgbt-people-face-abuse-28109659',
    location: 'London',
    latitude: 51.5074456,
    longitude: -0.1277653,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 67,
    headline: "Woman asks 'are you a Jew?' before threatening passengers on London bus",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28101667.ece/ALTERNATES/s1200/2_Screenshot-2023-11-14-084951.png',
    link: 'https://www.mylondon.news/news/north-london-news/woman-asks-are-you-jew-28101636',
    location: 'London',
    latitude: 51.5074456,
    longitude: -0.1277653,
    crime: 'OTHER CRIMES',
    date: '2023-11-16'
  },
  {
    id: 56,
    headline: "Southall neighbours can't stop thinking of 'screams' after boy stabbed to death in 'quiet' street",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28111175.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-15-at-130750jpeg.jpg',
    link: 'https://www.mylondon.news/news/west-london-news/southall-neighbours-cant-stop-hearing-28111397',
    location: 'West London',
    latitude: 38.1943567,
    longitude: -81.3686944,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 58,
    headline: "Dad, 52, asked 'how would you feel?' if daughters were sexually abused like babies in sick videos he was caught with",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28110728.ece/ALTERNATES/s1200/0_WhatsApp-Image-2023-11-15-at-123339jpeg.jpg',
    link: 'https://www.mylondon.news/news/east-london-news/dad-52-asked-how-would-28110241',
    location: 'East London',
    latitude: -33.0191604,
    longitude: 27.8998573,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 59,
    headline: "'Clifton Rapist' back behind bars after convicted murderer free to sexually assault London woman despite 'life sentence'",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28108441.ece/ALTERNATES/s1200/0_ron-evans-2.png',
    link: 'https://www.mylondon.news/news/north-london-news/clifton-rapist-back-behind-bars-28108307',
    location: 'Bristol',
    latitude: 51.4538022,
    longitude: -2.5972985,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 60,
    headline: "Parents of girl killed in Wimbledon school crash 'struggle to wake up' every morning",
    imagelink: 'https://i2-prod.mylondon.news/news/south-london-news/article27288352.ece/ALTERNATES/s1200/1_Nuria-Sajjad.jpg',
    link: 'https://www.mylondon.news/news/west-london-news/parents-girl-killed-wimbledon-school-28108231',
    location: 'South West',
    latitude: 5.3356587,
    longitude: 100.2389496,
    crime: 'PERSONAL CRIMES',
    date: '2023-11-16'
  },
  {
    id: 61,
    headline: "Live Southall stabbing updates as teenager 'murdered' with 4 men arrested",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28111173.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-15-at-130749jpeg.jpg',
    link: 'https://www.mylondon.news/news/west-london-news/live-southall-updates-teenager-stabbed-28108485',
    location: 'West London',
    latitude: 38.1943567,
    longitude: -81.3686944,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 62,
    headline: 'Armed thugs plunder Tesco and Nisa with handgun, hammer, and knife in spate of North London robberies',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28106147.ece/ALTERNATES/s1200/0_TESCO-ROBBER.png',
    link: 'https://www.mylondon.news/news/north-london-news/armed-thugs-plunder-tesco-nisa-28106038',
    location: 'North London',
    latitude: 41.332052,
    longitude: 19.8048247,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 63,
    headline: "Channel 4 Banged Up ex-con had 'best night sleep' when he returned to prison to film show",
    imagelink:
      'https://i2-prod.mylondon.news/incoming/article28093431.ece/ALTERNATES/s1200/4_WhatsApp-Image-2023-11-12-at-174948-2jpeg.jpg',
    link: 'https://www.mylondon.news/news/tv/channel-4-banged-up-ex-28093350',
    location: 'Battersea',
    latitude: 51.4707933,
    longitude: -0.172214,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 64,
    headline: "Mum accused of biting baby girl while husband 'battered her to death' says she 'thought it happened naturally', court hears",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28105559.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-14-at-155222jpeg.jpg',
    link: 'https://www.mylondon.news/news/east-london-news/mum-accused-biting-baby-girl-28104389',
    location: 'Colindale',
    latitude: 51.5954091,
    longitude: -0.2499296,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 65,
    headline: "Man 'stabbed' in head outside London Underground station in late night attack",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28104512.ece/ALTERNATES/s1200/0_willesden-green-station.jpg',
    link: 'https://www.mylondon.news/news/north-london-news/man-stabbed-head-outside-london-28104440',
    location: 'North London',
    latitude: 41.332052,
    longitude: 19.8048247,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 66,
    headline: 'Everything we know about Hounslow fire that killed 5 as firefighters search for 6th person',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28097105.ece/ALTERNATES/s1200/0_WhatsApp-Image-2023-11-13-at-120723jpeg.jpg',
    link: 'https://www.mylondon.news/news/west-london-news/everything-know-hounslow-fire-killed-28102379',
    location: 'West London',
    latitude: 38.1943567,
    longitude: -81.3686944,
    crime: 'OTHER CRIMES',
    date: '2023-11-16'
  },
  {
    id: 68,
    headline: 'Shane Jerome murder explained as The Met series finale revisits brutal stabbing of motorcycle stuntman',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28053555.ece/ALTERNATES/s1200/0_shane-jerome.png',
    link: 'https://www.mylondon.news/news/tv/shane-jerome-murder-explained-met-28053041',
    location: 'UK',
    latitude: 54.7023545,
    longitude: -3.2765753,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 69,
    headline: 'East London pervert, 52, finally banged up for rape he committed 24 years ago',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28101394.ece/ALTERNATES/s1200/0_01KF74921_Basith_Abdul.jpg',
    link: 'https://www.mylondon.news/news/east-london-news/east-london-pervert-52-finally-28101383',
    location: 'East London',
    latitude: -33.0191604,
    longitude: 27.8998573,
    crime: 'PERSONAL CRIMES',
    date: '2023-11-16'
  },
  {
    id: 70,
    headline: 'Mum of footballer killed in pub row dies from cancer after setting up charity to help disadvantaged youths',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28100796.ece/ALTERNATES/s1200/0_fundraising-mum-1097388.jpg',
    link: 'https://www.mylondon.news/news/health/mum-footballer-killed-pub-row-28100605',
    location: 'Retford',
    latitude: 53.3231315,
    longitude: -0.9424879,
    crime: 'PROPERTY CRIMES',
    date: '2023-11-16'
  },
  {
    id: 71,
    headline: "Paint thrown on North London homes in 'potential hate crime'",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28102179.ece/ALTERNATES/s1200/0_IMG_0781.jpg',
    link: 'https://www.mylondon.news/news/north-london-news/police-launch-investigation-after-pain-28099510',
    location: 'North London',
    latitude: 41.332052,
    longitude: 19.8048247,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 72,
    headline: "Brutal unsolved murder of London Playboy Bunny girl investigated by Louis Theroux's brother in new ITV series",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28099830.ece/ALTERNATES/s1200/2_Copy-of-Untitled.jpg',
    link: 'https://www.mylondon.news/news/tv/brutal-unsolved-serial-killer-murder-28099168',
    location: 'London',
    latitude: 51.5074456,
    longitude: -0.1277653,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 73,
    headline: "Coke fiend, 44, told woman, 25, he wanted to 'f**k her nappy' then broke into her flat and wore her thong",
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28099113.ece/ALTERNATES/s1200/0_Antony-Debono.jpg',
    link: 'https://www.mylondon.news/news/east-london-news/coke-fiend-44-told-woman-28096185',
    location: 'East London',
    latitude: -33.0191604,
    longitude: 27.8998573,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 74,
    headline: 'Panty pirates who made £400k selling fake designer underwear on eBay walk free after dirty laundry exposed',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28099172.ece/ALTERNATES/s1200/0_GettyImages-1336136316.jpg',
    link: 'https://www.mylondon.news/news/east-london-news/panty-pirates-who-made-400k-28098149',
    location: 'Hertfordshire',
    latitude: 51.8400523,
    longitude: -0.0978552,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 75,
    headline: 'Met Police sergeant Matt Ratana shot dead after colleagues botched search of gunman Louis De Zoysa',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article27115473.ece/ALTERNATES/s1200/2_01H27MR372J60QGXJRYQVM3GBP.jpg',
    link: 'https://www.mylondon.news/news/south-london-news/met-police-sergeant-matt-ratana-28098600',
    location: 'Croydon',
    latitude: 51.3713049,
    longitude: -0.101957,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  },
  {
    id: 76,
    headline: 'West London man who smuggled £1000s to fund terrorism jailed for 8 years',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article28097518.ece/ALTERNATES/s1200/0_01HCW7DFMKHZ9QN80PCQCSRA4B.jpg',
    link: 'https://www.mylondon.news/news/west-london-news/west-london-man-who-smuggled-28097481',
    location: 'West London',
    latitude: 38.1943567,
    longitude: -81.3686944,
    crime: 'OTHER CRIMES',
    date: '2023-11-16'
  },
  {
    id: 77,
    headline: 'Cheating Met Police officer tried to rape colleague by forcing her head towards his crotch during clinch',
    imagelink: 'https://i2-prod.mylondon.news/incoming/article24380751.ece/ALTERNATES/s1200/3_KP_HMB__220621_1893.jpg',
    link: 'https://www.mylondon.news/news/south-london-news/cheating-met-police-officer-tried-28097129',
    location: 'Sidcup',
    latitude: 51.4264002,
    longitude: 0.101044,
    crime: 'VIOLENT CRIMES',
    date: '2023-11-16'
  }
];

const CrimeGrid = () => {
  return (
    <div>
      <h2>Live Crime Updates</h2>
      {crimeData.slice(0, 5).map((crime) => (
        <div key={crime.id} className="crimeDataPoint">
          <img src={crime.imagelink} width={100} height={50} alt={crime.headline} />
          <p style={{ margin: 0 }}>
            <b>{crime.crime}: </b>
            <a style={{ color: '#000', textDecoration: 'none' }} href={crime.link}>
              {crime.headline}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CrimeGrid;
