# Social Soothe

Social Soothe is a web application designed to help individuals manage social anxiety. Users can maintain daily mood journals, build a "social tree" where each flower represents a social interaction they have described and completed, and practice breathing exercises to alleviate anxiety. The web app also rewards users for completing mood journals and adding flowers to their social tree. Additionally, it provides a personalized dashboard summarizing their overall mental state based on their activity within the app.

## Website URL
https://social-soothe-frontend.onrender.com/

## Functionality 

The following **required** functionality is completed:

* [ ] Users can login or sign up with their email 
* [ ] Users can take daily mood journals where they can choose an emoji that most describes their current mood and
      and explain why they are feeling the mood they are feeling
* [ ] Users can edit, search and delete previous journal entries
* [ ] Users can take different breathing exercises and choose the background noises for the exercise
* [ ] Users can create a flower for their virtual social tree by describing the social event that they are worried about
      and are asked questions that challenge the negative thoughts they have about the social event
* [ ] Once a user has completed the social event than they can check off that they completed the event, and the
      flower they added to the social tree will turn from gray to pink
* [ ] Users can edit and delete each flower on the social tree
* [ ] Users earn leafs as a currency for completing mood journals and a social event
* [ ] Users can buy new background colors and breathing background sounds with their leafs earned
* [ ] On the dashboard tab users can see how many awards they earned, how many flowers are on their social tree,
      how many journals they have completed, a chart showing the different emotions they felt and their
      social standing
* [ ] Users logout and delete their account
* [ ] Users can go to settings and change the background color and breathing background sounds 

The following **extensions** are implemented:

* Prisma
* Postgrel
* Express
* NodeJS
* Bcrypt
* ChartJS
* ReactJS
* JSON
* Passport
* AOS
* Render

## Image Walkthrough

Landing Page 

<img width="1438" alt="Screenshot 2025-01-01 at 3 33 55 PM" src="https://github.com/user-attachments/assets/2d23f020-b9ac-4788-ae4a-27a7f2d849f3" />


Mood Journals Page

<img width="1436" alt="Screenshot 2025-01-01 at 3 54 54 PM" src="https://github.com/user-attachments/assets/a57b9b02-ccfe-460e-9a27-cb42b20b332f" />


Breathing  Exercise Page

<img width="1440" alt="Screenshot 2025-01-01 at 4 49 43 PM" src="https://github.com/user-attachments/assets/d8f91dbd-9ed2-4723-b8cd-7875181665ce" />

Social Tree Page

<img width="1439" alt="Screenshot 2025-01-01 at 3 55 15 PM" src="https://github.com/user-attachments/assets/145d04fa-5131-42d6-bcab-a7d61d338e0c" />



## Notes

I faced the challenge of authenticating different users with passport and crypting their password with brycpt and using jwt tokens.
I had a hard time figuring out a way to display to the user that they entered an email already used when users first try to create an account without the 
app crashing. I had trouble with background sounds that are pressed and continuing to play after it is unpaused. I Had trouble playing and pausing the breathing sounds for the 
breathing exercises because it would still play breathe in or breathe out sounds when in the hold breathe state. I also faced the challenge of figuring out a way to create a virtual tree and placing the 
tree node leafs on random parts on the top of the tree bark. I had trouble keeping up with the changes made to the background color for each user who decides to change their background
and had diffuculty figuring out how to make sure an authenticated user is able to use the app and an unauthenticated user being navigated to 
the login screen if they try to navigate anywhere inside the web app

 


## License

    Copyright 2024 Abdul-Barr Mohammed

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0
