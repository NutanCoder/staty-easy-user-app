# Staty Easy - Property Management Platform

A modern property management and rental platform built with Next.js, Supabase, and Tailwind CSS.

## Features

### Authentication & Authorization
- Email-based authentication with Supabase
- Protected routes with middleware
- Role-based access control
- Session management

### Property Management
- Property listing with detailed views
- Property search and filtering
- Image gallery support
- Location-based property search
- PG/Co-living specific features

### User Dashboard
- Property overview and statistics
- Recent activity tracking
- Saved searches and favorites
- Upcoming viewings management
- Market insights and trends

### User Interface
- Responsive design with Tailwind CSS
- Modern and clean interface
- Loading states and progress indicators
- Toast notifications for user feedback
- Form validation and error handling

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast
- **Loading UI**: NProgress
- **Type Safety**: TypeScript

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── properties/        # Property listings
│   └── pg/                # PG specific pages
├── components/            # Reusable components
│   ├── property/          # Property related components
│   └── ui/               # UI components
├── lib/                   # Utility functions
│   ├── routes/           # Route definitions
│   └── supabase/         # Supabase client
└── middleware.ts         # Auth middleware
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/staty-easy-user-app.git
   cd staty-easy-user-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Supabase credentials in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

### Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Development

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Follow component-based architecture
- Use centralized routing configuration

### State Management

- Use React hooks for local state
- Use Supabase for remote state
- Implement optimistic updates where possible
- Handle loading and error states

### Routing

All routes are defined in `src/lib/routes/routes.tsx`:
- Use typed route parameters
- Include metadata for SEO
- Define auth requirements
- Use helper functions for dynamic routes

### Components

- Follow atomic design principles
- Implement proper prop types
- Handle loading and error states
- Use Tailwind CSS for styling
- Include proper accessibility attributes

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform:
   - Vercel (recommended)
   - Netlify
   - Custom server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@statyeasy.com or join our Slack channel.

## Roadmap

- [ ] Advanced search filters
- [ ] Real-time chat
- [ ] Virtual property tours
- [ ] Mobile app
- [ ] Payment integration
- [ ] Review system
- [ ] Property verification
- [ ] Agent dashboard
