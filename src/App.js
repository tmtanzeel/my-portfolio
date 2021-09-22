import './App.css';
import PageNavbar from './components/PageNavbar/PageNavbar';
import TalentCard from './components/TalentCard/TalentCard';
import WorkexperienceCard from './components/WorkexperienceCard/Workexperience-card';
import EducationTimeline from './components/EducationTimeline/EducationTimeline';
import DoodleCard from './components/DoodleCard/DoodleCard';

import LanguageCard from './components/LanguageCard/LanguageCard';

import YouTubeApi from "./api/youtube-api";
import YouTubePlaylistApi from "./api/youtube-playlist-api";
import GitHubCalendarApi from './api/github-api';
import TextStripCard from './components/TextStripCard/TextStripCard';
import Footer from './components/Footer/Footer';

import youtube from "./assets/images/youtube-logo.png";
import github from "./assets/images/github-logo.png";
import stackoverflow from "./assets/images/stackoverflow-logo.png";
import bannerimage from "./assets/images/bg-banner.jpeg";
import philipsLogo from "./assets/images/philips-healthcare-logo.png";
import burger from "./assets/images/doodle-images/burger.png";
import pizza from "./assets/images/doodle-images/pizza.png";
import fries from "./assets/images/doodle-images/fries.png";
import beer from "./assets/images/doodle-images/beer.png";

import node from "./assets/images/language-images/node.png";
import django from "./assets/images/language-images/django.png";
import golang from "./assets/images/language-images/golang.png";
import grunt from "./assets/images/language-images/grunt.png";
import json from "./assets/images/language-images/json.png";
import jwt from "./assets/images/language-images/jwt.png";
import lamp from "./assets/images/language-images/lamp.png";
import lumen from "./assets/images/language-images/lumen.png";
import npm from "./assets/images/language-images/npm.png";
import php from "./assets/images/language-images/php.png";
import postman from "./assets/images/language-images/postman.png";
import react from "./assets/images/language-images/react.png";
import rest from "./assets/images/language-images/rest.png";




import { Component } from 'react';
import reactDom from 'react-dom';

class App extends Component {

  banner = {
    width: '100%',
    height: '850px',
    backgroundImage: `url(${bannerimage})`,
    backgroundSize: 'cover',
  };

