import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Award, Heart } from 'lucide-react';
// Test comment for Vercel deployment verification

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Donatur Aktif",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      number: "50.000+",
      label: "Al-Qur'an Terdistribusi",
      color: "text-secondary"
    },
    {
      icon: Award,
      number: "100+",
      label: "Masjid & Pondok",
      color: "text-primary"
    },
    {
      icon: Heart,
      number: "25",
      label: "Provinsi di Indonesia",
      color: "text-secondary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient-primary">Wakaf Quran Indonesia</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lembaga wakaf yang didedikasikan untuk menyebarluaskan Al-Qur'an ke seluruh pelosok Indonesia. 
              Kami mengelola wakaf dari para donatur untuk dicetak dan didistribusikan dalam bentuk mushaf Al-Qur'an 
              berkualitas tinggi kepada masjid, pondok pesantren, dan masyarakat yang membutuhkan.
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Visi Kami</h3>
              <p className="text-muted-foreground">
                Menjadi lembaga wakaf Al-Qur'an terpercaya yang memastikan setiap muslim Indonesia memiliki akses 
                mudah terhadap mushaf Al-Qur'an berkualitas tinggi untuk kebutuhan ibadah dan pembelajaran.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Misi Kami</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mengelola wakaf Al-Qur'an dengan amanah dan transparansi penuh
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mendistribusikan mushaf Al-Qur'an berkualitas ke seluruh Indonesia secara merata
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Membangun jaringan distribusi yang efektif untuk menjangkau daerah terpencil
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">Didukung Oleh</h3>
              <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-4 border border-primary/20">
                <p className="text-muted-foreground leading-relaxed">
                  Program ini didukung penuh oleh <span className="font-semibold text-primary">Bengkel Dakwah</span> dan 
                  <span className="font-semibold text-primary"> Griya Multimedia Putri Indonesia</span>, 
                  yang berkomitmen untuk menyebarluaskan Al-Qur'an ke seluruh nusantara.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center p-6 card-gradient border-0 shadow-lg hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-${stat.color.replace('text-', '')}/20 to-${stat.color.replace('text-', '')}/10`}>
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div>
                    <div className={`text-3xl font-bold ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;