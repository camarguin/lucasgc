import React, { useState, useRef, useEffect } from 'react';

import './Fade.css';

const Fade = (props) => {
    const [isVisible, setIsVisible] = useState();

    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
        </div>
    );
};

export default Fade;