const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Submit project proposal",
        description:
          "Prepare and submit the initial project proposal document.",
        date: "2025-04-14T10:00:00Z",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Attend client meeting",
        description: "Meeting with the client to gather requirements.",
        date: "2025-04-10T14:30:00Z",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Deploy to staging",
        description: "Deploy the latest build to the staging environment.",
        date: "2025-04-11T16:00:00Z",
        category: "Deployment",
      },
    ],
  },
  {
    id: 2,
    name: "Isha Verma",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Update UI components",
        description: "Revamp the homepage UI using latest design specs.",
        date: "2025-04-15T09:00:00Z",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Fix login bug",
        description: "Resolve issue where users can't log in via social media.",
        date: "2025-04-13T12:00:00Z",
        category: "Bug Fix",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Refactor authentication module",
        description: "Improve structure and readability of auth logic.",
        date: "2025-04-12T15:00:00Z",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Complete onboarding docs",
        description:
          "Draft the initial onboarding documentation for new hires.",
        date: "2025-04-10T10:30:00Z",
        category: "Documentation",
      },
    ],
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize database queries",
        description: "Review and enhance query performance in reports module.",
        date: "2025-04-14T13:00:00Z",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Set up CI/CD pipeline",
        description: "Integrate GitHub Actions for continuous deployment.",
        date: "2025-04-11T11:00:00Z",
        category: "DevOps",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Write test cases",
        description: "Write unit and integration tests for user service.",
        date: "2025-04-15T10:30:00Z",
        category: "Testing",
      },
    ],
  },
  {
    id: 4,
    name: "Priya Nair",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create marketing campaign plan",
        description: "Design and document strategy for Q2 product launch.",
        date: "2025-04-14T09:00:00Z",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Social media audit",
        description:
          "Analyze social media performance metrics from last quarter.",
        date: "2025-04-10T14:00:00Z",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Design email templates",
        description:
          "Create visually appealing templates for product newsletter.",
        date: "2025-04-12T16:30:00Z",
        category: "Design",
      },
    ],
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Review pull requests",
        description: "Go through and approve pending pull requests on repo.",
        date: "2025-04-14T11:00:00Z",
        category: "Code Review",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Implement dark mode",
        description: "Add dark theme toggle in user settings.",
        date: "2025-04-15T08:30:00Z",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Run user feedback session",
        description: "Collect usability feedback from power users.",
        date: "2025-04-13T14:30:00Z",
        category: "User Research",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Document API endpoints",
        description: "Add OpenAPI documentation for all microservices.",
        date: "2025-04-11T12:00:00Z",
        category: "API",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    name: "Neha Kapoor",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
