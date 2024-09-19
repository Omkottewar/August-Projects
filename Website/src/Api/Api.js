import axios from "axios"

const striversDSA__URL = 'https://backend.takeuforward.org/api/sheets/double/strivers_a2z_sheet'
const questionStriversURL = 'https://backend.takeuforward.org/api/sheets/double/strivers_a2z_sheet'

const fetchDSAQuestion =async ()=>{
    try{
        const res = await axios.get(striversDSA__URL);
        return res;
    }catch(e){
        console.log('striverDSA__URl',e)
    }
}
export {fetchDSAQuestion}

const fetchQuestion =async ()=>{
    try{
        const res = await axios.get(questionStriversURL);
        return res;
    }catch(e){
        console.log('striverDSA__URl',e)
    }
}
export {fetchQuestion}