import Cart from "./Cart";

function SimpleProjects() {
  return (
    <>
      <h1 className="font-bold text-lg text-indigo-800 my-5">
        <span className="p-2 bg-gray-300 dark:bg-gray-800 dark:text-white">
          Backend/Frontend Project
        </span>
      </h1>
      <div className="flex flex-col md:w-auto w-full items-center sm:items-start sm:flex-row flex-wrap  border-b  shadow-md dark:border-black dark:border-opacity-40 p-3 ">
        <Cart
          title="Che-Mart"
          description="Using the MySQL database for the storing the data From the Admin & User side, you can
                  Create, Read, Update, Delete items, Razore pay payment Gatway
                  support for premium user,support pagination. User Authentication"
          imgsrc="/images/CheMart.png"
          functionality="CURD Operation"
          technologies="Spring-Boot, Java, html, css, javascript"
          srccode="https://github.com/abhay3690/cheMart"
        />
        <Cart
          title="Blog WebApplication Api's"
          description="To reate a blog application for creating post comments and its Role for Admin & User side Both.Also It's a part of the React.js for frontend Side for creating Responsiveness in mobile and Desktop.inthis Technology is Use Like : Spring boot, React.js, MySQL, Java, GitHub.    "
          technologies="Spring Boot, Java, mysql , sequelize, html, css, javascript"
          imgsrc="/images/blog-app-application.png"
          functionality="Admin/Customer"
          srccode="https://github.com/abhay3690/Spring-Boot/tree/master/blog-app-apis"
        />
        <Cart
          title="Portfolio(BioData)"
          description="Welcome to my portfolio!Each project represents a unique challenge and my approach to solving it, From initial concept to final execution, I strive to deliver high-quality results that exceed expectations. My portfolio includes a diverse range of projects, highlighting my versatility and adaptability across different mediums and industries."
          technologies="react.js , react-router-dom"
          functionality="Filling Bars"
          imgsrc="/images/portfoilio.png"
          srccode=""
        />
        <Cart
          title="Main CRUD Operations "
          description="This project demonstrates a full-stack CRUD application using React for the front end and Spring Boot for the back end. Users can Create, Read, Update, and Delete (CRUD) records in a seamless, interactive web interface. React handles the user interface, providing a dynamic and responsive experience. Spring Boot manages the server-side operations, ensuring efficient handling of data requests and interactions with the database."
          technologies=" Node.js, React.js , Express.js ,Spring Boot, Java"
          functionality="Admin/Customer "
          imgsrc="/images/mymart.png"
          srccode="https://github.com/abhay3690/Spring-Boot/tree/master/fullstack-backend"
        />
        <Cart
          title="GaliRestro"
          description="restorant, in which you can add the diffrent items to the cart and cart updated automatically"
          functionality="Cart"
          technologies="react.js react-router-dom ContextAPI"
          imgsrc="/images/galirestro.png"
          srccode="https://galirestro.netlify.app/"
        />
        <Cart
          title="Redux-demo-cart"
          description="This  is the simple app for the understanding the redux working in reactjs"
          technologies="react.js  redux firebase"
          imgsrc="/images/redux.png"
          functionality="Cart"
          srccode="https://galirestro.netlify.app/"
        />

        <Cart
          title="Analog Clock"
          functionality="Time!"
          description="Watch Your Good Time"
          technologies="HTML, CSS, JAVASCRIPT "
          imgsrc="/images/analog.png"
          srccode="https://analogwatch01.netlify.app/"
        />
        <Cart
          title="Password Generator"
          description="Single Component which generate the password according to you Preference Try it"
          technologies="react.js"
          functionality="CopyToClipboard"
          imgsrc="/images/pass-generator.png"
          srccode="https://passwordgenerator90.netlify.app/"
        />
      </div>
    </>
  );
}

export default SimpleProjects;
