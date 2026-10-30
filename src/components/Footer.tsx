export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-20 py-10 text-center text-sm text-stone-500">
      <p>© {new Date().getFullYear()} The Fernstay — fictional concept project for the WanCredence portfolio.</p>
      <p className="mt-1">Not a real business. No real bookings accepted.</p>
    </footer>
  );
}
