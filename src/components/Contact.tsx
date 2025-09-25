import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    program: '',
    message: ''
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = '+6282223501945';
    const message = 'Halo, saya ingin mengetahui lebih lanjut tentang program wakaf Al-Quran.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSendMessage = () => {
    const phoneNumber = '+6282223501945';
    let message = `Halo, saya ingin mengetahui lebih lanjut tentang program wakaf Al-Quran.\n\n`;
    message += `Nama: ${formData.name || 'Tidak diisi'}\n`;
    message += `WhatsApp: ${formData.whatsapp || 'Tidak diisi'}\n`;
    message += `Email: ${formData.email || 'Tidak diisi'}\n`;
    message += `Program: ${formData.program || 'Tidak diisi'}\n`;
    message += `Pesan: ${formData.message || 'Tidak ada pesan tambahan'}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    const phoneNumber = '+6282223501945';
    const message = 'Halo, saya ingin konsultasi langsung tentang program wakaf Al-Quran. Bisakah saya berbicara dengan admin?';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      detail: "+62 812-3456-7890",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Email",
      detail: "info@wakafquranindonesia.org",
      color: "text-secondary"
    },
    {
      icon: MapPin,
      title: "Alamat",
      detail: "Jl. Dakwah Islamiyah No. 456, Jakarta Pusat",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      detail: "Senin - Jumat: 08:00 - 20:00 WIB",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi <span className="text-gradient-primary">Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Siap membantu Anda menyalurkan wakaf Al-Qur'an untuk kebaikan yang berkelanjutan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient border-0 shadow-lg animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-primary">
                Kirim Pesan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nama Lengkap</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap" 
                      className="border-border focus:border-primary" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nomor WhatsApp</label>
                    <Input 
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="08xxxxxxxxx" 
                      className="border-border focus:border-primary" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email" 
                    placeholder="email@example.com" 
                    className="border-border focus:border-primary" 
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Program Wakaf yang Diminati</label>
                  <select 
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-lg focus:border-primary focus:outline-none bg-background"
                  >
                    <option value="">Pilih program wakaf</option>
                    <option value="mushaf">Wakaf Mushaf Al-Qur'an</option>
                    <option value="iqro">Wakaf Iqro</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Pesan</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tulis pesan Anda di sini..." 
                    className="min-h-[120px] border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="button"
                  onClick={handleSendMessage}
                  className="w-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-primary-foreground transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 card-gradient border-0 shadow-lg hover:shadow-elegant transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br from-${item.color.replace('text-', '')}/20 to-${item.color.replace('text-', '')}/10`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Aksi Cepat</h3>
              <div className="grid gap-4">
                <Button 
                  className="justify-start bg-green-600 hover:bg-green-700 text-white p-6 h-auto"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Chat WhatsApp</div>
                    <div className="text-sm opacity-90">Respon cepat dalam 5 menit</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="justify-start border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground p-6 h-auto transition-all duration-300"
                  onClick={handleCallClick}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Telepon Langsung</div>
                    <div className="text-sm opacity-70">Konsultasi langsung dengan admin</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;