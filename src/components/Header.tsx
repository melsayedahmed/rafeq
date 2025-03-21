import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Brain, MessageCircle, Info, FileText, Menu, X, HelpCircle } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate('/download');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
              {/* <Brain className="h-10 w-10 text-cyan-500 group-hover:text-cyan-600 transition-colors duration-200" /> */}
              <span className="text-2xl font-bold text-cyan-500 group-hover:text-cyan-600 transition-colors duration-200">رفيق</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/contact" icon={<MessageCircle />} text="اتصال" isActive={location.pathname === '/contact'} />
            <NavLink to="/about" icon={<Info />} text="عن رفيق  " isActive={location.pathname === '/about'} />
            <NavLink to="/QAComponent" icon={<Info />} text="الاسئله   " isActive={location.pathname === '/QAComponent'} />
            {/* <NavLink to="/QaAnswer" icon={<Info />} text="QaAnswer   " isActive={location.pathname === '/QaAnswer'} /> */}
            <NavLink to="/articles" icon={<FileText />} text="مقالات" isActive={location.pathname === '/articles'} />
            <NavLink to="/faq" icon={<HelpCircle />} text="معلومات عن رفيق" isActive={location.pathname === '/faq'} />
            <button 
              onClick={handleStartNow}
              className="bg-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-600 transition-all duration-200 transform hover:scale-105"
            >
              ابدأ الآن
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="p-2 rounded-md text-cyan-500 hover:bg-cyan-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/contact" icon={<MessageCircle />} text="اتصال" isActive={location.pathname === '/contact'} />
              <MobileNavLink to="/about" icon={<Info />} text="عن رفيق  " isActive={location.pathname === '/about'} />
              <MobileNavLink to="/QAComponent" icon={<Info />} text="الاسئله " isActive={location.pathname === '/QAComponent'} />
              <MobileNavLink to="/articles" icon={<FileText />} text="مقالات" isActive={location.pathname === '/articles'} />
              <MobileNavLink to="/faq" icon={<HelpCircle />} text="معلومات عن رفيق" isActive={location.pathname === '/faq'} />
              <button 
                onClick={handleStartNow}
                className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-colors duration-200 w-full"
              >
                ابدأ الآن
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ to, icon, text, isActive = false }: { to: string; icon: React.ReactNode; text: string; isActive?: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 transition-colors duration-200 ${
        isActive ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'
      }`}
    >
      <span className={isActive ? 'text-cyan-500' : 'text-cyan-500'}>{icon}</span>
      <span className="font-medium">{text}</span>
    </Link>
  );
}

function MobileNavLink({ to, icon, text, isActive = false }: { to: string; icon: React.ReactNode; text: string; isActive?: boolean }) {
  return (
    <Link
      to={to}
      className={`flex items-center justify-end space-x-3 px-4 transition-colors duration-200 ${
        isActive ? 'text-cyan-500' : 'text-gray-600 hover:text-cyan-500'
      }`}
    >
      <span className="font-medium">{text}</span>
      <span className={isActive ? 'text-cyan-500' : 'text-cyan-500'}>{icon}</span>
    </Link>
  );
}

export default Header;