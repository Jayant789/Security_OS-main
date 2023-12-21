//import React, { useState, useEffect } from 'react';
//import axios from 'axios';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
// import { Router } from 'react-router';

const violentCrimeIcon = new Icon({
  iconUrl: require('./personalCrime2.png'),
  iconSize: [38, 38]
});
const otherCrimeIcon = new Icon({
  iconUrl: require('./violentCrime2.png'),
  iconSize: [38, 38]
});
const personalCrimeIcon = new Icon({
  iconUrl: require('./otherCrime2.png'),
  iconSize: [38, 38]
});
const propertyCrimeIcon = new Icon({
  iconUrl: require('./propertyCrime2.png'),
  iconSize: [38, 38]
});

const center = [38.1733, -98.8550];

const MapComponent = () => {
  //const [crimeData, setCrimeData] = useState([]);
  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:7000/locations`).then((res) => {
  //     console.log(res.data.minedlinks);
  //     setCrimeData(res.data.minedlinks);
  //   });
  // }, []);
  const crimeData=[
        {
            "id": 53,
            "headline": "Inside London Underground workshop as 'failing' Central line trains given £500m overhaul",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28114662.ece/ALTERNATES/s1200/0_image-81.png",
            "link": "https://www.mylondon.news/news/transport/gallery/inside-london-underground-workshop-failing-28114387",
            "location": "Acton",
            "latitude": 51.5081402,
            "longitude": -0.2732607,
            "crime": "OTHER CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 54,
            "headline": "Majority of LGBT+ people face abuse on London transport as bystanders 'do nothing to help'",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article24281057.ece/ALTERNATES/s1200/1_GettyImages-1248436346.jpg",
            "link": "https://www.mylondon.news/news/transport/majority-lgbt-people-face-abuse-28109659",
            "location": "London",
            "latitude": 51.5074456,
            "longitude": -0.1277653,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 55,
            "headline": "Window cleaner, 49, who sent children masturbation videos snared by the same 'paedophile hunters' three times in one month",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28113117.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-15-at-160310-1jpeg.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/window-cleaner-49-who-sent-28112367",
            "location": "East London",
            "latitude": -33.0191604,
            "longitude": 27.8998573,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 56,
            "headline": "Southall neighbours can't stop thinking of 'screams' after boy stabbed to death in 'quiet' street",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28111175.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-15-at-130750jpeg.jpg",
            "link": "https://www.mylondon.news/news/west-london-news/southall-neighbours-cant-stop-hearing-28111397",
            "location": "West London",
            "latitude": 38.1943567,
            "longitude": -81.3686944,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 57,
            "headline": "Southall neighbours can't stop thinking of 'screams' after boy stabbed to death in 'quiet' street",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28111175.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-15-at-130750jpeg.jpg",
            "link": "https://www.mylondon.news/news/west-london-news/southall-neighbours-cant-stop-hearing-28111397",
            "location": "West London",
            "latitude": 38.1943567,
            "longitude": -81.3686944,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 58,
            "headline": "Dad, 52, asked 'how would you feel?' if daughters were sexually abused like babies in sick videos he was caught with",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28110728.ece/ALTERNATES/s1200/0_WhatsApp-Image-2023-11-15-at-123339jpeg.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/dad-52-asked-how-would-28110241",
            "location": "East London",
            "latitude": -33.0191604,
            "longitude": 27.8998573,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 59,
            "headline": "'Clifton Rapist' back behind bars after convicted murderer free to sexually assault London woman despite 'life sentence'",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28108441.ece/ALTERNATES/s1200/0_ron-evans-2.png",
            "link": "https://www.mylondon.news/news/north-london-news/clifton-rapist-back-behind-bars-28108307",
            "location": "Bristol",
            "latitude": 51.4538022,
            "longitude": -2.5972985,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 60,
            "headline": "Parents of girl killed in Wimbledon school crash 'struggle to wake up' every morning",
            "imagelink": "https://i2-prod.mylondon.news/news/south-london-news/article27288352.ece/ALTERNATES/s1200/1_Nuria-Sajjad.jpg",
            "link": "https://www.mylondon.news/news/west-london-news/parents-girl-killed-wimbledon-school-28108231",
            "location": "South West",
            "latitude": 5.3356587,
            "longitude": 100.2389496,
            "crime": "PERSONAL CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 61,
            "headline": "Live Southall stabbing updates as teenager 'murdered' with 4 men arrested",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28111173.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-15-at-130749jpeg.jpg",
            "link": "https://www.mylondon.news/news/west-london-news/live-southall-updates-teenager-stabbed-28108485",
            "location": "West London",
            "latitude": 38.1943567,
            "longitude": -81.3686944,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 62,
            "headline": "Armed thugs plunder Tesco and Nisa with handgun, hammer, and knife in spate of North London robberies",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28106147.ece/ALTERNATES/s1200/0_TESCO-ROBBER.png",
            "link": "https://www.mylondon.news/news/north-london-news/armed-thugs-plunder-tesco-nisa-28106038",
            "location": "North London",
            "latitude": 41.332052,
            "longitude": 19.8048247,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 63,
            "headline": "Channel 4 Banged Up ex-con had 'best night sleep' when he returned to prison to film show",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28093431.ece/ALTERNATES/s1200/4_WhatsApp-Image-2023-11-12-at-174948-2jpeg.jpg",
            "link": "https://www.mylondon.news/news/tv/channel-4-banged-up-ex-28093350",
            "location": "Battersea",
            "latitude": 51.4707933,
            "longitude": -0.172214,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 64,
            "headline": "Mum accused of biting baby girl while husband 'battered her to death' says she 'thought it happened naturally', court hears",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28105559.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-14-at-155222jpeg.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/mum-accused-biting-baby-girl-28104389",
            "location": "Colindale",
            "latitude": 51.5954091,
            "longitude": -0.2499296,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 65,
            "headline": "Man 'stabbed' in head outside London Underground station in late night attack",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28104512.ece/ALTERNATES/s1200/0_willesden-green-station.jpg",
            "link": "https://www.mylondon.news/news/north-london-news/man-stabbed-head-outside-london-28104440",
            "location": "North London",
            "latitude": 41.332052,
            "longitude": 19.8048247,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 66,
            "headline": "Everything we know about Hounslow fire that killed 5 as firefighters search for 6th person",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28097105.ece/ALTERNATES/s1200/0_WhatsApp-Image-2023-11-13-at-120723jpeg.jpg",
            "link": "https://www.mylondon.news/news/west-london-news/everything-know-hounslow-fire-killed-28102379",
            "location": "West London",
            "latitude": 38.1943567,
            "longitude": -81.3686944,
            "crime": "OTHER CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 67,
            "headline": "Woman asks 'are you a Jew?' before threatening passengers on London bus",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28101667.ece/ALTERNATES/s1200/2_Screenshot-2023-11-14-084951.png",
            "link": "https://www.mylondon.news/news/north-london-news/woman-asks-are-you-jew-28101636",
            "location": "London",
            "latitude": 51.5074456,
            "longitude": -0.1277653,
            "crime": "OTHER CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 68,
            "headline": "Shane Jerome murder explained as The Met series finale revisits brutal stabbing of motorcycle stuntman",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28053555.ece/ALTERNATES/s1200/0_shane-jerome.png",
            "link": "https://www.mylondon.news/news/tv/shane-jerome-murder-explained-met-28053041",
            "location": "UK",
            "latitude": 54.7023545,
            "longitude": -3.2765753,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 69,
            "headline": "East London pervert, 52, finally banged up for rape he committed 24 years ago",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28101394.ece/ALTERNATES/s1200/0_01KF74921_Basith_Abdul.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/east-london-pervert-52-finally-28101383",
            "location": "East London",
            "latitude": -33.0191604,
            "longitude": 27.8998573,
            "crime": "PERSONAL CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 70,
            "headline": "Mum of footballer killed in pub row dies from cancer after setting up charity to help disadvantaged youths",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28100796.ece/ALTERNATES/s1200/0_fundraising-mum-1097388.jpg",
            "link": "https://www.mylondon.news/news/health/mum-footballer-killed-pub-row-28100605",
            "location": "Retford",
            "latitude": 53.3231315,
            "longitude": -0.9424879,
            "crime": "PROPERTY CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 71,
            "headline": "Paint thrown on North London homes in 'potential hate crime'",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28102179.ece/ALTERNATES/s1200/0_IMG_0781.jpg",
            "link": "https://www.mylondon.news/news/north-london-news/police-launch-investigation-after-pain-28099510",
            "location": "North London",
            "latitude": 41.332052,
            "longitude": 19.8048247,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 72,
            "headline": "Brutal unsolved murder of London Playboy Bunny girl investigated by Louis Theroux's brother in new ITV series",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28099830.ece/ALTERNATES/s1200/2_Copy-of-Untitled.jpg",
            "link": "https://www.mylondon.news/news/tv/brutal-unsolved-serial-killer-murder-28099168",
            "location": "London",
            "latitude": 51.5074456,
            "longitude": -0.1277653,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 73,
            "headline": "Coke fiend, 44, told woman, 25, he wanted to 'f**k her nappy' then broke into her flat and wore her thong",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28099113.ece/ALTERNATES/s1200/0_Antony-Debono.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/coke-fiend-44-told-woman-28096185",
            "location": "East London",
            "latitude": -33.0191604,
            "longitude": 27.8998573,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 74,
            "headline": "Panty pirates who made £400k selling fake designer underwear on eBay walk free after dirty laundry exposed",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28099172.ece/ALTERNATES/s1200/0_GettyImages-1336136316.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/panty-pirates-who-made-400k-28098149",
            "location": "Hertfordshire",
            "latitude": 51.8400523,
            "longitude": -0.0978552,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 75,
            "headline": "Met Police sergeant Matt Ratana shot dead after colleagues botched search of gunman Louis De Zoysa",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article27115473.ece/ALTERNATES/s1200/2_01H27MR372J60QGXJRYQVM3GBP.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/met-police-sergeant-matt-ratana-28098600",
            "location": "Croydon",
            "latitude": 51.3713049,
            "longitude": -0.101957,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 76,
            "headline": "West London man who smuggled £1000s to fund terrorism jailed for 8 years",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28097518.ece/ALTERNATES/s1200/0_01HCW7DFMKHZ9QN80PCQCSRA4B.jpg",
            "link": "https://www.mylondon.news/news/west-london-news/west-london-man-who-smuggled-28097481",
            "location": "West London",
            "latitude": 38.1943567,
            "longitude": -81.3686944,
            "crime": "OTHER CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 77,
            "headline": "Cheating Met Police officer tried to rape colleague by forcing her head towards his crotch during clinch",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article24380751.ece/ALTERNATES/s1200/3_KP_HMB__220621_1893.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/cheating-met-police-officer-tried-28097129",
            "location": "Sidcup",
            "latitude": 51.4264002,
            "longitude": 0.101044,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-16"
        },
        {
            "id": 78,
            "headline": "Deceitful London caretaker 'lied and lied' after murdering young woman and dumping her body in a bin",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28121417.ece/ALTERNATES/s1200/0_Mark-Moodie-and-Maureen-Gitau-at-Richmond-House.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/deceitful-london-caretaker-lied-lied-28121387",
            "location": "Woolwich",
            "latitude": 51.4826696,
            "longitude": 0.0623335,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-17"
        },
        {
            "id": 79,
            "headline": "Road rage dad used Toyota Prius as battering ram then jumped out and smashed Ford Galaxy with a cricket bat",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28118810.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-16-at-145725-1jpeg.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/road-rage-dad-used-toyota-28118220",
            "location": "East London",
            "latitude": -33.0191604,
            "longitude": 27.8998573,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-17"
        },
        {
            "id": 80,
            "headline": "Sick Met Police officer sacked for having sexual activity with runaway child he messaged online",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28049946.ece/ALTERNATES/s1200/2_GettyImages-1179346199.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/sick-met-police-officer-sacked-28119035",
            "location": "Romford",
            "latitude": 51.5760462,
            "longitude": 0.1822646,
            "crime": "OTHER CRIMES",
            "date": "2023-11-17"
        },
        {
            "id": 81,
            "headline": "East London crime trio jailed after spree of 29 car thefts in just two months",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28117735.ece/ALTERNATES/s1200/0_Screenshot-2023-11-16-124235.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/east-london-crime-trio-jailed-28117479",
            "location": "East London",
            "latitude": -33.0191604,
            "longitude": 27.8998573,
            "crime": "PROPERTY CRIMES",
            "date": "2023-11-17"
        },
        {
            "id": 82,
            "headline": "Dad claims baby's injuries including brain bleed and broken skull 'could be from T-shirt change and leg massage'",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28116734.ece/ALTERNATES/s1200/0_krunal-and-rinkalben-prajapati.png",
            "link": "https://www.mylondon.news/news/east-london-news/dad-claims-babys-injuries-including-28115479",
            "location": "Colindale",
            "latitude": 51.5954091,
            "longitude": -0.2499296,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-17"
        },
        {
            "id": 83,
            "headline": "Urgent police hunt for man after 3 women followed as one fought him off at doorstep",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28143410.ece/ALTERNATES/s1200/0_Appeal1.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/urgent-police-hunt-man-after-28143408",
            "location": "Brixton",
            "latitude": 51.4568044,
            "longitude": -0.1167959,
            "crime": "OTHER CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 84,
            "headline": "Evil couple murdered step-dad in sinister 'humiliation' plot before dumping body by motorway",
            "imagelink": "https://i2-prod.mylondon.news/news/north-london-news/article28065126.ece/ALTERNATES/s1200/0_Surie-SUKSIRI.jpg",
            "link": "https://www.mylondon.news/news/north-london-news/evil-couple-murdered-step-dad-28143286",
            "location": "Highbury",
            "latitude": 51.5457996,
            "longitude": -0.1027127,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 85,
            "headline": "Man attacked in London Tesco rushed to hospital with blood spotted on supermarket floor",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28137333.ece/ALTERNATES/s1200/0_Screenshot-2023-11-20-083836.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/man-attacked-london-tesco-rushed-28137321",
            "location": "East London",
            "latitude": -33.0191604,
            "longitude": 27.8998573,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 86,
            "headline": "Disgusting sex attacker put his hand up skirt of girl, 12, on London train",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28137006.ece/ALTERNATES/s1200/0_cervera-police-image.png",
            "link": "https://www.mylondon.news/news/north-london-news/disgusting-sex-attacker-put-hand-28137009",
            "location": "North London",
            "latitude": 41.332052,
            "longitude": 19.8048247,
            "crime": "PROPERTY CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 87,
            "headline": "Russell Brand ‘interviewed by Met Police over allegations of sexual offences’",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28136609.ece/ALTERNATES/s1200/4_01HFMCWP1WRWWAJ608E3NGDAC0.jpg",
            "link": "https://www.mylondon.news/news/russell-brand-interviewed-met-police-28136602",
            "location": "London",
            "latitude": 51.5074456,
            "longitude": -0.1277653,
            "crime": "OTHER CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 88,
            "headline": "Horrifying week of London crime sees teenager stabbed to death, six dead in house fire, and woman 'raped' in street",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28097274.ece/ALTERNATES/s1200/0_add-five-dead-i-1097148.jpg",
            "link": "https://www.mylondon.news/news/uk-world-news/horrifying-week-london-crime-sees-28135392",
            "location": "Londoners",
            "latitude": 50.0777265,
            "longitude": 14.4247265,
            "crime": "OTHER CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 89,
            "headline": "Watch the moment drug lord who looked up to Al Pacino's Scarface arrested",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28135134.ece/ALTERNATES/s1200/1_scarface-gang-3.png",
            "link": "https://www.mylondon.news/news/south-london-news/moment-albanian-drug-lord-who-28134999",
            "location": "Swadlincote",
            "latitude": 52.7736624,
            "longitude": -1.5575555,
            "crime": "OTHER CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 90,
            "headline": "Murder-suicide killer who stabbed ex then himself in posh Hilton hotel room had just left jail, court hears",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28134749.ece/ALTERNATES/s1200/1_man-involved-in-1099845.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/murder-suicide-killer-who-stabbed-28134625",
            "location": "Yorkshire",
            "latitude": 40.3252173,
            "longitude": -84.4953064,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 91,
            "headline": "London area where drivers take £65 fine because it's cheaper than paying to park all day",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article27222142.ece/ALTERNATES/s1200/2_FMA_MYL_07828.jpg",
            "link": "https://www.mylondon.news/news/north-london-news/london-area-drivers-take-65-28134342",
            "location": "Islington",
            "latitude": 51.5384287,
            "longitude": -0.0999051,
            "crime": "OTHER CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 92,
            "headline": "Urgent search for 5-year-old boy missing in North London",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28134598.ece/ALTERNATES/s1200/1_F_Swli4WIAAWVpsjpeg.jpg",
            "link": "https://www.mylondon.news/news/north-london-news/urgent-search-5-year-old-28134582",
            "location": "Hackney",
            "latitude": 51.5432402,
            "longitude": -0.0493621,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 93,
            "headline": "'Harry Kane lookalike' wanted by police after woman robbed in alleyway in West London",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28134255.ece/ALTERNATES/s1200/0_F_O-DNXcAAbl0Fjpeg.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/harry-kane-lookalike-wanted-police-28133986",
            "location": "South West",
            "latitude": 5.3356587,
            "longitude": 100.2389496,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 94,
            "headline": "Bag full of stolen sex toys and condoms seized in police stop and search",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28133967.ece/ALTERNATES/s1200/1_F_OpnYlWkAAoqqpjpeg.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/bag-full-stolen-sex-toys-28133941",
            "location": "South London",
            "latitude": 31.5231809,
            "longitude": 34.6100421,
            "crime": "PROPERTY CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 95,
            "headline": "Second man charged with murder of 'beautiful' 16-year-old boy stabbed near his home",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28059860.ece/ALTERNATES/s1200/0_Taye-FAIk-png.png",
            "link": "https://www.mylondon.news/news/north-london-news/second-man-charged-murder-beautiful-28133867",
            "location": "North London",
            "latitude": 41.332052,
            "longitude": 19.8048247,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 96,
            "headline": "Police hunt after London bus driver assaulted by man in row over ticket",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28133855.ece/ALTERNATES/s1200/0_Image-of-man-for-bus-driver-assault.jpg",
            "link": "https://www.mylondon.news/news/north-london-news/police-hunt-after-london-bus-28133854",
            "location": "London",
            "latitude": 51.5074456,
            "longitude": -0.1277653,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 97,
            "headline": "Man stabbed to death near West London with one arrested",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28133027.ece/ALTERNATES/s1200/0_bishop-fox-way.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/live-man-stabbed-death-near-28133023",
            "location": "South West",
            "latitude": 5.3356587,
            "longitude": 100.2389496,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 98,
            "headline": "Airliner bomb plot ‘financier’ tells judge he has no income but wife is driving around in a £60k Range Rover",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28132285.ece/ALTERNATES/s1200/0_WhatsApp-Image-2023-11-18-at-153903jpeg.jpg",
            "link": "https://www.mylondon.news/news/east-london-news/airliner-bomb-plot-financier-tells-28132161",
            "location": "Leytonstone",
            "latitude": 51.5710783,
            "longitude": 0.0064237,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 99,
            "headline": "Man threatening to kill Jewish people and woman holding sign with Nazi-language latest in London hate crime arrests",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28131495.ece/ALTERNATES/s1200/0_GettyImages-1179346199.jpg",
            "link": "https://www.mylondon.news/news/zone-1-news/man-threatening-kill-jewish-people-28131437",
            "location": "Israel",
            "latitude": 30.8124247,
            "longitude": 34.8594762,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 100,
            "headline": "Meet the twins bringing stab-proof clothes to Londoners after sister's Arsenal career ended by knife attacks",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28130863.ece/ALTERNATES/s1200/0_FMA_MYL_12391.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/meet-twins-bringing-stab-proof-28084916",
            "location": "Brixton",
            "latitude": 51.4568044,
            "longitude": -0.1167959,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 101,
            "headline": "Video shows Met Police officer being beaten in head at London McDonald's after burglary",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28130694.ece/ALTERNATES/s1200/1_GettyImages-1236077378.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/video-shows-met-police-officer-28130558",
            "location": "South West",
            "latitude": 5.3356587,
            "longitude": 100.2389496,
            "crime": "PROPERTY CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 102,
            "headline": "Exactly where and when 10 Palestine protests will take place across London today",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28114430.ece/ALTERNATES/s1200/2_Palestine-ceasefire-protest-outside-parliament-Parliament-London-UK-15-Nov-2023.jpg",
            "link": "https://www.mylondon.news/news/uk-world-news/exactly-10-palestine-protests-take-28130352",
            "location": "London",
            "latitude": 51.5074456,
            "longitude": -0.1277653,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 103,
            "headline": "Names and faces of 20 vile predators every woman should watch out for jailed in London this year",
            "imagelink": "https://i2-prod.getsurrey.co.uk/news/local-news/article22948031.ece/ALTERNATES/s1200/0_BOR6281-21-Homayon-Ahmadi.jpg",
            "link": "https://www.mylondon.news/news/uk-world-news/gallery/names-faces-20-vile-predators-28109011",
            "location": "London",
            "latitude": 51.5074456,
            "longitude": -0.1277653,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 104,
            "headline": "Woman in her 30s 'raped' in Croydon midnight sex attack on South London road",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28130427.ece/ALTERNATES/s1200/1_WhatsApp-Image-2023-11-18-at-082437jpeg.jpg",
            "link": "https://www.mylondon.news/news/south-london-news/live-west-croydon-incident-updates-28130423",
            "location": "South London",
            "latitude": 31.5231809,
            "longitude": 34.6100421,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 105,
            "headline": "Four men charged in Hounslow murder investigation after stabbing of 17-year-old Simarjeet Singh Nangpal",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article28111514.ece/ALTERNATES/s1200/0_53c94320-a258-42a2-8d20-264ecd5905f7jpeg.jpg",
            "link": "https://www.mylondon.news/news/west-london-news/three-men-charged-hounslow-murder-28130269",
            "location": "West London",
            "latitude": 38.1943567,
            "longitude": -81.3686944,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 106,
            "headline": "Boy, 17, arrested in North London on suspicion of terror offences",
            "imagelink": "https://i2-prod.mylondon.news/incoming/article20819720.ece/ALTERNATES/s1200/2_Police-2122373.jpg",
            "link": "https://www.mylondon.news/news/north-london-news/boy-17-arrested-north-london-28125232",
            "location": "North London",
            "latitude": 41.332052,
            "longitude": 19.8048247,
            "crime": "VIOLENT CRIMES",
            "date": "2023-11-21"
        },
        {
            "id": 107,
            "headline": "Squatter's tiff with motel staff turns deadly when owner calls police",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/ncmotel2.png",
            "link": "https://www.foxnews.com/us/squatters-tiff-motel-staff-turns-deadly-owner-calls-police",
            "location": "North Carolina",
            "latitude": 35.6729639,
            "longitude": -79.0392919,
            "crime": "OTHER CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 108,
            "headline": "Holiday shopping: 5 tips to stay safe from self-defense expert",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/MALL-DOORS.jpg",
            "link": "https://www.foxnews.com/us/holiday-shopping-5-tips-stay-safe-self-defense-expert",
            "location": "Texas",
            "latitude": 31.2638905,
            "longitude": -98.5456116,
            "crime": "OTHER CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 109,
            "headline": "Atlanta woman arrested after attempted arson of Martin Luther King, Jr.'s birth home",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/b9df1b39-Video-21.jpg",
            "link": "https://www.foxnews.com/us/atlanta-woman-arrested-after-attempted-arson-martin-luther-king-jrs-birth-home",
            "location": "Atlanta",
            "latitude": 33.7489924,
            "longitude": -84.3902644,
            "crime": "PROPERTY CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 110,
            "headline": "Suspected child molester's victims worry LA DA will prosecute him as juvenile",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/George-Gascon-putting-on-jacket.jpg",
            "link": "https://www.foxnews.com/us/suspected-child-molester-victims-worry-la-da-will-prosecute-him-juvenile",
            "location": "Los Angeles",
            "latitude": 34.0536909,
            "longitude": -118.242766,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 111,
            "headline": "Hunter Biden's attorney claims indictments would not have been brought if he was not related to the president",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/2022-04-18T164916Z_950030436_RC2RPT9FSFOE_RTRMADP_3_RELIGION-EASTER-WHITE-HOUSE.jpg",
            "link": "https://www.foxnews.com/politics/hunter-bidens-attorney-claims-indictments-would-not-have-been-brought-he-not-related-president",
            "location": "Delaware",
            "latitude": 38.6920451,
            "longitude": -75.4013315,
            "crime": "PERSONAL CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 112,
            "headline": "From sex clubs to strippers: Here are the 5 most salacious details from the Hunter Biden indictment",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/2023-11-24T231252Z_1656070059_RC2XJ4ADYY53_RTRMADP_3_USA-BIDEN.jpg",
            "link": "https://www.foxnews.com/politics/sex-clubs-strippers-five-most-salacious-details-hunter-biden-indictment",
            "location": "California",
            "latitude": 36.7014631,
            "longitude": -118.755997,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 113,
            "headline": "On this day in history, Dec. 8, 1980, Beatles founder and music icon John Lennon murdered in NYC",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/da1593d3-John-Lennon-getty.jpg",
            "link": "https://www.foxnews.com/lifestyle/this-day-history-dec-8-1980-beatles-founder-music-icon-john-lennon-murdered-nyc",
            "location": "New York City",
            "latitude": 40.7127281,
            "longitude": -74.0060152,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 114,
            "headline": "Las Vegas police identify suspect, victims, in UNLV shooting that left 3 dead and one injured",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/Anthony-P..jpg",
            "link": "https://www.foxnews.com/us/las-vegas-police-identify-suspect-victims-unlv-shooting-left-dead-one-injured",
            "location": "Las Vegas",
            "latitude": 36.1672559,
            "longitude": -115.148516,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 115,
            "headline": "Australia man dies days after getting buried in large sand hole",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/A-view-above-the-northern-entrance-to-Pumicestone-Passage-a-narrow-channel-of-water-that-separates-Bribie-Island-from-the-Australian-mainland.-The-35km-long-waterway-stretches-from-Caloundra-on-.jpg",
            "link": "https://www.foxnews.com/world/australian-man-dies-buried-alive-giant-sand-hole",
            "location": "Bribie Island",
            "latitude": -26.9644799,
            "longitude": 153.120238,
            "crime": "OTHER CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 116,
            "headline": "Florida 11-year-old arrested after falsely reporting a shooting because he wanted to go home early",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/11/marion-county-sheriff-copy.jpg",
            "link": "https://www.foxnews.com/us/florida-11-year-old-arrested-after-falsely-reporting-shooting-because-he-wanted-go-home-early",
            "location": "Florida",
            "latitude": 27.7567667,
            "longitude": -81.4639835,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-08"
        },
        {
            "id": 117,
            "headline": "Woman steals Uber driver’s car before flight in Texas for being ‘too slow’: report",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/7714dd62-image.jpg",
            "link": "https://www.foxnews.com/us/fast-furious-woman-steals-uber-drivers-car-flight-texas-being-slow",
            "location": "Austin",
            "latitude": 30.2711286,
            "longitude": -97.7436995,
            "crime": "PROPERTY CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 118,
            "headline": "Proposed ski mask ban in Atlanta fails to move forward in City Council: 'Absurd'",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/Untitled-design-1232.png",
            "link": "https://www.foxnews.com/us/proposed-ski-mask-ban-atlanta-fails-move-forward-city-council-absurd",
            "location": "Atlanta",
            "latitude": 33.7489924,
            "longitude": -84.3902644,
            "crime": "OTHER CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 119,
            "headline": "Woman breaks down crying in front of California 7-Eleven where her father was shot dead by criminal: report",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/7-Eleven_Crime-scene.png",
            "link": "https://www.foxnews.com/media/woman-breaks-down-crying-front-california-7-eleven-father-shot-dead-criminal-report",
            "location": "SAN FRANCISCO",
            "latitude": 37.7790262,
            "longitude": -122.419906,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 120,
            "headline": "Tennessee Muslim family charged with assaulting son for converting to Christianity",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/TN-Muslim-Family.jpg",
            "link": "https://www.foxnews.com/us/tennessee-muslim-family-charged-assaulting-son-converting-christianity",
            "location": "Nashville",
            "latitude": 36.1622767,
            "longitude": -86.7742984,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 121,
            "headline": "Former Iowa deputy pleads guilty in police dog's hot vehicle death",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/ALL_CUSTOM_FS_LOCAL_NEWS_IA_CRIME.png",
            "link": "https://www.foxnews.com/us/former-iowa-deputy-pleads-guilty-police-dogs-hot-vehicle-death",
            "location": "Iowa",
            "latitude": 41.9216734,
            "longitude": -93.3122705,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 122,
            "headline": "New Mexico's largest county resumes police helicopter services over a year after deadly crash",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/ALL_CUSTOM_FS_LOCAL_NEWS_NM_CRIME.png",
            "link": "https://www.foxnews.com/us/new-mexicos-largest-county-resumes-police-helicopter-services-year-deadly-crash",
            "location": "New Mexico's",
            "latitude": -30.7424,
            "longitude": 150.6185,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 123,
            "headline": "Florida man arrested after using elderly neighbor's doorbell camera to harass them after 2005 fight: Deputies",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/Untitled-design-1230.png",
            "link": "https://www.foxnews.com/us/florida-man-arrested-after-using-elderly-neighbors-ring-camera-harass-them-2005-fight-deputies",
            "location": "Florida",
            "latitude": 27.7567667,
            "longitude": -81.4639835,
            "crime": "OTHER CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 124,
            "headline": "Maine indicts 2 in fisherman's 2008 cold case killing",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/ALL_CUSTOM_FS_LOCAL_NEWS_ME_CRIME.png",
            "link": "https://www.foxnews.com/us/maine-indicts-2-fishermans-2008-cold-case-killing",
            "location": "Portland",
            "latitude": 45.5202471,
            "longitude": -122.674194,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 125,
            "headline": "Canadian man incurs 14 new murder charges over online sodium nitrite sales",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/08/Kenneth-Law-Canada.jpg",
            "link": "https://www.foxnews.com/world/canadian-man-incurs-14-new-murder-charges-online-sodium-nitrite-sales",
            "location": "Toronto",
            "latitude": 43.6534817,
            "longitude": -79.3839347,
            "crime": "PROPERTY CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 126,
            "headline": "FBI, DHS warn of ‘threats to public safety’ during holiday season, amplified by Israel-Hamas conflict",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2022/10/FBI-logo.jpg",
            "link": "https://www.foxnews.com/us/fbi-dhs-warn-threats-public-safety-holiday-season-amplified-israel-hamas-conflict",
            "location": "Israel",
            "latitude": 30.8124247,
            "longitude": 34.8594762,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 127,
            "headline": "Missouri woman’s family believes her death in motel, ruled suicide, was murder by strangulation",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/collage-4-1.jpg",
            "link": "https://www.foxnews.com/us/missouri-womans-family-believes-her-death-motel-ruled-suicide-murder-most-horrible-case",
            "location": "Missouri",
            "latitude": 38.7604815,
            "longitude": -92.5617875,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 128,
            "headline": "Father and son farmers charged with killing armed trespasser",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/Lindler-Farms-IG.jpg",
            "link": "https://www.foxnews.com/us/father-son-farmers-charged-killing-armed-trespasser",
            "location": "Lexington County",
            "latitude": 33.8986841,
            "longitude": -81.275054,
            "crime": "VIOLENT CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 129,
            "headline": "California ends 'lowrider' bans, but law enforcement group fears another bumpy ride",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/lowrider3.png",
            "link": "https://www.foxnews.com/us/california-ends-lowrider-bans-law-enforcement-group-fears-bumpy-ride",
            "location": "California",
            "latitude": 36.7014631,
            "longitude": -118.755997,
            "crime": "OTHER CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 130,
            "headline": "‘refuse to stand by’",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/usccabeth2.png",
            "link": "https://www.foxnews.com/us/armed-mom-schools-congress-booming-female-gun-ownership-refuse-stand",
            "location": "the United States",
            "latitude": 47.8281626,
            "longitude": -122.598365,
            "crime": "OTHER CRIMES",
            "date": "2023-12-13"
        },
        {
            "id": 131,
            "headline": "‘refuse to stand by’",
            "imagelink": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/usccabeth2.png",
            "link": "https://www.foxnews.com/us/armed-mom-schools-congress-booming-female-gun-ownership-refuse-stand",
            "location": "the United States",
            "latitude": 47.8281626,
            "longitude": -122.598365,
            "crime": "OTHER CRIMES",
            "date": "2023-12-13"
        }
    ];
  return (
    <div>
      <p>Live Crime</p>
      <h2>Crime Map</h2>
      <div>
        <MapContainer center={center} zoom={4} scrollWheelZoom={false} style={{ width: '100%', height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=FwNOKzxYb9NnS1CG9U9F7QdeDCRBQWclv6UABZXtfSB71oZcsrZgJqhhSYlMGfYI"
            attribution='<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {crimeData.map((marker) => (
            <Marker
              position={[marker.latitude, marker.longitude]}
              icon={
                marker.crime === 'VIOLENT CRIMES'
                  ? violentCrimeIcon
                  : marker.crime === 'PROPERTY CRIMES'
                  ? propertyCrimeIcon
                  : marker.crime === 'PERSONAL CRIMES'
                  ? personalCrimeIcon
                  : otherCrimeIcon
              }
              key={marker.id}
            >
              <Popup>{marker.headline}</Popup>
            </Marker>
          ))}
        </MapContainer>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <p>
            <img src={require('./personalCrime3.png')} height="30px" width="30px" alt="violent crime icon" /> Violent Crime
          </p>
          <p>
            <img src={require('./violentCrime3.png')} height="30px" width="30px" alt="property crime icon" /> Property Crime
          </p>
          <p>
            <img src={require('./propertyCrime3.png')} height="30px" width="30px" alt="personal crime icon" /> Personal Crime
          </p>
          <p>
            <img src={require('./otherCrime3.png')} height="30px" width="30px" alt="other crime icon" /> Other Crime
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
// /FFDE20
