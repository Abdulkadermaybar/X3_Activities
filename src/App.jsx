import Activities from './components/Activities';
import './App.css';

const activities = [
  {
    title: "Sports and Athletics",
    description: "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    icon: "⚡"
  },
  {
    title: "Art and Creativity",
    description: "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    icon: "✏️"
  },
  {
    title: "Music and Performing Arts",
    description: "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    icon: "🎶"
  },
  {
    title: "Language Clubs",
    description: "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
    icon: "🌍"
  },
  {
    title: "Science Club",
    description: "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    icon: "🔬"
  },
  {
    title: "Cooking and Culinary Arts",
    description: "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    icon: "🍳"
  },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Our Features</h1>
      </header>
      <Activities activities={activities} />
    </div>
  );
}

export default App;