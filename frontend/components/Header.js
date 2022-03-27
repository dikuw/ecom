import Link from 'next/link';

import Nav from './Nav';

export default function Heater() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Logo goes header</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}