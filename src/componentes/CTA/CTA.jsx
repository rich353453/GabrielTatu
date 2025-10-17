
import React from 'react'
import {ArrowRight, BookOpen, Play} from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="h-4 w-4 text-white" />
            <span className="text-sm font-medium text-white">Comece Agora</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para se tornar um
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Expert em PDV?
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Acesse agora nossos tutoriais gratuitos e aprenda tudo sobre o sistema PDV. 
            Desde o básico até funcionalidades avançadas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <BookOpen className="h-5 w-5" />
            Começar Tutoriais
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
            <Play className="h-5 w-5" />
            Ver Preview
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-blue-200 text-sm">Tutoriais</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">4</div>
            <div className="text-blue-200 text-sm">Módulos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200 text-sm">Disponível</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-blue-200 text-sm">Gratuito</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
