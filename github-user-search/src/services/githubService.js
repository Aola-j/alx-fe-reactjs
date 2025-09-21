import axios from 'axios'

export async function fetchUserData () {
    const response = await axios.get (`https://api.github.com/users/{username}`)

    return response.data

}
