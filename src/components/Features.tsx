import { Card } from "./ui";

export default function Features() {
  const features = [
    {
      title: "Rápido",
      description: "Processamento de pagamentos em milissegundos"
    },
    {
      title: "Seguro",
      description: "Criptografia de ponta a ponta com protocolos internacionais"
    },
    {
      title: "Simples",
      description: "Interface intuitiva e fácil de usar"
    },
    {
      title: "Confiável",
      description: "Uptime 99.9% garantido"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 font-poppins">Nossos Diferenciais</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Card key={index}>
            <h3 className="text-xl font-bold mb-3 font-poppins">{feature.title}</h3>
            <p className="text-gray-600 font-inter">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