  overlayOnBanner = {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    fontSize: 1.5 + 'rem',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  state = {
    philipsWorkexperience: [
      { companyIntro: "Currently I'm working for Philips Healthcare, Bangalore" },
      { tenure: "Onboarded Jan, 2019 and currently working here" },
      { position: "Software Development Engineer I" },
      { typeOfEmployee: "6 months of Internship, Then converted to Full time" }
    ],
    pizzaDoodle: [
      { doodleHeaderText: "I'm looking for opportunities. I'll be happy to write some extra code for" },
      { doodleFooterText: "" }
    ],
    flowerCard: {
      cardHeading: "I love JavaScript",
      rows: [
        [
          { imageSource: node, text: "I am pretty much confident about my nodeJS skilss. Be it form validation or for any other runtime task, I prefer NodeJS." },
          { imageSource: react, text: "React JavaScript is one of my favourite javascript framework. I love doing research and development and apply my results in my projects." },
          { imageSource: npm, text: "I am a fan of the NPM community. I keep myself updated with the fast growing NPM culture." }
        ],
        [
          { imageSource: grunt, text: "A JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting" },
          { imageSource: json, text: "I'm really impressed with JSON. A perfect tool for managing unstructured data. I've created JSONify, a tool in Javafx to create JSON file for the information you provide." }
        ]
      ]
    },
    textStripCard: {
      textStripHeading: "Want to work together?",
      textStripSubHeading: "I am currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it",
      textStripTextColor: "#212529",
      textStripBgColor: "#FED766"
    },
    footer: {
      footerHeading: "Made with React from the scratch by Tanzeel",
      footerSubHeading: "Call now - +91 8979539377",
      footerTextColor: "white",
      footerBgColor: "#252A30",
      otherLinks: [
        { icon: "fa fa-facebook fa-2x", link: "https://www.facebook.com/tanzeel.mirza.9/" },
        { icon: "fa fa-linkedin fa-2x", link: "https://www.linkedin.com/in/tanzeel-mirza-9b784b168/" },
        { icon: "fa fa-github fa-2x", link: "www.github.com/tmtanzeeel" },
        { icon: "fa fa-youtube fa-2x", link: "https://www.youtube.com/channel/UCOYqNBjmWF8j-PzI7ZPjt_w" },
        { icon: "fa fa-stack-overflow fa-2x", link: "https://stackoverflow.com/users/11163977/tanzeel" }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <PageNavbar></PageNavbar>
        <div style={this.banner}>
          <div style={this.overlayOnBanner}>
          </div>
        </div>

        <br /><br />

        <WorkexperienceCard
          companyIntro={this.state.philipsWorkexperience[0].companyIntro}
          imageSource={philipsLogo}
          tenure={this.state.philipsWorkexperience[1].tenure}
          position={this.state.philipsWorkexperience[2].position}
          typeOfEmployee={this.state.philipsWorkexperience[3].typeOfEmployee}
        >
        </WorkexperienceCard>

        <br /><br />
        <br /><br />
        <EducationTimeline></EducationTimeline>

        <br /><br />
        <br /><br />
        <DoodleCard
          doodleHeadingText={this.state.pizzaDoodle[0].doodleHeaderText}
          doodleImageSource1={pizza}
          doodleImageSource2={burger}
          doodleImageSource3={fries}
          doodleImageSource4={beer}
        >
        </DoodleCard>

        <br />

        {/* YouTube card */}
        <TalentCard
          headingText="Code blooded - The Social coder"
          imageSource={youtube}
          subheadingText="Not a big time youtuber. But would love to share how the code works.">
          <YouTubeApi></YouTubeApi>
          <YouTubePlaylistApi></YouTubePlaylistApi>
        </TalentCard>
        <br />
        {/* GitHub card */}
        <TalentCard
          headingText="Code contribution"
          imageSource={github}
          subheadingText="Fork - Contribute - Clone. Give me a high five.
        Find all my projects on GitHub. Chears!">
          <GitHubCalendarApi></GitHubCalendarApi>
        </TalentCard>
        <br />
        {/* Stackoverflow card */}
        <TalentCard
          headingText="I'm an active answerer (and answer seeker) on Stack overflow"
          imageSource={stackoverflow}
          subheadingText="They gave me this tiny flair. Let me know if there is a better API">
          <a href="https://stackoverflow.com/users/11163977/tanzeel">
            <img
              src="https://stackoverflow.com/users/flair/11163977.png?theme=dark"
              width="208" height="58"
              alt="Profile for Tanzeel at Stack Overflow"
              title="Profile for Tanzeel at Stack Overflow" />
          </a>
        </TalentCard>
        <br /><br /><br />
        <LanguageCard
          cardHeading={this.state.flowerCard.cardHeading}
          tiles={this.state.flowerCard.rows}
        ></LanguageCard>
        <br /><br /><br />

        <TextStripCard
          textStripHeading={this.state.textStripCard.textStripHeading}
          textStripSubHeading={this.state.textStripCard.textStripSubHeading}
          textStripBgColor={this.state.textStripCard.textStripBgColor}
          textStripTextColor={this.state.textStripCard.textStripTextColor}
        ></TextStripCard>
        <Footer
          footerHeading={this.state.footer.footerHeading}
          footerSubHeading={this.state.footer.footerSubHeading}
          footerTextColor={this.state.footer.footerTextColor}
          footerBgColor={this.state.footer.footerBgColor}
          footerLinks={this.state.footer.otherLinks}
        >
        </Footer>
      </div>
    )
  }
}

export default App;
