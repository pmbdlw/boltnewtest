import Link from 'next/link';
import SearchBar from './SearchBar';
import AuthButtons from './AuthButtons';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          前沿科技门户
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/ai" className="text-gray-600 hover:text-blue-600 transition-colors">
            AI
          </Link>
          <Link href="/vr-ar" className="text-gray-600 hover:text-blue-600 transition-colors">
            VR/AR
          </Link>
          <Link href="/tech" className="text-gray-600 hover:text-blue-600 transition-colors">
            科技
          </Link>
          <SearchBar />
          <AuthButtons />
        </div>
      </nav>
    </header>
  );
}