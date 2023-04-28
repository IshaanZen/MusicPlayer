console.log("Welcome to Spotify")

//initialize the variable
let songindex = 0;
let audioElement = new Audio ("../Images/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let previous= document.getElementById("previous");
let next= document.getElementById("next");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {songName: "Wonderful Tonight - Eric Clapton " ,  filePath: "../Images/songs/1.mp3" , coverPath:" ../Images/covers/1.jpg" } , 
    {songName: "layla Live - Eric Clapton (Japan 2009)" ,  filePath: "../Images/songs/2.mp3" , coverPath:" ../Images/covers/2.jpg" } , 
    {songName: "Comfortably Numb - Pink FLoyd" ,  filePath: "../Images/songs/3.mp3" , coverPath:" ../Images/covers/3.jpg" } , 
    {songName: "I Shot The Sherif - Eric clapton " ,  filePath: "../Images/songs/4.mp3" , coverPath:" ../Images/covers/4.jpg" } , 
    {songName: "Hotel California - The Eagles " ,  filePath: "../Images/songs/5.mp3" , coverPath:" ../Images/covers/5.jpg" } , 
    {songName: "No Surprises - Radiohead" ,  filePath: "../Images/songs/6.mp3" , coverPath:" ../Images/covers/6.jpg" } , 
    {songName: "Lynyrd Skynyrd - Free Bird" ,  filePath: "../Images/songs/7.mp3" , coverPath:" ../Images/covers/7.jpg" } , 
    {songName: "Wish You Were Here - Pink Floyd" ,  filePath: "../Images/songs/8.mp3" , coverPath:" ../Images/covers/8.jpg" } , 
    {songName: "Slow Dancing In a Burning Room - John Mayer" ,  filePath: "../Images/songs/9.mp3" , coverPath:" ../Images/covers/9.jpg" } , 
]

songItem.forEach((element , i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//handle Click of Playy and Pause
masterPlay.addEventListener("click" , ()=>{
    if(audioElement.paused || audioElement.currentTime<= 0 )
    {
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity=0;
    }
})


//Listen to Events
audioElement.addEventListener("timeupdate" , ()=>{
    console.log('time update')
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change" , ()=>{
    //by using basic logic - Avg = (current Progress / total Duration)*100
    // in this case = Current Progress = (Value of avg * total Duratin) / 100
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/100)
})

const makeAllPlays = ()=>{
    
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
        
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", (e)=>{
        makeAllPlays();
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        songindex = parseInt(e.target.id)
        audioElement.src = `../Images/songs/${songindex}.mp3`;
        masterSongName.innerText = songs[songindex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
    })
})

previous.addEventListener("click" , () =>{
    if(songindex<=1){
        songindex = 9;
    }
    else{  
        songindex -=1;
    }
    audioElement.src = `../Images/songs/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    
})

next.addEventListener("click" , () => {
    if(songindex>=9){
        songindex = 1;
    }
    else{  
        songindex +=1;
    }
    audioElement.src = `../Images/songs/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    
})

// Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
//     element.addEventListener("click" , (e)=>{
//         console.log(e.target);
//     })    
// });