import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const SectionTitle = props => (
  <h2
    style={{
      color: `#606060`,
    }}
  >
    {props.children}
  </h2>
)
const Job = props => (
  <h3
    style={{
      fontSize: `1em`,
      textTransform: `uppercase`,
      color: `#7a7a7a`,
    }}
  >
    {props.children}
  </h3>
)
const Skills = props => (
  <h4
    style={{
      color: `#7a7a7a`,
      fontSize: `1em`,
      fontStyle: `italic`,
    }}
  >
    {props.children}
  </h4>
)
const IndexPage = () => (
  <Layout>
    <SEO title="Doug McKay" />
    <SectionTitle>Objectives</SectionTitle>
    <p>
      Seeking opportunities to build high quality interactive websites
      showcasing UI/UX. Continue my growth as a software developer, utilizing my
      skill for troubleshooting to solve complex problems. Help others achieve
      their potential and accomplish goals. Work with open, hopeful, optimistic
      teams. Manage teams and projects that are challenging, exciting, and
      fulfilling.
    </p>
    <SectionTitle>Experience</SectionTitle>
    <Job>
      Sr Operations Development: WEO Media, Cory Roletto, 8625 SW Cascade Avenue
      Suite 300, Beaverton, OR 97008, (888) 788-4670 — 2015-present
    </Job>
    <p>
      Improved productivity through workflow manipulation and automation.
      Created resources and automated tools for front-end developers and SEO
      Managers such as a submitting a Github pull request for a syntax
      highlighter plugin I built for the code editor SublimeText, which
      highlighted and color coded WEO’s proprietary code documents, speeding up
      debug time and decreasing code errors. I Built web-crawler/scrapers using
      Node JS, Google’s Puppeteer, Python, and Selenium to automate Search
      Engine Optimization (SEO) and automate website builds. Onboarded, trained,
      managed, and rolled out new processes, workflows, and software like Wrike
      project management software. 3x recipient of Innovation award for
      consistently increasing productivity on the ops team through automation,
      workflow reorganization. Leader of internal "Advisors" team tasked with
      maintaining company culture and keeping pulse on morale and wellbeing.
      Created UI/UX prototypes using Photoshop/Illustrator/Figma and directed
      ongoing development of WEO Client Reports and Content Request Automation
      projects. I worked closely with the lead developer on the project,
      architecting prototypes which utilized already created components. I also
      prepped some javascript code for the developer to finish. Led research
      project to find a solution for support team ticketing system, which
      necessitated spinning up a LAMP stack site which solely I maintained.
      Created website designs, built site templates, and documented build
      process for easy and quick site creation for new clients. Developed many
      reusable components, like carousels, image galleries, SVG icons.
      Maintained component resources, training docs, as well as maintained and
      supported websites for 700 clients. Refactored websites to the updated
      coding standards. Helped our team move from developing desktop websites
      with mobile versions to fully responsive websites. Changed design process
      from designer only designing desktop version to designer making a plan for
      how mobile should look while designing what desktop should look like.
      Standardized how navigations were built. Implemented the css framework
      bootstrap and trained team how to use it. My consistent communication and
      teamwork and my ability to listen well to all views and how I championed
      team members successes paved the way for an overall success in changing
      procedure for the whole team. It was team effort but I communicated what
      each team member did to all other members so that all benefited. Created
      and maintained code standards for team of front end developers. Created
      design component library resources for front end developers. Created
      animated svgs. Managed DevOps team. Communicated with clients, partner
      companies, and vendors. Created image content for client websites.
      Internal support and training in WEO Content Management System, and other
      technology or software related issues. Led individuals through conflict
      resolution. I was frequently a catalyst in connecting individuals and
      departments together to accomplish goals and projects.
    </p>
    <Skills>Skills and software Used</Skills>
    <p>
      Node.js, HTML, CSS, Javascript, SVG, Accessibility, Python, SublimeText,
      VS Code, Git, Github, Wrike, Adobe Lightroom, Adobe Premiere, Adobe After
      Effects, Adobe Illustrator, Adobe Photoshop, Adobe Acrobat, Figma, WEO
      CMS, Wordpress CMS, Photography, Videography, Excel, Word, Keyboard
      Maestro Macro Editor, Selenium, Puppeteer, Gimp, Slack, Digital Ocean
      Droplets, SSH, LAMP stack (linux, apache, mysql, php), bash, shell
      scripting, linux, iterm2, command line, hotjar, AnimateOnScroll.js, CSS
      animation, SVG animations, imageoptim, svgator, browserstack, slides.com,
      uberconference.
    </p>
    <Job>
      Jr. Web Designer: Graphic Products Inc, Tyler Ball, 9825 SW Sunshine Ct,
      Beaverton, OR 97005, (503) 644-5572 — 2014-2015
    </Job>
    <p>
      Migrated old html content to new website Drupal content management system
      (CMS) code base. Created html email campaigns. Trained photo/video crew in
      lighting techniques. Completed various jr. role web tasks like creating
      landing pages.
    </p>
    <Skills>Skills and software Used</Skills>
    <p>
      HTML, CSS, Drupal CMS, Adobe Photoshop, Adobe Lightroom, Pardot,
      Salesforce.
    </p>
    <Job>
      Adjunct Photography Faculty: BYU-Idaho University, College of Performing
      and Visual Arts, Darren Clark, Brigham Young University-Idaho, 525 South
      Center St., 118 UC Building, Rexburg, ID 83460-1700, (208) 496-4906 —
      2013-2014
    </Job>
    <p>
      Taught advanced photoshop editing and darkroom b/w photography courses.
      Taught intro to photography courses in person and online. Taught large (75
      student) and small (15 student) classes in lab, workshop, and lecture
      settings utilizing audio, visual, and haptic learning styles.
    </p>
    <Skills>Skills and software Used</Skills>
    <p>
      Blackboard online grading system, Photography, Adobe Photoshop, Adobe
      Lightroom, Darkroom and photo lab techniques, Epson large format printers,
      Canon cameras, Nikon cameras, Large, medium, and 35mm format camera
      techniques.
    </p>
    <Job>
      Photographer/ Photographers Assistant: BYU-Idaho University, University
      Communications Photography, Michael Lewis, Brigham Young University-Idaho,
      525 South Center St., 118 UC Building, Rexburg, ID 83460-1700, (208)
      496-2080 — 2008-2013
    </Job>
    <p>
      Photographed events and marketing material for, and with, the college
      public relations photographer. Provided images to associated press.
      Trained and managed a small team of photographers. Worked and collaborated
      with designers, art directors, and developers.
    </p>
    <Skills>Skills and software Used</Skills>
    <p>
      Photography, Adobe Photoshop, Adobe Lightroom, Adobe Bridge, Darkroom and
      photo lab techniques, Epson large format printers, Canon cameras, Nikon
      cameras, Large, medium, and 35mm format camera techniques.
    </p>
    <SectionTitle>Education</SectionTitle>
    <p>Brigham Young University - Idaho, Rexburg, ID — BFA, 2012</p>
    <SectionTitle>Hobbies and Interests</SectionTitle>
    <p>
      Owning and operating web development home business designing, developing,
      and maintaining websites (<a href="https://damky.net">damky.net</a>,{" "}
      <a href="https://mahtaystyle.com">mahtaystyle.com</a>,{" "}
      <a href="https://jmphotography.mckay.studio">
        jmphotography.mckay.studio
      </a>
      , <a href="https://dougmckay.dev">dougmckay.dev</a>) using React, JAM
      stack (javascript, api, markup), Gatsby.js and sanity.io. Consulting for
      photography businesses. Developing Node JS web apps. Experimenting with
      Raspberry Pi single board computers. Making and listening to music.
      Playing guitar, and ukulele. Being a Dungeon/Game Master. Listening to
      audiobooks. Staying updated with what’s new in tech. Video production and
      motion graphics. Art: photography, design, illustration.
    </p>
    <SectionTitle>References</SectionTitle>
    <p>
      Kama Solevad, (360) 261-1055,{" "}
      <a href="mailto:ksolevad@gmail.com">ksolevad@gmail.com</a>
    </p>
    <p>
      Josh Balleza, (503) 704-8726,{" "}
      <a href="mailto:joshuaballeza@gmail.com">joshuaballeza@gmail.com</a>
    </p>
    <p>
      Rosalea Peters, (503) 593-0110,{" "}
      <a href="mailto:3petersfamily@gmail.com">3petersfamily@gmail.com</a>
    </p>
    <p>
      Evan Davis, (503) 913-9991,{" "}
      <a href="mailto:telavir@gmail.com">telavir@gmail.com</a>
    </p>
    <p>
      Joseph Stith, (801) 201-6357,{" "}
      <a href="mailto:joseph@weomedia.com">joseph@weomedia.com</a>
    </p>
  </Layout>
)

export default IndexPage
