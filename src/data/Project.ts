export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    details: string;
    image: string;
    video?: string;
    github: string;
    technologies: string[];
    featured?: boolean;
    features: string[];
}

export const projects: Project[] = [

    // =========================================================
    // 1. DENTAL CLINIC
    // =========================================================

    {
        id: 1,

        title: "Dental Clinic Management System",

        category: "ASP.NET Core MVC",

        description:
            "A complete dental clinic management system built with ASP.NET Core MVC, Entity Framework Core and Identity.",

        details:
            "A role-based dental clinic management system designed to manage patients, doctors, appointments and authentication. The application follows a clean layered structure and provides a professional dashboard experience.",

        image: "/projects/dental-clinic.jpg",

        video: "/projects/videos/dental-clinic.mp4",

        github:
            "https://github.com/yourusername/dental-clinic",

        technologies: [
            "ASP.NET Core MVC",
            "C#",
            "Entity Framework Core",
            "SQL Server",
            "ASP.NET Identity",
            "Bootstrap"
        ],

        featured: true,

        features: [
            "Admin dashboard",
            "Patient management",
            "Doctor management",
            "Appointment management",
            "Role-based authentication",
            "ASP.NET Identity",
            "Entity Framework Core",
            "SQL Server database"
        ]
    },


    // =========================================================
    // 2. FOODFUSION
    // =========================================================

    {
        id: 2,

        title: "FoodFusion Restaurant System",

        category: "ASP.NET Core Web API + React",

        description:
            "Modern restaurant management platform with React frontend and ASP.NET Core Web API backend.",

        details:
            "A full-stack restaurant platform featuring menu management, categories, shopping cart, orders, reviews, authentication and a responsive React interface.",

        image: "/projects/foodfusion.jpg",

        video: "/projects/videos/foodfusion.mp4",

        github:
            "https://github.com/yourusername/foodfusion",

        technologies: [
            "ASP.NET Core Web API",
            "C#",
            "React",
            "TypeScript",
            "Entity Framework Core",
            "SQL Server",
            "JWT"
        ],

        features: [
            "Restaurant menu",
            "Category management",
            "Shopping cart",
            "Authentication",
            "JWT authorization",
            "Reviews",
            "Admin management",
            "Responsive React UI"
        ]
    },


    // =========================================================
    // 3. BLOG NEWS PORTAL
    // =========================================================

    {
        id: 3,

        title: "Blog News Portal",

        category: "ASP.NET Core Web API",

        description:
            "RESTful blogging and news platform with authentication, articles, comments and likes.",

        details:
            "A backend-focused project demonstrating clean API architecture, JWT authentication, Entity Framework Core relationships and RESTful API design.",

        image: "/projects/blog-news.jpg",

        video: "/projects/videos/blog-news.mp4",

        github:
            "https://github.com/yourusername/blog-news-portal",

        technologies: [
            "ASP.NET Core Web API",
            "C#",
            "Entity Framework Core",
            "SQL Server",
            "JWT",
            "Swagger"
        ],

        features: [
            "User registration",
            "User login",
            "JWT authentication",
            "Article CRUD",
            "Comments",
            "Likes",
            "Entity relationships",
            "Swagger documentation"
        ]
    },


    // =========================================================
    // 4. SCHOOL MANAGEMENT
    // =========================================================

    {
        id: 4,

        title: "School Management System",

        category: "ASP.NET Core MVC",

        description:
            "Role-based school management system for administrators, teachers and students.",

        details:
            "A complete school management solution designed around normalized database relationships and role-based dashboards for different users.",

        image: "/projects/school-management.jpg",

        video: "/projects/videos/school-management.mp4",

        github:
            "https://github.com/yourusername/school-management",

        technologies: [
            "ASP.NET Core MVC",
            "C#",
            "Entity Framework Core",
            "SQL Server",
            "ASP.NET Identity",
            "Bootstrap"
        ],

        features: [
            "Admin dashboard",
            "Teacher dashboard",
            "Student management",
            "Attendance management",
            "Result management",
            "Role-based authorization",
            "Database relationships"
        ]
    },


    // =========================================================
    // 5. MINI AMAZON
    // =========================================================

    {
        id: 5,

        title: "Mini Amazon E-Commerce",

        category: "ASP.NET Core MVC",

        description:
            "A full-stack e-commerce platform inspired by modern online shopping systems, built with ASP.NET Core MVC.",

        details:
            "A practical e-commerce application featuring product catalog management, categories, shopping cart, checkout flow, order history and secure authentication using ASP.NET Identity. The project demonstrates real-world MVC architecture, Entity Framework Core relationships and SQL Server database integration.",

        image: "/projects/mini-amazon.jpg",

        video: "/projects/videos/mini-amazon.mp4",

        github:
            "https://github.com/yourusername/mini-amazon",

        technologies: [
            "ASP.NET Core MVC",
            "C#",
            "Entity Framework Core",
            "SQL Server",
            "ASP.NET Identity",
            "Bootstrap"
        ],

        features: [
            "User registration and login",
            "Product catalog",
            "Product categories",
            "Product management",
            "Shopping cart",
            "Checkout system",
            "Order history",
            "ASP.NET Identity",
            "Entity Framework Core",
            "SQL Server database",
            "Responsive UI"
        ]
    }

];