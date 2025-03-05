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
}: {
  school: string;
  name: string;
  city: string;
  state: string;
  backgroundcolor?: string; // Add the color prop
  textcolor?: string;
}) {
  return (
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
