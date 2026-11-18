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
const collectionspoon = works.filter((work) => work.collection === "Spoons");
const collectionspoonslice = collectionspoon.slice(4)
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
      <Header />
      <ul className='navbar'>

        <li className='Home'><a onClick={() => { scrollHome() }}>Home</a></li>
        <li className='About'><a onClick={() => { scrollAboutMe() }}>About</a></li>
        <li className='Instagram'><a href="https://www.instagram.com/imogenmoonart/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li className='Commissions'><a href="https://form.jotform.com/253292922605054" target="_blank" rel="noopener noreferrer">Commissions</a></li>
        <li className='News'><a onClick={() => { scrollGallery() }}>Gallery</a></li>
        <li className='News'><a onClick={() => { scrollNews() }}>News</a></li>
      </ul>


      <Routes>
  <Route
            path="/"
            element={(
              <Home
                works={works}
                selectedIds={selectedIds}
                onToggleSelect={handleToggleSelect}
              />
            )}
          />
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
    
     
      <Footer />
    </>
  )
}



function Home ({ works, selectedIds, onToggleSelect }) {
  function handleToggleSelect(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
      <Link to={`/work/${work.id}`}> View</Link>
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }


return(
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
            <h2>Collection: Spoon Theory</h2>
          </div>
          <div className="project-Reel">
             <div className='seemore'> 
            <ul className="artul">
              <li className="artli">
                {collectionspoonslice.map((work) =>
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
        </div>

        <div className='aboutSection' id='scrollAboutMe'>
          <div className='abouttext'>
            <h2>About Me</h2>
            <p>Imogen is a 22-year-old artist, illustrator and printmaker from Leigh-on-Sea, Essex.

              She is a graduate of the University of Reading, with an honours BA in Fine Art, and begins her MA in Children’s Book Illustration at Goldsmiths this September.
          </p><p>
              Her work explores chronic fatigue and pain and the impact of living with an invisible illness, such as Ulcerative Colitis. She aims to raise awareness through her art and to advocate for herself and others by helping people understand what it’s like to live with a chronic illness.
</p><p>
              Since graduating from the University of Reading in 2025:
</p><p> <ul>
              <li>Taught in Peru with the Future Sense Foundation</li>
             <li>Artist in Residence at the Caversham Picture Framers</li> 
             <li> Exhibition and Artist Talk “Aftershocks and Echoes”</li> 
             <li> Organised and is currently running the “Printing Joy” Project</li> 
</ul>
              To read Imogen’s 2025 Graduate Statement, click here.
              If you do not have Instagram but would like an insight into her process and practice, click here.</p>
          </div>
          <div className='aboutimgdiv'>

            <img src="src/assets/Profile.jpg" alt="Imogen Moon Profile" className='aboutimg' />
          </div>
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



  )}

function WorkDetail({ works, selectedIds, onToggleSelect }) {
  const { workId } = useParams();

  const work = works.find((candidate) => candidate.id === workId);
  return (
    <>
    <div className='workdiv'> 
        <Link className="back-link" to="/">← Back to Main Page</Link>
      <div className='workimg'>
       {work.poster ? (
                            <img className="film-card__poster" src={work.poster} alt={work.posteralt} />
                        ) : (
                            <div className="film-card__poster film-card__poster--missing">
                               
                            </div>
                        )}
                        </div>
      <div className='worktext'>
      <h2>{work.title}</h2>
      <h3>{work.summary}</h3>
         {work.role} · {work.year} · {work.collection}
      <p> {work.parapgraph}</p>
      </div>

      </div>

    

    
    </>

  )
}

export default App;
