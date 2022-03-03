import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';

interface ModalEditProps {
  isOpen: boolean,
  setIsOpen: () => void,
  handleUpdateFood: (props: any) => void,
  editingFood: {
    id?: number
  }
}

export function ModalEditFood(props: ModalEditProps) {
  const formRef = createRef<any>()

  const handleSubmit = async (data: any) => {
    const test = {...data, id: editingFood.id}
    const { setIsOpen, handleUpdateFood } = props;

    handleUpdateFood(test);
    setIsOpen();
  };

  const { isOpen, setIsOpen, editingFood } = props;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
  )
}