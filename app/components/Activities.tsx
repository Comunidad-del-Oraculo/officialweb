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

const getActivityIcon = (type: string): string => {
  const icons: { [key: string]: string } = {
    workshop: "🛠️",
    meetup: "🤝",
    charla: "💬",
    hackathon: "💻",
    curso: "📚",
    webinar: "🎥",
    networking: "🌐",
  };
  return icons[type.toLowerCase()] || "📌";
};

export const Activities = () => {
  const [activitiesList, setActivitiesList] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("/data/activities.json")
      .then((response) => response.json())
      .then((data) => setActivitiesList(data))
      .catch((error) => console.error("Error cargando actividades:", error));
  }, []);

  return (
    <section
      id="activities"
      className="py-20 px-6 bg-linear-to-tr from-accent/10 to-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Actividades de la <span className="text-accent">Comunidad</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {activitiesList.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center text-5xl mx-auto mb-4">
              {getActivityIcon(activity.type)}
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {activity.title}
            </h3>

            <p className="text-sm text-gray-600 mb-3 uppercase tracking-wide">
              {activity.type}
            </p>

            {activity.date && (
              <p className="text-sm font-medium text-gray-800 mb-2">
                {new Date(activity.date.start).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            )}

            {activity.speaker && (
              <p className="text-xs text-gray-500">{activity.speaker.name}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
