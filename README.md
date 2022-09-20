# Xenonstack
# Pre-requisites:
1) Nodejs
2) MongoDB



1) Open the terminal, enter `npm i` to install all the dependencies
2) To launch the server, enter command `nodemon start`.

![image](https://user-images.githubusercontent.com/68241382/191223311-7ba2d78b-39bb-4761-96f3-39caff032c24.png)

# To register the user:
![image](https://user-images.githubusercontent.com/68241382/191223473-8bc5d3cb-4ad1-466b-adce-3a8e839bebd0.png)

1) Click on signup button on the top right corner.
2) Enter your details and click submit.


As soon as the user clicks on submit, the form data containing username, email, password and confirm password is sent to the server via request object. 
At the serverside, we access the form data through the incoming request.body object.
Now first we check whether the password matches the confirm password, if it doesnot we send it back to the signup page, otherwise we moveon to the next step wherein we check if any user with the specified email ID exists or not, if it does, we send it back to the signup page, otherwise we moveon to the next step wherein we register the user. After which user.save() method is called before which due to our custom middleware which we have set in the user model our password gets encrypted using bcrypt library (using 10 salt rounds).
![image](https://user-images.githubusercontent.com/68241382/191223899-3e12ec78-6985-4717-ab11-4613ccff78e3.png)

Because of password encryption, the password doesnot get exposed even if someone gets access to our database.
![image](https://user-images.githubusercontent.com/68241382/191224074-1766617a-3133-4557-bb11-f40503b25f89.png)


# To Login the user:
![image](https://user-images.githubusercontent.com/68241382/191223510-648d0348-8231-4386-9842-ad0944595bba.png)

1) Click on Sign in button on the top right corner.
2) Enter your details and click submit.

![image](https://user-images.githubusercontent.com/68241382/191224244-0fabc694-ae35-4397-a091-d751b44ce5dd.png)

As soon as the user clicks on submit the form data containing email and password is sent to the server via request object. 
At the serverside, we access the form data through the incoming request.body object.
Now first we check if any user with the specified email ID exists or not, if it doesnot, we send it back to the signin page, otherwise we moveon to the next step wherein we check if the password matches or not using bcrypt.compare() method,

![image](https://user-images.githubusercontent.com/68241382/191224409-a03148fa-a4d4-4744-aefa-39bb0c3b6009.png)

which compares the password from the request object with the encrypted password which we have saved in our database and returns true or false respectively. If it returns true then we send a cookie from the server side.

![image](https://user-images.githubusercontent.com/68241382/191224536-3aaa0279-3cda-42cc-b9d6-810f18a2905f.png)

After this the user gets redirected to the profile page, before which we extract the user from request.cookies.

![image](https://user-images.githubusercontent.com/68241382/191224762-54a646f8-b7d7-4a37-8b8b-bbcadeb018d0.png)


# To log out
![image](https://user-images.githubusercontent.com/68241382/191223526-9b42bc46-cbae-470d-8f7f-18f7f67f98d0.png)

1) Click on Log out button on the top right corner.


As soon as the user clicks on Logout button we simply remove the cookie from the request object and redirect the user to the sign in page.
![image](https://user-images.githubusercontent.com/68241382/191224870-2aa721d8-730b-408a-9d9a-4aa39382e830.png)

# To Contact us
![image](https://user-images.githubusercontent.com/68241382/191223539-662c9426-c8f1-4e36-8074-b2d3f8c462dd.png)

1) Click on Contact us button on the top right corner.
![image](https://user-images.githubusercontent.com/68241382/191225187-57cef766-41eb-4307-b291-60c26c7abac7.png)

