import Layout from "/components/Layout"
import {useRef, useState} from "react"
import {Form, Button, Message} from "semantic-ui-react"
import getContactByAddress from "/utils/getContactByAddress"


const ShowContact=()=>{
  const [telegram, setTelegram] = useState('')
  const [discord, setDiscord] = useState('')
  const [desc, setDesc] = useState('')
  const addressRef = useRef()
  const [errorMessage, setErrorMessage] = useState()
  const [isLoading, setIsLoading] = useState(false)


const handleSubmit = async (event)=>{
event.preventDefault()
const address = addressRef.current.value
setErrorMessage('')
setTelegram('')
setDiscord('')
setDesc('')
setIsLoading(true)
  if(!address){
  setErrorMessage('Нужен адрес пользователя')
  return
}
try{
const contact = await getContactByAddress(address)
   setTelegram(contact.telegram)
  setDiscord(contact.discord)
   setDesc(contact.desc)
} catch(error){
  console.error(error)
setErrorMessage(error.message)
} finally {
  setIsLoading(false)
}

    }


return (
<>
<Layout>
     <Form  error ={!!errorMessage} onSubmit = {handleSubmit}>
    <Form.Field>
      <label>Введите адрес здесь</label>
      <input ref = {addressRef} placeholder='Точно здесь' />
    </Form.Field>
    <Button primary loading = {isLoading} type='submit'>Посмотреть</Button>
    <Message error header = 'Что ж такое' content = {errorMessage}  />  
  </Form>
  {telegram && <h2>Telegram: {telegram}</h2>}
  {discord && <h2>Discord: {discord}</h2>}
  {desc && <h2>Description: {desc}</h2>}
</Layout>
</>
)
}
export default ShowContact