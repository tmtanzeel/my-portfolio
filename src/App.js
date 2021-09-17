import './App.css';
import PageNavbar from './components/PageNavbar/PageNavbar';
import TalentCard from './components/TalentCard/TalentCard';
import YouTubeApi from "./api/youtube-api";
import YouTubePlaylistApi from "./api/youtube-playlist-api";
import GitHubCalendarApi from './api/github-api';

import youtube from "./assets/images/youtube-logo.png";
import github from "./assets/images/github-logo.png";
import stackoverflow from "./assets/images/stackoverflow-logo.png";


function App() {
  return (
    <div className="App">
      <PageNavbar></PageNavbar>
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
