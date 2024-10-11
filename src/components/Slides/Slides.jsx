import { useState, useEffect } from "react";

import "./Slides.css";

// eslint-disable-next-line react/prop-types
export default function Slides( { images } ) { // get props(array) images for slider

    const [currentIndex, setCurrentIndex] = useState(0); // set default index for the slide

    const nextSlide = () => {
        if (currentIndex < 2) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex == 2) {
            setCurrentIndex(0);
        }
    } // create function for automatic slide playback

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 4500); // set interval for call function automatic slide playback

        return () => clearInterval(interval); // when unmounting component, clear interval
    });

    return (
        <>
            <section className="slider">
                <div className="container container-slides">
                    <img className="slide" src={images[currentIndex]} />
                </div>
            </section>
        </>
    )
}