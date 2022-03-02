import { createRef } from 'react'
import { FiCheckSquare } from 'react-icons/fi'

import { Form } from './styles'
import { Modal } from '../Modal'
import { Input } from '../Input'

interface ModalProps{
  isOpen: boolean,
  setIsOpen: () => void,
  handleAddFood: (props:any) => void
}

export function ModalAddFood(props:ModalProps){
  const formRef = createRef()

  const handleSubmit = async (data:any) => {
    const { setIsOpen, handleAddFood } = props;

    handleAddFood(data);
    setIsOpen();
  };

  const { isOpen, setIsOpen } = props;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      
    </Modal>

    
  )
}