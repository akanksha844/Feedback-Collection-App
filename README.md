# Feedback_Collection_App
 
Node with React Fullstack Web Development


For example : A startup owner recently launched an app/ third party service/ product and noticed decline in user's engagement.
How do they connect with their customers ???

BY ASKING ABOUT THEIR FEEDBACK and knowing what is missing in their app/third party service/product.
Here, comes in picture FEEDBACK_COLLECTION_APP which makes startups owners and product managers life easy and automates feedback taking process.


It has following features :    ( As high level understanding )

 - Bulk email will be sent to many customers asking their feedback.
 - It takes tabulation of results.
 - Startup owner will pay (billing system required) for  this automatic feedback collection which might require user 
   authentication feature too 
 - Make respective app/service better with feedback.
 
 (Detailed overview )  User in ths scenario :  Startup owner 
 
 - To start feedback process , User might require to signup via Google OAuth.   ( Express server + MongoDB + PassportJS)
 - User pays for email credits via stripe api.  (Stripe + MongoDB)
 - User creates a new 'campaign'          (React + Redux)
 - User enters list of emails to send survey to     ( React + Redux+ Redux Form )
 - App send email to list of surveyees            (Email Provider)
 - Surveyess click on link in email to provide feedback   (Email Provider + Express + Mongo
 - App tabulte feedback
 - User can see report of all survey responses.       (Mongo + React + Redux)
