
import axios from "axios"
//hàm ni thực hiện thì các cáy khác vẫn chạy song song
const getUser =  async () => {
  try {
    //cáy ni láy link
    //xong cáy ni mới mần tiếp await
    alert('anh yeu em')
    let respont = await axios.get('https://randomuser.me/api')
  } catch (error) {
    throw error;
  }
}

const login =  ({user,password}) => {

}

export default {
    getUser,
    login,
}