
import React from 'react'
import {Clock, User, ArrowRight} from 'lucide-react'
import { Link } from 'react-router-dom'

const TutorialCard = ({ tutorial }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        {tutorial.image ? (
          <img 
            src={tutorial.image} 
            alt={tutorial.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full mb-4 mx-auto w-fit">
              <tutorial.icon className="h-8 w-8 text-white" />
            </div>
            <span className="text-sm font-medium text-gray-600">{tutorial.title}</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            tutorial.difficulty === 'Básico' ? 'bg-green-100 text-green-800' :
            tutorial.difficulty === 'Intermediário' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {tutorial.difficulty}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
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

        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {tutorial.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {tutorial.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{tutorial.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{tutorial.author}</span>
          </div>
        </div>

        <Link 
          to={`/tutorial/${tutorial.id}`}
          className="flex items-center justify-between w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          <span>Ver Tutorial</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

export default TutorialCard
