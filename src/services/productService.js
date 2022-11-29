
import axios from "axios"

export default class ProductService{

    // Backend bağlantısı metod isimleri ile yapılır.

    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }

    getByProductName(productName){
                                                                // Url yapısına göre burası düzenlenir.
        return axios.get("http://localhost:8080/api/products/getByProductName?productName=" + productName)
    }
}