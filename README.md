# Welcome to 'Upload Image' ReadMe!
'Upload Image' is a hybrid application (both web and mobile responsive) designed for the users to upload their pictures in a gallery view as well as analyzing their pictures using IBM Visual Recognition to identify the objects in the pictures. It was built using a React Native framework, incorporating some CSS styling elements alongside heavy JavaScript. Firebase was used as a temporary back-end server to store the images the users uploaded, and it was used to allow us to display the images back onto the User Interface.

## Design Flow
* Allows user to upload image - 	:white_check_mark:
* Displays user's uploaded image in a grid (gallery) view - 	:white_check_mark:
* Analyzes user's uploaded image using IBM Visual Recognition to determine object type - Work in progress :weight_lifting_man:

## Framework Used
* React Native

## Problems Faced
* One of the major problems faced was 'Access-Control-Allow-Origin' (CORS Origin) caused by authentication / security reasons when I was trying to carry out authentication from my local server - UPDATE: It took up a lot of time, but eventually resolved by installing an 'Allow CORS: Access-Control' chrome extension - 	:white_check_mark:
* Encountered 'TypeError: multipartForm.getHeaders' when trying to access JSON file generated in console.log, works fine when I execute curl command from terminal directly, but encounters error as mentioned above when I try to integrate this into my application - Unresolved at the moment - :x:


### How the application looks like using mobile

![Mobile View](https://github.com/yellow-fellow/UploadImage/blob/master/Mobile_View.png)

### How the application looks like using web

![Web View](https://github.com/yellow-fellow/UploadImage/blob/master/Web_View.png)
