const musicContainer = document.getElementById('music-container');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ['hey', 'summer', 'ukulele'];
let songIndex = 1;

const getSongTitles = (song) => {
    return song.charAt(0).toUpperCase() + song.slice(1);
}

const loadSong = (song) => {
    title.innerText = getSongTitles(song);
    audio.src = `https://github.com/bradtraversy/vanillawebprojects/blob/master/music-player/music/${song}.mp3?raw=true`;
    cover.src = `https://github.com/bradtraversy/vanillawebprojects/blob/master/music-player/images/${song}.jpg?raw=true`;
}

const playSong = () => {
    musicContainer.classList.add('play');
    playButton.querySelector('i.fas').classList.remove('fa-play');
    playButton.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

const pauseSong = () => {
    musicContainer.classList.remove('play');
    playButton.querySelector('i.fas').classList.remove('fa-pause');
    playButton.querySelector('i.fas').classList.add('fa-play');
    audio.pause();
}

const prevSong = () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

const nextSong = () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

const updateProgress = (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

const setProgress = (e) => {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playButton.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    isPlaying ? pauseSong() : playSong();
})

prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

loadSong(songs[songIndex]);