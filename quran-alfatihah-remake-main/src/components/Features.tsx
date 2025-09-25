import { Card, CardContent } from '@/components/ui/card';
import { AccessibilityIcon, Clock, Users, Heart, UserCheck, BookOpen } from 'lucide-react';

// Custom Rupiah Icon Component
const RupiahIcon = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center font-bold text-lg ${className}`}>
    Rp
  </div>
);

const Features = () => {
  const features = [
    {
      icon: AccessibilityIcon,
      title: "Kemudahan Akses",
      description: "Dapat berwakaf dari mana saja tanpa harus datang ke lokasi fisik, sehingga sangat praktis dan mudah diakses",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Fleksibilitas Waktu",
      description: "Bisa berwakaf kapan saja sesuai dengan kemampuan dan keinginan, tanpa terikat waktu tertentu",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Wakaf Quran Indonesia memiliki tim yang berpengalaman dan terpercaya dalam mengelola wakaf Al-Qur'an",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Amanah dan Transparan",
      description: "Pengelolaan wakaf dilakukan dengan penuh amanah dan laporan yang transparan kepada para donatur",
      color: "text-secondary"
    },
    {
      icon: RupiahIcon,
      title: "Nominal Fleksibel",
      description: "Dapat berwakaf dengan nominal yang sesuai kemampuan, mulai dari jumlah kecil hingga besar",
      color: "text-primary"
    },
    {
      icon: UserCheck,
      title: "Jaringan Distribusi Luas",
      description: "Bergabung dengan jaringan distribusi yang menjangkau seluruh pelosok Indonesia",
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "Program Terstruktur",
      description: "Dengan sistem pengelolaan yang jelas dan terstruktur, memudahkan penyaluran wakaf secara sistematis",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kenapa harus <span className="text-gradient-primary">berwakaf</span> di Wakaf Quran Indonesia?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center p-6 card-gradient border-0 shadow-lg hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="space-y-4">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-${feature.color.replace('text-', '')}/20 to-${feature.color.replace('text-', '')}/10`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold mb-2 ${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;