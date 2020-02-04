const http = new EasyHTTP;
let counter = 1;
let proxy = 'https://cors-anywhere.herokuapp.com/'

// Get Users
http.get('https://api.github.com/users')
  .then(val => {
      let tasks = [];

      if(localStorage.getItem('tasks') === null){
        tasks = []
      }
  }
     
  

    
