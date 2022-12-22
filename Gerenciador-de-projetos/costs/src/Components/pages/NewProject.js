//import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import ProjectForm from '../Project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){

    const history = useNavigate()

    function createPost(project) {
        
        // initialize cost and service

        project.cost = 0
        project.service = []

        fetch('http://localhost:5000/projectes', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json()
        .then((data) => {
            console.log(data)
            //redirect

            history('/projectes', {message: 'Projeto criado com sucesso'})
        }))
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adiconar os serviços</p>
            <ProjectForm  handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    )
}

export default NewProject