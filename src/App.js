import './App.css';
import PageNavbar from './components/PageNavbar/PageNavbar';
import TalentCard from './components/TalentCard/TalentCard';
import WorkexperienceCard from './components/WorkexperienceCard/Workexperience-card';

import YouTubeApi from "./api/youtube-api";
import YouTubePlaylistApi from "./api/youtube-playlist-api";
import GitHubCalendarApi from './api/github-api';

import youtube from "./assets/images/youtube-logo.png";
import github from "./assets/images/github-logo.png";
import stackoverflow from "./assets/images/stackoverflow-logo.png";
import bannerimage from "./assets/images/bg-banner.jpeg";
import philipsLogo from "./assets/images/philips-healthcare-logo.png";

function App() {

  let banner = {
    width: '100%',
    height: '850px',
    backgroundImage: `url(${bannerimage})`,
    backgroundSize: 'cover',
  };

  let overlayOnBanner = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    fontSize: 1.5 + 'rem',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }



  return (
    <div className="App">
      <PageNavbar></PageNavbar>
      <div style={banner}>
        <div style={overlayOnBanner}>
        </div>
      </div>

      <WorkexperienceCard
        companyIntro="Currently I'm working for Philips Healthcare, Bangalore"
        imageSource={philipsLogo}
        tenure="Onboarded Jan, 2019 and currently working here"
        position="Software Development Engineer I"
        typeOfEmployee="6 months of Internship, Then converted to Full time"
      >
      </WorkexperienceCard>

      {/* YouTube card */}
      <TalentCard
        headingText="Code blooded - The Social coder"
        imageSource={youtube}
        subheadingText="Not a big time youtuber. But would love to share how the code works.">
        <YouTubeApi></YouTubeApi>
        <YouTubePlaylistApi></YouTubePlaylistApi>
      </TalentCard>
      {/* GitHub card */}
      <TalentCard
        headingText="Code contribution"
        imageSource={github}
        subheadingText="Fork - Contribute - Clone. Give me a high five.
        Find all my projects on GitHub. Chears!">
        <GitHubCalendarApi></GitHubCalendarApi>
      </TalentCard>
      {/* Stackoverflow card */}
      <TalentCard
        headingText="I asked them how I am doing"
        imageSource={stackoverflow}
        subheadingText="They gave me this tiny flair. Let me know if there is a better API">
        <a href="https://stackoverflow.com/users/11163977/tanzeel">
          <img
            src="https://stackoverflow.com/users/flair/11163977.png"
            width="208" height="58"
            alt="Profile for Tanzeel at Stack Overflow"
            title="Profile for Tanzeel at Stack Overflow" />
        </a>
      </TalentCard>
    </div>
  );
}

export default App;
