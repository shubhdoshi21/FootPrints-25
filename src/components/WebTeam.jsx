// import React from 'react';

// Sample team member data with social links
const teamMembers = [
    {
        name: 'Thein Dan Ma',
        position: 'Production Designer',
        social: {
            linkedin: 'https://linkedin.com/in/thein-dan-ma',
            github: 'https://github.com/thein-dan-ma',
            instagram: 'https://instagram.com/thein_dan_ma'
        }
    },
    {
        name: 'Ngwe Pu',
        position: 'Product Designer',
        social: {
            linkedin: 'https://linkedin.com/in/ngwe-pu',
            github: 'https://github.com/ngwe-pu',
            instagram: 'https://instagram.com/ngwe_pu'
        }
    },
    {
        name: 'OK Tal Mg Lay',
        position: 'Customer Service',
        social: {
            linkedin: 'https://linkedin.com/in/ok-tal-mg-lay',
            github: 'https://github.com/ok-tal-mg-lay',
            instagram: 'https://instagram.com/ok_tal_mg_lay'
        }
    },
    {
        name: 'Ma Ma Saung',
        position: 'Project Leader',
        social: {
            linkedin: 'https://linkedin.com/in/ma-ma-saung',
            github: 'https://github.com/ma-ma-saung',
            instagram: 'https://instagram.com/ma_ma_saung'
        }
    }
];

const WebTeam = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-gray-800">Meet Our Team</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Dedicated professionals committed to delivering excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
                            <img 
                                src={`https://picsum.photos/200/300?random=${index}`} 
                                alt={member.name} 
                                className="w-full h-48 object-cover" 
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-gray-600">{member.position}</p>
                                <div className="mt-4 flex space-x-3 text-gray-500">
                                    <a href={member.social.linkedin} className="hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin text-2xl"></i>
                                    </a>
                                    <a href={member.social.github} className="hover:text-gray-800" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github text-2xl"></i>
                                    </a>
                                    <a href={member.social.instagram} className="hover:text-pink-500" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram text-2xl"></i>
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
