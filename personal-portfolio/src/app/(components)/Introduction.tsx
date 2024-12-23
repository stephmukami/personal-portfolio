import React from "react";

type Props = object;

function Introduction({}: Props) {
  return (
    <>
      <div className="intro bg-brand-grey mb-4 flex flex-col md:flex-row p-4 md:space-x-[300px]">
        <div className="text-intro p-10">
          <h2 className="font-semibold text-2xl md:text-3xl mb-10">Hey there !</h2>
          <h4 className="font-semibold text-4xl md:text-6xl mb-4">
            I am a Full Stack<br></br> Software Engineer
          </h4>
          <p>
            I love building products that delight and make life easier and I am honing my craft in creating scalable systems. <br></br> I contribute to tech communities and I am venturing into open-source projects to grow while giving back.
          </p>
        </div>

        <div className="image-intro flex justify-center items-center">
          <img
            src="./portfolio-steph-image.png"
            className="w-[250px] md:w-[400px] rounded-md"
            alt="stephanie image"
          />
        </div>
      </div>
      <div className="technologies text-center p-12 mb-2">
        <h2 className="text-xl font-semibold mb-8">Tools of Trade</h2>
        <div className="tools-images flex-wrap flex justify-center space-x-8 mb-8 p-4">
          <img src="./icons8-git-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-python-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-typescript-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-javascript-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-node-js-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./react-1-logo-png-transparent.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./next.svg" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-sass-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-tailwind-css-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-mongo-db-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./prisma.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-mysql-logo-96.png" alt="" className="w-[60px] h-[60px]" />
          <img src="./icons8-docker-logo-96.png" alt="" className="w-[60px] h-[60px]" />
        </div>
      </div>
    </>
  );
}

export default Introduction;
