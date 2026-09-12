export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-7 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-1.5 text-[0.85rem] text-ink-soft sm:flex-row sm:justify-between">
        <p>Amrithavel Healthcare</p>
        <p>&copy; {new Date().getFullYear()} Amrithavel Healthcare. All rights reserved.</p>
      </div>
    </footer>
  );
}