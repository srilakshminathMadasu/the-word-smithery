const themes = [
  {
    title: "Power and Ambition",
    text: "The play asks a big question: how much power is too much? Caesar keeps getting more and more power. Some people think he wants to be king. The conspirators kill him because they are afraid of what he might become. The play shows that wanting too much power can be dangerous for everyone.",
  },
  {
    title: "Friendship and Betrayal",
    text: "Caesar and Brutus are close friends. But Brutus decides that saving Rome is more important than their friendship. When Caesar sees Brutus stabbing him, he is heartbroken. The play shows that betrayal from a friend hurts more than anything else.",
  },
  {
    title: "Fate vs. Free Will",
    text: "Many warnings tell Caesar not to go to the Senate. A soothsayer warns him, his wife has nightmares, and strange things happen in the city. But Caesar chooses to go anyway. The play makes us wonder if Caesar's death was already decided by fate or if he could have avoided it.",
  },
  {
    title: "Honor and Duty",
    text: "Brutus believes killing Caesar is the honorable thing to do. He says he loves Caesar but loves Rome more. The play makes us think about what honor really means. Is it honorable to kill your friend if you think it helps your country?",
  },
  {
    title: "Manipulation and Persuasion",
    text: "Cassius tricks Brutus into joining the conspiracy by writing fake letters. Antony uses his funeral speech to turn the crowd against the conspirators. The play shows how words can be used as weapons and how easy it is to change people's minds.",
  },
];

const Themes = () => (
  <section className="fade-section">
    <div className="border-b-4 border-double border-foreground mb-6 pb-2">
      <h2 className="font-headline text-3xl font-bold text-center">
        THEMES OF THE PLAY
      </h2>
      <p className="text-center text-sm text-accent font-headline">
        The Big Ideas Shakespeare Explored
      </p>
    </div>

    <div className="space-y-6">
      {themes.map((t, i) => (
        <div key={t.title} className={`${i > 0 ? "border-t border-rule pt-4" : ""}`}>
          <h3 className="font-headline text-xl font-bold mb-2">{t.title}</h3>
          <p className="text-sm leading-relaxed">{t.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Themes;
