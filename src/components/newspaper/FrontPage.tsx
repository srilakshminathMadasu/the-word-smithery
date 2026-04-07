const FrontPage = () => (
  <section className="fade-section">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main Article */}
      <article className="lg:col-span-7 lg:column-divider lg:pr-6">
        <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight mb-1">
          CAESAR SLAIN IN SENATE HOUSE
        </h2>
        <p className="text-sm text-accent font-headline mb-1">
          Dictator stabbed 23 times by group of senators
        </p>
        <p className="text-xs text-muted-foreground mb-4 font-headline">
          By Marcus Scribius, Chief Correspondent
        </p>

        <div className="newspaper-columns-2 text-sm leading-relaxed space-y-3">
          <p>
            Rome is in shock today after Julius Caesar, the most powerful man in the world, was killed inside the Senate. A group of senators surrounded him and stabbed him 23 times. Caesar fell at the base of Pompey's statue and died on the cold marble floor.
          </p>
          <p>
            Witnesses say that Caesar walked into the Senate around noon. He seemed healthy and confident. But within minutes, the senators closed in on him. Servilius Casca struck first, hitting Caesar in the neck. Then more than 20 others joined in.
          </p>
          <p>
            According to people who were there, Caesar tried to fight back at first. He grabbed at one of the daggers. But when he saw Marcus Brutus, his close friend, among the attackers, he stopped fighting. Some people say he whispered, "Et tu, Brute?" which means "You too, Brutus?" Then he covered his face with his toga and fell.
          </p>
          <p>
            The attackers call themselves the Liberators. They say they killed Caesar to save the Roman Republic. They believe Caesar had too much power and was trying to become a king. Senators like Brutus and Cassius led the group. They say they did it for the good of Rome.
          </p>
          <p>
            But not everyone agrees. Many Romans loved Caesar. He gave land to poor people and created jobs. He also forgave many of his old enemies. The common people of Rome are angry and sad. Some have started fires in the streets.
          </p>
          <p>
            Mark Antony, Caesar's loyal friend and co-consul, has asked to speak at the funeral. No one knows yet what he will say, but many expect him to turn the people against the Liberators.
          </p>
          <p>
            The city is tense tonight. Soldiers are on the streets. The Senate building is closed. Rome does not know what will happen next. Will there be peace, or will there be war? Only time will tell.
          </p>
        </div>
      </article>

      {/* Sidebar */}
      <aside className="lg:col-span-5 space-y-6">
        {/* Inside This Edition */}
        <div className="border-2 border-foreground p-4">
          <h3 className="font-headline text-lg font-bold border-b border-foreground pb-2 mb-3 text-accent">
            Inside This Edition
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between"><span>Characters of the Play</span><span className="text-muted-foreground">Sec. II</span></li>
            <li className="flex justify-between"><span>Themes and Big Ideas</span><span className="text-muted-foreground">Sec. III</span></li>
            <li className="flex justify-between"><span>Literary Devices</span><span className="text-muted-foreground">Sec. IV</span></li>
            <li className="flex justify-between"><span>Editorial Opinions</span><span className="text-muted-foreground">Sec. V</span></li>
            <li className="flex justify-between"><span>Obituaries</span><span className="text-muted-foreground">Sec. VII</span></li>
            <li className="flex justify-between"><span>Horoscopes and Classifieds</span><span className="text-muted-foreground">Sec. IX</span></li>
          </ul>
        </div>

        {/* By the Numbers */}
        <div className="border-2 border-foreground p-4">
          <h3 className="font-headline text-lg font-bold border-b border-foreground pb-2 mb-3 text-accent">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 gap-3 text-center text-sm">
            <div><p className="text-2xl font-headline font-bold">23</p><p className="text-muted-foreground">Stab Wounds</p></div>
            <div><p className="text-2xl font-headline font-bold">60+</p><p className="text-muted-foreground">Conspirators</p></div>
            <div><p className="text-2xl font-headline font-bold">5</p><p className="text-muted-foreground">Acts in the Play</p></div>
            <div><p className="text-2xl font-headline font-bold">44</p><p className="text-muted-foreground">B.C., Year of Death</p></div>
          </div>
        </div>

        {/* Side Stories */}
        <div className="border-t-2 border-foreground pt-4">
          <h3 className="font-headline text-xl font-bold mb-2">
            ANTONY REQUESTS TO SPEAK AT FUNERAL
          </h3>
          <p className="text-sm leading-relaxed">
            Mark Antony, Caesar's most loyal friend, has asked the conspirators for permission to speak at the funeral. Brutus agreed, thinking Antony would be fair. But many worry that Antony plans to turn the crowd against the Liberators. "Friends, Romans, countrymen," is how he reportedly plans to begin.
          </p>
        </div>

        <div className="border-t-2 border-foreground pt-4">
          <h3 className="font-headline text-xl font-bold mb-2">
            SOOTHSAYER'S WARNING IGNORED
          </h3>
          <p className="text-sm leading-relaxed">
            Earlier this month, a soothsayer told Caesar to "Beware the Ides of March." Caesar laughed it off and called the man a dreamer. His wife Calpurnia also begged him to stay home today after having terrible nightmares. Caesar went to the Senate anyway, and now he is dead.
          </p>
        </div>
      </aside>
    </div>
  </section>
);

export default FrontPage;
