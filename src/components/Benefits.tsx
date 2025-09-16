import { Card, CardContent } from '@/components/ui/card';
import { Users, BookOpen, MessageCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Users,
      title: "Tim Pengelola yang Berpengalaman",
      description: "Dikelola oleh tim yang berpengalaman dalam bidang wakaf dan distribusi Al-Qur'an",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Laporan Transparan",
      description: "Mendapatkan laporan lengkap tentang penyaluran wakaf dan distribusi mushaf Al-Qur'an",
      color: "text-secondary"
    },
    {
      icon: MessageCircle,
      title: "Grup WhatsApp Eksklusif",
      description: "Bergabung dalam komunitas donatur dengan update rutin tentang program wakaf",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ini yang akan Anda <span className="text-gradient-primary">dapatkan</span> di Wakaf Quran Indonesia
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="text-center p-8 card-gradient border-0 shadow-lg hover:shadow-elegant transform hover:scale-105 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="space-y-6">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-${benefit.color.replace('text-', '')}/20 to-${benefit.color.replace('text-', '')}/10`}>
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-3 ${benefit.color}`}>
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
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

export default Benefits;