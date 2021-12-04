## Notes
*Please do not supply your name or email address in this document. We're doing our best to remain unbiased.*
### Date

Saturday, December 4 2021

### Location of deployed application

https://weather-app-nine-liart.vercel.app/

### Time spent

I spent about 11.5 hours on this task:
- Reading OpenWeather API documentation (0.5 Hour)
- Researching about how UI should be, I used [this](https://dribbble.com/shots/8711461-Weather-App) dribble as my inspiration (0.5 Hour)
- Initializing project (eslint, absolute import paths, env file and basic structure) (0.5 Hour)
- Building static UI (3 Hours)
- Creating API and UI integrations (3 Hours)
- Responsive mode (1 Hour)
- Add recent cities (1 Hour)
- Add current city (0.5 Hour)
- Setting up jest and adding test (0.5 Hour)
- Adding Dockerfile and docker-compose (0.5 Hour)
- Deploying to Vercel (0.5 Hour)

### Assumptions made

- I just used Next.JS because I find it easy to have both Front-End and Back-End at the same project, as Front-End is more important.

### Shortcuts/Compromises made

Well, I worked on this project for a really short amount of time, these are the things that I wanted to add but I couldn't due to shortage of time:

- Add E2E test and tests for components
- Add more unit tests
- Use svgr to use SVGs as icons
- Make the app multi page so people can share url of a city directly. It is also better for SEO.
- Add search for city name

### Instructions to run assignment locally
First of all, change `.env.sample` to `.env` and provide the required variables stated there.

I dockerized the whole application so if you have docker installed, you can run the following command to run the application locally:
```
docker-compose up
```
After that, you can access the application by visiting: [http://localhost:80](http://localhost:80)

------ OR ------
```
$ yarn
$ yarn build
$ yarn start
```

After that, you can access the application by visiting: [http://localhost:3000](http://localhost:3000)

### What did you not include in your solution that you want us to know about?

All the things I said in *Shortcuts/Compromises made* is also applicable.

- Add animations
- Add service worker to cache data and assets (so the page is available offline)
- Add manifest file so that the app could be downloaded as a single app and used inside mobile devices
- Add more detail of weather inside weather section
- Deploy assets on CDN
- Make css variables cleaner and more

### Other information about your submission that you feel it's important that we know if applicable.

Well I worked on web-vitals as well. The web vital is showing 100% on every metric:) (I will include a file called web-vital in the zip file as well)

Also I spent some time on making page accessible.

### Your feedback on this technical challenge
I think it was great:)