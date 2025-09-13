import "./HomePage.css"

const data = {
    header: [
        {
            logo: "COMPANY NAME",
            navBar: ["Home", "About Us", "Portfolio", "Blog", "Contact"]
        }
    ],
    hero: [{
        firstPara: "WE ARE HERE TO",
        lastPara: "BUILD BUISENESS"
    }],
    cards: [
        {
            title: "BUSINESS SOLUTIONS",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "MARKET RESEARCH",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            title: "BUSINESS STRATEGY",
            para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ],
}

export default function HomePage() {
    return (
        <div style={{ marginTop: "20px", padding:"50px", backgroundColor:"black" }}>
            <header>
                {data.header.map((ele) => (
                    <div className="header-container">
                        <div className="logo">{ele.logo}</div>
                        <div className="navs">
                            {ele.navBar.map((navs) => (
                                <a href="" className="nav">{navs}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </header>
            <hero className="hero">
                {data.hero.map((hero) => (
                    <div className="hero-container">
                        <div className="first-para">{hero.firstPara}</div>
                        <div className="last-para">{hero.lastPara}</div>
                        <button className="btn">Click Here</button>
                    </div>
                ))}
            </hero>
            <main>
                <div className="main-container">
                    {data.cards.map((card) => (
                        <div className="cards">
                            <div className="card-title">
                                {/* {Object.entries(card).map(([key, value]) => (
                                <div>{value}</div>
                        ))} */}
                                {card.title}
                            </div>
                            <div className="card-para">{card.para}</div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

const books = [
    { title: "1984", author: "Orwell" },
    { title: "Sapiens", author: "" },
    { title: "Atomic Habits", author: "James Clear" }
];

const movies = [
    {
        title: "CutPutli",
        director: "Rakesh Roshan",
        yearRealeased: 2022,
        generes: ["Thriller","Action"],
        isSequel: false
    },
    {
        title: "Dhamaal",
        director: "Boni Kapoor",
        yearRealeased: 2013,
        generes: ["Comedy","Action"],
        isSequel: true
    }
]


const students = [
    {
        id:"01",
        name:"abc"
    },
    {
        id:"02",
        name:"def"
    },
]

const teachers = [
    {
        id:"1",
        name:"xyz",
    },
    {
        id:"2",
        name:"xyz",
    },
]

const subjects = [
    {
        id:"11",
        name:"Web Development"
    },
    {
        id:"22",
        name:"DAA"
    }
]

const Teachers = [
  { id: 1, name: "Mrs. Smith" },
  { id: 2, name: "Mr. Johnson" }
];

const Subjects = [
  { id: 101, title: "Math", teacherId: 1 },
  { id: 102, title: "History", teacherId: 2 }
];

const Students = [
  { id: 201, name: "Alice", enrolledCourseIds: [101, 102] },
  { id: 202, name: "Bob", enrolledCourseIds: [102] }
];


const artist = [
    {
        id:1,
        name:"arijit",
    },
    {
        id:2,
        name:"Moose wala",
    }
]
const songs = [
    {
        id:3,
        name:"xyz",
        artistId: 1
    },
    {
        id:4,
        name:"xyz",
        artistId: 2
    }
]
const playlists = [
    {
        id:5,
        name:"abc",
        addedSongId:[3,4]
    },
    {
        id:6,
        name:"abc",
        addedSongId:[4]
    }
]