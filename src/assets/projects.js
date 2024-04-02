import project1 from './images/place-holder-img.jpg'
import foodieFinds from './images/Foodie-finds.png'
import wrapify from './images/wrapify.png'
import freshFinder from './images/Fresh-finder.png'

const projectList = [
    {
        id: 1,
        image: freshFinder,
        title: "Fresh Finder",
        deployed: 'https://market-place-app.onrender.com/',
        link: "https://github.com/YuliyaTsoy/food-marketplace-app",
        techUsed: "React, HTML5, CCS, Tailwind CSS, Express.js, Node.js, GraphQL, Apollo, MongoDB",
        description: 'User-friendly e-commerce site where the user can find or list products they would like to buy/sell'
    },
    {
        id: 2,
        image: foodieFinds,
        title: "Foodie Finds",
        deployed: 'https://restaurant-blog-3f12d3a2bc88.herokuapp.com/',
        link: "https://github.com/nicholascatalano/foodie-finds-app",
        techUsed: "HTML5, CSS, JavaScript, MySQL, Sequelize",
        description: 'Search a database of reviewed restaurants, based on a specific location, type of food, and/or type of restaurant. The user is able to create an account and add their own review'
    },
    {
        id: 3,
        image: wrapify,
        title: "Wrapify",
        deployed: 'https://beabravo.github.io/wrapify/',
        link: "https://github.com/BeaBravo/wrapify",
        techUsed: "HTML5, CSS, JavaScript",
        description: 'Find products based on specific search criteria. Designed to interact with external API’s to search and view Amazon products and perform sentiment analysis on each product.'
    },

    {
        id: 4,
        image: project1,
        title: "Place-holder4",
        link: "github.com/BeaBravo",
        techUsed: "React, Angular, Materialize, Java"
    },
]

export default projectList