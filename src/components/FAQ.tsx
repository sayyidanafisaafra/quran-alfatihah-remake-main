import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    const phoneNumber = '+6282223501945';
    const message = 'Halo, saya memiliki pertanyaan tentang program wakaf Al-Quran yang tidak ada di FAQ.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleItem = (index: number) => {
    setOpenItem(prevOpenItem => prevOpenItem === index ? null : index);
  };

  const faqData = [
    {
      question: "Apa itu program Wakaf Quran Indonesia?",
      answer: "Wakaf Quran Indonesia adalah program wakaf yang bertujuan untuk mencetak dan mendistribusikan Al-Quran ke masjid, pondok pesantren, dan lembaga pendidikan Islam di seluruh Indonesia. Dana wakaf yang terkumpul akan digunakan untuk mencetak mushaf berkualitas tinggi."
    },
    {
      question: "Berapa minimum donasi untuk berwakaf?",
      answer: "Tidak ada minimum donasi yang ditetapkan. Anda dapat berwakaf sesuai kemampuan, mulai dari Rp 10.000. Setiap kontribusi akan sangat bermanfaat untuk menyebarluaskan Al-Quran."
    },
    {
      question: "Bagaimana cara melakukan wakaf?",
      answer: "Anda dapat melakukan wakaf dengan menghubungi admin kami melalui WhatsApp di +6282223501945 atau mengisi formulir kontak di website ini. Tim kami akan membantu proses wakaf Anda."
    },
    {
      question: "Apakah ada laporan penyaluran wakaf?",
      answer: "Ya, kami memberikan laporan transparan kepada semua donatur tentang penggunaan dana wakaf dan distribusi Al-Quran. Laporan akan dikirim secara berkala melalui WhatsApp atau email."
    },
    {
      question: "Ke mana saja Al-Quran didistribusikan?",
      answer: "Al-Quran hasil wakaf didistribusikan ke masjid, pondok pesantren, madrasah, dan lembaga pendidikan Islam di seluruh Indonesia, terutama daerah yang membutuhkan dan sulit dijangkau."
    },
    {
      question: "Apakah wakaf ini berkelanjutan?",
      answer: "Ya, program wakaf ini berkelanjutan. Dana wakaf akan terus digunakan untuk mencetak dan mendistribusikan Al-Quran secara berkala sesuai dengan kebutuhan dan permintaan dari berbagai daerah."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pertanyaan yang Sering <span className="text-gradient-primary">Ditanyakan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Temukan jawaban atas pertanyaan umum tentang program wakaf Al-Quran
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqData.map((faq, index) => (
            <Card 
              key={index} 
              className="card-gradient border-0 shadow-lg hover:shadow-elegant transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/10 transition-colors rounded-lg"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  {openItem === index ? (
                    <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  )}
                </button>
                {openItem === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="card-gradient border-0 shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Masih ada pertanyaan?</h3>
            <p className="text-muted-foreground mb-6">
              Tim kami siap membantu menjawab pertanyaan Anda tentang program wakaf
            </p>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat WhatsApp Sekarang
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;