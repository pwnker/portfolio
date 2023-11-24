'use client'
import React, { useCallback } from 'react';

import {Particles} from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

export default function ParticleContainer() {

    const ps_init= useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const ps_loaded = useCallback(async () => {
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                className="w-full h-full absolute -z-10"
                init={ps_init}
                loaded={ps_loaded}
                options={{
                    fullScreen: {enable: false},
                    background: {
                        color: {
                            value: '', 
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: false,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true, 
                        },
                        modes: {
                            push: {
                                quantity: 90,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#42ff02', 
                        },
                        links: {
                            color: '#32ff11',
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outMode: 'bounce',
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 500
                            },
                            value: 50
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: 'rect',
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 5, 
                            },
                        }
                    }, 
                    detectRetina: true,
                }}
            />
        </>
    );
};

