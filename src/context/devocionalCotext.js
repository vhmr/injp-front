import React, {useState} from 'react'

const Context = React.createContext({})

export function DevocialContextProvider ({children}) {
    const [devo, setDevo] = useState([])

    return (
        <Context.Provider value={{ devo, setDevo }}>
            { children }
        </Context.Provider>
    )
}

export default Context