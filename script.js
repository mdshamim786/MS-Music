function playSong(src, title) {
  const audioPlayer = document.getElementById('audio-player');
  const audioSource = document.getElementById('audio-source');
  const songTitle = document.getElementById('song-title');

  audioSource.src = src;
  songTitle.textContent = title;
  audioPlayer.load();
  audioPlayer.play();
}
