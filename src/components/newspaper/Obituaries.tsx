const obituaries = [
  {
    name: "Gaius Julius Caesar",
    dates: "100 B.C. - 44 B.C.",
    text: "Julius Caesar, Dictator of Rome, has died at the age of 55. He was killed in the Senate by a group of senators on the Ides of March. Caesar was born into a noble family. He rose to power through military victories in Gaul, Britain, and other lands. He became dictator and was loved by the common people for giving them land and jobs. He is survived by no legitimate sons. His adopted heir, Octavian, is expected to carry on his legacy. A public funeral will be held in the Forum.",
  },
  {
    name: "Portia",
    dates: "c. 70 B.C. - 42 B.C.",
    text: "Portia, the wife of Marcus Brutus, has passed away. She was known for her bravery and loyalty. She once cut her own leg to prove to Brutus that she could keep secrets and handle pain. After Brutus left Rome to fight in the civil war, Portia became very worried and sad. She died from swallowing hot coals, overcome by grief. She was a daughter of Cato the Younger and was respected by all who knew her.",
  },
  {
    name: "Calpurnia",
    dates: "c. 75 B.C. - Unknown",
    text: "Calpurnia, the third and final wife of Julius Caesar, is reported to be in deep mourning. Though she is not deceased, her life as she knew it has ended. She warned Caesar not to go to the Senate after she dreamed of his statue pouring blood. Caesar almost listened to her, but was convinced to go by Decius. Calpurnia now lives quietly, away from public life. She represents the sadness of those who tried to warn others but were not heard.",
  },
];

const Obituaries = () => (
  <section className="fade-section">
    <div className="border-b-4 border-double border-foreground mb-6 pb-2">
      <h2 className="font-headline text-3xl font-bold text-center">
        OBITUARIES
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {obituaries.map((o) => (
        <div key={o.name} className="border border-foreground p-4">
          <h3 className="font-headline text-xl font-bold">{o.name}</h3>
          <p className="text-xs text-accent font-headline mb-2">{o.dates}</p>
          <p className="text-sm leading-relaxed">{o.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Obituaries;
