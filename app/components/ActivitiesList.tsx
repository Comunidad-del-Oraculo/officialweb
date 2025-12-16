"use client";
import React, { useEffect, useState } from "react";

interface Activity {
    id: string;
    title: string;
    type: string;
    featured: boolean;
    description: string;
    speaker: {
        name: string;
        role: string;
    };
    date: {
        start: string;
        timezone: string;
    };
    location: {
        type: string;
        platform: string;
        url?: string;
    };
    tags: string[];
    requirements: string[];
    registrationRequired: boolean;
    registrationUrl?: string;
    communityProject: boolean;
}

export const ActivitiesList = () => {
    const [activitiesList, setActivitiesList] = useState<Activity[]>([]);

    useEffect(() => {
        fetch("/data/activities.json")
            .then(response => response.json())
            .then(data => setActivitiesList(data))
            .catch(error => console.error("Error cargando actividades:", error));
    }, []);

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-900">
                Actividades de la <span className="text-[#8c52ff]">Comunidad</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {activitiesList.map((activity) => (
                    <div
                        key={activity.id}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 overflow-hidden flex flex-col group"
                    >
                        {activity.featured && (
                            <div className="bg-gradient-to-r from-[#8c52ff] to-purple-500 text-white text-xs font-bold py-2 px-4 text-center">
                                ⭐ DESTACADO
                            </div>
                        )}

                        <div className="p-8 flex-grow space-y-5">
                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 bg-purple-100 text-[#8c52ff] text-xs font-bold uppercase rounded-full">
                                    {activity.type}
                                </span>
                                {activity.communityProject && (
                                    <span className="text-xs text-purple-600 font-semibold">
                                        Proyecto Comunitario
                                    </span>
                                )}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-[#8c52ff] transition-colors">
                                {activity.title}
                            </h3>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {activity.description}
                            </p>

                            {activity.speaker && (
                                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#8c52ff] to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                        {activity.speaker.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">{activity.speaker.name}</p>
                                        <p className="text-xs text-gray-500">{activity.speaker.role}</p>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 pt-3">
                                {activity.date && (
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-lg">📅</span>
                                        <div>
                                            <p className="text-gray-800 font-medium">
                                                {new Date(activity.date.start).toLocaleDateString('es-ES', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                            <p className="text-xs text-gray-500">{activity.date.timezone}</p>
                                        </div>
                                    </div>
                                )}

                                {activity.location && (
                                    <div className="flex items-start gap-2 text-sm">
                                        <span className="text-lg">
                                            {activity.location.type === 'online' ? '💻' : '📍'}
                                        </span>
                                        <div>
                                            <p className="text-gray-800 font-medium capitalize">{activity.location.type}</p>
                                            <p className="text-xs text-gray-500">{activity.location.platform}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {activity.tags && activity.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {activity.tags.map((tag: string, index: number) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-purple-50 hover:text-purple-700 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {activity.requirements && activity.requirements.length > 0 && (
                                <div className="pt-2">
                                    <p className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Requisitos:</p>
                                    <ul className="text-xs text-gray-600 space-y-1.5">
                                        {activity.requirements.slice(0, 3).map((req: string, index: number) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="text-[#8c52ff] mt-0.5">✓</span>
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="mt-auto">
                            {activity.registrationRequired && activity.registrationUrl && (
                                <a
                                    href={activity.registrationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 px-6 bg-gradient-to-r from-[#8c52ff] to-purple-500 text-white text-center font-bold hover:from-purple-600 hover:to-[#8c52ff] transition-all"
                                >
                                    Inscribirse Ahora →
                                </a>
                            )}

                            {activity.location && activity.location.url && !activity.registrationRequired && (
                                <a
                                    href={activity.location.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-4 px-6 bg-gradient-to-r from-[#8c52ff] to-purple-500 text-white text-center font-bold hover:from-purple-600 hover:to-[#8c52ff] transition-all"
                                >
                                    Unirse a la reunión →
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
