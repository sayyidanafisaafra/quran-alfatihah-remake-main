import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-islamic.jpg';

const Hero = () => {
  const handleWakafClick = () => {
    const phoneNumber = '+6282223501945';
    const message = 'Halo, saya tertarik untuk berwakaf Al-Quran. Mohon informasi lebih lanjut.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleProgramClick = () => {
    const programSection = document.getElementById('programs');
    if (programSection) {
      programSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-accent/20 to-background islamic-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Wakaf{' '}
                <span className="text-gradient-primary">
                  Quran Indonesia
                </span>{' '}
                untuk Santri
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Berwakaf Al-Qur'an untuk kebaikan yang mengalir terus
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground max-w-lg">
                Bergabunglah dengan ribuan donatur yang telah mewakafkan Al-Qur'an untuk disebarluaskan kepada santri di seluruh Indonesia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-primary-foreground transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary px-8 py-6 text-lg"
                onClick={handleWakafClick}
              >
                Wakaf Sekarang
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg transition-all duration-300"
                onClick={handleProgramClick}
              >
                Program Wakaf
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroImage}
                alt="Islamic Education - Belajar Al-Quran"
                className="w-full h-auto object-cover animate-float"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-secondary to-secondary-dark rounded-full blur-xl opacity-60 animate-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full blur-xl opacity-60 animate-glow animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;