const Editorial = () => (
  <section className="fade-section">
    <div className="border-b-4 border-double border-foreground mb-6 pb-2">
      <h2 className="font-headline text-3xl font-bold text-center">
        EDITORIAL
      </h2>
      <p className="text-center text-sm text-accent font-headline">
        Opinion of The Roman Times Editorial Board
      </p>
    </div>

    <div className="border-2 border-foreground p-6">
      <h3 className="font-headline text-2xl font-bold mb-1">
        Was the Assassination Justified?
      </h3>
      <p className="text-xs text-muted-foreground mb-4 font-headline italic">
        The views expressed here are those of the editorial board.
      </p>

      <div className="newspaper-columns-2 text-sm leading-relaxed space-y-3">
        <p>
          The assassination of Julius Caesar has left Rome divided. Some say the conspirators were heroes who saved the Republic. Others say they were murderers who killed a great leader. This editorial board believes the truth lies somewhere in between.
        </p>
        <p>
          Caesar was a great general and leader. He won wars, gave land to the poor, and made Rome stronger. But he also took too much power for himself. He made himself dictator for life. He put his face on coins. He let people treat him almost like a god. That is dangerous in a republic where power is supposed to be shared.
        </p>
        <p>
          However, murder is never the right answer. Brutus and Cassius could have tried other ways to limit Caesar's power. They could have passed new laws or held elections. Instead, they chose violence, and that violence led to a civil war that killed even more people.
        </p>
        <p>
          The lesson of this tragedy is simple. Too much power in one person's hands is dangerous. But solving that problem with violence only creates more problems. Rome needs laws, not daggers. We hope the leaders of tomorrow will remember that.
        </p>
      </div>
    </div>
  </section>
);

export default Editorial;
