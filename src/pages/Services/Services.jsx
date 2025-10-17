
import React from 'react'
import { motion } from 'framer-motion'
import {Check, Clock, DollarSign, Shield, Palette, Zap} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Tatuagem Personalizada',
      description: 'Criação de design único baseado em suas ideias e preferências',
      features: [
        'Consulta inicial gratuita',
        'Design exclusivo',
        'Revisões ilimitadas do desenho',
        'Sessão de tatuagem profissional'
      ],
      price: 'A partir de R$ 200',
      duration: '2-6 horas'
    },
    {
      icon: Zap,
      title: 'Flash Tattoos',
      description: 'Designs pré-prontos para quem quer algo rápido e estiloso',
      features: [
        'Designs prontos disponíveis',
        'Execução rápida',
        'Preço fixo',
        'Ideal para primeira tatuagem'
      ],
      price: 'R$ 150 - R$ 300',
      duration: '1-2 horas'
    },
    {
      icon: Shield,
      title: 'Cover Up',
      description: 'Transforme ou cubra tatuagens antigas com um novo design',
      features: [
        'Avaliação da tatuagem existente',
        'Design estratégico para cobertura',
        'Técnicas especializadas',
        'Resultado natural'
      ],
      price: 'A partir de R$ 300',
      duration: '3-8 horas'
    },
    {
      icon: Palette,
      title: 'Restauração de Tatuagem',
      description: 'Revitalize tatuagens antigas com retoque e cores novas',
      features: [
        'Análise detalhada da tatuagem',
        'Retoque de linhas',
        'Renovação de cores',
        'Melhoria geral da qualidade'
      ],
      price: 'A partir de R$ 250',
      duration: '2-4 horas'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Conversamos sobre sua ideia, estilo preferido e discutimos o orçamento.'
    },
    {
      step: '02',
      title: 'Criação do Design',
      description: 'Nosso artista cria um design personalizado baseado em suas preferências.'
    },
    {
      step: '03',
      title: 'Aprovação',
      description: 'Você aprova o design final e agendamos a sessão de tatuagem.'
    },
    {
      step: '04',
      title: 'Execução',
      description: 'Realizamos a tatuagem com todo cuidado e profissionalismo.'
    },
    {
      step: '05',
      title: 'Cuidados Pós-Tatuagem',
      description: 'Orientamos sobre os cuidados necessários para uma cicatrização perfeita.'
    }
  ]

  const aftercare = [
    'Mantenha a tatuagem limpa e seca',
    'Use pomada específica recomendada',
    'Evite exposição solar direta',
    'Não coce ou arranque as casquinhas',
    'Evite piscinas e mar por 15 dias',
    'Use roupas folgadas na região'
  ]

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nossos{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Serviços
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços de tatuagem com qualidade profissional e segurança garantida
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-2xl border border-red-900/20 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {service.price}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300">
                  Solicitar Orçamento
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Nosso{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Processo
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Do primeiro contato até os cuidados pós-tatuagem, seguimos um processo estruturado para garantir o melhor resultado
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-orange-600 hidden lg:block"></div>

            <div className="space-y-12">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="flex-1 lg:pr-8">
                    <div className={`bg-gray-900 p-6 rounded-2xl border border-red-900/20 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-4 flex-shrink-0 relative z-10">
                    {item.step}
                  </div>

                  <div className="flex-1 lg:pl-8 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Cuidados{' '}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Pós-Tatuagem
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Seguir os cuidados adequados é essencial para uma cicatrização perfeita e preservação da sua tatuagem.
              </p>
              <div className="space-y-4">
                {aftercare.map((tip, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-2xl border border-red-900/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Suporte Completo</h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                  <Clock className="h-8 w-8 text-red-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Acompanhamento 24/7</h4>
                    <p className="text-gray-400 text-sm">Suporte durante todo o processo de cicatrização</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-800 rounded-lg">
                  <Shield className="h-8 w-8 text-red-500 mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">Garantia de Qualidade</h4>
                    <p className="text-gray-400 text-sm">Retoque gratuito se necessário nos primeiros 30 dias</p>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Pronto para começar?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Agende sua consulta gratuita e vamos discutir como transformar sua ideia em realidade
            </p>
            <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Agendar Consulta Gratuita
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
