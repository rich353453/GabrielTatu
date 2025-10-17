
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {ArrowLeft, Clock, User, BookOpen} from 'lucide-react'
import { tutorialsData } from '../data/tutorials'

const TutorialDetail = () => {
  const { id } = useParams()
  const tutorial = tutorialsData.find(t => t.id === id)

  if (!tutorial) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Tutorial não encontrado</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 font-medium"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar aos tutoriais
      </Link>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          {tutorial.image ? (
            <img 
              src={tutorial.image} 
              alt={tutorial.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-full mb-4 mx-auto w-fit">
                <tutorial.icon className="h-12 w-12 text-white" />
              </div>
              <span className="text-lg font-medium text-gray-600">{tutorial.title}</span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              tutorial.difficulty === 'Básico' ? 'bg-green-100 text-green-800' :
              tutorial.difficulty === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {tutorial.difficulty}
            </span>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
              tutorial.category === 'pista' ? 'bg-blue-100 text-blue-800' :
              tutorial.category === 'conveniencia' ? 'bg-purple-100 text-purple-800' :
              tutorial.category === 'sistema' ? 'bg-gray-100 text-gray-800' :
              'bg-green-100 text-green-800'
            }`}>
              {tutorial.category === 'pista' ? 'Pista' :
               tutorial.category === 'conveniencia' ? 'Conveniência' :
               tutorial.category === 'sistema' ? 'Sistema' : 'Relatórios'}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {tutorial.title}
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            {tutorial.description}
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{tutorial.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{tutorial.author}</span>
            </div>
          </div>

          {tutorial.steps && tutorial.steps.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Passos do Tutorial
              </h2>
              <div className="space-y-6">
                {tutorial.steps.map((step, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(!tutorial.steps || tutorial.steps.length === 0) && (
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Conteúdo em Desenvolvimento
              </h3>
              <p className="text-gray-600">
                Os passos detalhados deste tutorial estão sendo preparados e estarão disponíveis em breve.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TutorialDetail
