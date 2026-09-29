// "AFRICA" with the last A drawn as a gold chevron (Λ), as in the brand mark.
// The visual glyphs are hidden from screen readers, which read the real word.
const AfricaWord = ({ className = "" }: { className?: string }) => (
  <span className={className}>
    <span aria-hidden="true">
      <span className="text-af-teal">AFRIC</span>
      <span className="text-af-gold">Λ</span>
    </span>
    <span className="sr-only">Africa</span>
  </span>
);

export default AfricaWord;
