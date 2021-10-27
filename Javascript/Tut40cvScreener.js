//````````````````````` Cv Screener projects `````````````````````
console.log("This is CV Screener");
let data = [
  {
    name: "Rohan Das",
    age: 19,
    city: "Kolkata",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Shubham ",
    age: 24,
    city: "Bangalore",
    language: "Javascript",
    framework: "Bootstrap",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    name: "Aishwarya",
    age: 31,
    city: "Mumbai",
    language: "Go",
    framework: "",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohit",
    age: 32,
    city: "Jarkhand",
    language: "C++",
    framework: "All",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
  },
  {
    name: "Amulya",
    age: 25,
    city: "Delhi",
    language: "Learn R",
    framework: "R",
    image: "https://randomuser.me/api/portraits/women/99.jpg",
  },
];

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex<profiles.length-1 ? { 
        nextIndex,
        value:profiles[nextIndex++] ,
        done:false,
      } : {
        value:profiles[nextIndex],
        nextIndex,
        nextIndexReset:nextIndex=0,
        done:true,
      }
    }
  }
}

let next=document.querySelector('#next')
let image=document.querySelector('#image')
let profile=document.querySelector('#profile')
next.addEventListener('click',nextCv)
let candidates= cvIterator(data);
nextCv()
function nextCv(){
  candidate=candidates.next()
  let endOfCandidate=candidate.nextIndex;
  console.log(endOfCandidate);
  candidate=candidate.value;
  console.log(candidate);
  
  image.innerHTML=`<img class="img-thumbnail img-fluid" src=" ${candidate.image}" alt="wait..."> `
  profile.innerHTML=`<ul class="list-group my-3">  
  <li class="list-group-item text-left">myself ${candidate.name}</li>
    <li class="list-group-item">${candidate.age} years old</li>
    <li class="list-group-item">Lives in ${candidate.city}</li>
    <li class="list-group-item">primarily work on ${candidate.language}</li>
    <li class="list-group-item">with ${candidate.framework} framework</li>
    </ul>`
    if (endOfCandidate==4) {
        setTimeout(() => {
        alert('End of applications');
        console.log('End of applications');
      }, 10);
      }
}
