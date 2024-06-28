import Layout from "../components/Layout.js"
import "../styles/error-page.scss"
import { Link } from "react-router-dom"

const ErrorPageNotFound = () => {
  return (
    <Layout>
        <section id="error-page-not-found">
            <h1>404</h1>
            <p>Oups! La page que vous <br/> demandez n'existe pas</p>
            <Link to="/" className="nav-link">Retourner sur la page d'acceuil</Link>


        </section>
    </Layout>
  )
}
export default ErrorPageNotFound