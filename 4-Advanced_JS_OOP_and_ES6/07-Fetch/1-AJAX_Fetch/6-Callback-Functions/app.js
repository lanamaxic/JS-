// const posts = [{
//     title: "Post one",
//     body: "This is an amazing post one"
// },
// {
//     title: "Post two",
//     body: "This is an amazing post two"
// }]

// //Asynchronized Callback Function
// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }, 1000);
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = "";
//         posts.forEach(function(item){
//             output += `<li>${item.body}</li>`
//         });
//         document.body.innerHTML = output
//     }, 3000)
// };

// let p1= {title: 'Post three',
// body: "This is an amazing post three"}
// createPost(p1)
// getPosts()


//CALLBACK functions
// function createPost(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback() //is like callback() = getPosts()
//     }, 2000)
// }
// function getPosts(){
//     setTimeout(function(){
//         let output = ''; //it's only visible inside setTimeout, not in getPost()
//         posts.forEach(function(item){
//             output += `<li>${item.body}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000)
// };
// let p1 = {title: 'Post three', body: 'This is amazing post three'};
// createPost(p1, getPosts);
// //getPosts(); //This functions worked here in a SYNCHRONIZED way
// Collapse








