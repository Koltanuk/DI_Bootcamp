class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}

const video1 = new Video("JavaScript Tutorial", "John Doe", 300);
video1.watch();

const video2 = new Video("CSS Tricks", "Jane Smith", 150);
video2.watch();

const videoData = [
    { title: "HTML Basics", uploader: "Alice", time: 200 },
    { title: "React Guide", uploader: "Bob", time: 600 },
    { title: "Node.js Overview", uploader: "Charlie", time: 400 },
    { title: "Vue.js Introduction", uploader: "Dave", time: 350 },
    { title: "Python Programming", uploader: "Eve", time: 450 }
];

const videos = [];

videoData.forEach(data => {
    const video = new Video(data.title, data.uploader, data.time);
    videos.push(video);
    video.watch(); 
});