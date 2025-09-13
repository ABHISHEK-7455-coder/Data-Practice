import "./songs.css"

const artists = [
  { id: 1, name: "Billie Eilish" },
  { id: 2, name: "The Weeknd" },
  { id: 3, name: "Drake" },
  { id: 4, name: "Ariana Grande" },
  { id: 5, name: "Ed Sheeran" },
  { id: 6, name: "Taylor Swift" },
  { id: 7, name: "Post Malone" },
  { id: 8, name: "Dua Lipa" },
  { id: 9, name: "Bruno Mars" },
  { id: 10, name: "Khalid" },
  { id: 11, name: "Lady Gaga" },
  { id: 12, name: "Justin Bieber" },
  { id: 13, name: "Shawn Mendes" },
  { id: 14, name: "Selena Gomez" },
  { id: 15, name: "Imagine Dragons" },
  { id: 16, name: "Coldplay" },
  { id: 17, name: "Maroon 5" },
  { id: 18, name: "Sam Smith" },
  { id: 19, name: "Halsey" },
  { id: 20, name: "Harry Styles" }
];

const songs = [
  { id: 1001, title: "Ocean Eyes", duration: "210s", artist: "Billie Eilish" },
  { id: 1002, title: "Blinding Lights", duration: "200s", artist: "The Weeknd" },
  { id: 1003, title: "Bad Guy", duration: "190s", artist: "Billie Eilish" },
  { id: 1004, title: "God's Plan", duration: "215s", artist: "Drake" },
  { id: 1005, title: "7 Rings", duration: "180s", artist: "Ariana Grande" },
  { id: 1006, title: "Shape of You", duration: "240s", artist: "Ed Sheeran" },
  { id: 1007, title: "Lover", duration: "230s", artist: "Taylor Swift" },
  { id: 1008, title: "Circles", duration: "215s", artist: "Post Malone" },
  { id: 1009, title: "Levitating", duration: "200s", artist: "Dua Lipa" },
  { id: 1010, title: "Uptown Funk", duration: "270s", artist: "Bruno Mars" },
  { id: 1011, title: "Talk", duration: "210s", artist: "Khalid" },
  { id: 1012, title: "Shallow", duration: "215s", artist: "Lady Gaga" },
  { id: 1013, title: "Peaches", duration: "198s", artist: "Justin Bieber" },
  { id: 1014, title: "Señorita", duration: "205s", artist: "Shawn Mendes" },
  { id: 1015, title: "Lose You to Love Me", duration: "195s", artist: "Selena Gomez" },
  { id: 1016, title: "Believer", duration: "210s", artist: "Imagine Dragons" },
  { id: 1017, title: "Fix You", duration: "260s", artist: "Coldplay" },
  { id: 1018, title: "Memories", duration: "190s", artist: "Maroon 5" },
  { id: 1019, title: "Stay With Me", duration: "220s", artist: "Sam Smith" },
  { id: 1020, title: "Without Me", duration: "200s", artist: "Halsey" },
  { id: 1021, title: "Watermelon Sugar", duration: "175s", artist: "Harry Styles" }
];


const playlists = [
  {
    id: 900,
    name: "Chill Vibes",
    songIds: [1001, 1003, 1007, 1011, 1019]
  },
  {
    id: 901,
    name: "Party Hits",
    songIds: [1002, 1005, 1006, 1009, 1010, 1021]
  },
  {
    id: 902,
    name: "My Favourites",
    songIds: [1012, 1013, 1014, 1015, 1017]
  },
  {
    id: 903,
    name: "Workout Mix",
    songIds: [1004, 1008, 1016, 1018, 1020]
  }
];


export default function Songs(){
    return(
        <div className="Container">
            <div style={{display:'flex', justifyContent:"space-around"}}>
                <h2>Songs</h2>
                <h3>Filter</h3></div>
               
            <div className="songs-container">
                
            {songs.map((song) => (
                <div className="songs-card">
                    {Object.entries(song).map(([key, value]) => (
                        <div className="song-card">
                            <div><strong>{key}: </strong> {value}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </div>
    )
}
// 1. Filter songs by Artist A (artistId: 1)
// 2. Get all songs in the "Workout" playlist
// 3. List all song titles longer than 3 minutes
// 4. Group songs by artist name
// 5. Total play time of all songs in "My Favorites" playlist
