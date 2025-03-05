import './App.css';
import List from './CollegeBasketballTeams.json';

const CollegeTeamInfo = List.teams;

function Welcome() {
  return <h1>All NCAA Basketball Teams</h1>;
}

function CollegeTeam({
  school,
  name,
  city,
  state,
  backgroundcolor,
  textcolor,
  soicallink,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
  backgroundcolor?: string; // Add the color prop
  textcolor?: string;
  soicallink?: string;
}) {
  return (
    <a
      href={soicallink}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div
        className="card"
        style={{ backgroundColor: backgroundcolor, color: textcolor }}
      >
        <h2>{school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>
          Location: {city}, {state}
        </h3>
      </div>
    </a>
  );
}

function CollegeList() {
  return (
    <div className="card-container">
      {CollegeTeamInfo.map((singleTeam) => (
        <CollegeTeam {...singleTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <CollegeList />
    </>
  );
}

export default App;
