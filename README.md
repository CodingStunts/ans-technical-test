## Walkthrough of my thinking & implementation

Hello!

So this is the hour completed mark of my tech test by the time I post this version of the README.

You may remember from my interview I mentioned I've been trying to pick up some Next.js as my next piece of tech to build up my knowledge base with, so I thought with this application being fairly small and straight forward and since React now advise using Next to create new applications I thought today would be as good of a time as any to start.

I've been using the last couple of days to familiarise myself with Next.js and Tailwind so as not to waste the hour faffing around, not knowing what I was doing in this task. Whilst I was taking the framework for a spin I took the opportunity to wireframe a lot of the components, interfaces, file structure, etc that I extrapolated in this project and saw how they would look, which would have given me a bit of head start on this task by the time I actually sat down to begin the hour on it.

I decided to use TypeScript in this project. Previously for the sake of a very small app I wouldn't have bothered, but since we are using an actual API rather than a `data.json` locally like some small tech tasks, I thought I may as well type it out so we can can make use of the autocomplete and have a reference for the data received, especially since there wasn't enough time to write tests alongside styling. On this point, if I had more time I would have also liked to have included some React Testing Library tests and after that included some small unit tests to check the return values from the API are as expected.

I didn't get around to creating the navigation between the pages. My intention was to create a Nav bar at the top with Home & Converter to switch between pages. Another benefit of using Next meant that I already had routing baked into the app from creation. At the moment you will have to navigate using `localhost:3000/` and `localhost:3000/converter` manually in the URL to access the two pages. I would have proceeded by adding something like:
 ```
 <nav> 
    <Link href="/">Home</Link>
    <Link href="/converter">Home</Link>
 </nav> 
 ```

I managed a fair bit of styling on the Home page but didn't manage to get as much done on the Converter. I made sure the app was responsive and ensured that the colour scheme was accessible. There were some minor things that would have improved accessibility on the converter such as labels on the form fields, so that would be a fix I would make going back over it. Also, I used Tailwind as it was a new CSS framework for me that I hadn't used before and I realised with the time limit it would allow me to make big straight forward changes without having to write a lot of code. It has made my components a little bit messy looking, but I don't think I've used it to excess.

## Instructions

This app can be run using `npm run dev` it will run on `localhost:3000`