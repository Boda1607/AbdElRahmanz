// Array of skills
const skills = [
    // Core Software Development
    "Programming", "Python", "C++", "C#", "JavaScript",
    "HTML", "CSS", "Git",

    // Web Technologies
    "Web", "Full-stack", "Backend", "Frontend", "React.js", "Django",
    
    // Data & AI
    "Machine Learning", "AI", "Data Science", "Deep Learning", "Data Analysis",
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "Computer Vision", "Natural Language Processing", "Big Data",
    "Hadoop", "Spark", "Voice Recognition", "Data Visualization",
    "Tableau", "Power BI", "MATLAB Data Analysis", "Data Warehousing",

    // Business Systems & ERP
    "Business Process Management",
    "Customer Relationship Management (CRM)", "Inventory Management",
    "Financial Accounting", "Human Resource Management (HRM)",
    

    // Database & Security
    "Database Management", "SQL", "NoSQL", "MongoDB", "PostgreSQL",
    "MySQL", "Firebase Realtime Database",
    "API Design", "Cryptography",

    // Engineering & Design
    "UI/UX Design", "3D Printing",
    "Figma", "Prototyping", "Photography",
    "Animation", "Blender",

    // Project Management & Soft Skills
    "Project Management", "Technical Writing",  
    "Leadership", "Team Management", "Creative Thinking",
    "Problem Solving", "Critical Thinking",  "Conflict Resolution",
    "Time Management", "Public Speaking", "Stakeholder Management",

    // Miscellaneous
    "Blockchain", "Cryptocurrency",
    "Game Development", "React Native",
    "Chatbot Development",  "Digital Marketing"
];

class SkillsRotator {
    constructor(containerId, skills) {
        this.container = document.getElementById(containerId);
        this.skills = skills;
        this.currentElement = null;
        this.nextElement = null;
    }

    getRandomSkills(count = 3) {
        const shuffled = [...this.skills].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    createSkillElement(skills) {
        const div = document.createElement('div');
        div.className = 'skill-text';
        div.textContent = skills.join(' • ');
        return div;
    }

    async rotate() {
        // Remove old inactive element
        if (this.currentElement?.classList.contains('inactive')) {
            this.container.removeChild(this.currentElement);
        }

        // Move current to inactive
        if (this.nextElement) {
            this.currentElement = this.nextElement;
            this.currentElement.classList.remove('active');
            this.currentElement.classList.add('inactive');
        }

        // Create and show new element
        const randomSkills = this.getRandomSkills();
        this.nextElement = this.createSkillElement(randomSkills);
        this.container.appendChild(this.nextElement);

        // Trigger reflow
        void this.nextElement.offsetWidth;

        // Activate new element
        this.nextElement.classList.add('active');
    }

    start(interval = 3000) {
        this.rotate();
        setInterval(() => this.rotate(), interval);
    }
}

// Initialize and start the rotator
const rotator = new SkillsRotator('skills-wrapper', skills);
rotator.start(2500);
