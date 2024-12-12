"use client";

import React, { useEffect } from 'react';

const teamMembers = [
    {
        name: 'Ayesha Patel',
        position: 'Production Designer',
        image: '/images/ayesha.jpg',
        social: {
            linkedin: 'http://www.linkedin.com/in/ayeshapatel07',
            github: 'https://github.com/ayesha1209',
            instagram: 'https://instagram.com/thein_dan_ma'
        }
    },
    {
        name: 'Vrunda Radadiya',
        position: 'Product Designer',
        image: '/images/vrunda.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/vrunda-radadiya-8a1a43257/',
            github: 'https://github.com/Vrunda2',
            instagram: 'https://instagram.com/ngwe_pu'
        }
    },
    {
        name: 'Meghana Vasava',
        position: 'Customer Service',
        image: '/images/meghana.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/meghana-vasava-17242a261/',
            github: 'https://github.com/meghanavasava',
            instagram: 'https://instagram.com/ok_tal_mg_lay'
        }
    },
    {
        name: 'Satchit Bhatt',
        position: 'Project Leader',
        image: '/images/satchitt.png',
        social: {
            linkedin: 'https://www.linkedin.com/in/satchit-bhatt-9933a1253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            github: 'https://github.com/Satchit2',
            instagram: 'https://instagram.com/ma_ma_saung'
        }
    },
    {
        name: 'Shubh Doshi',
        position: 'Customer Service',
        image: '/images/shubh2.png',
        social: {
            linkedin: 'https://www.linkedin.com/in/shubh-doshi-921337256/',
            github: 'https://github.com/shubhdoshi21',
            instagram: 'https://instagram.com/ok_tal_mg_lay'
        }
    },
    {
        name: 'Mann Chopda',
        position: 'Customer Service',
        image: '/images/mann.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/man-chopda-63a012278/',
            github: 'https://github.com/mann15',
            instagram: 'https://instagram.com/ok_tal_mg_lay'
        }
    },
    {
        name: 'Megh Prajapati',
        position: 'Customer Service',
        image: '/images/megh2.png',
        social: {
            linkedin: 'https://www.linkedin.com/in/megh-prajapati-ab13a82b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ',
            github: 'https://github.com/Meghhhhh',
            instagram: 'https://instagram.com/ok_tal_mg_lay'
        }
    },
 
 

];
const WebTeam = () => {
    useEffect(() => {
        const handlePointerMove = (e) => {
            const { currentTarget: el, clientX: x, clientY: y } = e;
            const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
            el.style.setProperty("--posX", x - l - w / 2);
            el.style.setProperty("--posY", y - t - h / 2);
        };

        document.body.addEventListener("pointermove", handlePointerMove);
        return () => {
            document.body.removeEventListener("pointermove", handlePointerMove);
        };
    }, []);

    return (
        <section
            style={{
                height: "100%",
                minHeight: "100vh",
                width: "100%",
                backgroundImage: `
                    linear-gradient(115deg, rgb(150 0 0), rgb(100 0 0)),
                    radial-gradient(90% 100% at calc(50% + var(--posX, 0) * 1px) calc(0% + var(--posY, 0) * 1px), rgb(200 50 50), rgb(100 0 0)),
                    radial-gradient(100% 100% at calc(80% - var(--posX, 0) * 1px) calc(0% - var(--posY, 0) * 1px), rgb(220 40 40), rgb(120 0 0)),
                    radial-gradient(150% 210% at calc(100% + var(--posX, 0) * 1px) calc(0% + var(--posY, 0) * 1px), rgb(180 20 20), rgb(100 10 10)),
                    radial-gradient(100% 100% at calc(100% - var(--posX, 0) * 1px) calc(30% - var(--posY, 0) * 1px), rgb(240 70 70), rgb(150 20 20)),
                    linear-gradient(60deg, rgb(200 30 30), rgb(150 10 10))`,
                backgroundBlendMode: "overlay, overlay, difference, difference, difference, normal",
                overflowX: "hidden",
            }}
        >
            <div className="container mx-auto px-6 py-5 max-w-[70%] my-1">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-white">Meet the Website Team</h2>
                   
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
                        >
                            <img
    src={member.image} // Use the `image` property
    alt={member.name}
    className="w-full h-48 object-cover"
/>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                               
                                <div className="mt-4 flex space-x-3 text-gray-500">
                                    <a
                                        href={member.social.linkedin}
                                        className="hover:text-blue-500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin text-2xl"></i>
                                    </a>
                                    <a
                                        href={member.social.github}
                                        className="hover:text-gray-800"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-github text-2xl"></i>
                                    </a>
                                   
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebTeam;
