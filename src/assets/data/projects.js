import { v4 as uuidv4 } from 'uuid';
import meme from '../images/meme.png';
import UTrackerImg from '../images/utracker.jpg';
import iot from '../images/iot.png';
import food from '../images/food.jpg';
import CavinImg from '../images/cavinimg.jpg';
import Reactchat from '../images/react_chat.jpeg';
import Screenshot from '../images/screenshot.jpeg';
import Screenshot2 from '../images/screenshot2.jpeg';

const projects = [
  {
    id: uuidv4(),
    name: 'Airbnb Clone',
    desc: '. Airbnb .',
    // desc:`Airbnb clone project aims to recreate the core functionalities of the popular online vacation rental platform, Airbnb.The goal is to provide users with a familiar and intuitive experience for discovering,booking,and managing accommodations.`,
    img: Screenshot,
    link: 'https://github.com/saif-saleem/Airbnb_clone',
  },
  {
    id: uuidv4(),
    name: 'Youtube Clone',
    // desc:'The YouTube Clone project is a web application that replicates the core features and functionality of the popular video-sharing platform, YouTube. It serves as a comprehensive platform for users to upload, view, share, and engage with video content seamlessly.',
    img: Reactchat,
    link: 'https://github.com/saif-saleem/yt-clone',
  },
  {
    id: uuidv4(),
    name: 'Excel Sheet Clone',
    // desc: 'The Excel Sheet Clone project aims to develop a web-based spreadsheet application that replicates the core functionalities of popular spreadsheet software like Microsoft Excel. This application will provide users with a familiar interface for creating, editing, and managing tabular data in a collaborative and user-friendly environment.',
    img: Screenshot2,
    link: 'https://github.com/saif-saleem/SheetClone',
  },
];

export default projects;
