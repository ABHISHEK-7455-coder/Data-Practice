import { useState } from "react";
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
    { id: 1001, title: "Ocean Eyes", duration: "120s", artist: "Billie Eilish", artistsId: 1 },
    { id: 1002, title: "Blinding Lights", duration: "200s", artist: "The Weeknd", artistsId: 2 },
    { id: 1003, title: "Bad Guy", duration: "190s", artist: "Billie Eilish", artistsId: 1 },
    { id: 1004, title: "God's Plan", duration: "215s", artist: "Drake", artistsId: 3 },
    { id: 1005, title: "7 Rings", duration: "170s", artist: "Ariana Grande", artistsId: 4 },
    { id: 1006, title: "Shape of You", duration: "240s", artist: "Ed Sheeran", artistsId: 5 },
    { id: 1007, title: "Lover", duration: "230s", artist: "Taylor Swift", artistsId: 6 },
    { id: 1008, title: "Circles", duration: "215s", artist: "Post Malone", artistsId: 7 },
    { id: 1009, title: "Levitating", duration: "200s", artist: "Dua Lipa", artistsId: 8 },
    { id: 1010, title: "Uptown Funk", duration: "270s", artist: "Bruno Mars", artistsId: 9 },
    { id: 1011, title: "Talk", duration: "210s", artist: "Khalid", artistsId: 10 },
    { id: 1012, title: "Shallow", duration: "215s", artist: "Lady Gaga", artistsId: 11 },
    { id: 1013, title: "Peaches", duration: "178s", artist: "Justin Bieber", artistsId: 12 },
    { id: 1014, title: "Señorita", duration: "205s", artist: "Shawn Mendes", artistsId: 13 },
    { id: 1015, title: "Lose You to Love Me", duration: "195s", artist: "Selena Gomez", artistsId: 14 },
    { id: 1016, title: "Believer", duration: "210s", artist: "Imagine Dragons", artistsId: 15 },
    { id: 1017, title: "Fix You", duration: "260s", artist: "Coldplay", artistsId: 16 },
    { id: 1018, title: "Memories", duration: "160s", artist: "Maroon 5", artistsId: 17 },
    { id: 1019, title: "Stay With Me", duration: "220s", artist: "Sam Smith", artistsId: 18 },
    { id: 1020, title: "Without Me", duration: "200s", artist: "Halsey", artistsId: 19 },
    { id: 1021, title: "Watermelon Sugar", duration: "175s", artist: "Harry Styles", artistsId: 20 }
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
        name: "Workout",
        songIds: [1004, 1008, 1016, 1018, 1020]
    }
];


export default function Songs() {
    const [selectedArtistId, setSelectedArtistId] = useState(1);
    const [selectedPlayListId, setSelectedPlayListId] = useState(1);

    const filterSongsByArtist = (artistId) => {
        return songs.filter(song => song.artistsId === artistId);
    };
    const filteredSongs = filterSongsByArtist(selectedArtistId);


    const filterPlaylist = (playlistid) => {
        return playlists.find(playlist => playlist.id === playlistid);
    };
    const filteredSongsByPlaylist = filterPlaylist(selectedPlayListId);
    const songsInPlaylist = songs.filter(song =>
        filteredSongsByPlaylist?.songIds?.includes(song.id)
    );
   console.log("songs that in playlis", songsInPlaylist);


    return (
        <div className="Container">
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <h2>Songs</h2>
                <div>
                    <select value={selectedArtistId} onChange={(e) => setSelectedArtistId(Number(e.target.value))}>
                        {artists.map((artist) => (
                            <option value={artist.id}>{artist.name}</option>
                        ))}
                    </select>
                </div>
                {filteredSongs.map(song => (
                    <div key={song.id}>
                        {song.title}
                    </div>
                ))}
                <select value={selectedPlayListId} onChange={(e) => setSelectedPlayListId(Number(e.target.value))}>
                    {playlists.map(playlist => (
                        <option key={playlist.id} value={playlist.id}>
                            {playlist.name}
                        </option>
                    ))}
                </select>
                {songsInPlaylist.map(song => (
                    <div key={song.id}>
                        {song.title}
                    </div>
                ))}
            </div>

            <div className="songs-container">

                {songs.map((song, index) => (
                    <div className="songs-card" key={index}>
                        {Object.entries(song).map(([key, value], index) => (
                            <div className="song-card" key={index}>
                                <div key={index}><strong>{key}: </strong> {value}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

// const search = document.getElementById("searchBar").value;
const filterSongs = songs.filter(song => {
    return (
        // song.artist === "Brillie Eilish" ||
        song.artistsId
    )
});
console.log("filtered songs by artist", filterSongs);

// 1. Filter songs by Artist A (artistId: 1)

// 2. Get all songs in the "Workout" playlist
const workOutPlaylist = playlists.find(playlist => (
    playlist.name === "Workout"
))
console.log("WorkOut Playlist", workOutPlaylist)
// 3. List all song titles longer than 3 minutes
// 4. Group songs by artist name
// 5. Total play time of all songs in "My Favorites" playlist

const totalDuration = workOutPlaylist.songIds.reduce((runningTotal, currentSongId) => {
    const currentSong = songs.find(song => song.id === currentSongId);
    const numericDuration = parseInt(currentSong.duration, 10)
    return runningTotal += numericDuration
}, 0)
console.log("Total duration",totalDuration)
