import { createContext, ReactNode, useContext, useState } from 'react'
import { useLocaleStorage } from 'components/hooks/useLocalStorage'

interface CartProviderProps {
  children: ReactNode
}

interface CartItem {
  id: number
  quantity: number
}

interface CartContextData {
  getItemQuantity: (id: number) => void
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  cartQuantity: number
  cart: CartItem[]
}

const CartContext = createContext({} as CartContextData)

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useLocaleStorage<CartItem[]>('@Wine:product', [])

  const cartQuantity = cart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const getItemQuantity = (id: number) => {
    return cart.find((item) => item.id === id)?.quantity || 1
  }

  const increaseCartQuantity = (id: number) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const decreaseCartQuantity = (id: number) => {
    setCart((currItems) => {
      return currItems.filter((item) => item.id !== id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        cart,
        cartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
