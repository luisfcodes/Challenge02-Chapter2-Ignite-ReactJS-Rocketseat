//import logo from '../../assets/logo.svg'

import { FiPlusSquare } from 'react-icons/fi'
import { Container } from "./styles";

export function Header(){
  return (
    <Container>
      <header>
        <span>LOGO</span>
        <nav>
          <div>
            <button 
            type="button" 
            //onClick={openModal}
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