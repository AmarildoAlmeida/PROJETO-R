import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles'
import UserImage from './assets/users.png'


function App() {



  return (
    <Container>
      <TopBackground>
        <img src={UserImage} alt="imagem -usuario" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuario" />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do Usuario" />
          </div>
        </ContainerInputs>

        <div style={{ widht: '100%' }}>
          <InputLabel>
            E-mail <span> *</span>
          </InputLabel>
          <Input type="e-mail" placeholder="E-mail do usuario" />
        </div>

        <Button> Cadastrar Usuario</Button>
      </Form>
    </Container>
  )
}

export default App
