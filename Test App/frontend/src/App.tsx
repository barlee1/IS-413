import "./App.css";

const bandNames = [
  {
    name: "Dire Straits",
    members: "Mark Knopfler, David Knopfler, John Illsley",
    formed: 1977,
  },
  { name: "R.E.M.", members: "Micheal Stripe, Peter Buck", formed: 1980 },
  {
    name: "Collective Soul",
    members: "Ed Roland, Dean Roland, Daivd Neal, Ross Childress",
    formed: 1992,
  },
];

function Welcome() {
  return <h1>Criminally Underrated Bands</h1>;
}

function Band({
  name,
  members,
  formed,
}: {
  name: string;
  members: string;
  formed: number;
}) {
  return (
    <>
      <img />
      <h2>Name: {name}</h2>
      <h3>Original Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList() {
  return (
    <>
      {bandNames.map((singleBand) => (
        <Band {...singleBand} />
      ))}
    </>
  );
}
function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
