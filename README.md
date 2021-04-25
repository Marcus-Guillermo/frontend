# Welcome to Resu.Me


- [Project Deployment via Heroku](https://resume-render21.herokuapp.com/)
- [Project Proposal](https://docs.google.com/document/d/1pkIWiyvS0bURZm7FjMctsbzaYtcvN6O5vPp2x91FcAU/edit#heading=h.z6ne0og04bp5)

### What is Resu.Me ?

Resu.Me is intented to be a one-stop resume and cover letter destination for aspiring junior-engineers. Via simple text field input, users can quickly create and download professional and well-formatted .pdf resumes and cover letters. As an added bonus, users can find inspiration on their job hunt through Resu.Me's built-in Levels.fyi integrations.

### Resu.Me Rendered Home Page

### Example of a User Generating a Resume

### Example of a User Generating a Cover Letter

### Component Overview


## Development Process

Resu.Me was relatively straight-forward to plan. The application was intended to facilitate easy creation of cover letters and resumes by users. 

We proposed the following component hierarchy while making a development plan. Our final component hierachy looked different, particularly after integration of the Resume generation functionality. We had originally intended for the two components (resume generation, cover letter generation) to sit on the same page, but quickly saw that the rendered .pdf preview required more page-space to be easy-to-read and aesthetically-pleasing. 

### Determining what to build and which features to prioiritize:

As two aspiring entrants into the tech industry, we believe that we have a good feel for which users may want to see in an app intended to help them navigate the job hunt process. We brainstromed ideas for potential features for an hour or so after learning that we both had similar ideas for our capstone project. We concluded that a resume-centric app that allowed users to do the following would be useful and would constitute a minimum viable product.

### Wireframes
Our proposed wireframes were generated using a Figma template that we thought was aesthetically pleasing and intuitive to navigate. We made necessary changes and additions to model our proposed application. 

- [Wireframe Collection](https://www.figma.com/file/FJc3EfAYhO5uloXlTjjzYe/Wireframe-Kit-Free-Edition-Copy?node-id=0%3A1)

The final deliverable understandably looks discernably different from the wireframes we created. Still, while the layout may differ slightly, we built an application that largely abided by these models.


### User Flow Chart
We developed the follwoing flowchart to model how a user would navigate the application. 


### Crafting User Stories:
As two potential (and probable) users of this application, we believed that we had a good feel for what users of such an application may want to see as features. 

As a user I want: 
- to be greeted by a clean homepage and user interface
- to know the function of all buttons and destination of all links 
- to be able to create an account and login to that account with ease
- to be able to create a basic cover letter 
- to be able to edit this cover letter


### Determining our MVP:

We intended for the MVP to let users create .pdf cover letters, with resume functionality defined as a "silver strech goal". This objective was achieved as we were able to create an editable cover letter with greater ease than expected. As such, rolling out resume functionality was laregly a matter of creating the required template in a seperate component. We did not deploy our app as quickly as anticpated. However, we had built app features that constiuted an MVP relatively quickly in our development process (delivering cover letter functionality) three dayas after project initiation.

## Code Review 

### Overview
This application was built with React, React-Bootstrap, Google Firebase and [React-pdf](https://react-pdf.org/) (a custom node package). The application utilizes firebase authentication to permit only registered users to navigate the application components and use features. The front-end utilizes React Router for navigation purposes. 

### Component Overview
Upon arrival at the application, users land on Homepage.js, and after creating an account, are able to navigate the application using the Navbar (Navbar.js) and can access key features via buttons that can be found on Homepage.js. 

Users create a cover letter via code in Generate.js, a resume via Generate-Resume.js and can access the Levels.fyi integration via Levels.js as well as the widget found on the homepage. 


