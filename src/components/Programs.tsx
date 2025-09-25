import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Users, BookOpen } from 'lucide-react';
import tahsinImage from '@/assets/tahsin-online.jpg';
import tahfidzImage from '@/assets/tahfidz-online.jpg';
import kidsImage from '@/assets/kids-class.jpg';

const Programs = () => {
  const handleWakafClick = (programTitle: string) => {
    const phoneNumber = '+6282223501945';
    const message = `Halo, saya tertarik untuk bergabung dalam program ${programTitle}. Mohon informasi lebih lanjut tentang cara berpartisipasi.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const programs = [
    {
      id: 1,
      title: "Wakaf Mushaf Al-Qur'an",
      description: "Program wakaf untuk mencetak dan mendistribusikan mushaf Al-Qur'an berkualitas tinggi ke masjid dan pondok pesantren di area Jawa dan sekitarnya.",
      image: tahsinImage,
      features: ["Mushaf Berkualitas", "Distribusi Merata", "Laporan Transparan"],
      duration: "Berkelanjutan",
      students: "50+ Masjid/Bulan",
      link: "#mushaf"
    },
    {
      id: 2,
      title: "Wakaf Iqro",
      description: "Program wakaf untuk mencetak dan mendistribusikan buku Iqro berkualitas tinggi ke masjid dan pondok pesantren di area Jawa dan sekitarnya.",
      image: kidsImage,
      features: ["Akses Gratis", "Audio Berkualitas", "Fitur Lengkap"],
      duration: "Berkelanjutan",
      students: "100.000+ Pengguna",
      link: "#digital"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Program <span className="text-gradient-primary">Wakaf</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pilih program wakaf Al-Qur'an yang ingin Anda dukung untuk kebaikan bersama
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className="program-card card-gradient border-0 shadow-lg hover:shadow-elegant overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{program.title}</h3>
                </div>
              </div>

              <CardHeader>
                <CardDescription className="text-sm leading-relaxed">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-border">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-secondary" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-secondary" />
                    <span>{program.students}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleWakafClick(program.title)}
                >
                  Wakaf Sekarang
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;