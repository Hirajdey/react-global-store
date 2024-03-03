import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'
import { appStateInitialData, appStateInitialDataType} from '../appState/appState';
import { appReducer } from '../reducer/appReducer';
import { actionsType } from '../actions/actions';

interface AppContextProviderProps {
	children: ReactNode;
}

export interface AppContextType {
	state: appStateInitialDataType,
	dispatch: Dispatch<actionsType>
}

const AppContext = createContext<AppContextType | undefined>(undefined);
export const useAppContext = () => {
	const context = useContext(AppContext);
	if(!context){
		throw new Error('useAppContext must be used within an AppContextProvider')
	}
	return context;
}

const AppContextProvider = ({children}: AppContextProviderProps) => {
	const [state, dispatch] = useReducer(appReducer, appStateInitialData);
  return (
    <AppContext.Provider value={{
			state: state,
			dispatch: dispatch
		}}>
			{children}
		</AppContext.Provider>
  )
}

export default AppContextProvider;