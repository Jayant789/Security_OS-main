import React from 'react';
import './CrimeGrid.css';

let crimeData = [
  {
    id: 107,
    headline: "Squatter's tiff with motel staff turns deadly when owner calls police",
    imagelink: 'https://static.foxnews.com/foxnews.com/content/uploads/2023/12/ncmotel2.png',
    link: 'https://www.foxnews.com/us/squatters-tiff-motel-staff-turns-deadly-owner-calls-police',
    location: 'North Carolina',
    latitude: 35.6729639,
    longitude: -79.0392919,
    crime: 'OTHER CRIMES',
    date: '2023-12-08'
  },
  {
    id: 108,
    headline: 'Holiday shopping: 5 tips to stay safe from self-defense expert',
    imagelink: 'https://static.foxnews.com/foxnews.com/content/uploads/2023/01/MALL-DOORS.jpg',
    link: 'https://www.foxnews.com/us/holiday-shopping-5-tips-stay-safe-self-defense-expert',
    location: 'Texas',
    latitude: 31.2638905,
    longitude: -98.5456116,
    crime: 'OTHER CRIMES',
    date: '2023-12-08'
  },
  {
    id: 109,
    headline: "Atlanta woman arrested after attempted arson of Martin Luther King, Jr.'s birth home",
    imagelink: 'https://static.foxnews.com/foxnews.com/content/uploads/2023/12/b9df1b39-Video-21.jpg',
    link: 'https://www.foxnews.com/us/atlanta-woman-arrested-after-attempted-arson-martin-luther-king-jrs-birth-home',
    location: 'Atlanta',
    latitude: 33.7489924,
    longitude: -84.3902644,
    crime: 'PROPERTY CRIMES',
    date: '2023-12-08'
  },
  {
    id: 110,
    headline: "Suspected child molester's victims worry LA DA will prosecute him as juvenile",
    imagelink: 'https://static.foxnews.com/foxnews.com/content/uploads/2023/12/George-Gascon-putting-on-jacket.jpg',
    link: 'https://www.foxnews.com/us/suspected-child-molester-victims-worry-la-da-will-prosecute-him-juvenile',
    location: 'Los Angeles',
    latitude: 34.0536909,
    longitude: -118.242766,
    crime: 'VIOLENT CRIMES',
    date: '2023-12-08'
  },
  {
    id: 111,
    headline: "Hunter Biden's attorney claims indictments would not have been brought if he was not related to the president",
    imagelink:
      'https://static.foxnews.com/foxnews.com/content/uploads/2023/10/2022-04-18T164916Z_950030436_RC2RPT9FSFOE_RTRMADP_3_RELIGION-EASTER-WHITE-HOUSE.jpg',
    link: 'https://www.foxnews.com/politics/hunter-bidens-attorney-claims-indictments-would-not-have-been-brought-he-not-related-president',
    location: 'Delaware',
    latitude: 38.6920451,
    longitude: -75.4013315,
    crime: 'PERSONAL CRIMES',
    date: '2023-12-08'
  },
  {
    id: 112,
    headline: 'From sex clubs to strippers: Here are the 5 most salacious details from the Hunter Biden indictment',
    imagelink:
      'https://static.foxnews.com/foxnews.com/content/uploads/2023/12/2023-11-24T231252Z_1656070059_RC2XJ4ADYY53_RTRMADP_3_USA-BIDEN.jpg',
    link: 'https://www.foxnews.com/politics/sex-clubs-strippers-five-most-salacious-details-hunter-biden-indictment',
    location: 'California',
    latitude: 36.7014631,
    longitude: -118.755997,
    crime: 'VIOLENT CRIMES',
    date: '2023-12-08'
  },
  {
    id: 113,
    headline: 'On this day in history, Dec. 8, 1980, Beatles founder and music icon John Lennon murdered in NYC',
    imagelink: 'https://static.foxnews.com/foxnews.com/content/uploads/2022/07/da1593d3-John-Lennon-getty.jpg',
    link: 'https://www.foxnews.com/lifestyle/this-day-history-dec-8-1980-beatles-founder-music-icon-john-lennon-murdered-nyc',
    location: 'New York City',
    latitude: 40.7127281,
    longitude: -74.0060152,
    crime: 'VIOLENT CRIMES',
    date: '2023-12-08'
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
