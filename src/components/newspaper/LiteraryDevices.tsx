const devices = [
  {
    name: "Simile",
    definition: "A comparison using 'like' or 'as.'",
    example: "Caesar says the danger and him are \"like two lions littered in one day.\" He compares himself and danger to two lion cubs born at the same time. He is saying he is just as strong as any danger.",
  },
  {
    name: "Metaphor",
    definition: "A comparison that says something IS something else.",
    example: "Brutus says Caesar is a \"serpent's egg\" that must be crushed before it hatches. He does not mean Caesar is really an egg. He means Caesar could become dangerous if they let him grow more powerful.",
  },
  {
    name: "Irony",
    definition: "When something happens that is the opposite of what you expect.",
    example: "Brutus says he killed Caesar because Caesar was too ambitious. But after the killing, it is actually Brutus and Cassius who start a war. The people trying to save Rome end up destroying it.",
  },
  {
    name: "Dramatic Irony",
    definition: "When the audience knows something the characters do not.",
    example: "The audience knows that the conspirators are planning to kill Caesar, but Caesar does not know. When Caesar goes to the Senate, the audience feels tense because they know what is about to happen.",
  },
  {
    name: "Foreshadowing",
    definition: "Hints about what will happen later in the story.",
    example: "The soothsayer says, \"Beware the Ides of March.\" Calpurnia has dreams of Caesar's statue bleeding. These are all hints that Caesar is going to die. Shakespeare gives us clues before it happens.",
  },
  {
    name: "Personification",
    definition: "Giving human qualities to things that are not human.",
    example: "Cassius says that the \"fault is not in our stars, but in ourselves.\" He talks about the stars as if they could control people's lives. He gives the stars a human power to decide fate.",
  },
  {
    name: "Allusion",
    definition: "A reference to something well-known from history or literature.",
    example: "The whole play is an allusion to real Roman history. Shakespeare took the real story of Caesar's assassination and turned it into a play. He changed some details, but the main events really happened.",
  },
  {
    name: "Rhetorical Question",
    definition: "A question asked to make a point, not to get an answer.",
    example: "Antony asks, \"Did this in Caesar seem ambitious?\" He does not want an answer. He wants the crowd to think about it and realize that Caesar was not really ambitious. It is a sneaky way of changing their minds.",
  },
  {
    name: "Hyperbole",
    definition: "An exaggeration used to make a point.",
    example: "Antony says Caesar's wounds are like \"poor, poor dumb mouths\" that speak for him. He is exaggerating to make the crowd feel sorry for Caesar and angry at the conspirators.",
  },
];

const LiteraryDevices = () => (
  <section className="fade-section">
    <div className="border-b-4 border-double border-foreground mb-6 pb-2">
      <h2 className="font-headline text-3xl font-bold text-center">
        LITERARY DEVICES
      </h2>
      <p className="text-center text-sm text-accent font-headline">
        How Shakespeare Made His Words Powerful
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {devices.map((d) => (
        <div key={d.name} className="border border-foreground p-4">
          <h3 className="font-headline text-lg font-bold text-accent">{d.name}</h3>
          <p className="text-xs italic text-muted-foreground mb-2">{d.definition}</p>
          <p className="text-sm leading-relaxed">{d.example}</p>
        </div>
      ))}
    </div>
  </section>
);

export default LiteraryDevices;
