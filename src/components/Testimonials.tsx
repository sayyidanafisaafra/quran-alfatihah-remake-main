import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmad Fauzi",
      role: "Donatur Wakaf Quran Indonesia",
      content: "Alhamdulillah sangat terbantu dengan adanya program wakaf ini. Laporan yang diberikan sangat transparan dan saya bisa melihat langsung dampak wakaf yang saya berikan.",
      rating: 5
    },
    {
      name: "Siti Aminah",
      role: "Donatur Wakaf Quran Indonesia", 
      content: "Subhanallah, program wakaf Al-Qur'an ini sangat memudahkan. Saya bisa berwakaf dari rumah dan tahu persis kemana Al-Qur'an itu disalurkan. Semoga menjadi amal jariyah.",
      rating: 5
    },
    {
      name: "Budi Santoso",
      role: "Donatur Wakaf Quran Indonesia",
      content: "Tim Wakaf Quran Indonesia sangat profesional dan amanah. Setiap bulan selalu ada laporan distribusi. Merasa senang bisa berkontribusi menyebarkan Al-Qur'an.",
      rating: 5
    },
    {
      name: "Fatimah Zahra",
      role: "Donatur Wakaf Quran Indonesia",
      content: "Alhamdulillah dengan adanya program ini, saya bisa ikut berkontribusi menyebarkan Al-Qur'an ke seluruh Indonesia. Prosesnya mudah dan sangat transparan.",
      rating: 5
    },
    {
      name: "Muhammad Ikhsan",
      role: "Donatur Wakaf Quran Indonesia",
      content: "Jazakumullahu khairan. Program wakaf yang sangat baik dan terpercaya. Update rutin di grup WhatsApp membuat saya selalu tahu perkembangan program ini.",
      rating: 5
    },
    {
      name: "Khadijah",
      role: "Donatur Wakaf Quran Indonesia",
      content: "Sangat senang bisa bergabung dalam program wakaf ini. Tim yang profesional dan sistem yang transparan membuat saya yakin wakaf saya tersalurkan dengan baik.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dengarkan Kata Mereka Tentang <span className="text-gradient-primary">Wakaf Quran Indonesia</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 card-gradient border-0 shadow-lg hover:shadow-elegant transform hover:scale-105 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="space-y-4">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;