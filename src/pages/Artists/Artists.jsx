
import React from 'react'
import { motion } from 'framer-motion'
import {Instagram, Award, Calendar} from 'lucide-react'

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: 'Gabriel',
      specialty: 'Todos os estilos',
      experience: '4 anos',
      image: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/462734244_548743474564197_5726842293952368980_n.jpg?ccb=11-4&oh=01_Q5Aa2wFs3nKjalr1FwBuq6ZHtNjgjDdB1nHml88mBuAZ2SQY7g&oe=68FEE302&_nc_sid=5e03e0&_nc_cat=107',
      description: 'Especialista em retratos realistas e tatuagens em preto e cinza. Formado em Artes Plásticas com foco em técnicas de sombreamento.',
      portfolio: [
        'https://i.pinimg.com/736x/8f/75/82/8f7582a741f30e970ccb6910d8642cec.jpg',
        'https://i.pinimg.com/1200x/63/a4/30/63a43010995d55c8f453e29257203eae.jpg',
        'https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg'
      ],
      awards: ['Melhor Realismo 2023', 'Tattoo Convention SP 2022'],
      instagram: '@GabrielStudio'
    },
   
  ]

  return (
    <div className="pt-16 min-h-screen bg-black">
      
      {/* Header */}
      

      {/* Artists Grid */}
     <section
  className="min-h-[100px] py-16 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage:
      "url('')",
      
      
  }}
>
  {/* Overlay opcional para escurecer o fundo */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="space-y-20">
      {artists.map((artist, index) => (
        <motion.div
          key={artist.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 items-center`}
        >
                {/* Artist Info */}
                <div className="flex-1 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{artist.name}</h2>
                    <p className="text-2xl text-red-500 font-semibold mb-1">{artist.specialty}</p>
                    <p className="text-gray-400 flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {artist.experience} de experiência
                    </p>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed">{artist.description}</p>

                  {/* Awards */}
                  <div>
                   
                    <ul className="space-y-2">
                      {artist.awards.map((award, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social */}
                  <div className="flex items-center space-x-4">
                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Agendar com {artist.name.split(' ')[0]}
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      <Instagram className="h-5 w-5 mr-2" />
                      {artist.instagram}
                    </a>
                  </div>
                </div>

                {/* Artist Photo & Portfolio */}
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4 flex justify-center">
                    {/* Main Photo */}
                    <div className="col-span-2 pl-10 flex justify-center">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w- h-80 object-cover rounded-2xl"
                      />
                    </div>
                    
                    {/* Portfolio Preview */}
                    {artist.portfolio.slice(0, 2).map((work, idx) => (
                      <div key={idx} className="aspect-square">
                        <img
                          src={work}
                          alt={`Trabalho de ${artist.name}`}
                          className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  )
}

export default Artists
