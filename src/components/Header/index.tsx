//import logo from '../../assets/logo.svg'

import { FiPlusSquare } from 'react-icons/fi'
import { Container } from "./styles";

interface HeaderProps {
  openModal: () => void
}

export function Header({openModal}:HeaderProps){
  return (
    <Container>
      <header>
        <span>LOGO</span>
        <nav>
          <div>
            <button 
            type="button" 
            onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}