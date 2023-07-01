const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'all night instrumental',
        'name': 'all night instrumental.mp4',
        'duration': '3:50',
    },
    {
        'id': 'a2',
        'title': 'amore instrumental',
        'name': 'amore instrumental.mp4',
        'duration': '3:32',
    },
    {
        'id': 'a3',
        'title': 'all night instrumental',
        'name': 'all night instrumental.mp4',
        'duration': '3:50',
    },
    {
        'id': 'a4',
        'title': 'happier instrumental',
        'name': 'happier instrumental.mp4',
        'duration': '3:34',
    },
    {
        'id': 'a5',
        'title': 'let me love u',
        'name': 'let me love u.mp4',
        'duration': '3:27',
    },
    {
        'id': 'a6',
        'title': 'happier instrumental',
        'name': 'happier instrumental.mp4',
        'duration': '3:34',
    },
    {
        'id': 'a7',
        'title': 'amore instrumental',
        'name': 'amore instrumental.mp4',
        'duration': '3:32',
    },
    {
        'id': 'a8',
        'title': 'Taylor Swift -Ready For it',
        'name': 'Taylor Swift -Ready For It.mp4',
        'duration': '3:30',
    },
    {
        'id': 'a9',
        'title': 'all night instrumental',
        'name': 'all night instrumental.mp4',
        'duration': '3:50',

    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
