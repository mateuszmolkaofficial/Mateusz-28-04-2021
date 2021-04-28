## 1. What would you add to your solution if you had more time?

I'd have added:
* Cypress integration/e2e tests
* More detailed unit tests
* More sophisticated design

## 2. What would you have done differently if you knew this page was going to get thousands of views per second vs per week?

I reckon there's more to be done in that matter in DevOps domain, like scaling vertically (adding more power to existing architecture), horizontally (creating more servers, machines, making them location specific). Depending on provider (AWS, Azure, Vercel etc) different approaches are suggested and available, some of them provide automatic optimisation, which can be good for small/medium companies mostly.

From frontend perspective we need to ensure that every single user uses as least resources as possible. 

* Decrease bundle size - in the app I've used relatively big libraries like `Lodas` and in fact I only used a few functions. It would be good to import specific functions only.

* Caching - it's not gonna solve load problem by itself but it will certainly help with reducing downloading things from server over and over again. Service workers can be a useful.

* CDN - Content Delivery Network, if there was images and other 'heavy' assets this could be usefull. They normally have their own cache.

* Lazy loading - if there was other components that are not immediately visible we could lazy load it to descrease the first paint time.


## 3. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Not sure what could be the latest most usefull feature of TypeScript which I used in the app so I'm gonna point at one of the latest features of React which is hooks. I've been using them since they come up and they've changed my coding entirely. 

Example from the app:

```
const { loading, data, error } = useXBTUSD()
```

The `useXBTUSD` custom hook uses the native hooks provided by react and thanks to this approach I was able to separate some logic from the component into the hook. Which benefits in better testability and maintainability. Also it would be very easy now to use the logic in another component without rewriting same logic again.

## 4. How would you track down a performance issue in production? Have you ever had to do this?

Most important part is to provide some logging, tracking. There're plenty of services that does that but depending on needs one has to build a separate service for more details logging/metrics. In most cases a commertial service like Datadog, Countly, Sentry etc will be more than enough. It's good to have a nice data visualisation in order to find problems easier.

Important factors to measure
* processing time - amount of time for a process (endpoint response, data display, etc)
* number of requests - number of requests at certain time/service/location.

So far I haven't had to track down a performace issue in prod, I'm hoping it's because I've done all I could to avoid it. But I had to track other issues in production like errors which only occured for specific users from specific locations and that's where Sentry come in handy, since we tracked the user's id, transaction etc.

## 5. Can you describe common security concerns to consider for a frontend developer?

## 6. How would you improve the K****N API that you just used?

I'd say the API itself isn't bad, but not sure if it would be better to perform the logic of handling updates on the server due to server's operational capabilities (which are way higher than browser's) and sending 'ready-to-display' data to the frontend. With this we could avoid performing the sorting/filtering on the browser. Also it would be good to be able to fetch certain amount of records from the server, since in my app I only show 5 of bids/asks and I am aware that the object I'm taking these records can grow to like ~100 records, which is a waste of browser's recources.