import ButtonList from "./ButtonList"
import DescriptionList from "./DescriptionList"
import languages from '../assets/languages'
import { useState } from "react"


export default function MainContent() {

    const [button, setButton] = useState(null);

    function ButtonRender() {
        return languages.map((language) => (
            <ButtonList
                key={language.id}
                language={language}

                onClick={() => setButton(button === language.id ? null : language.id)}

                isActive={button === language}


            />
        ))
    }

    function DescriptionRender() {

        const chosenDescription = languages.find(
            (language) => language.id === button
        );

        if (!chosenDescription)
            return null;

        return (
            <DescriptionList
                language={chosenDescription}
            />
        )

        // languages.map((language) => (
        //     <DescriptionList
        //         key={language.id}
        //         language={language} />
        // ))
    }

    return (

        <section className="main">

            <div className="btn-container">

                {ButtonRender()}

            </div>

            {DescriptionRender()}

        </section>


    )
}