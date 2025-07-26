import { Instagram, MessageCircle, Mail } from 'lucide-react';

export const Footer = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de entrar em contato com a REVEST.";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-brand text-2xl font-bold mb-4">REVEST</h3>
            <p className="font-body text-primary-foreground/80 leading-relaxed">
              Moda cristã com propósito. Vista sua fé com estilo e identidade, 
              expressando valores eternos através de designs contemporâneos.
            </p>
          </div>

          <div>
            <h4 className="font-brand text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </button>
              <a
                href="mailto:contato@revest.com.br"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                contato@revest.com.br
              </a>
              <a
                href="https://instagram.com/revest"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @revest
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-brand text-lg font-semibold mb-4">Sobre</h4>
            <div className="space-y-3">
              <p className="font-body text-primary-foreground/80">
                Nossa Missão
              </p>
              <p className="font-body text-primary-foreground/80">
                Qualidade & Materiais
              </p>
              <p className="font-body text-primary-foreground/80">
                Política de Trocas
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-primary-foreground/60">
            © 2024 REVEST. Todos os direitos reservados. | Desenvolvido com propósito e fé.
          </p>
        </div>
      </div>
    </footer>
  );
};