
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos')

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'realismo', name: 'Realismo' },
    { id: 'tradicional', name: 'Tradicional' },
    { id: 'geometrico', name: 'Geométrico' },
    { id: 'aquarela', name: 'Aquarela' },
    { id: 'minimalista', name: 'Minimalista' }
  ]

  const tattoos = [
    {
      id: 1,
      image: 'https://i.pinimg.com/736x/bb/25/b7/bb25b7f2e661cb3bd54fc49382ca8a98.jpg',
      category: 'realismo',
      title: 'Retrato Realista',
      artist: 'Carlos Silva'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/1200x/05/d0/56/05d056ec41f40f787ddb22b5d3df32a4.jpg',
      category: 'tradicional',
      title: 'Rosa Tradicional',
      artist: 'Ana Santos'
    },
    {
      id: 3,
      image: 'https://i.pinimg.com/736x/b8/4c/7e/b84c7e50440ba548a008da6be61af648.jpg',
      category: 'geometrico',
      title: 'Mandala Geométrica',
      artist: 'Pedro Costa'
    },
    {
      id: 4,
      image: 'https://i.pinimg.com/1200x/3b/4c/02/3b4c024b918dd5696b35396a6e868772.jpg',
      category: 'aquarela',
      title: 'Borboleta Aquarela',
      artist: 'Maria Oliveira'
    },
    {
      id: 5,
      image: 'https://i.pinimg.com/736x/ba/fe/67/bafe67b8ad2fb676e6b8dc6fd69e881c.jpg',
      category: 'minimalista',
      title: 'Linha Minimalista',
      artist: 'João Lima'
    },
    {
      id: 6,
      image: 'https://i.pinimg.com/1200x/d6/41/bc/d641bc5183081d4693cbf19c5c5726dd.jpg',
      category: 'realismo',
      title: 'Olho Realista',
      artist: 'Carlos Silva'
    },
    {
      id: 7,
      image: 'https://i.pinimg.com/736x/c3/d9/93/c3d993187d6a521995b82725beed1ecd.jpg',
      category: 'tradicional',
      title: 'Âncora Clássica',
      artist: 'Ana Santos'
    },
    {
      id: 8,
      image: 'https://i.pinimg.com/736x/25/a1/26/25a126f596b783a4e7929452808ac144.jpg',
      category: 'geometrico',
      title: 'Padrão Geométrico',
      artist: 'Pedro Costa'
    },
    {
      id: 9,
      image: 'https://i.pinimg.com/736x/db/eb/db/dbebdb1c99627cee9cf4686bdd04b1e5.jpg',
      category: 'aquarela',
      title: 'Flor Aquarela',
      artist: 'Maria Oliveira'
    }
  ]

  const filteredTattoos = selectedCategory === 'todos' 
    ? tattoos 
    : tattoos.filter(tattoo => tattoo.category === selectedCategory)

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
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Galeria
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore nossa coleção de trabalhos únicos e encontre inspiração para sua próxima tatuagem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTattoos.map((tattoo, index) => (
              <motion.div
                key={tattoo.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={tattoo.image}
                    alt={tattoo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{tattoo.title}</h3>
                    <p className="text-red-400 font-medium">por {tattoo.artist}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600/90 text-white text-sm font-medium rounded-full">
                    {categories.find(cat => cat.id === tattoo.category)?.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredTattoos.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-xl">Nenhuma tatuagem encontrada nesta categoria.</p>
            </div>
          )}
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
              Gostou do que viu?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para discutir sua ideia e criar algo único para você
            </p>
            <button className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Solicitar Orçamento
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
