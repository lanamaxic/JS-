const data = [
    {
        name: "John Doe",
        age: 32,
        gender: "Male",
        lookingfor: "Male",
        location: "Hololulu",
        image: "http://randomuser.me/api/portraits/men/69.jpg"
    },

    {
        name: "Samanatha Jones",
        age: 33,
        gender: "Female",
        lookingfor: "Male",
        location: "Hololulu",
        image: "http://randomuser.me/api/portraits/women/70.jpg"
    },

    {
        name: "Johnny Cash",
        age: 30,
        gender: "Male",
        lookingfor: 'Female',
        location: "Hololulu",
        image: "http://randomuser.me/api/portraits/men/70.jpg"
    }
]


const profiles = profileIterator(data)
//Call the first profile

//Next Event
document.getElementById('next').addEventListener('click', nextProfile)

//Event Handler : display the necxt profile
function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
    document.getElementById("profileDisplay").innerHTML = `
    <ul class= "list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender}</li>
    <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
    </ul>`

    document.getElementById("imageDisplay").innerHTML = `<img src="${currentProfile.image}">`}else{
        //No more profiles
        window.location.reload()
    }
}

//Profile Iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next : function(){
            return nextIndex < profiles.length ? 
            {value : profiles[nextIndex++], done: false}:
            {done: true}
        }
    }
}