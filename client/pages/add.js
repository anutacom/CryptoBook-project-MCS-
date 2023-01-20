import {Form, Input, Button, Message} from 'semantic-ui-react'
import Layout from "../components/Layout"
import {useState} from 'react'
import provider from '../provider'
import contactFactory from '../contactFactory'

const AddContact=()=>{

    const [telegram, setTelegram] = useState('')
    const [discord, setDiscord] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

   

const handleSubmit = async(event)=>{
    event.preventDefault()
   setErrorMessage("")
   setSuccessMessage("")

   if(!telegram){
    setErrorMessage("Хотя бы телеграм заполни...")
   }

    const signer = provider.getSigner()
    const contactFactoryWithSigner = contactFactory.connect(signer)
    console.log("func:",contactFactoryWithSigner.functions )
    
    try{
        let response
        if(discord){
            response = await contactFactoryWithSigner["createContact(string,string)"](telegram,discord)
        }
       else{
        response = await contactFactoryWithSigner["createContact(string)"](telegram)
        console.log("createContact(string)")
              }
                          console.log("responce:", response)
            setSuccessMessage("Хэш транзакции:"+ response.hash)
    } catch(error){
        setErrorMessage(error.message)
        console.error("error:", error)
    }

}

return <Layout>
    <Form error = {!!errorMessage} success = {!!successMessage} onSubmit = {handleSubmit}>
    <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Telegram'
            value = {telegram}
            onChange = {event=>setTelegram(event.target.value)}
            placeholder='Введите Telegram'
          />
          <Form.Field
            control={Input}
            label='Discord'
            value = {discord}
            onChange = {event=>setDiscord(event.target.value)}
            placeholder='Введите Discord'
          />                   
    </Form.Group>
    <Button primary loading = {isLoading}>Сохранить</Button>
    <Message style = {{wordBreak: 'break-word'}}error header = 'Что ж такое' content = {errorMessage}  /> 
    <Message success header = 'Успешно' content = {successMessage}  /> 
    </Form>
</Layout>
}
export default AddContact