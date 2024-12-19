import React from "react";
import Link from "next/link";

type Props = object;

function Projects({}: Props) {
  return (
    <>
      <div className="text-font-purple bg-brand-purple p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-center mt-3">Side Quests</h2>

        <div className="flex-parent flex flex-col md:flex-row">
          <div className="flex-child-image flex flex-col max-w-[400px] w-full p-4">
            <div className="flex space-x-3 items-center">
              <h3 className="font-semibold">E-points</h3>
              <Link href="https://github.com/stephmukami/e-points">
                <div>
                  <img
                    src="./icons8-link-64 (1).png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <img
              src="./epoints-app-p.PNG"
              className="w-full h-[200px] object-contain"
              alt="E-Points App"
            />
          </div>
          <div className="flex-child-text flex flex-col p-3 justify-center">
            <ul>
              <li className="mb-1">
                - The app uses a gamified approach to promote the usage of
                renewable energy by rewarding users for eco-friendly
                transportation.
              </li>
              <li className="mb-1">
                - Users earn points for each electric motorbike ride that can be
                redeemed for airtime, offering a tangible reward for environmentally
                conscious behavior.
              </li>
              <li className="mb-1">
                - Built using Next.js for the framework, Prisma ORM for database
                management, and Africa Is Talking Airtime API for airtime distribution.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-parent flex flex-col md:flex-row">
          <div className="flex-child-image flex flex-col max-w-[400px] w-full p-4">
            <div className="flex space-x-3 items-center">
              <h3 className="font-semibold">Medbot</h3>
              <Link href="https://github.com/stephmukami/medbot">
                <div>
                  <img
                    src="./icons8-link-64 (1).png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </div>
              </Link>
            </div>

            <img
              src="./medbot-app-p.PNG"
              className="w-full h-[200px] object-contain"
              alt="Medbot App"
            />
          </div>
          <div className="flex-child-text flex flex-col p-3 justify-center">
            <ul>
              <li className="mb-1">
                - Computer-aided diagnosis tool designed to diagnose pneumonia and
                tuberculosis from chest X-ray images.
              </li>
              <li className="mb-1">
                - Built using Next.js for the web framework and FastAPI for the
                backend API services.
              </li>
              <li className="mb-1">
                - Integrated DenseNet, a deep learning computer vision model, for
                image classification and diagnosis.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-parent flex flex-col md:flex-row">
          <div className="flex-child-image flex flex-col max-w-[400px] w-full p-4">
            <div className="flex space-x-3 items-center">
              <h3 className="font-semibold">iPrevent</h3>
              <Link href="https://github.com/stephmukami/iprevent-diabetes-risk-prediction">
                <div>
                  <img
                    src="./icons8-link-64 (1).png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <img
              src="./iprevent-app-p.PNG"
              className="w-full h-[200px] object-contain"
              alt="iPrevent App"
            />
          </div>
          <div className="flex-child-text flex flex-col justify-center p-3">
            <ul>
              <li className="mb-1">
                - ML-powered app for assessing diabetes risk level among adults.
              </li>
              <li className="mb-1">
                - Built using Next.js for the front-end, Neon.db for database
                management, and Flask for the back-end API services.
              </li>
              <li className="mb-1">
                - Utilizes an ADA boosted algorithm for diabetes risk prediction.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-parent flex flex-col md:flex-row">
          <div className="flex-child-image flex flex-col max-w-[400px] w-full p-4">
            <div className="flex space-x-3 items-center">
              <h3 className="font-semibold">Kikwetu Store</h3>
              <Link href="https://github.com/stephmukami/kikwetu_store">
                <div>
                  <img
                    src="./icons8-link-64 (1).png"
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <img
              src="./kikwetu-app-p.PNG"
              className="w-full h-[200px] object-contain"
              alt="Kikwetu Store App"
            />
          </div>
          <div className="flex-child-text flex flex-col justify-center p-3">
            <ul>
              <li className="mb-1">
                - E-commerce store built with React for the front-end and MongoDB
                for database management.
              </li>
              <li className="mb-1">- Focuses on handling the checkout process for user items.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
