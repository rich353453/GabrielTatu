
import React from 'react'
import { Link } from 'react-router-dom'
import {MapPin, Phone, Mail, Instagram, Facebook, Zap} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Ink Studio
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Estúdio de tatuagem profissional com mais de 10 anos de experiência. 
              Criamos arte única em sua pele com segurança e qualidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-gray-400 hover:text-red-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/artistas" className="text-gray-400 hover:text-red-400 transition-colors">
                  Artistas
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-red-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-red-400 transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">Rua das Artes, 123<br />Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">contato@inkstudio.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ink Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
