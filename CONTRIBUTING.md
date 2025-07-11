# Contributing to Staty Easy

We love your input! We want to make contributing to Staty Easy as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable.
2. Update the CHANGELOG.md with a note describing your changes.
3. The PR will be merged once you have the sign-off of two other developers.

## Code Style

### TypeScript

- Use TypeScript for all new code
- Define interfaces for props and state
- Use proper type annotations
- Avoid using `any`
- Use enums for constants

### Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Handle loading and error states
- Include proper accessibility attributes

### Styling

- Use Tailwind CSS for styling
- Follow the project's color scheme
- Make components responsive
- Use proper spacing utilities
- Follow mobile-first approach

### State Management

- Use React hooks for local state
- Use Supabase for remote state
- Implement optimistic updates
- Handle loading and error states
- Use proper error boundaries

### Testing

- Write unit tests for utilities
- Write integration tests for components
- Use React Testing Library
- Test error states
- Test loading states

## Environment Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Application Configuration
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   NEXT_PUBLIC_APP_NAME=Staty Easy
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

Follow these conventions when adding new files:

```
src/
├── app/                    # Next.js app router pages
│   ├── [feature]/         # Feature-specific pages
│   │   ├── page.tsx       # Page component
│   │   ├── layout.tsx     # Layout component
│   │   └── loading.tsx    # Loading component
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── [feature]/        # Feature-specific components
│   └── ui/               # Generic UI components
├── lib/                   # Utility functions
│   ├── types/            # TypeScript types
│   └── utils/            # Helper functions
└── styles/               # Global styles
```

## Commit Messages

We use conventional commits for clear communication:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

Example:
```
feat(auth): add email verification
```

## Bug Reports

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening)

## Feature Requests

We love feature requests! Please include:

- The problem you're trying to solve
- Your proposed solution
- Any alternatives you've considered
- Additional context or screenshots

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Questions?

Feel free to contact the development team at dev@statyeasy.com 