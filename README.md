# notArabic_nodeJs
My first project with node-Js Express and mongoDB
https://notarabic.herokuapp.com/api/

## about notArabic
  It's a dictionary for arabic public words 

## how supposed to work
   say if you don't know the meaning of certain word then you go to our website (coming soon) 
and then search about this word if you find the result then you will find more than 
one description with different rank 
if you don't find the word then you will add it and then ask others users to add description for it.
## how to run the App 
first you need to stup node-js 
secound you need to download mongodb and install it 

  and create new database with name "notArabic"
    
then you are ready to clone and run
first  clone  then run this command:

    npm install 
    
after finish installing   
make sure you in root dirctory where you could find  **index.js**  then run this command:

    node index 

case you use nodemon:

    nodemon index
then try on your browser 
http://localhost:3000/api/ 

you should see something like that 
    
    {
            msg: "this URL not found you can use",
            avaliapleUrls: [
                "api/login           POST",
                "api/signup          POST",
                "api/words           GET POST",
                "api/words?search    GET",
                "api/words/:id       GET",
                "api/words/:wordId/details              GET POST",
                "api/words/:wordId/details/:detailId    GET DELETE",
                "api/words/:wordId/details/:detailId/upvote    GET",
                "api/words/:wordId/details/:detailId/downvote    GET"
               
            ]
       }
 
 
 ### note 
      any thing other than get request need to be logged in "using Authorization  header"
      exaple: 
      Authorization : bearer <Token>
        
**let's try word api/words**
      
      [
    {
        "_id": "5d9494bc1937de0ca418f282",
        "word": "kareem",
        "__v": 4
    },
    {
        "_id": "5d98831eea02671dece547a0",
        "word": "hello world"
    },
    {
        "_id": "5d988340ea02671dece547a1",
        "word": "كريم حمدي"
    },
    {
        "_id": "5d9888d3ea02671dece547a2",
        "word": "كريم "
    },
    {
        "_id": "5d988912ea02671dece547a3",
        "word": " كريم احمد محمد"
    },
    {
        "_id": "5d98ad8b1024b54430fea9d9",
        "word": "hello ahmed ",
        "__v": 0
    }
    ]
    
 **try api/words/5d9494bc1937de0ca418f282**
    
    {
    "_id": "5d9494bc1937de0ca418f282",
    "word": "kareem",
    "details": [
        {
            "upVote": [],
            "downVote": [],
            "_id": "5d98d146e6f8473cf0495315",
            "discription": "this is description ",
            "example": "this is example",
            "author": "5d73a12b50ce573c8c01a2e0"
        }
    ],
    "__v": 5
    }
   
## what I'm using 
     node-js  Express mongodb  mongoose JWT Passport  MVC 
     
## TODO LIST
    better error handling
    add Testing 
    using docker
    use config file with better way
    Refactor and use best practices
    build Front-end with reactJs
    Build mobile application with React-Native
   
    
     
     
   
    
    
    
