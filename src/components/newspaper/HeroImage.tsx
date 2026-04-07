const HeroImage = () => (
  <section className="fade-section my-6">
    <figure className="border-2 border-foreground p-1">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Vincenzo_Camuccini_-_La_morte_di_Cesare.jpg"
        alt="The Death of Caesar by Vincenzo Camuccini"
        className="w-full h-auto"
        loading="lazy"
      />
      <figcaption className="text-center text-sm italic mt-2 text-muted-foreground font-body">
        "The Death of Caesar" by Vincenzo Camuccini, depicting the fateful moment at the Senate.
      </figcaption>
    </figure>
  </section>
);

export default HeroImage;
