import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Users, Award } from "lucide-react";
import Artists from "../Artists/Artists";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança no",
      description:
        "Equipamentos esterilizados e ambiente higienizado seguindo todas as normas sanitárias.",
    },
    {
      icon: Users,
      title: "Artista Experiente",
      description:
        "especializado com mais de 4 anos",
    },
    {
      icon: Award,
      title: "Qualidade Premium",
      description:
        "Tintas importadas de alta qualidade e equipamentos profissionais de última geração.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Experiência incrível! Profissionais muito atenciosos e resultado perfeito.",
      rating: 5,
    },
    {
      name: "",
      text: "Melhor estúdio da cidade. Ambiente limpo e artistas talentosos.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      text: "Superou todas as expectativas. Recomendo de olhos fechados!",
      rating: 5,
    },
  ];

  // ✅ Carrossel de vídeos
  const videos = [
    "https://www.youtube.com/embed/V6OgiHK4P4o",
    "https://www.youtube.com/embed/pJ_cQvzMoNI",
    // Adicione mais URLs se quiser
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextVideo = () => {
    setCurrentIndex((currentIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((currentIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-100 flex items-center justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900/20">
          <div
            className="absolute inset-0 bg-[url('https://i.pinimg.com/1200x/dc/58/cf/dc58cf9d4ee2f11141425142cd1236a9.jpg')] bg-cover bg-center opacity-20"
          ></div>
        </div>

        <div className="relative z-10 max-w-5x mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Gabriel
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforme sua pele em uma obra de arte única com nossos artistas
              especializados
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/galeria"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105"
              >
                Ver Galeria
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center px-8 py-4 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Agendar Consulta
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Gabriel Studio
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Combinamos arte, técnica e segurança para criar tatuagens únicas
              que contam sua história
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center p-8 bg-black/50 rounded-2xl border border-red-900/20 hover:border-red-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full mb-6">
                    <FeatureIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-red">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Artists />

      {/* Carrossel de Vídeos */}
      <section className="flex flex-col items-center py-20 bg-gray-950">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Veja nossos{" "}
              <span className="bg-gradient-to-r from-red-500 pb-20-20 to-orange-500 bg-clip-text text-transparent">
                Trabalhos
              </span>
            </h2>
       
        <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border-4 border-gray-300 shadow-lg">
          
          <div
          
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            
            {videos.map((src, index) => (
              <iframe
                key={index}
                src={src}
                width="100%"
                height="400"
                className="flex-shrink-0 rounded-3xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={`video-${index}`}
              ></iframe>
            ))}
          </div>

          {/* Botões */}
          <button
            onClick={prevVideo}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full shadow hover:bg-gray-200 transition"
          >
            ❮
          </button>
          <button
            onClick={nextVideo}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black h-  p-8 rounded-full shadow hover:bg-gray-200 transition"
          >
            ❯
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                clientes dizem
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-900 rounded-xl border border-red-900/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <p className="text-red-400 font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pronto para sua próxima tatuagem?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e agende uma consulta gratuita para
              discutir sua ideia
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Agendar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
