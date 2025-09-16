import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const phoneNumber = '+6282223501945';
  const message = 'Halo, saya tertarik untuk mengetahui lebih lanjut tentang program wakaf Quran.';
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        size="icon"
        aria-label="Chat WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;