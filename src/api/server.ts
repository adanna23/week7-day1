let token = 'a8cf3b02b0e944cc0206dabc97e644cbd7f6052923307771'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://evening-island-37857.herokuapp.com/profile/api/drones`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

        if(response.ok){
            console.log('Failed to fetch data from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://evening-island-37857.herokuapp.com/profile/api/drones`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json', 
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            console.log('Failed to Update Car Data')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {})=> {
        const response = await fetch(`https://evening-island-37857.herokuapp.com/profile/api/drones/${id}`,{
            method: 'POST',
            headers: {
                'content-type': 'applicatin/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        } )
    },
    delete: async (id:string) => {
        const response = await fetch(`https://evening-island-37857.herokuapp.com/profile/api/drones/${id}`, {
            method:'DELETE',
            headers: {
                'content-type': 'applicatin/json',
                'x-access-token': `Bearer ${token}`
            }
        })

    }
}