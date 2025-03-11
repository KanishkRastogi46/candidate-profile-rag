# Profile Ranking Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Features

- **Candidate Form**: Allows candidates to submit their details including name, email, LinkedIn URL, skills, and resume.
- **Job Description Form**: Allows employers to submit job descriptions including title, company, location, and job description.
- **Profile Ranking**: Displays a ranked list of candidate profiles based on their match with the job description.
- **Candidate Profile Summary**: Displays a detailed analysis of the candidate's resume.

## Project Structure

```plaintext
.
├── app
│   └── page.tsx                # Main page component
├── components
│   ├── CandidateForm.tsx       # Candidate form component
│   ├── JobDescription.tsx      # Job description form component
│   ├── ProfileRanking.tsx      # Profile ranking component
│   └── CandidateProfile.tsx    # Candidate profile summary component
├── store
│   └── profile.store.ts        # Zustand store for managing profiles
├── pages
│   ├── api
│   │   ├── form-submit.ts      # API route for submitting candidate form
│   │   └── job-desc.ts         # API route for submitting job description
├── public                      # Public assets
├── styles                      # Global styles
├── README.md                   # Project documentation
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Components

### CandidateForm

This component allows candidates to submit their details. It includes fields for name, email, LinkedIn URL, skills, and resume upload.

### JobDescription

This component allows employers to submit job descriptions. It includes fields for job title, company, location, and job description.

### ProfileRanking

This component displays a ranked list of candidate profiles based on their match with the job description. It fetches the profiles from the Zustand store and displays them in a list.

### CandidateProfile

This component displays a detailed analysis of the candidate's resume. It uses `dangerouslySetInnerHTML` to render the analysis with proper line breaks.

## Zustand Store

The Zustand store (`profile.store.ts`) is used to manage the state of candidate profiles. It includes actions to set and clear profiles.

## Configurations

### `tsconfig.json`

This file contains the TypeScript configuration for the project. It includes settings such as compiler options, paths, and type definitions.

### `package.json`

This file contains the project dependencies and scripts. It includes information about the project, such as the name, version, and scripts for running the development server, building the project, and more.

## API Routes

### `pages/api/form-submit.ts`

This API route handles the submission of the candidate form. It processes the form data and returns a response indicating the success or failure of the submission.

### `pages/api/job-desc.ts`

This API route handles the submission of the job description form. It processes the form data and returns a response indicating the success or failure of the submission.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.