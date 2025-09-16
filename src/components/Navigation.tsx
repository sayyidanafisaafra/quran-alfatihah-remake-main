import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  // Auto close mobile menu on any scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Close mobile menu immediately when scrolling starts (any direction)
      if (Math.abs(currentScrollY - lastScrollY) > 5 && isOpen) {
        setIsOpen(false);
      }
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set new timeout to update lastScrollY after scroll stops
      const newTimeout = setTimeout(() => {
        setLastScrollY(currentScrollY);
      }, 100);
      
      setScrollTimeout(newTimeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, isOpen, scrollTimeout]);

  const handleChatAdminClick = () => {
    const phoneNumber = '+6282223501945';
    const message = 'Halo Admin, saya ingin bertanya tentang program wakaf Al-Quran.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Program', href: '#programs' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Kontak', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="bg-gradient-to-r from-primary to-primary-dark backdrop-blur-sm border-b border-border sticky top-0 z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-200 rounded-lg flex items-center justify-center">
              <BookOpen className="text-primary w-5 h-5" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                Wakaf Quran Indonesia
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Chat Admin Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              className="bg-white text-primary hover:bg-gray-100 border-white"
              onClick={handleChatAdminClick}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Admin
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-primary-dark/20"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-primary-light">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-gray-200 hover:bg-primary-dark/20 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                className="w-full mt-4 bg-white text-primary hover:bg-gray-100"
                onClick={handleChatAdminClick}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat Admin
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;