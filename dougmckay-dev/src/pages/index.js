import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      Managers such as a syntax highlighter plugin for proprietary code for the
      application SublimeText, speeding up debug time and decreasing code
      errors. Built web-crawler/scrapers for SEO team. Onboarded, trained,
      managed, and rolled out new processes, workflows, and software. 3x
      recipient of Innovation award. Leader of internal "Advisors" team tasked
      with maintaining company culture and keeping pulse on moral and wellbeing.
      Created UI/UX prototypes and directed ongoing development of WEO Reports
      and Content Request Automation projects. Lead research project to find a
      solution for support team ticketing system. Designed website templates for
      easy and quick site creation for new clients. Developed many reusable
      components, like carousels, image galleries, SVG icons. Maintained
      component resources, training docs, as well as maintained and supported
      websites for 700 clients. Also refactored websites to the updated coding
      standards. Helped our team move from developing desktop websites with
      mobile versions to fully responsive websites. Changed design process from
      designer only designing desktop version to designer making a plan for how
      mobile should look while designing what desktop should look like.
      Standardized how navigations were built. Implemented the css framework
      bootstrap and trained team how to use it. My consistent communication and
      teamwork and my ability to listen well to all views and how I championed
      team members successes paved the way for an overall success in changing
      procedure for the whole team. It was team effort but I communicated what
      each team member did to all other members so that all benefited. Created
      and maintained code standards for team of front end developers. Created
      design component library resources for front end developers. Managed
      DevOps team. Communicated with clients. Created image content for client
      websites. Internal support and training in WEO system, and other
      technology or software related issues. Lead individuals through conflict
      resolution. Connected individuals and departments together to accomplish
      goals and projects.
    </p>
    <Skills>Skills and software Used</Skills>
    <p>
      Node.js, HTML, CSS, Javascript, SVG, Accessibility, Python, SublimeText,
      VS Code, Git, Github, Wrike, Adobe Lightroom, Adobe Premiere, Adobe After
      Effects, Adobe Illustrator, Adobe Photoshop, Adobe Acrobat, Figma, WEO
      CMS, Wordpress CMS, Photography, Videography, Excel, Word, Keyboard
      Maestro Macro Editor, Selenium, Puppeteer, Gimp, Slack, Digital Ocean
      Droplets, SSH, LAMP stack, bash, shell scripting, linux, iterm2, command
      line, hotjar, AnimateOnScroll.js, CSS animation, SVG animations,
      imageoptim, svgator, browserstack, slides.com, uberconference
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
      and maintaining websites (damky.net, mahtaystyle.com,
      jmphotography.mckay.studio). React, JAM stack, Gatsby.js and sanity.io.
      Consulting for photography businesses. Developing web apps. Raspberry Pi
      single board computers. Making and listening to music. Guitar, ukulele.
      Dungeon/Game Master. Audiobooks. Tech. Video production. Art: photography,
      design, illustration.
    </p>
    <SectionTitle>References</SectionTitle>
    <p>
      Kama Solevad, (360) 261-1055,{" "}
      <Link to="ksolevad@gmail.com">ksolevad@gmail.com</Link>
    </p>
    <p>
      Josh Balleza, (503) 704-8726,{" "}
      <Link to="joshuaballeza@gmail.com">joshuaballeza@gmail.com</Link>
    </p>
    <p>
      Rosalea Peters, (503) 593-0110,{" "}
      <Link to="3petersfamily@gmail.com">3petersfamily@gmail.com</Link>
    </p>
    <p>
      Evan Davis, (503) 913-9991,{" "}
      <Link to="telavir@gmail.com">telavir@gmail.com</Link>
    </p>
    <p>
      Joseph Stith, (801) 201-6357,{" "}
      <Link to="joseph@weomedia.com">joseph@weomedia.com</Link>
    </p>
  </Layout>
)

export default IndexPage
