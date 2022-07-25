
export class ProvinciaService{
 
  baseUrl='http://localhost:9090/api/v1.0/provincia/'
   getAll(){
    return axios.get(this.baseUrl).then(res=>res.data )
   }
   save(provincia) {
      return axios.post(this.baseUrl + "save", provincia).then(res=>res.data);
  }
 
}
export default ApiManager;

