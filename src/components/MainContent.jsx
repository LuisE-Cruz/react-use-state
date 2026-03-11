import ButtonList from "./ButtonList"
// import DescriptionList from "./DescriptionList"
import languages from '../assets/languages'


export default function MainContent() {

    function ButtonRender() {
        return languages.map((language) => (
            <ButtonList
                key={language.id}
                language={language}
            />
        ))
    }

    return (

        <section className="main">
            <div className="btn-container">
                {ButtonRender()}
            </div>

        </section>


    )
}