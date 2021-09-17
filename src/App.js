import './App.css';
import PageNavbar from './components/PageNavbar/PageNavbar';
import TalentCard from './components/TalentCard/TalentCard';
import youtube from "./assets/images/youtube-logo.png";
import github from "./assets/images/github-logo.png";
import YouTubeApi from "./api/youtube-api";
import YouTubePlaylistApi from "./api/youtube-playlist-api";
import GitHubCalendarApi from './api/github-api';


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
    </div>
  );
}

export default App;
