import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '74507d22c0msh1e43d0ab2ec7c08p10d45djsn71693cc03927'
        }
    })

    return data
}