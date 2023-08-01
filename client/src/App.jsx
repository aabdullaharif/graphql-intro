import { useQuery, gql } from '@apollo/client'

const query = gql`
    query exampleQuery {
        getTodos {
            id
            title
        }
        getUsers {
            name
        }
    }
`

function App() {
    const { loading, error, data } = useQuery(query)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error : {error.message}</p>
    console.log(data)
    return <>{JSON.stringify(data)}</>
}

export default App
