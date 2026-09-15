import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gradient tracking-tight">
        Vibelearn
      </Link>
      <div className="flex gap-6 items-center font-medium">
        <SignedIn>
          <Link to="/my-learning" className="text-zinc-300 hover:text-white transition-colors">
            My Learning
          </Link>
          <div className="ml-2">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn-primary text-sm px-5 py-2">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
