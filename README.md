# Cycling Team Website

## Live link to Netlify: https://cycling-team-website.netlify.app/

## Project Description
> Include:<br />
> General App Idea/Purpose:<br />

> This is a public website for a cycling team to share their information, such as, their roster, sponsors, calendar, and news. All content will be accessible by the public. An admin for the team will be able to log in with a hidden route in order to add, edit, delete all content in the different forms. This will be able to be used as a template for other teams if wanted. <br />

> Technologies
>
> React.js 
> Contentful.com to use as a headless CMS for the backend. Since this will potentially be used by someone who is not as tech savvy to manage the content on the website, the headless CMS will be a more user friendly platform
> Tailwind.css for styling
> Flag API for team members - https://flagsapi.com/

> Dependancies
> 
> framer-motion
> aos
> contentful
> react-router-dom

> Routes:<br />
>
> / home page
> GET /team/ show the user all team members
> GET /team/:id show the user the specific team member - To be added later
>
> GET /partners/ show the user all partners
> GET /partners/:id show the user the specific partner - To be added later
>
> GET /calendar/ show the user all events
>
> GET /racing/ show the user all racing news - To be added later
> GET /racing/:id show the user the specific racing news - To be added later
>
> GET /news/ show the user all news
> GET /news/:id show the user the specific news - To be added later

## Wireframes
![Cycling_Team_Website_Wireframe](https://media.git.generalassemb.ly/user/49453/files/5af6820c-335e-4f05-869a-3c049f997136)

## User Stories
> As a fan of the team, I want to be able to see who all the team members are with a visual representation.
> As a fan of the team, I want to be able to see who the sponsors are and have easy access to more information about them. 
> As a fan of the team, I want to be able to see the upcoming events on their schedule in an easy to read format.
> As a fan of the team, I want to be able to see racing news and be able to read the articles.
> As a fan of the team, I want to be able to see general news and be able to read the articles.
> As the teams' web admin, I want to be able to log in to maintain the content of the various pages of the website. 

### MVP Goals
> Have a fully functioning public facing team website with React.js and headless CMS. 
> The user will have easy navigation and have an intuitive UI.
> The pages will be responsive to differing screen sizes. 
> Full CRUD functionality in all data collections. 


### Stretch Goals - Future Updates
> Additional bio pages (show) for individual team members and partners. 
> If not using the headless CMS, make sure that the images can be uploaded instead of using image urls.
> Add ability to change color and font theme from the admin panel.
> Need to be able to view individual news articles, team member bios, partner bios.
> Have the partners page organized by sposor level.
> Add Racing News page to separate the content. Filter data from one news collection.
> Create Tailwind defaults for commonly used styling.
