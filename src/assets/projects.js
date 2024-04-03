import project1 from './images/place-holder-img.jpg'
import foodieFinds from './images/Foodie-finds.png'
import wrapify from './images/wrapify.png'
import freshFinder from './images/Fresh-finder.png'
import techBlog from './images/tech-blog.gif'
import bookSearch from './images/book-search-engine.png'

const projectList = [
    {
        id: 1,
        image: freshFinder,
        title: "Fresh Finder",
        deployed: 'https://market-place-app.onrender.com/',
        link: "https://github.com/YuliyaTsoy/food-marketplace-app",
        techUsed: "React, HTML5, CSS, Tailwind CSS, Express.js, Node.js, GraphQL, Apollo, MongoDB",
        description: 'User-friendly e-commerce site where the user can find or list products they would like to buy/sell'
    },
    {
        id: 2,
        image: foodieFinds,
        title: "Foodie Finds",
        deployed: 'https://restaurant-blog-3f12d3a2bc88.herokuapp.com/',
        link: "https://github.com/nicholascatalano/foodie-finds-app",
        techUsed: "HTML5, CSS, JavaScript, MySQL, Sequelize, Handlebars, RESTful API",
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
        image: techBlog,
        title: "Tech Blog",
        deployed: 'https://tech-blog-bb-d749bf016efb.herokuapp.com/',
        link: "https://github.com/BeaBravo/tech-blog",
        techUsed: "JavaScript, Handlebars, CSS, Express.js, MySQL, Sequelize, HTML5, RESTful API",
        description: "Tech blog was created for developers who love to write about tech. Users can publish articles, blog posts, and thoughts and optinions. They can also comment on their fellow developers' posts"
    },
    {
        id: 5,
        image: bookSearch,
        title: "Book Search Engine",
        deployed: 'https://book-search-engine-r50l.onrender.com/',
        link: "https://github.com/BeaBravo/book-search-engine",
        techUsed: "JavaScript, GraphQL, Apollo, Express.js, MongoDB, Mongoose, HTML5",
        description: "This repo was created to take a functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo server and client"
    },
]

export default projectList