export type Project = {
    name: string;
    preview: string;
    image: string;
    liveDemo: string;
    githubRepo?: string;
    date: string;
    allStack: Array<{
        name: string;
    }>;
};

export const projects: Project[] = [
    {
        name: "Moodmeal",
        preview:
            "AI-powered web app that recommends meals based on your mood. Just pick how you feel, and MoodMeal serves up the perfect dish to match your vibe.",
        image: "moodmeal.png",
        liveDemo: "https://moodmeal.vercel.app/",
        githubRepo: "https://github.com/yomjsty/MoodMeal",
        date: "Nov 2024",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwind CSS",
            },
            {
                name: "Shadcn UI",
            },
            {
                name: "Gemini API",
            },
        ],
    },
    {
        name: "TravelTales Blog",
        preview:
            "CMS-powered blog for passionate travelers, offering an easy way to publish stories, tips, and travel inspiration from around the world.",
        image: "traveltales.png",
        liveDemo: "https://traveltales-blog.vercel.app/",
        githubRepo: "https://github.com/yomjsty/TravelTales",
        date: "Nov 2024",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwind CSS",
            },
            {
                name: "Better-Auth",
            },
            {
                name: "Prisma ORM",
            },
            {
                name: "PostgreSQL",
            },
            {
                name: "UploadThing",
            },
            {
                name: "ReactQuill",
            },
        ],
    },
    {
        name: "Our Anime List",
        preview:
            "A web app that pulls anime data from platforms like MyAnimeList, giving you detailed info, ratings, and recommendations — just like IMDb, but for anime.",
        image: "animelist.png",
        liveDemo: "https://animelist-xi.vercel.app/",
        githubRepo: "https://github.com/yomjsty/animelist",
        date: "Dec 2024",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "TypeScript",
            },
            {
                name: "Shadcn UI",
            },
            {
                name: "Anime API",
            },
        ],
    },
    {
        name: "Klare",
        preview:
            "Modern e-commerce app with seamless payments powered by Midtrans. Shop easily, pay securely.",
        image: "klare.png",
        liveDemo: "https://klare.vercel.app/",
        date: "Dec 2024",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Midtrans",
            },
            {
                name: "Better-Auth",
            },
            {
                name: "PostgreSQL",
            },
        ],
    },
    {
        name: "LMS Project",
        preview:
            "A learning management system designed to simplify online course delivery, track progress, and enhance digital education experiences.",
        image: "lms-project.png",
        liveDemo: "https://lms-project-nwfs.vercel.app/",
        date: "Dec 2024",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwind CSS",
            },
            {
                name: "Shadcn UI",
            },
            {
                name: "PostgreSQL",
            },
            {
                name: "Better-Auth",
            },
            {
                name: "Prisma ORM",
            },
            {
                name: "NeonDB",
            },
            {
                name: "UploadThing",
            },
        ],
    },
    {
        name: "xNovel ID",
        preview:
            "An online platform for reading novels and comics — anytime, anywhere.",
        image: "xnovelid.png",
        liveDemo: "https://webscans.vercel.app/",
        githubRepo: "https://github.com/yomjsty/webscans",
        date: "Jan 2025",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwind CSS",
            },
            {
                name: "UploadThing",
            },
            {
                name: "React Quill",
            },
            {
                name: "Better-Auth",
            },
        ],
    },
    {
        name: "Tempat Kopi",
        preview:
            "A blog that features cafes and coffee spots across Indonesia — discover your next favorite hangout.",
        image: "tempatkopi.png",
        liveDemo: "https://tempatkopi.com/",
        date: "Feb 2025",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwind CSS",
            },
            {
                name: "Shadcn UI",
            },
            {
                name: "PostgreSQL",
            },
            {
                name: "Better-Auth",
            },
            {
                name: "Prisma ORM",
            },
            {
                name: "UploadThing",
            },
            {
                name: "React Quill",
            },
        ],
    },
    {
        name: "LinkFuse",
        preview:
            "A smart bio link tool like Linktree — easily share all your important links in one customizable page.",
        image: "linkfuse.png",
        liveDemo: "https://linkfuse.vercel.app/",
        date: "May 2025",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwind CSS",
            },
            {
                name: "Shadcn UI",
            },
            {
                name: "PostgreSQL",
            },
            {
                name: "Better-Auth",
            },
        ],
    },
    {
        name: "Mutatio",
        preview:
            "A web service for managing changelogs via API key — keeping your project updates organized and easy to track.",
        image: "mutatio.png",
        liveDemo: "https://mutatio.vercel.app/",
        githubRepo: "https://github.com/yomjsty/mutatio",
        date: "June 2025",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "API Key",
            },
            {
                name: "Shadcn UI",
            },
            {
                name: "PostgreSQL",
            },
            {
                name: "Better-Auth",
            },
            {
                name: "Prisma ORM",
            },
            {
                name: "NeonDB",
            },
        ],
    },
    {
        name: "GoStage",
        preview:
            "A modern web platform for event ticketing and management — enabling users to create events, sell tickets, track attendees, and scan QR codes in real time.",
        image: "gostage.png",
        liveDemo: "https://gostage.vercel.app/",
        githubRepo: "https://github.com/yomjsty/gostage",
        date: "Jul 2025",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Midtrans",
            },
            {
                name: "Better-Auth",
            },
            {
                name: "Role Management",
            },
            {
                name: "Resend",
            },
        ],
    },
    {
        name: "Smart Route",
        preview:
            "My first real live saas project, an AI-powered trip planner that helps you find the best route for your next adventure.",
        image: "smartroute.png",
        liveDemo: "https://smart-route-alpha.vercel.app/",
        date: "Aug 2025",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwind CSS",
            },
            {
                name: "Shadcn UI",
            },
            {
                name: "PostgreSQL",
            },
            {
                name: "Better-Auth",
            },
            {
                name: "Prisma ORM",
            },
            {
                name: "Convex",
            },
            {
                name: "Gemini API",
            },
        ],
    },
    {
        name: "What If",
        preview:
            "A creative social platform where users ask “What if…” questions, and others answer with their imagination. Explore endless scenarios, share your ideas, and see how others think about the world that could be",
        image: "what-if.png",
        liveDemo: "https://what-if-phi.vercel.app/",
        githubRepo: "https://github.com/yomjsty/What-If",
        date: "Sep 2025",
        allStack: [
            {
                name: "Next.js",
            },
            {
                name: "Tailwind CSS",
            },
            {
                name: "Shadcn UI",
            },
            {
                name: "Better-Auth",
            },
            {
                name: "Convex",
            },
            {
                name: "Resend",
            },
        ],
    },
];
