import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Wakaf Mushaf', href: '#programs' },
    { name: 'Wakaf Digital', href: '#programs' },
  ];

  const services = [
    { name: 'Konsultasi Wakaf', href: '#contact' },
    { name: 'Laporan Transparan', href: '#about' },
    { name: 'Distribusi Merata', href: '#programs' },
    { name: 'Wakaf Berkelanjutan', href: '#programs' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { icon: Mail, href: 'mailto:info@wakafquranindonesia.org', color: 'hover:text-green-500' },
  ];

  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">WQ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Wakaf Quran</h3>
                <p className="text-sm opacity-90">Indonesia</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Bengkel Dakwah dan Griya Multimedia Putri Indonesia mendedikasikan untuk menyebarluaskan Al-Qur'an ke area Jawa dan sekitarnya.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/20 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Menu Utama</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-secondary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary flex-shrink-0" />
                <p className="text-sm opacity-90">
                  Pondok multimedia putri bengkel dakwah Kalak Ijo, Guwosari, Kec. Pajangan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55751
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <p className="text-sm opacity-90">+6282223501945</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <p className="text-sm opacity-90">info@wakafquranindonesia.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90 text-center md:text-left">
              © 2024 Wakaf Quran Indonesia. Semua hak dilindungi undang-undang.
            </p>
            <div className="flex space-x-6 text-sm opacity-90">
              <a href="#" className="hover:text-secondary transition-colors">Kebijakan Privasi</a>
              <a href="#" className="hover:text-secondary transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;