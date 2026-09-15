# HireReady - AI-Powered Resume Builder

HireReady is a modern resume-building web application that helps users create, customize, preview, and share professional resumes. It provides an easy-to-use interface for managing personal information, professional summaries, work experience, education, projects, and skills.

The application also includes AI-powered content enhancement to help users improve their professional summaries and job descriptions.

## Features

* Create and edit professional resumes
* Add personal information, education, experience, projects, and skills
* Choose from multiple resume templates
* Customize resume accent colors
* Live resume preview
* AI-enhanced professional summary
* AI-enhanced job descriptions
* Upload and manage profile images
* Remove background from profile images
* Save resume changes
* Make resumes public or private
* Share public resumes through a unique link
* Print or download resumes
* Responsive user interface

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Redux Toolkit
* Axios
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* OpenAI-compatible API integration
* ImageKit for seamless image upload and background removal and enhancement feature.

### AI Integration

The project uses an OpenAI-compatible API configuration to generate enhanced resume content. It can be connected to supported AI providers such as Google Gemini through an OpenAI-compatible endpoint.

## Project Structure

```text
HireReady/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── PersonalInfoform.jsx
│   │   │   ├── ProfessionalSummaryForm.jsx
│   │   │   ├── ExperienceForm.jsx
│   │   │   ├── EducationForm.jsx
│   │   │   ├── ProjectForm.jsx
│   │   │   ├── SkillsForm.jsx
│   │   │   ├── ResumePreview.jsx
│   │   │   ├── TemplateSelector.jsx
│   │   │   └── ColorPicker.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Resumebuilder.jsx
│   │   │   ├── Preview.jsx
│   │   │   └── Login.jsx
│   │   │
│   │   ├── configs/
│   │   │   └── api.js
│   │   ├── redux/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── configs/
│   ├── middlewares/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```


## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/hireready.git
cd hireready
```

### 2. Install frontend dependencies

```bash
cd client

npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENAI_API_KEY=your_ai_api_key
OPENAI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/
OPENAI_MODEL=gemini-2.5-flash
```

### Frontend API Configuration

Update the frontend API configuration according to your backend URL:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export default api;
```

Do not commit your `.env` file to GitHub.

Add this to `.gitignore`:

```gitignore
node_modules
.env
uploads
dist
```

## Running the Project

### Start the backend

cd server
npm run dev

### Start the frontend


cd client
npm run dev


## Main Application Flow

1. User signs up or logs in.
2. User opens the dashboard.
3. User creates a new resume.
4. User fills in personal and professional details.
5. User adds education, experience, projects, and skills.
6. User selects a resume template.
7. User customizes the accent color.
8. User uses AI enhancement where required. Whether it is AI powered background remover feature or summary enhancement
9. User previews the resume.
10. User saves, downloads, or shares the resume.






