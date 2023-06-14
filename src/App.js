import "./App.css";
import Profile from "./components/user/Profile";

function App() {
  const company = {
    name: "Jubiwee",
    location: {
      city: "Paris",
      country: "FR",
    },
    description:
      "Jubiwee est une application web qui mesure automatiquement le ressenti des collaborateurs, détecte les signaux faibles et populations à risque. Elle génère également des plans d’actions pour donner aux managers les meilleures actions pour réduire le turnover, l’absentéisme et améliorer l’engagement dans leur équipe.",
    avatar: "https://dev.forinov.fr/pictures/incubateur/3/logo.jpg",
    background: "https://dev.forinov.fr/pictures/incubateur/3/crop_image.jpg",
    website: "https://www.demo.com/",
    socials: [
      {
        name: "facebook",
        link: "https://www.facebook.com/",
      },
      {
        name: "twitter",
        link: "https://twitter.com/",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/",
      },
      {
        name: "crunch-base",
        link: "https://www.crunchbase.com/",
      },
    ],
    category: "Ressources humaines",
    subcategories: ["Software", "HR"],
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#808080",
      }}
    >
      <div>
        <Profile company={company} />
      </div>
    </div>
  );
}

export default App;
