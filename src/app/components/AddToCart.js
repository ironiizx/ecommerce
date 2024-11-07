'use client'
import { useAppContext } from "@/app/contexts/AppContext";

const AddToCart = ({name, price, id, image}) => {
  const {handleAddToCart} = useAppContext()  
  return (
    <>
    <button onClick={()=> handleAddToCart(name, price, image, id, 1)} className="bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors">
        Cotizar ahora!
    </button>
    </>
  )
}

export default AddToCart