import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { Food } from '../../components/Food'
import { ModalAddFood } from '../../components/ModalAddFood'
import { ModalEditFood } from '../../components/ModalEditFood'
import { FoodsContainer } from './styles'
import { useEffect, useState } from 'react'

interface FoodsStateProps {
  id: number,
  name: string,
  description: string,
  price: number,
  image: string,
  available: boolean
}

interface EditingFoodProps {
  id?: number
}

// editingFood?: {
//   id: number
// },

export function Dashboard(){

  const [foodsState, setFoodsState] = useState<FoodsStateProps[]>([])
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [modalEditIsOpen, setModalEditIsOpen] = useState<boolean>(false)
  const [editingFood, setEditingFood] = useState<EditingFoodProps>({})

  useEffect(() => {
    async function fetchAPI() {
      const response = await api.get('/foods');

      setFoodsState(response.data)
    }

    fetchAPI()
  },[])

  async function handleAddFood(food:any) {
    
    try {
      const response = await api.post('/foods', {
        ...food,
        available: true,
      });

      setFoodsState([...foodsState, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateFood(food:any){
    try {
      const foodUpdated = await api.put(
        `/foods/${food.id}`,
        { ...editingFood, ...food },
      );

      const foodsUpdated = foodsState.map((f:any) =>
        f.id !== foodUpdated.data.id ? f : foodUpdated.data,
      );

      setFoodsState( foodsUpdated );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteFood(id:number) {

    await api.delete(`/foods/${id}`);

    const foodsFiltered = foodsState.filter((food:any) => food.id !== id);

    setFoodsState( foodsFiltered );
  }

  function toggleModal(){

    setModalIsOpen(!modalIsOpen)
  }

  function toggleEditModal(){

    setModalEditIsOpen(!modalEditIsOpen)
  }

  function handleEditFood(food:any){
    setEditingFood(food)
    setModalEditIsOpen(true)
  }

  return (
    <>
      <Header openModal={toggleModal}/>
      <ModalAddFood 
        isOpen={modalIsOpen}
        setIsOpen={toggleModal}
        handleAddFood={handleAddFood}
      />

      <ModalEditFood 
        isOpen={modalEditIsOpen}
        setIsOpen={toggleEditModal}
        editingFood={editingFood ? editingFood : {}}
        handleUpdateFood={handleUpdateFood}
      />

      <FoodsContainer data-testid="foods-list">
        {foodsState && 
          foodsState.map((food:any) => (
            <Food 
              key={food.id}
              food={food}
              handleDelete={handleDeleteFood}
              handleEditFood={handleEditFood}
            />
          ))
        }
      </FoodsContainer>
      
    </>
  )
}