import {createContext,useState,ReactNode} from "react";

interface AppContextType {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext=createContext<AppContextType>({name: "", setName: () => {}});

export default function AppProvider({children}: {children:ReactNode}) {
  const [name,setName]=useState("");
  return (
    <AppContext.Provider value={{name,setName}}>
      {children}
    </AppContext.Provider>
  );
};