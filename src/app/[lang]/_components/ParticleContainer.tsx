'use client';
import { useThemeContext } from '../_context/theme-context';

import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

import type { Engine } from 'tsparticles-engine';

export default function ParticleContainer() {
    const { theme } = useThemeContext();

    const ps_init = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                className="w-100 absolute -z-10 h-screen"
                init={ps_init}
                options={{
                    fullScreen: { enable: false },
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
                                enable: false,
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
                            value: theme === 'dark' ? '#42ff02' : '#BD00FD',
                        },
                        links: {
                            color: theme === 'dark' ? '#32ff11' : '#CD00EE',
                            distance: 150,
                            enable: true,
                            opacity: 0.25,
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
                                area: 400,
                            },
                            value: 50,
                        },
                        opacity: {
                            value: 0.25,
                        },
                        shape: {
                            type: 'rect',
                        },
                        size: {
                            value: {
                                min: 1,
                                max: 5,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    );
}
