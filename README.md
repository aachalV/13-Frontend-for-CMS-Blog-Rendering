This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Introduction
   
  * Contentstack is used as a backend for creating a content model for a blog website
  * This application implements the concept of server side rendering and navigation for single page application. 
  * The framework used is next.js. 
  * The application renders two pages for the following 
    1. Home page consisting of blog tiles 
    2. Blog page
    
  * The blog field contains following fields

         Header containing navigation links
         Banner section
         Blog header
         Blog content
         Related links
         Blog banner image
         Footer section with the social media icons and copyright information.
    
## Features

  * The Landing page renders all the blog tiles from the list of entries created on Contentstack CMS backend. The rendered blog page contains a list of related        links that contain the title of other blogs. Upon clicking the related link, details of this new blog will be displayed on the page.
   
  * Navigation is enabled using next.js folder structure.
   
   
## Deployment

  * The data for Blog information is stored in contentstack's cms
  
  * This application is currently hosted on Vercel 
      Live demo can be seen here ()
      
## To run the project locally

    1. Clone the repository using
    ```
    git clone 
    ```
    After downloading , 
    2. Get into the cloned directory using
    ```
    cd 13-Frontend-for-CMS-Blog-Rendering

    ```
    Once inside directory 
    3. run
    ```
    npm install
    ```
    
    Once inside directory 
    
    4. add a .env.local file to the root folder with following credentials
    ```
      API_KEY= _____________________
      DELIVERY_TOKEN= ______________
      ENVIRONMENT= _________________
      REGION=us
    ```
    4. run
    ```
    npm run build
    ```

    Once build file is created 
    5. run
    ```
    npm run start
    ```
    > To run project in development mode run
    > npm run dev
    
    



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



  
