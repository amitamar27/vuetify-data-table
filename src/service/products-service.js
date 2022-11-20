import axios from "axios"

export const productsService = {
    getProducts
}

const API_URL = 'https://datasource.kapsarc.org/api/records/1.0/search/?dataset=emissions_agriculture_energy_e_all_data_norm'

async function getProducts() {
    return await axios.get(API_URL)
        .then(response=>response.data)
}