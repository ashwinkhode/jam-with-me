import React, {useState} from 'react'
import './App.css';

const music = {
  Rock: [
    {
      name: "Shot in the Dark",
      author: "by - AC/DC",
      rating: "4.3/5",
      link: "https://open.spotify.com/track/6ZtrGCcn38kGImt2GPFbJB",
      art: 'https://c.saavncdn.com/914/Shot-In-The-Dark-English-2020-20201006082344-500x500.jpg'
    },
    {
      name: "Old Time Rock & Roll",
      author: "by - Michael Bolton",
      rating: "4.1/5",
      link: "https://open.spotify.com/track/7rIg7wSzCLvZBEPcFJgP2P?si=20lcwcIDSxejovpO8XstBA",
      art: 'https://c.saavncdn.com/674/Old-Time-Rock-Roll-English-2017-500x500.jpg'
    },
    {
      name: "Hero",
      author: "by - Skillet",
      rating: "4/5",
      link: 'https://open.spotify.com/track/4CbKVDZkYKdv69I4bCaKUq?si=dE_Yxx7HRtyKMVzApZmhyQ',
      art: 'https://c.saavncdn.com/732/Awake-English-2009-500x500.jpg'
    }
  ],
  Hiphop: [
    {
      name: "Blinding Lights",
      author: "by - The Weeknd",
      rating: "4.7/5",
      link: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b?si=niiokZcTSg2lQ4SJkrbRtQ",
      art: 'https://c.saavncdn.com/167/Blinding-Lights-English-2019-20191128231033-500x500.jpg'
    },
    {
      name: "Mood",
      author: "by - 24kgoldn, Iann Dior",
      rating: "4.5/5",
      link: "https://open.spotify.com/track/3tjFYV6RSFtuktYl3ZtYcq?si=JUBlHJQeRw-HvICg_Shlkg",
      art: 'https://c.saavncdn.com/302/Mood-English-2020-20200722220820-500x500.jpg'
    },
    {
      name: "Tommy Lee",
      author: "by - Tyla Yaweh, Post Malone",
      rating: "4.5/5",
      link: "https://open.spotify.com/track/4wDGADdtM4Y9BYl8THgaFr?si=6XKqlgD1RWetAOCW8kFHQg",
      art: 'https://c.saavncdn.com/155/Tommy-Lee-English-2020-20200618111748-500x500.jpg'
    }
  ],
  Pop: [
    {
      name: "Monster",
      author: "by - Shawn Mendes, Justin Bieber",
      rating: "4.8/5",
      link: "https://open.spotify.com/track/2Z8yfpFX0ZMavHkcIeHiO1?si=JXA6yMCFTOWK2fRpmeEPHQ",
      art: 'https://c.saavncdn.com/362/Monster-English-2020-20201120104411-500x500.jpg'
    },
    {
      name: "Prisoner",
      author: "by - Dua Lipa, Miley Cyrus",
      rating: "4.5/5",
      link: "https://open.spotify.com/track/5JqZ3oqF00jkT81foAFvqg?si=SIBNAULiQC6cE3zS2jO9Ig",
      art: 'https://c.saavncdn.com/518/Prisoner-English-2020-20201118121753-500x500.jpg'
    },
    {
      name: "Kings & Queens",
      author: "by - Ava Max",
      rating: "4.2/5",
      link: "https://open.spotify.com/track/76nqCfJOcFFWBJN32PAksn?si=272UfAqGToGPKCkv6Rt_ug",
      art: 'https://c.saavncdn.com/258/Kings-Queens-English-2020-20200312180116-500x500.jpg'
    }
  ],
  Kpop: [
    {
      name: "Dynamite",
      author: "by - BTS",
      rating: "4.7/5",
      link: "https://open.spotify.com/track/0t1kP63rueHleOhQkYSXFY?si=sAS6t1JiQdmqLrMHf_-bQA",
      art: 'https://c.saavncdn.com/918/Dynamite-Daytime-Version--English-2020-20200916220042-500x500.jpg'
    },
    {
      name: "Likey",
      author: "by - TWICE",
      rating: "4.6/5",
      link: "https://open.spotify.com/track/4P66rfizAl2nIJCICSMymC?si=ozKa6UnXR4mi4t5Z-D67wQ",
      art: 'https://c.saavncdn.com/021/Twicetagram-Korean-2020-20200301000825-500x500.jpg'
    },
    {
      name: "What is love?",
      author: "by - TWICE",
      rating: "4.5/5",
      link: "https://open.spotify.com/track/1IX47gefluXmKX4PrTBCRM?si=XBE32ORjRgaDBgFLjtMr3w",
      art: 'https://c.saavncdn.com/137/What-Is-Love-Korean-2020-20200301000823-500x500.jpg'
    }
  ],
  Jazz: [
    {
      name: "Open Waters",
      author: "by - Jacob Karlzon",
      rating: "4.5/5",
      link: "https://open.spotify.com/track/15YO3M0kg8cJdZWZvt2y5a?si=Z7PK3O7EQNeO13NPxT9lPA",
      art: 'https://c.saavncdn.com/821/Open-Waters-English-2019-20190531060154-500x500.jpg'
    },
    {
      name: "The Garden",
      author: "by - Brad Mehldau",
      rating: "4.2/5",
      link: "https://open.spotify.com/track/31Ur5jUStZVd6G27AKU0bp?si=ShAw7_CSSO2AKULOdCUnww",
      art: 'https://c.saavncdn.com/050/The-Garden-English-2019-20190402060815-500x500.jpg'
    },
    {
      name: "Playing With The Wind",
      author: "by - Salvador Sobral",
      rating: "4/5",
      link: "https://open.spotify.com/track/1CL4PuJFDSxn013PgLXek2?si=TCIYOgSFRSaigOD-r30dng",
      art: 'https://c.saavncdn.com/264/Paris-Lisboa-Portuguese-2019-20190329060448-500x500.jpg'
    }
  ]
};

function App() {

  const [genre, setGenre] = useState("Rock")
  const genres = Object.keys(music)

  function genreHandler(genre) {
    setGenre(genre.target.innerHTML)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jam w/ me | My Song Recommendations</h1>
        <p>“Music is the soundtrack of your life.” – Dick Clark</p>
      </header>
      <div className="genres">
        {
          genres.map((genre) => {
            return (<button key={genre} onClick={genreHandler}>{genre}</button>)
          })
        }
      </div>
      <div className="songList">
        <ul>
          {
            (music[genre]).map((song) =>
              <li key={song.name} className='song'>
                <div className="songLeft">
                  <span className="songName">{song.name}</span>
                  <span className="songAuthor">{song.author}</span>
                  <span className="songRating">⭐ {song.rating}</span>
                  <button className="songLink"><a href={song.link}>Play</a></button>
                </div>
                <div className="songRight">
                  <div className="albumArt"><img src={song.art} alt={song.name} /></div>
                </div>
              </li>)
          }
        </ul>
      </div>
      <div className="footer">
        Made with ❤ by <a href="https://github.com/ashwinkhode">Ashwin Khode</a>
      </div>
    </div>
  );
}


export default App;
