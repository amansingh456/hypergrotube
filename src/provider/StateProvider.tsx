import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your state
interface StateContextProps {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create a context for your state
const StateContext = createContext<StateContextProps | undefined>(undefined);

// Create a custom hook for accessing the state and setState
export function useAppState() {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within a StateProvider');
  }
  return context;
}

// Define the StateProvider component
interface StateProviderProps {
  children: ReactNode;
}

export function StateProvider({ children }: StateProviderProps) {
  const [state, setState] = useState<boolean>(false);

  const value: StateContextProps = {
    state,
    setState,
  };

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  );
}




// import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// interface StateContextProps {
//   state: boolean;
//   setState: Dispatch<SetStateAction<boolean>>;
// }

// export const SendState = createContext<StateContextProps | undefined>(undefined);

// interface StateProviderProps {
//   children: ReactNode;
// }

// const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
//   const [state, setState] = useState<boolean>(false);

//   // const value: StateContextProps = ;

//   return (
//     <SendState.Provider value={{ state, setState }}>
//       {children}
//     </SendState.Provider>
//   );
// };

// export default StateProvider;