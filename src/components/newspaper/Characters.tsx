const characters = [
  {
    name: "Julius Caesar",
    role: "Dictator of Rome",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cesar-SA_Inv._713.jpg/440px-Cesar-SA_Inv._713.jpg",
    desc: "Caesar is the most powerful man in Rome. He has won many wars and the common people love him. But the senators think he wants to be king. He is proud and sometimes ignores warnings. His death is the main event of the play.",
  },
  {
    name: "Marcus Brutus",
    role: "Senator, Conspirator",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Brutus_MAN_Napoli_Inv6178_n01.jpg/440px-Brutus_MAN_Napoli_Inv6178_n01.jpg",
    desc: "Brutus is Caesar's close friend, but he cares about Rome more than friendship. He joins the plot to kill Caesar because he believes it will save the Republic. He is an honorable man who struggles with his decision.",
  },
  {
    name: "Cassius",
    role: "Senator, Lead Conspirator",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Gaius_Cassius_Longinus_%28Roman_coin%29.jpg/440px-Gaius_Cassius_Longinus_%28Roman_coin%29.jpg",
    desc: "Cassius is jealous of Caesar's power. He is clever and convinces Brutus to join the conspiracy. Unlike Brutus, Cassius acts more out of envy than love for Rome. He is a good planner but not always honest.",
  },
  {
    name: "Mark Antony",
    role: "Consul, Caesar's Ally",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Mark_Antony_%28Marcus_Antonius%29%2C_Roman_politician_and_general%2C_January_14%2C_83_BC_%E2%80%93_August_1%2C_30_BC.jpg/440px-Mark_Antony_%28Marcus_Antonius%29%2C_Roman_politician_and_general%2C_January_14%2C_83_BC_%E2%80%93_August_1%2C_30_BC.jpg",
    desc: "Antony is loyal to Caesar and very smart. After Caesar dies, he gives a famous speech at the funeral that turns the crowd against the conspirators. He pretends to be harmless but is actually very powerful.",
  },
  {
    name: "Portia",
    role: "Wife of Brutus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Elisabetta_Sirani_-_Porcia_wounding_her_thigh.jpg/440px-Elisabetta_Sirani_-_Porcia_wounding_her_thigh.jpg",
    desc: "Portia is Brutus's wife. She is strong and brave. She can tell something is bothering Brutus and begs him to tell her. She even cuts her own leg to prove she can handle pain and keep secrets. She dies later from grief.",
  },
  {
    name: "Calpurnia",
    role: "Wife of Caesar",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Calpurnia_Pisonis.jpg/440px-Calpurnia_Pisonis.jpg",
    desc: "Calpurnia is Caesar's wife. She has bad dreams about his death and begs him not to go to the Senate. Caesar almost listens to her, but then changes his mind. She represents the idea that warnings should not be ignored.",
  },
];

const Characters = () => (
  <section className="fade-section">
    <div className="border-b-4 border-double border-foreground mb-6 pb-2">
      <h2 className="font-headline text-3xl font-bold text-center">
        DRAMATIS PERSONAE
      </h2>
      <p className="text-center text-sm text-accent font-headline">
        The Key Players in This Tragedy
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((c) => (
        <div key={c.name} className="border border-foreground p-4">
          <div className="w-full h-48 overflow-hidden mb-3 border border-muted">
            <img
              src={c.image}
              alt={`Portrait of ${c.name}`}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <h3 className="font-headline text-xl font-bold">{c.name}</h3>
          <p className="text-xs text-accent font-headline mb-2">{c.role}</p>
          <p className="text-sm leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Characters;
