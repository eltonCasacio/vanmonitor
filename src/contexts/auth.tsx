import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Login } from '@services/login'
import API from '@services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserData {
  id: string;
  name: string
}

interface AuthContextData {
  signed: boolean;
  user: UserData | null
  loading: boolean
  signin(cpf: string): Promise<void>
  signout(): void
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData() {
      const storageValues = await AsyncStorage.multiGet(['@vanmonit_User', '@vanmonit_token'])
      const [storageUser, storageToken] = storageValues
      if (storageUser[1] && storageToken[1]) {
        API.defaults.headers.head.Authorization = `Bearer ${storageToken[1]}`;
        setUser(JSON.parse(storageUser[1]))
      }
      setLoading(false)
    }
    loadStorageData()
  }, [])

  async function signin(cpf: string) {
    const response = await Login(cpf)
    const { token, user } = response

    if (token) {
      try {
        setUser(user)
        API.defaults.headers.head.Authorization = `Bearer ${token}`;
        await AsyncStorage.setItem('@vanmonit_User', JSON.stringify(user))
        await AsyncStorage.setItem('@vanmonit_token', token)
      } catch (e) {
        throw new Error(`Erro ao salvar token e usuario no storage${e}`)
      }
    }
  }

  function signout() {
    AsyncStorage.clear().then(() => setUser(null))
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
