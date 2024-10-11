import docsImage from "../../sourceImg/img/docsImage/buildImageForDocs.png";
import rightArrow from "../../sourceImg/icon/rightArrow.svg";
//load img icon

import "./DocsSection.css";
//style

export default function DocsSection () {
    return (
        <>
            <section className="section section__docs-section">
                <div className="container container__docs-section">

                    <div className="docs-section__text-block">
                        <h2 className="docs-section__title">
                            <span className="color-text">Build</span> on our global <br/> financial infrastructure
                        </h2>
                        <p className="docs-section__text">
                            Build custom payments experiences with well-documented APIs
                        </p>
                        <button className="docs-section__button">
                            Explore the Docs<img className="docs-section-button__arrow" src={rightArrow}/>
                        </button>
                    </div>

                    <img className="docs-section__image" src={docsImage}/>

                </div>
            </section>
        </>
    )
}