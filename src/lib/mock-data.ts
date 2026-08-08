import { ChallengeData } from '../types';

export const STUDENT_INFO = {
  name: "Aditi Sharma",
  track: "Full Stack Development",
  rank: 42,
  totalParticipants: 500
};

export const MOCK_CHALLENGES: ChallengeData[] = [
  // STAGE 1 — DISCOVER (Days 1–10)
  {
    dayId: 1,
    title: "Environment Setup & 'Hello World'",
    description: "Welcome to Day 1! Today, you'll set up your local development environment and write a script that outputs 'Hello World'. A solid local environment reduces future friction.",
    requirements: [
      "Install Node.js (or preferred runtime)",
      "Set up your IDE (e.g., VS Code)",
      "Write a basic console script that prints Hello World",
      "Initialize Git and push to GitHub"
    ],
    learningObjective: "Understand the primary engineering principles behind day 1's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 1 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 2,
    title: "Your First HTML & CSS Layout",
    description: "Every web app starts with structure and style. Build a simple personal profile card using raw HTML & CSS, discovering how the DOM organizes information.",
    requirements: [
      "Create an index.html and styles.css file",
      "Build a visually organized profile card",
      "Include an image, a heading, and bio text",
      "Make the card visually distinct using CSS borders and shadows"
    ],
    learningObjective: "Understand the primary engineering principles behind day 2's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 2 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 3,
    title: "Button Interactions",
    description: "Make the web respond. Connect basic JavaScript to your UI to change elements when a user clicks a button.",
    requirements: [
      "Add a 'Toggle Theme' button to yesterday's profile card",
      "Write a JS function that manipulates the DOM",
      "Swap CSS classes to switch between a Light and Dark background"
    ],
    learningObjective: "Understand the primary engineering principles behind day 3's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 3 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 4,
    title: "Break It to Fix It",
    description: "Debugging is 50% of development. Clone an intentionally broken script and use console.log and browser Developer Tools to find exactly why it fails.",
    requirements: [
      "Reproduce a provided syntax error or logic failure",
      "Use Developer Tools to trace the error line",
      "Fix the variable scope or typo preventing execution",
      "Verify the script reaches the end successfully"
    ],
    learningObjective: "Understand the primary engineering principles behind day 4's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 4 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 5,
    title: "JSON Data Handling",
    description: "Data powers modern apps, usually in JSON format. Write a script that parses a block of raw JSON data into usable variables.",
    requirements: [
      "Create a raw JSON string representing a playlist",
      "Parse the string into a JavaScript array of objects",
      "Loop over the array and log each song title to the console"
    ],
    learningObjective: "Understand the primary engineering principles behind day 5's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 5 appear constantly in production codebases solving practical problems.",
    challengeType: "debug",
    difficulty: "beginner",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 6,
    title: "Flexbox Experimentation",
    description: "Layouts can be tricky. Try moving 5 distinct div shapes into 5 different configurations purely by applying Flexbox utility classes.",
    requirements: [
      "Create a container with 5 colored square divs",
      "Center them all perfectly",
      "Align them along the right edge",
      "Space them evenly with space-between"
    ],
    learningObjective: "Understand the primary engineering principles behind day 6's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 6 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 7,
    title: "Input & State Basics",
    description: "Forms are how users talk to your app. Build an input field that dynamically updates text on the screen as you type into it.",
    requirements: [
      "Set up an input element and an empty text container",
      "Attach a keyboard event listener (keyup or input)",
      "Sync the input value to the container in real-time"
    ],
    learningObjective: "Understand the primary engineering principles behind day 7's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 7 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 8,
    title: "Array Transformations",
    description: "You'll almost never use data exactly as you receive it. Use map() and filter() to process an array of user data.",
    requirements: [
      "Create an array of user objects covering different ages",
      "Filter out users under 18",
      "Map the remaining users to an array of just their names",
      "Log the final cleaned list"
    ],
    learningObjective: "Understand the primary engineering principles behind day 8's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 8 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 9,
    title: "Promise & SetTimeout",
    description: "Not everything happens instantly. Simulate a fake network request utilizing Promises and setTimeout to understand async behavior.",
    requirements: [
      "Create a Promise that resolves after 2 seconds",
      "Show a 'loading...' message in the console immediately",
      "Log 'Data received!' once the promise resolves"
    ],
    learningObjective: "Understand the primary engineering principles behind day 9's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 9 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 10,
    title: "The To-Do List Logic",
    description: "A classic pattern. Build the purely logical (no UI necessary) foundation of a to-do list taking advantage of arrays and objects.",
    requirements: [
      "Write an 'addTask' function that pushes to an array",
      "Write a 'completeTask' function that sets a boolean flag",
      "Write a 'deleteTask' function that filters items out"
    ],
    learningObjective: "Understand the primary engineering principles behind day 10's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 10 appear constantly in production codebases solving practical problems.",
    challengeType: "debug",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },

  // STAGE 2 — BUILD (Days 11–25)
  {
    dayId: 11,
    title: "Local API Foundation",
    description: "Kick off Stage 2! Set up an Express (or equivalent) server and wire up your very first backend route.",
    requirements: [
      "Initialize a Node.js project and install a web framework",
      "Create an HTTP server listening on port 3000",
      "Return a solid JSON object when a GET request hits '/api/status'"
    ],
    learningObjective: "Understand the primary engineering principles behind day 11's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 11 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 12,
    title: "Fetching from the Client",
    description: "Connect the pieces. Use standard browser `fetch` to ping the backend API you built yesterday and render the result on screen.",
    requirements: [
      "Build a simple HTML page with a 'Load Data' button",
      "Fetch data from your local server endpoint on click",
      "Parse the response and render it into a DOM element"
    ],
    learningObjective: "Understand the primary engineering principles behind day 12's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 12 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 13,
    title: "Componentization",
    description: "Stop repeating yourself. Adopt a modern UI library (React/Vue) and break down a complex page into three reusable components.",
    requirements: [
      "Set up a component-based project frame (e.g. Next.js/Vite)",
      "Create a reusable Button component passing props",
      "Create a Header component",
      "Compose them together in the main view"
    ],
    learningObjective: "Understand the primary engineering principles behind day 13's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 13 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 14,
    title: "Managing UI State",
    description: "State defines exactly what the user sees at any moment. Implement a functional Counter component utilizing local state hooks.",
    requirements: [
      "Render a number representing internal state",
      "Add 'Increment' and 'Decrement' buttons",
      "Ensure state changes immediately update the DOM",
      "Prevent the counter from going below zero"
    ],
    learningObjective: "Understand the primary engineering principles behind day 14's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 14 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 15,
    title: "Form Submission & Validation",
    description: "Never trust user input. Build an email subscription form that prevents submission unless the email format is valid.",
    requirements: [
      "Create an email input field and Submit button",
      "Manage form text via controlled state",
      "Use Regex or build-in checking to validate the string structure",
      "Display a visible error message on invalid attempts"
    ],
    learningObjective: "Understand the primary engineering principles behind day 15's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 15 appear constantly in production codebases solving practical problems.",
    challengeType: "debug",
    difficulty: "beginner",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 16,
    title: "Dynamic Routing",
    description: "Apps have multiple pages. Implement dynamic routing so that viewing `/user/1` and `/user/2` shows distinct content.",
    requirements: [
      "Utilize a router layer (like React Router or Next.js App Router)",
      "Set up a dynamic path parameter capturing an ID",
      "Read the parameter and render it onto the page"
    ],
    learningObjective: "Understand the primary engineering principles behind day 16's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 16 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 17,
    title: "CSS Grid Architecture",
    description: "Grid excels at complex two-dimensional layouts. Build a 3-column dashboard wireframe completely abandoning Flexbox for Grid.",
    requirements: [
      "Implement a top navigation bar",
      "Create a sidebar, main content area, and right rail",
      "Use `grid-template-areas` or `grid-template-columns` to position them cleanly"
    ],
    learningObjective: "Understand the primary engineering principles behind day 17's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 17 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 18,
    title: "Connecting a Database",
    description: "Move beyond memory arrays. Set up a local database connection (SQLite, PostgreSQL, or Mongo) via an ORM/driver.",
    requirements: [
      "Install the necessary database driver/ORM package",
      "Establish a stable connection via your server code",
      "Create a 'Users' simple schema/table structure"
    ],
    learningObjective: "Understand the primary engineering principles behind day 18's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 18 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 19,
    title: "Writing Data (POST)",
    description: "Allow users to send data back. Build a POST endpoint to write a new record into your database.",
    requirements: [
      "Add a body parsing middleware to your server",
      "Create a POST resource handler",
      "Insert the clean received data directly into the DB",
      "Return the generated database ID in the response"
    ],
    learningObjective: "Understand the primary engineering principles behind day 19's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 19 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 20,
    title: "Environment Variables",
    description: "Never hardcode secrets. Extract database connection strings and sensitive keys into an encrypted `.env` architecture.",
    requirements: [
      "Install an env helper (like dotenv)",
      "Move database credentials out of your code files",
      "Read configuration dynamically from `process.env`",
      "Add `.env` to your `.gitignore`"
    ],
    learningObjective: "Understand the primary engineering principles behind day 20's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 20 appear constantly in production codebases solving practical problems.",
    challengeType: "debug",
    difficulty: "beginner",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 21,
    title: "Authentication Middleware",
    description: "Protect your routes. Build an intercepting middleware function that refuses traffic completely lacking an authorization token.",
    requirements: [
      "Define a server middleware intercepting '/secure' routes",
      "Check the Authorization header presence",
      "Return a `401 Unauthorized` status if empty",
      "Call `next()` if passing"
    ],
    learningObjective: "Understand the primary engineering principles behind day 21's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 21 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 22,
    title: "Component Lifecycle",
    description: "Manage component mounts. Utilize `useEffect` appropriately to fetch data exactly once when the page exclusively loads.",
    requirements: [
      "Initialize an empty data array in state",
      "Set up a layout effect to trigger a fetch upon mount",
      "Load the returned API data properly into state",
      "Add a skeleton loader if state is still propagating"
    ],
    learningObjective: "Understand the primary engineering principles behind day 22's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 22 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 23,
    title: "Refactoring the Codebase",
    description: "Messy code builds massive technical debt. Take your scattered API and UI files and divide them into a structured 'MVC' style layout.",
    requirements: [
      "Separate controllers from route definitions",
      "Move database queries into standard model files",
      "Extract commonly styled UI components",
      "Ensure the exact same functionality persists"
    ],
    learningObjective: "Understand the primary engineering principles behind day 23's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 23 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 24,
    title: "Consuming Third-Party APIs",
    description: "Leverage global capability. Fetch and render data from a public API (e.g. Pokémon, Weather, or Space station tracking).",
    requirements: [
      "Select a free JSON API",
      "Send a request capturing dynamic info",
      "Handle the CORS mechanics natively",
      "Render a styled visual interpretation of the payload"
    ],
    learningObjective: "Understand the primary engineering principles behind day 24's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 24 appear constantly in production codebases solving practical problems.",
    challengeType: "build",
    difficulty: "beginner",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 25,
    title: "Context & Global State",
    description: "Avoid prop drilling across deeply nested components. Institute a global state provider wrapping your application architecture.",
    requirements: [
      "Set up React Context (or VueX/Pinia, etc.)",
      "Inject a global 'user theme preference' at the top root",
      "Consume the context actively three components deep",
      "Toggle the context theme and watch everything adapt natively"
    ],
    learningObjective: "Understand the primary engineering principles behind day 25's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 25 appear constantly in production codebases solving practical problems.",
    challengeType: "debug",
    difficulty: "beginner",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },

  // STAGE 3 — EXPERIMENT (Days 26–35)
  {
    dayId: 26,
    title: "Injecting Subtle Micro-Animations",
    description: "Animation changes feel. Add hover transformation scaling and CSS opacity transitions to standard buttons across your app.",
    requirements: [
      "Identify 3 interactive components",
      "Bind CSS `transition: all 0.2s ease` attributes",
      "Create clear `:hover` offset states",
      "Implement a subtle entry fade-in on mount"
    ],
    learningObjective: "Understand the primary engineering principles behind day 26's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 26 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 27,
    title: "Optimizing Bundle Impact",
    description: "Why does it load slowly? Investigate and execute dynamic / lazy loading for a heavy piece of your page.",
    requirements: [
      "Isolate a component that isn't instantly required on load",
      "Wrap it utilizing native code-splitting techniques",
      "Verify via network tab that the chunk is fetched separately"
    ],
    learningObjective: "Understand the primary engineering principles behind day 27's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 27 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 28,
    title: "Find The Hidden Bug",
    description: "We've injected a silent bug where state closures mutate incorrectly. Experiment with dependency arrays to unearth the fix.",
    requirements: [
      "Set up a counter timer effect that double increments erratically",
      "Isolate the dependency tracking missing the stable closure",
      "Refactor it using a functional state updater pattern `prev => prev`"
    ],
    learningObjective: "Understand the primary engineering principles behind day 28's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 28 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 29,
    title: "Rebuilding Core Javascript",
    description: "Learn how the engine works by writing your own stripped-down version of JavaScript's native Array `.map()` method.",
    requirements: [
      "Create a custom iterating function",
      "Accept an array and a callback arguments",
      "Generate a brand new empty array, pushing manipulated values in",
      "Return the exact mapped clone structure without mutating the original"
    ],
    learningObjective: "Understand the primary engineering principles behind day 29's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 29 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 30,
    title: "What Happens If We Remove Divs?",
    description: "Semantic HTML matters immensely for accessibility. Change your layout exclusively to use `<main>`, `<article>`, and `<section>` tags.",
    requirements: [
      "Remove completely generic wrapping `<div>` elements",
      "Replace them with semantic roles accurately reflecting content",
      "Verify layout styling isn't damaged in the process"
    ],
    learningObjective: "Understand the primary engineering principles behind day 30's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 30 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 31,
    title: "Debouncing Search",
    description: "API spam crashes servers. Experiment with a debounce utility preventing an input box from firing keystroke fetches endlessly.",
    requirements: [
      "Bind a search input firing network requests",
      "Implement a timer wrapper preventing API hits instantly",
      "Ensure requests only fire after the user stops typing for 500ms"
    ],
    learningObjective: "Understand the primary engineering principles behind day 31's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 31 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 32,
    title: "Exploring GraphQL Basics",
    description: "Compare GraphQL to REST. Write a query hitting a public GraphQL endpoint selectively demanding exactly three specific fields.",
    requirements: [
      "Research a public GraphQL playground (like GitHub/Anilist)",
      "Construct a strictly typed query explicitly avoiding over-fetching",
      "Log the precise returned data structure"
    ],
    learningObjective: "Understand the primary engineering principles behind day 32's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 32 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 33,
    title: "Accessibility Keyboard Audit",
    description: "A strong dev doesn't require a mouse. Try navigating your recent app structure exclusively using your `Tab` and `Space` keys.",
    requirements: [
      "Disconnect your mouse completely for 10 minutes",
      "Fix missing `tabIndex` parameters or missing focus styles",
      "Ensure modal boxes accurately trap and respect keyboard focus"
    ],
    learningObjective: "Understand the primary engineering principles behind day 33's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 33 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 34,
    title: "Swap The Database Layer",
    description: "Decoupling logic makes your app bulletproof. Switch your data retrieval module to target a LocalStorage layer temporarily.",
    requirements: [
      "Abstract DB fetch commands beneath an interface",
      "Swap out the primary source for identical stringified LocalStorage equivalents",
      "Confirm the frontend renders agnostically"
    ],
    learningObjective: "Understand the primary engineering principles behind day 34's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 34 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 35,
    title: "The Creative Chaos Feature",
    description: "Break the rules momentarily. Install a wildly creative cosmetic dependency (like Canvas particles or 3D renders) into a rigid page.",
    requirements: [
      "Introduce a purely aesthetic Javascript physics/particle library",
      "Bind the effect strictly to a specific background element",
      "Ensure it doesn't break primary site interactions"
    ],
    learningObjective: "Understand the primary engineering principles behind day 35's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 35 appear constantly in production codebases solving practical problems.",
    challengeType: "experiment",
    difficulty: "intermediate",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },

  // STAGE 4 — REAL-WORLD PROBLEMS (Days 36–45)
  {
    dayId: 36,
    title: "Solving Silent Failures",
    description: "A user reports clicking a button does nothing. Your API is dropping requests. Wrap your networking calls in comprehensive try/catch boundaries.",
    requirements: [
      "Force your API to return a random 500 error",
      "Catch the resulting UI crash proactively",
      "Render a fallback 'Something went wrong' UI strictly matching design"
    ],
    learningObjective: "Understand the primary engineering principles behind day 36's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 36 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 37,
    title: "Designing Data Pagination",
    description: "Returning 10,000 items freezes the browser. Implement cursor or offset pagination explicitly restricting array streams to 10 entities.",
    requirements: [
      "Slice the server-side array into blocks",
      "Demand page subsets using URL parameter `?page=X`",
      "Construct explicit 'Next' and 'Previous' UX logic hooks"
    ],
    learningObjective: "Understand the primary engineering principles behind day 37's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 37 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 38,
    title: "Handling Auth Expiration",
    description: "Security tokens expire constantly. If the client attempts to use a stale token, gracefully handle removing credentials and booting them to Login.",
    requirements: [
      "Trap a specific `401 Unauthorized` token rejection",
      "Clear the local storage tracking instance completely",
      "Force a hard routing redirect back to your `/login` view"
    ],
    learningObjective: "Understand the primary engineering principles behind day 38's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 38 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 39,
    title: "Persisting the Complex Form",
    description: "Users hate losing typed data if they refresh. Autocache drafts of a long form specifically into session storage actively.",
    requirements: [
      "Capture form keystrokes into persistent Session Storage every second",
      "Pre-fill the local form upon hard browser refreshing natively",
      "Clear storage completely when submitted successfully"
    ],
    learningObjective: "Understand the primary engineering principles behind day 39's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 39 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 40,
    title: "Image Upload Architecture",
    description: "Avatars require complex parsing. Accept a `multipart/form-data` image stream and process it properly against your backend engine.",
    requirements: [
      "Build a file selection input locking to `.png/.jpg` streams",
      "Process the stream on the backend using form parsers (multer etc.)",
      "Save the final object buffer or generated string accurately natively"
    ],
    learningObjective: "Understand the primary engineering principles behind day 40's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 40 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 41,
    title: "Throttling Destructive Actions",
    description: "Users accidentally clicking 'Delete' twice cause race conditions. Implement locking logic disabling submit buttons synchronously resolving processes.",
    requirements: [
      "Set an explicit `isSubmitting` reactive flag when actioning",
      "Bind HTML `disabled` attributes against interacting elements globally",
      "Release the flags strictly upon API resolution cleanly"
    ],
    learningObjective: "Understand the primary engineering principles behind day 41's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 41 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 42,
    title: "Role-Based Access Guarding",
    description: "Not everyone is an administrator. Lock an internal dashboard screen explicitly denying users without a designated `admin` metadata tag.",
    requirements: [
      "Implement a router guard verifying internal role claims",
      "Bounce standard traffic efficiently toward an unauthorized page",
      "Hide administrative UI buttons fully from unauthorized DOM renderings"
    ],
    learningObjective: "Understand the primary engineering principles behind day 42's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 42 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 43,
    title: "Responsive Breaking Points",
    description: "Mobile first matters actively. Refactor a complex table view deliberately forcing a stacked card layout strictly across screens under 600px.",
    requirements: [
      "Leverage CSS media queries checking viewport widths actively",
      "Hide generic non-essential column headers completely",
      "Enforce grid vertical stacking smoothly"
    ],
    learningObjective: "Understand the primary engineering principles behind day 43's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 43 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 30,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 44,
    title: "The Zero-State Experience",
    description: "New databases possess no records. Build beautiful, encouraging 'Empty States' actively instructing users how to initiate creation.",
    requirements: [
      "Capture an empty array state completely preventing default table drawing",
      "Render a welcoming vector/icon suggesting active involvement natively",
      "Embed a primary 'Create Now' Call-to-Action directly mapping appropriately"
    ],
    learningObjective: "Understand the primary engineering principles behind day 44's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 44 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 45,
    title: "Safe SQL Query Sanitization",
    description: "Hackers constantly execute injection attacks dynamically. Review your raw SQL string execution blocks replacing inputs via parametrized binders.",
    requirements: [
      "Replace string concatenation methodologies completely across drivers",
      "Execute `?` placeholder parameters explicitly blocking execution scopes natively",
      "Test inputs aggressively deploying quotes checking failure mechanisms"
    ],
    learningObjective: "Understand the primary engineering principles behind day 45's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 45 appear constantly in production codebases solving practical problems.",
    challengeType: "solve",
    difficulty: "intermediate",
    estimatedMinutes: 20,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },

  // STAGE 5 — BUILD YOUR OWN (Days 46–55)
  {
    dayId: 46,
    title: "Select Your Product Problem",
    description: "Welcome to Stage 5. You are the architect now. Brainstorm and select a realistic, manageable problem you wish to personally solve dynamically.",
    requirements: [
      "Draft three different application ideas locally",
      "Select the single most achievable goal for a ten-day building phase",
      "Write a one-paragraph elevator pitch defining core value explicitly"
    ],
    learningObjective: "Understand the primary engineering principles behind day 46's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 46 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 50,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 47,
    title: "Define The User Stories",
    description: "Great code targets actual human workflows explicitly. Write strictly isolated structural user stories guiding exact feature demands.",
    requirements: [
      "Draft 5 primary distinct user interaction features",
      "Prioritize strictly the absolute required MVP functionalities natively",
      "Log what features actively aren't immediately critical"
    ],
    learningObjective: "Understand the primary engineering principles behind day 47's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 47 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 60,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 48,
    title: "Database Architecture Planning",
    description: "Visualizing data prevents structural refactors later. Draft the entity relationships modeling exactly how your architecture interacts.",
    requirements: [
      "Map distinct User / Item / Interaction collections natively",
      "Define exactly where Foreign Keys map across scopes",
      "Confirm normalization against repeated arbitrary data drops"
    ],
    learningObjective: "Understand the primary engineering principles behind day 48's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 48 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 49,
    title: "Initialize Base Repository",
    description: "Establish the pristine groundwork scaffolding. Initialize the stack, connect linters, and ensure pristine folder structuring.",
    requirements: [
      "Deploy base stack directories natively resolving initial packages",
      "Integrate baseline stylistic configs immediately",
      "Run the barebones skeleton completely confirming functionality natively"
    ],
    learningObjective: "Understand the primary engineering principles behind day 49's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 49 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 50,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 50,
    title: "Backend API Scaffolding",
    description: "Execute the core brain functionalities establishing routing gateways across critical endpoints actively.",
    requirements: [
      "Generate baseline CRUD endpoints mirroring schema models cleanly",
      "Test endpoints independently executing generic REST methodologies",
      "Mock active return payloads verifying route viability natively"
    ],
    learningObjective: "Understand the primary engineering principles behind day 50's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 50 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 60,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 51,
    title: "Connecting The Persistence",
    description: "Connect real databases fully transitioning off mocked payloads across active execution environments.",
    requirements: [
      "Attach chosen database driver mechanisms properly executing connections",
      "Bind specific model classes natively processing inbound validation strictly",
      "Execute successful writing logic seamlessly onto localized layers"
    ],
    learningObjective: "Understand the primary engineering principles behind day 51's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 51 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 52,
    title: "Core Frontend Component Wireframes",
    description: "Lay the concrete bricks across screen boundaries establishing active structural HTML mapping globally.",
    requirements: [
      "Build navigation blocking methodologies natively",
      "Develop core content rendering grids seamlessly handling spatial logistics",
      "Map inputs seamlessly toward active contextual states locally"
    ],
    learningObjective: "Understand the primary engineering principles behind day 52's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 52 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 50,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 53,
    title: "Integrate Core Application Logic",
    description: "Connect isolated architectural layers dynamically actively wiring frontend UX against backend APIs natively.",
    requirements: [
      "Execute proper `fetch`/networking functions properly hooking APIs",
      "Process rendering loops dynamically projecting DB schemas efficiently",
      "Resolve state-lifting complexities ensuring components sync beautifully"
    ],
    learningObjective: "Understand the primary engineering principles behind day 53's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 53 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 60,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 54,
    title: "Implementing Authentication Flows",
    description: "Secure application interactions ensuring session handling appropriately controls user scopes seamlessly.",
    requirements: [
      "Activate login interceptors actively blocking random access properly",
      "Resolve cookie/token deployment natively securing backend traffic completely",
      "Track active authenticated state handling localized logout workflows efficiently"
    ],
    learningObjective: "Understand the primary engineering principles behind day 54's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 54 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 55,
    title: "Final Baseline Completion",
    description: "Deliver minimum viable mechanics ensuring functional execution strictly aligns against drafted user stories natively.",
    requirements: [
      "Aggressively check workflow endpoints cleanly closing logic gaps directly",
      "Prevent catastrophic blocking crashes properly shielding basic operations natively",
      "Confirm absolute success completing functional minimum project boundaries"
    ],
    learningObjective: "Understand the primary engineering principles behind day 55's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 55 appear constantly in production codebases solving practical problems.",
    challengeType: "project",
    difficulty: "advanced",
    estimatedMinutes: 50,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },

  // STAGE 6 — SHOWCASE (Days 56–60)
  {
    dayId: 56,
    title: "Visual Design Polish",
    description: "Aesthetic layers communicate trustworthiness directly. Spend aggressive focus elevating typographical layouts completely bypassing default styles natively.",
    requirements: [
      "Refine explicit distinct brand color methodologies accurately resolving contrast natively",
      "Implement strong spacing scales generating consistent padding globally",
      "Deploy high-fidelity typographies completely shifting visual weights properly"
    ],
    learningObjective: "Understand the primary engineering principles behind day 56's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 56 appear constantly in production codebases solving practical problems.",
    challengeType: "improve",
    difficulty: "advanced",
    estimatedMinutes: 60,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 57,
    title: "Edge Case & Bug QA",
    description: "Shatter your application trying intentionally destructive inputs actively hunting crashes natively shielding against odd parameters.",
    requirements: [
      "Execute boundary testing pushing huge string limits dynamically against fields",
      "Process broken network simulations checking UI behavior natively gracefully",
      "Resolve minimum three distinct silent edge case failures completely"
    ],
    learningObjective: "Understand the primary engineering principles behind day 57's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 57 appear constantly in production codebases solving practical problems.",
    challengeType: "improve",
    difficulty: "advanced",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 58,
    title: "Deployment Architectures",
    description: "Localhost executes nothing globally. Shift repository branches onto live staging environments executing production builds properly.",
    requirements: [
      "Connect repository bindings natively against deployment layers (Vercel/Railways etc)",
      "Set production environmental variable secrets natively replacing local scopes",
      "Confirm successful live traffic capabilities checking console tracking cleanly"
    ],
    learningObjective: "Understand the primary engineering principles behind day 58's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 58 appear constantly in production codebases solving practical problems.",
    challengeType: "improve",
    difficulty: "advanced",
    estimatedMinutes: 50,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 59,
    title: "Documentation & Readme Execution",
    description: "Professional builders document systems meticulously actively projecting project intelligence natively inviting codebase comprehension cleanly.",
    requirements: [
      "Write distinct architectural reasoning explaining active structural methodology choices cleanly",
      "List setup instruction requirements precisely allowing instant local executions natively",
      "Provide aesthetic screenshot deployments directly onto repository dashboards properly"
    ],
    learningObjective: "Understand the primary engineering principles behind day 59's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 59 appear constantly in production codebases solving practical problems.",
    challengeType: "improve",
    difficulty: "advanced",
    estimatedMinutes: 60,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  },
  {
    dayId: 60,
    title: "The Final Showcase Review",
    description: "Congratulations. Delivery marks capability accurately reflecting true transformation globally proving internal drive unequivocally. Ship it proudly.",
    requirements: [
      "Publish actual public networking links completely activating project capabilities actively",
      "Submit final reflection summaries natively closing exact journey markers completely",
      "Synthesize active learned disciplines fully launching career methodologies globally!"
    ],
    learningObjective: "Understand the primary engineering principles behind day 60's task and how to execute it efficiently.",
    whyItMatters: "Real applications demand robust architectures. The mechanics covered in day 60 appear constantly in production codebases solving practical problems.",
    challengeType: "improve",
    difficulty: "advanced",
    estimatedMinutes: 40,
    curiosityPrompt: "What happens if you dramatically increase the scale of this feature? How would it behave under heavy user load?"
  }
];
