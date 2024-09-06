#!/usr/bin/env node


const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get the project name from command line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify the project directory:');
  console.error('  npx create-mvc-structure <project-directory>');
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

// Helper function to create directories
const createDirectories = (dirs) => {
  dirs.forEach((dir) => {
    const dirPath = path.join(projectPath, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
};

// Helper function to create files
const createFiles = (files) => {
  files.forEach(({ filename, content }) => {
    const filePath = path.join(projectPath, filename);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content);
      console.log(`Created file: ${filename}`);
    }
  });
};

// Directories to create
const directories = [
  'controllers',
  'models',
  'routes',
  path.join('public', 'css'),
  'views',
  'config',
  'middleware',
];

// Files to create
const files = [
  {
    filename: '.gitignore',
    content: 'node_modules\n.env\n',
  },
  {
    filename: '.env',
    content: 'PORT=3000\nDATABASE_URL=mongodb://localhost:27017/myapp\n',
  },
  {
    filename: 'index.js',
    content: `require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.use('/', require('./routes'));

// Start the server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`,
  },
  {
    filename: 'package.json',
    content: JSON.stringify(
      {
        name: projectName,
        version: '1.0.0',
        main: 'index.js',
        scripts: {
          start: 'node index.js',
        },
        dependencies: {
          express: '^4.17.1',
          dotenv: '^10.0.0',
        },
      },
      null,
      2
    ),
  },
];

// Create project directory
fs.mkdirSync(projectPath);

// Create directories and files
createDirectories(directories);
createFiles(files);

// Install dependencies
console.log('Installing dependencies...');
execSync('npm install', { stdio: 'inherit', cwd: projectPath });

console.log('MVC Boilerplate has been successfully set up in', projectName);
