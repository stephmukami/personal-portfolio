import React from 'react'

type Props = {}

function Resume({}: Props) {
  return (
    <>
      <h2 className='text-xl font-semibold mb-8 text-center'>Past Work</h2>
      <div className="flex flex-col justify-center items-center flex-parent">

        <div className="resume-tab bg-brand-grey md:w-[1600px] rounded-sm mb-2 ">
          <h4 className="exp-header font-semibold p-3">Robert Bosch - Innovation Analyst</h4>
          <ul className='mb-4 p-3'>
            <li className='mb-1'>- Proposed a USSD-based verification system to reduce revenue loss from counterfeit power tools; tested with 30 artisans and 5 Bosch Power Tools stakeholders.</li>
            <li className='mb-1'>- Led technical discovery with 3 law firms across North and South Africa through 6 prototyping sessions, identifying potential to reduce legal research costs by 50%.</li>
            <li className='mb-1'>- Developed system requirements and user stories for an AI-powered legal research system, collaborating with 20 legal professionals and business stakeholders.</li>
            <li className='mb-1'>- Designed and delivered generative AI training to a cross-functional team of 33 colleagues, focusing on practical implementation strategies for various Bosch business units.</li>
          </ul>
        </div>

        <div className="resume-tab bg-brand-grey md:w-[1600px] rounded-sm mb-2">
          <h4 className="exp-header font-semibold mb-3 p-3">Data Trace International - Software Engineer</h4>
          <ul className='mb-4 p-3'>
            <li className='mb-1'>- Led design and development of the KenVIP responsive web portal aimed at digitizing national vaccination coverage records and enhancing decision-making within the Ministry of Health.</li>
            <li className='mb-1'>- Consolidated vaccination coverage data from 6 Ministry of Health sources, employing ETL tools like NiFi for cleaning and PostgreSQL for data storage.</li>
            <li className='mb-1'>- Developed 13 national vaccine coverage dashboards using SQL and Superset, enabling data-driven insights.</li>
            <li className='mb-1'>- Built a comprehensive data pipeline to streamline data processing and storage, improving data accuracy and accessibility.</li>
          </ul>
        </div>

        <div className="resume-tab bg-brand-grey md:w-[1600px] rounded-sm mb-2">
          <h4 className="exp-header font-semibold mb-3 p-3">Ingressive For Good - Apprentice</h4>
          <ul className='mb-4 p-3'>
            <li className='mb-1'>- Awarded a scholarship by Ingressive for Good, selected as 1 of 1,000 recipients from 19,500 African applicants.</li>
            <li className='mb-1'>- Completed a month-long virtual training in UI/UX design, delivering milestone projects including:</li>
              <li className='mb-1'>- An e-commerce website prototype emphasizing user-centric design and functionality.</li>
              <li className='mb-1'>- A health and wellness app prototype prioritizing user experience and accessibility.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Resume
