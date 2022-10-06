import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="flex justify-center bg-darkblue">
      <div className="w-[70%] flex flex-col py-12">
        <div className="flex flex-row justify-end">
          <span className="border-t border-[#243654] block w-[400px] mt-4 mr-4"></span>
          <h1 className="text-2xl text-[#CCD6F5] font-bold">Skill Set</h1>
        </div>
        <div className="flex flex-col text-textcolor2">
          <div className="flex flex-row mt-4">
            <h3 className="text-themecolor mr-4 w-[15%]">Programming: </h3>
            <p className="font-mono w-[85%]">
              JavaScript(ES6+), TypeScript, HTML, CSS/Sass, Python, SQL, NoSQL
            </p>
          </div>
          <div className="flex flex-row mt-4">
            <h3 className="text-themecolor mr-4 w-[15%]">
              Technologies and Libraries:
            </h3>
            <div className="w-[85%]">
              <p className="font-mono">
                React, Vue.js, Next.js, Nuxt.js, Redux, GraphQL, Apollo Client,
                Tailwind CSS, Material-UI, Scss/Sass, Bootstrap, Webpack
              </p>
              <p className="font-mono mt-4">
                Nodejs, Express, NestJS, MongoDB, MySQL, PostgreSQL, TypeORM,
                Rest API, GraphQL
              </p>
              <p className="font-mono mt-4">
                AWS(few services), WebSocket, Wordpress
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-4">
            <h3 className="text-themecolor mr-4 w-[15%]">Testing: </h3>
            <p className="font-mono w-[85%]">
              Cypress, Jest, SuperTest, Selenium
            </p>
          </div>
          <div className="flex flex-row mt-4">
            <h3 className="text-themecolor mr-4 w-[15%]">Tools: </h3>
            <p className="font-mono w-[85%]">
              Git/Github, Postman/Insomnia, Jenkins, Sentry, Instana, VScode,
              Atom, Jira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
