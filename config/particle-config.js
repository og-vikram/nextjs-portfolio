
const particlesConfig = {
    fullScreen: {
        enable: false,
        zIndex: 0
    },
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ["#e879f9", "#d946ef", "#c026d3", "#f472b6", "#f9a8d4", "#ec4899", "#db2777", "#ffffff"]
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 0.8,
                opacity_min: 0,
                sync: true
            }
        },
        size: {
            value: 2.5,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.5,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 72,
            color: ["#c026d3", "#C526C4", "#C926B4", "#CE27A5", "#D22796", "#D72786", "#DB2777", "#ffffff"],
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 85,
                line_linked: {
                    opacity: 0.8
                }
            },
            bubble: {
                distance: 0,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

export default particlesConfig