import { Button } from "@/components/ui/button";

export const LojaIgrejaCTA = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Tenho interesse em criar uma loja personalizada para a minha igreja com a Revest.";
    window.open(`https://wa.me/5581999014848?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-background via-muted/40 to-background text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-brand font-bold mb-6">
          Crie a loja da sua igreja conosco!
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8">
          Leve identidade e propósito para sua comunidade. Personalize uma coleção exclusiva com a sua cara, valores e missão.
        </p>
        <Button
          onClick={handleWhatsApp}
          size="lg"
          variant="whatsapp"
          className="text-lg px-8 py-4"
        >
          Falar com a Revest no WhatsApp
        </Button>
      </div>
    </section>
  );
};
