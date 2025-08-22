import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const LojaIgrejaCTA = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Tenho interesse em criar uma loja personalizada para minha igreja com a Revest.";
    window.open(`https://wa.me/5581999014848?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="bg-[#fdf6ee] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-brand font-bold mb-4 text-primary">
          Crie a loja da sua igreja conosco!
        </h2>
        <p className="text-lg md:text-xl font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
          Leve identidade e propósito para sua comunidade.
          Personalize uma coleção exclusiva com a sua cara, valores e missão.
        </p>
        <Button
          onClick={handleWhatsApp}
          variant="whatsapp"
          size="lg"
          className="text-lg px-8 py-4 inline-flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Fale conosco!
        </Button>
      </div>
    </section>
  );
};
