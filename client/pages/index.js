
import { useRouter } from 'next/router'
import Layout from '/components/Layout.js'
import {Button} from "semantic-ui-react"

const Index = ()=> {
    const router = useRouter()
    return (<Layout>
        <h1>
            Здесь можно помотреть данные по адресу из Ethereum или оставить свои
        </h1>
        <Button.Group>
    <Button primery onClick = {()=> router.push("/show")}>Посмотреть</Button>
    <Button.Or text = "||" />
    <Button positive onClick = {()=> router.push("/add")}>Записать</Button>
   </Button.Group>
        </Layout>)
}

export default Index