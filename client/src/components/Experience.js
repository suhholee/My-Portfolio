// Custom Components
import ga from '../images/ga.svg'
import big from '../images/big.png'
import qmit from '../images/qmit.png'
import ou from '../images/ou.png'
import bath from '../images/bath.webp'
import projectwith from '../images/projectwith.png'

const Experience = () => {
  return (
    <div className="experiences">
      <h1>Experiences & Education</h1>
      <div className="experiences-container">
        <div className="experience-left">
          <div className='content'>
            <h2>Business Development Manager</h2>
            <h3>Project WITH (Aug 2023 - Present)</h3>
            <p>I lead strategic planning efforts, leveraging data analysis to shape the platform’s services and enhance revenue. I am also actively engaged in front-end development of web-based applications. My other roles include the orchestration and management Project WITH’s player development model by statistically analyzing and visualizing IAMSTRONG (fitness test model) and WITH Sports Type Indicator (sports psychological personality test) data. I also analyze Kick (K League fan app) and K League Fantasy user data in MySQL and MongoDB to create K League Marketing Package. Finally, I lead the research and strategic business planning for collaboration with the J League and Asian Football Confederation.</p>
          </div>
          <img src={projectwith} />
        </div>
        <div className="experience-right">
          <img src={ga} />
          <div className='content'>
            <h2>Software Engineering Immersive</h2>
            <h3>General Assembly (Jan 2023 - Apr 2023)</h3>
            <p>A 12-week intensive course on full-stack software development through daily lectures, labs, pair programming, and coursework using languages such as JavaScript and Python and tools such as React, Node.js, Express, MongoDB, and Django.</p>
          </div>
        </div>
        <div className="experience-left">
          <div className='content'>
            <h2>Communications Manager</h2>
            <h3>Bridge International Group (Aug 2022 - Nov 2022)</h3>
            <p>After graduating university, I worked at Bridge International Group for four months as a communications manager while contemplating on a career change. I was responsible of planning, hosting, and organising major government, media, and sports events for South Korean clients in the UK and Europe. Although it was a short period of time, I was able to learn how to effectively communicate in and out of the company and become a well-prepared and organised individual when it comes to executing tasks.</p>
          </div>
          <img src={big} />
        </div>
        <div className="experience-right">
          <img src={qmit} />
          <div className='content'>
            <h2>Product Team Sport Scientist (Internship)</h2>
            <h3>QMIT (May 2021 - Aug 2021)</h3>
            <p>My experience at QMIT has made a great impact on the pathway of my career. Although I was interested in technology, especially sports tech, I did not have any firsthand experience on how a tech company and its developers operates in a daily basis. Working at QMIT gave me the valuable experience of not only utilising my prior knowledge in analysing data, but also understanding how a tech team works to create the optimum product. I can proudly say that my experience here sparked my passion for tech.</p>
          </div>
        </div>
        <div className="experience-left">
          <div className='content'>
            <h2>Academy Sport Scientist (Internship)</h2>
            <h3>Oxford United (Sep 2020 - May 2021)</h3>
            <p>I have worked as a sport scientist at Oxford United Football Club&#39;s Academy during my placement year at university. While undertaking my daily tasks, I was able to learn the various types of technologies that are used in a football club and also feel the lack of technologies that could improve the players and staffs&#39; performance. I was able to feel the power that technology has every industrial sector.</p>
          </div>
          <img src={ou} />
        </div>
        <div className="experience-right">
          <img src={bath} />
          <div className='content'>
            <h2>BSc (Hons) Sports and Exercise Science with Professional Placement</h2>
            <h3>University of Bath (Sep 2016 - Jul 2022)</h3>
            <p>
              <ul>
                <li>Suspended my studies for 2 years (Jun 2017 - Aug 2019) due to compulsory military service</li>
                <li>Developed performance enhancement strategies through biomechanical analysis</li>
                <li>Created appropriate psychological interventions by applying theories that suits the client</li>
                <li>Strategised nutritional supplementation to enhance sport performance</li>
                <li>Proficient in statistical analysis using Excel, SPSS, Python, and MATLAB</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience