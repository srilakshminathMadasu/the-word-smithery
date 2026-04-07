const Extras = () => (
  <section className="fade-section">
    <div className="border-b-4 border-double border-foreground mb-6 pb-2">
      <h2 className="font-headline text-3xl font-bold text-center">
        EXTRAS
      </h2>
      <p className="text-center text-sm text-accent font-headline">
        Horoscopes, Market Prices, and Classifieds
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Horoscopes */}
      <div className="border border-foreground p-4">
        <h3 className="font-headline text-xl font-bold border-b border-foreground pb-2 mb-3 text-accent">
          Horoscopes
        </h3>
        <div className="space-y-3 text-sm">
          <div>
            <p className="font-headline font-bold">Aries (March 21 - April 19)</p>
            <p>Today is not a good day for leaders. Stay home and avoid large groups of people, especially people with daggers.</p>
          </div>
          <div>
            <p className="font-headline font-bold">Leo (July 23 - August 22)</p>
            <p>You may feel like the most important person in the room today. Be careful. Pride can lead to a big fall.</p>
          </div>
          <div>
            <p className="font-headline font-bold">Libra (Sept 23 - Oct 22)</p>
            <p>You will have to make a tough decision. Choose wisely, because there is no going back once you act.</p>
          </div>
          <div>
            <p className="font-headline font-bold">Scorpio (Oct 23 - Nov 21)</p>
            <p>Someone close to you may not be telling the full truth. Watch out for people who smile too much.</p>
          </div>
        </div>
      </div>

      {/* Market Prices */}
      <div className="border border-foreground p-4">
        <h3 className="font-headline text-xl font-bold border-b border-foreground pb-2 mb-3 text-accent">
          Roman Market Prices
        </h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-rule">
              <th className="text-left py-1 font-headline">Item</th>
              <th className="text-right py-1 font-headline">Price</th>
              <th className="text-right py-1 font-headline">Change</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule">
            <tr><td className="py-1">Wheat (modius)</td><td className="text-right">3 sestertii</td><td className="text-right text-destructive">+2</td></tr>
            <tr><td className="py-1">Olive Oil (amphora)</td><td className="text-right">15 sestertii</td><td className="text-right text-destructive">+5</td></tr>
            <tr><td className="py-1">Wine (amphora)</td><td className="text-right">8 sestertii</td><td className="text-right">0</td></tr>
            <tr><td className="py-1">Toga (basic)</td><td className="text-right">20 sestertii</td><td className="text-right">0</td></tr>
            <tr><td className="py-1">Dagger</td><td className="text-right">50 sestertii</td><td className="text-right text-destructive">+30</td></tr>
            <tr><td className="py-1">Senate Seat</td><td className="text-right">PRICELESS</td><td className="text-right">-</td></tr>
          </tbody>
        </table>
        <p className="text-xs text-muted-foreground mt-2 italic">
          Note: Dagger prices have increased dramatically due to sudden demand.
        </p>
      </div>

      {/* Classifieds */}
      <div className="border border-foreground p-4">
        <h3 className="font-headline text-xl font-bold border-b border-foreground pb-2 mb-3 text-accent">
          Classified Ads
        </h3>
        <div className="space-y-3 text-sm">
          <div className="border-b border-rule pb-2">
            <p className="font-headline font-bold">FOR SALE</p>
            <p>One slightly used Senate seat. Previous owner no longer needs it. Contact Cassius at the Forum. Price negotiable.</p>
          </div>
          <div className="border-b border-rule pb-2">
            <p className="font-headline font-bold">HELP WANTED</p>
            <p>Bodyguards needed for important Roman leaders. Must be loyal. Experience with daggers preferred. Apply at the Palatine Hill.</p>
          </div>
          <div className="border-b border-rule pb-2">
            <p className="font-headline font-bold">LOST</p>
            <p>One laurel wreath crown. Last seen on the head of a dictator. If found, please return to Calpurnia's house. Sentimental value.</p>
          </div>
          <div>
            <p className="font-headline font-bold">SERVICES</p>
            <p>Soothsayer available for predictions and warnings. Affordable rates. "I told you so" not included. Find me near the Colosseum.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Extras;
