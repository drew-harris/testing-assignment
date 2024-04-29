# Team 4 Assignment 5
Instructions:
Each team will work together.
For each design pattern you identified and coded in Assignment 4, write a test case.
Submission: Please upload your executable code for each case and a README file about how to run your code(command line and dependencies etc.)

## Directions to Run

Ensure that you have NPM and NodeJS installed on your computer. 

1. Install dependencies with `npm install`
2. Run tests with `npm run test`


You can also run tests in the browser with `npm run test-ui`. Running this would be preferable. When you run using `npm run test-ui`, you should see this:

![alt text](https://github.com/drew-harris/testing-assignment/blob/2549476a65a98bb034a89865b9ae0e7440dab269/src/images/TestCasesTerminal1.PNG)

You can click on any of the .test.ts files to see what the test cases were and if all of them passed

![alt text](https://github.com/drew-harris/testing-assignment/blob/2549476a65a98bb034a89865b9ae0e7440dab269/src/images/TestCasesTerminal2.PNG)

You can click on the code tab to view the code in the browser

![alt text](https://github.com/drew-harris/testing-assignment/blob/2549476a65a98bb034a89865b9ae0e7440dab269/src/images/TestCasesTerminal3.PNG)

Each test case for a question will have at least one test case throw an error.

Below are what each file in the AssignmentFive folder corresponds to for each question from Assignment Four. The files ending in .ts are the sample code, and the files ending in .test.ts are the test case for that corresponding .ts file

# questionTwo.ts and questionTwo.test.ts corresponds to this question:

[12] 2. Your system will offer three basic service levels. carPOOL is the least expensive level of service, in which the customer may share the ride with another passenger going in the same general direction. carX is a level of service in which the rider will get a private ride. carBlack is a level of service in which the rider is provided a black luxury car. Each such service will be handled by dedicated subsystems, but you surely will not let customers know all such details. Instead, you would like to provide an interface for customers to select from, and based on their selections, you will direct them to corresponding modules to calculate their transportation fees. Two design patterns may be used here together. Briefly explain your recommendation, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For each design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionThree.ts and questionThree.test.ts corresponds to this question:

[7] 3. Your system may offer more service levels at some cities or countries. For example, you may want to offer a service carGo in India, which provides for a ride in a hatchback. For another example, carEATS will allow users to have meals delivered from participating restaurants by your registered drivers. You want your system to be designed to provide such car sharing services in many cities and countries, meaning that although all cities will provide the basic levels of services, each city may configure her own customized services. Which design pattern will you recommend to use? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionFour.ts and questionFour.test.ts corresponds to this question:

[7] 4. Your system will take payment through credit cards. But you do not want to implement your own credit card payment system; instead, you would leverage PayPal service for now. You decide to implement a handler locally in your code which prepares PayPal-compatible data format and forward the call to PayPal. Any design pattern you see appropriate here? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionFive.ts and questionFive.test.ts corresponds to this question:

[7] 5. You decide to adopt a dynamic pricing model. The same route costs different amounts at different times as a result of factors such as the supply and demand for drivers at the time the ride is requested. When rides are in high demand in a certain area and there are not enough drivers in such area, fares increase to get more drivers to that area and to reduce demand for rides in that area. Therefore, you will calculate the transportation fee for a rider who will provide detailed information for you to calculate. Any design pattern you see appropriate here? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionSix.ts and questionSix.test.ts corresponds to this question:

[7] 6. Your system may periodically send coupons to all registered riders automatically. Will you recommend to use any design pattern to realize this push-mode notification? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionSeven.ts and questionSeven.test.ts corresponds to this question:

[7] 7. You want to let the system serve as a social network for riders. A rider can post a message to other riders, sometimes broadcast to other riders. Any design pattern you see appropriate here? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionEight.ts and questionEight.test.ts corresponds to this question:

[7] 8. You plan to implement a sharableCar object in your system, which could be categorized into normal car, luxury black car, SUV, wheelchair accessible transport, etc. Each category of car may carry and display different features, as well as different transportation fee calculation methods. To keep the code consistent with extensibility, you would like to create such sharableCar object without exposing the creation logic and refer to newly created object using a common interface. Any design pattern you see appropriate here? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionNine.ts and questionNine.test.ts corresponds to this question:

[7] 9. You plan to leverage some legacy code in your company that implements online car reservation function. That means you want to turn those legacy code as reusable components in your new system but with different interfaces. Any design pattern you see appropriate here? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionTen.ts and questionTen.test.ts corresponds to this question:

[7] 10. As you are expanding your services into new cities, you may need to add some new features/options to some services. You don’t want to change the code structure (because some cities may need the original version) while you add new functions. Any design pattern you see appropriate here? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionEleven.ts and questionEleven.test.ts corresponds to this question:

[7] 11. Like many startups, your software may begin its journey with a monolithic architecture, built for a single offering in a single city. Having one codebase seemed “clean” at the time, and could solve your core business problems, which included connecting drivers with riders, billing, and payments. It was reasonable back then to have all of your business logic in one place. As you rapidly expand into more cities and introduced new products, this architectural style should be changed. As a software architect, which architectural style(s) will you recommend to? Briefly explain why you recommend such architectural styles, any advantages? Disadvantages? Draw a component diagram to explain your design (maybe with short descriptions if you see appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).

# questionTwelve.ts and questionTwelve.test.ts corresponds to this question:
[7] 12. To be practical, your software will require the drivers to have a smartphone and the users must have access to either a smartphone or the mobile website. While drivers and users may use different types of devices to view your app, which architectural style/design pattern would you see appropriate here? Briefly justify your suggestion, and draw a class diagram to explain your design (maybe with short descriptions if appropriate). For the design pattern you recommend to apply, work out some sample code (make sure to have client code to test).
