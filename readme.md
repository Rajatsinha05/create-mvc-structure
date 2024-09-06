Sure! Here’s the updated `README.md` with instructions on how to install globally first and then how to use `npx` as an alternative.

---

# Create MVC Structure

`create-mvc-structure` is a CLI tool that generates a Node.js MVC boilerplate with Express.js and dotenv configuration. It helps you set up the project folder structure, necessary files, and automatically installs dependencies.

## Features

- Generates the complete MVC structure for Node.js projects.
- Pre-configured with `express` and `dotenv`.
- Includes `nodemon` for automatic restarts during development.
- Provides post-installation instructions for easy setup.

## Installation and Usage

### Option 1: Install Globally

To install the package globally, so that you can use it anytime by its command:

```bash
npm install -g create-mvc-structure
```

Once installed, you can create a new MVC project by running:

```bash
create-mvc-structure <project-name>
```

For example:

```bash
create-mvc-structure my-app
```

This will:
- Create a new directory called `my-app`.
- Set up the MVC folder structure inside the `my-app` directory.
- Automatically install necessary dependencies (`express`, `dotenv`, and `nodemon`).

### Option 2: Use Without Installation (via `npx`)

You can also use the package without globally installing it by using `npx`. This way, you’ll always use the latest version:

```bash
npx create-mvc-structure <project-name>
```

For example:

```bash
npx create-mvc-structure my-app
```

### 1. Navigate into Your Project Folder

Once the project is created, navigate to your newly created project directory:

```bash
cd my-app
```

### 2. Start the Application

#### Option 1: Start the Server with `npm start`

To manually start the server, run:

```bash
npm start
```

This will start your application using `node` and will run on the port specified in the `.env` file (default is `PORT=8090`).

#### Option 2: Use `nodemon` for Auto-Restart

For automatic restarts during development, use `nodemon` by running:

```bash
npm run dev
```

This command will start your server with `nodemon`, which will automatically restart it whenever changes are detected.

### 3. Environment Variables

The generated `.env` file includes default environment variables:

```bash
PORT=8090
DATABASE_URL=mongodb://localhost:27017/myapp
```

You can modify this file to set your own values for the port and other configuration options.

### 4. Project Folder Structure

Your generated project will have the following structure:

```
my-app/
│
├── /controllers       # Controllers for handling business logic
├── /models            # Data models (e.g., schemas)
├── /routes            # Route definitions
├── /public            # Public assets like CSS, images, etc.
│   └── /css           # CSS files
├── /views             # View templates (e.g., EJS, Pug)
├── /config            # Configuration files
├── /middleware        # Custom middleware files
├── .gitignore         # Ignored files for version control
├── .env               # Environment variables
├── index.js           # Main entry point for the application
└── package.json       # Project metadata and dependencies
```

### 5. Example Code in `index.js`

Here’s what the generated `index.js` file looks like:

```javascript
require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8090;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// Define your routes here
// app.use('/', require('./routes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 6. Next Steps

Now that your project is set up, you can:
- **Define Routes**: Add your application routes inside the `routes` directory.
- **Implement Controllers**: Implement your business logic in the `controllers` directory.
- **Define Models**: Set up your data models in the `models` directory.
- **Add Views**: If using server-side rendering, place your view templates (e.g., EJS or Pug) in the `views` directory.

## License

This project is licensed under the MIT License.

---

### Instructions Summary:

1. **Install Globally**:
   - `npm install -g create-mvc-structure`
   - Use `create-mvc-structure <project-name>` to create a new project.
   
2. **Or Use via `npx`**:
   - `npx create-mvc-structure <project-name>` (no installation required).

3. **Navigate to the Project Folder**:
   - `cd <project-name>`

4. **Start the Project**:
   - **Manual Start**: Run `npm start` to start the server.
   - **Development Mode**: Run `npm run dev` to start with `nodemon`.

5. **Edit Environment Variables**:
   - Customize the `.env` file to change the default settings.

---
