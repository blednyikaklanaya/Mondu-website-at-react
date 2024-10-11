import "./EmailForm.css";

export default function EmailForm () {
    return (
        <>
            <section className="section section__email-form">
                <div className="container container__email-form">

                    <div className="email-form__text-block">
                        <h3 className="email-form__title">
                            Welcome to your new digital reality that will rock your world.
                        </h3>
                        <p className="email-form__text">
                            Let us help you take you from zero to serious business and beyond.
                            Our no-strings attached free trial lets you test our product today.
                        </p>
                    </div>

                    <div className="form">
                        <input value={"Enter your email"} className="email-form__input"></input>
                        <button className="email-form__button">Create an account</button>
                    </div>
                </div>
            </section>
        </>
    )
}