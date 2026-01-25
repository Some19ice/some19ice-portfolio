const portfolioProjects = [
    {
        id: 1,
        title: "NGDI Metadata Portal",
        slug: "ngdi-metadata-portal",
        description: "A centralized geospatial platform for the National Space Research and Development Agency. Streamlined internal data management using OGC WMS/WFS standards.",
        image: "/ngdi-metadata-portal.jpeg",
        technologies: ["Next.js", "Server Actions", "OGC WMS/WFS", "MapLibre"],
        demoUrl: "https://ngdi-metadata-portal.vercel.app/", // Assuming a Vercel deployment exists or will exist, or leaving as # if unknown. User only gave git links. I will leave demoUrl as # for now as user didn't provide them.
        codeUrl: "https://github.com/Some19ice/ngdi-metadata-portal",
        category: "GIS"
    },
    {
        id: 2,
        title: "NasrdaNavi (Campus Navigation)",
        slug: "nasrdanavi",
        description: "Interactive 3D navigation app with a custom graph-based routing engine and voice assistant ('Navi'). Features complex math/algorithm skills and high-end frontend interaction.",
        image: "/nasrda-navi.png",
        technologies: ["Mapbox GL JS", "GSAP", "NetworkX", "Shapely"],
        demoUrl: null,
        codeUrl: "https://github.com/codeinpython2024/NasrdaNavi",
        category: "GIS"
    },
    {
        id: 3,
        title: "Station Stock Manager",
        slug: "station-stock-manager",
        description: "A custom inventory tracking system replacing paper logs for a high-volume fuel station. Drove 400% revenue growth and scaled capital from ₦15M to ₦100M.",
        image: "/station-stock-manager.png",
        technologies: ["React", "Clerk (RBAC)", "Shadcn UI", "Recharts"],
        demoUrl: null,
        codeUrl: "https://github.com/Some19ice/station-stock-manager",
        category: "Full Stack"
    }
];

export default portfolioProjects;
