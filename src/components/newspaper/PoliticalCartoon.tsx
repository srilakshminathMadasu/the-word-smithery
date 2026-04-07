const PoliticalCartoon = () => (
  <section className="fade-section">
    <div className="border-b-4 border-double border-foreground mb-6 pb-2">
      <h2 className="font-headline text-3xl font-bold text-center">
        POLITICAL CARTOON
      </h2>
    </div>

    <div className="border-2 border-foreground p-6 text-center">
      <div className="bg-parchment-dark border border-rule aspect-[16/9] flex items-center justify-center max-w-2xl mx-auto">
        <div className="text-center p-8">
          <p className="font-headline text-2xl text-muted-foreground italic mb-2">
            [ Political Cartoon ]
          </p>
          <p className="text-sm text-muted-foreground">
            A drawing of Brutus holding a dagger in one hand and an olive branch in the other.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Caption: "I come to save Rome, not to rule it."
          </p>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Illustration placeholder for student project.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default PoliticalCartoon;
