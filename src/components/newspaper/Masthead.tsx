const Masthead = () => (
  <header className="text-center py-6 border-b-4 border-double border-foreground">
    <p className="text-sm tracking-[0.3em] uppercase font-headline mb-1">
      Est. 753 B.C. &bull; Rome's Most Trusted Source
    </p>
    <h1 className="font-masthead text-5xl md:text-7xl lg:text-8xl leading-tight text-foreground">
      The Roman Times
    </h1>
    <div className="flex items-center justify-center gap-4 mt-2 text-sm font-headline">
      <span>Vol. DCCX, No. I</span>
      <span>&bull;</span>
      <span>The Ides of March, 44 B.C.</span>
      <span>&bull;</span>
      <span className="italic text-accent">
        "All the news that's fit to chisel."
      </span>
    </div>
    <div className="border-t border-foreground mt-4" />
  </header>
);

export default Masthead;
