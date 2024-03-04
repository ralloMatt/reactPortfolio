import Project from './Project';

import bookOff from '../../images/bookOff.png';
import techBlog from '../../images/techBlog.jpg';
import socialNetwork from '../../images/socialNetwork.jpg';
import noteTake from '../../images/noteTake.jpg';
import weatherDashboard1 from '../../images/weatherDashboard1.jpg';
import recipeBook from '../../images/recipe.jpg';



const projectList = [
  {
    title: 'Book-Off',
    description: 'A group project that uses the open library API and mysql2.',
    image: bookOff,
    github: 'https://github.com/ralloMatt/book-off',
    liveLink: 'https://book-off-website-0d2a300c1b55.herokuapp.com/',
  },
  {
    title: 'Tech Blog',
    description: 'A blog site where users can post articles, opinions, thoughts, and comments on tech related stuff.',
    image: techBlog,
    github: 'https://github.com/ralloMatt/techBlog',
    liveLink: 'https://cryptic-reef-70222-75cf3c6deb65.herokuapp.com/',
  },
  {
    title: 'Social Network API',
    description: 'A social networking app that uses API routes. I also use MongoDB for data. I use express js for routing, a MongoDB database, and mongoose ODM. I use Insomia to display data retrieved from each route.',
    image: socialNetwork,
    github: 'https://github.com/ralloMatt/socialNetworkAPI',
    liveLink: 'https://www.youtube.com/watch?v=5w3BRQNnGvs',
  },
  {
    title: 'Note Taker',
    description: 'A backend project that I made that utilizes express js to send and retrieve data from a JSON file.',
    image: noteTake,
    github: 'https://github.com/ralloMatt/noteTaker',
    liveLink: 'https://rocky-woodland-73943-3baf9e75b39d.herokuapp.com/',
  },
 {
    title: 'Weather Dashboard',
    description: 'A website that displays the weather and 5 days afterwards. This website was made from scratch and uses the Open Weather Map API to get information on weather. ',
    image: weatherDashboard1,
    github: 'https://github.com/ralloMatt/weatherDashboard',
    liveLink: 'https://rallomatt.github.io/weatherDashboard/',
  },
  {
    title: 'Recipe Book',
    description: 'A group project that uses online APIs to retrieve and dipslay data.',
    image: recipeBook,
    github: 'https://github.com/ralloMatt/recipe-book-database',
    liveLink: 'https://rallomatt.github.io/recipe-book-database/',
  }
]


function Portfolio() {

    return (
      
      projectList.map((project) => (
          <Project project = {project} />
      ))
      
    );


}

export default Portfolio;
