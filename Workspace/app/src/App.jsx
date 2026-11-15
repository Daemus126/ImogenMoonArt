import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Link, Route, Routes, useParams } from "react-router-dom";
import works from './data/work';
import WorkCards from './components/WorkCards';
import ArtCards from './components/ArtCards';
import { Footer } from './components/Footer';

const worksUrl = `${import.meta.env.BASE_URL}data/works.json`;




const selectedWorksKey = "programme-builder-selected-works";

function getIntitialSelectedWorks() {
  const saveSelectedIds = localStorage.getItem(selectedWorksKey);
  if (saveSelectedIds) {
    return JSON.parse(saveSelectedIds);
  }
  return [];
}


function scrollHome() {
  document.getElementById('scrollHome').scrollIntoView({
    behavior: 'smooth'
  });
  console.log("clcikScroll")
};

function scrollAboutMe() {
  document.getElementById('scrollAboutMe').scrollIntoView({
    behavior: 'smooth'
  });
  console.log("clcikScroll")
};

function scrollGallery() {
  document.getElementById('scrollGallery').scrollIntoView({
    behavior: 'smooth'
  });
  console.log("clcikScroll")
};

function scrollNews() {
  document.getElementById('scrollNews').scrollIntoView({
    behavior: 'smooth'
  });
  console.log("clcikScroll")
};



const latestWork = works.filter((work) => work.status === "latest");
const currentwork = works.filter((work) => work.collection === "Spoons");
const oldwork = works.filter((work) => work.status === "finished");

function App() {
  const [count, setCount] = useState(0)
  const [selectedIds, setSelectedIds] = useState(getIntitialSelectedWorks());



  function handleToggleSelect(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
      <Link to={`/work/${work.id}`}> View</Link>
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  return (
    <>

      <Routes>

        <Route
          path="/works/:workId"
          element={(
            <WorkDetail
              works={works}
              selectedIds={selectedIds}
              onToggleSelect={handleToggleSelect}
            />
          )}
        />
      </Routes>
      <Header />
      <ul className='navbar'>

        <li className='Home'><a onClick={() => { scrollHome() }}>Home</a></li>
        <li className='About'><a onClick={() => { scrollAboutMe() }}>About</a></li>
        <li className='Instagram'><a href="https://www.instagram.com/imogenmoonart/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li className='Commissions'><a href="https://form.jotform.com/253292922605054" target="_blank" rel="noopener noreferrer">Commissions</a></li>
        <li className='News'><a onClick={() => { scrollGallery() }}>Gallery</a></li>
        <li className='News'><a onClick={() => { scrollNews() }}>News</a></li>
      </ul>

      <div className='body' id='scrollHome'>

        <div className='currentwork'>
          <div className='lastest'>
            <h2>The Latest</h2>
          </div>

          {latestWork.map((work) =>
            <WorkCards
              key={work}
              id={work.id}
              title={work.title}
              status={work.status}
              year={work.year}
              collection={work.collection}
              published={work.published}
              role={work.role}
              summary={work.summary}
              techniques={work.techniques}
              intro={work.intro}
              poster={work.poster}
              posteralt={work.posteralt}
              isSelected={selectedIds.includes(work.id)}
              onToggleSelect={handleToggleSelect}
            />
          )
          }

        </div>


        <div className='currentwork'>
          <div className='current'>
            <h2>Spoon Theory Collection</h2>
          </div>
          <div className="project-Reel">
            <ul className="artul">
            <li className="artli">
              {currentwork.map((work) =>
                <ArtCards
                  key={work}
                  id={work.id}
                  title={work.title}
                  poster={work.poster}
                  posteralt={work.posteralt}
                  isSelected={selectedIds.includes(work.id)}
                  onToggleSelect={handleToggleSelect}
                />
              )
              }
            </li>
            </ul>
          </div>
        </div>

        <div className='aboutSection' id='scrollAboutMe'>
          <h2>About</h2>
          <p>Imogen is a 22-year-old artist, illustrator and printmaker from Leigh-on-Sea, Essex.

            She is a graduate of the University of Reading, with an honours BA in Fine Art, and begins her MA in Children’s Book Illustration at Goldsmiths this September.

            Her work explores chronic fatigue and pain and the impact of living with an invisible illness, such as Ulcerative Colitis. She aims to raise awareness through her art and to advocate for herself and others by helping people understand what it’s like to live with a chronic illness.

            Since graduating from the University of Reading in 2025:

            Taught in Peru with the Future Sense Foundation
            Artist in Residence at the Caversham Picture Framers
            Exhibition and Artist Talk “Aftershocks and Echoes”
            Organised and is currently running the “Printing Joy” Project

            To read Imogen’s 2025 Graduate Statement, click here.
            If you do not have Instagram but would like an insight into her process and practice, click here.</p>
        </div>

        <div className='GallerySection' id='scrollGallery'>
          <div className='lastest'> <h2>Gallery</h2>
          </div>
          <div className="project-Reel">
            <div className="art-grid">
              {works.map((work) =>
                <ArtCards
                  key={work}
                  id={work.id}
                  title={work.title}
                  poster={work.poster}
                  posteralt={work.posteralt}
                  isSelected={selectedIds.includes(work.id)}
                  onToggleSelect={handleToggleSelect}
                />
              )
              }
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

function WorkDetail({ works, selectedIds, onToggleSelect }) {
  const { workId } = useParams();
  return (
    <>
      <Link className="back-link" to="/">← Back to the archive</Link>
      <h2>{work.title}</h2>
    </>

  )
}

export default App;
