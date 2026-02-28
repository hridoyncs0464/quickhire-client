# QuickHire Routing Structure

## Overview
The application uses React Router with a Layout pattern where Navbar and Footer remain constant across all pages.

## File Structure

```
src/
├── main.jsx              # Router configuration
├── App.jsx               # Layout component (Navbar + Outlet + Footer)
├── pages/
│   ├── HomePage.jsx      # Landing page with all sections
│   ├── JobDetailPage.jsx # Individual job details
│   ├── AdminPage.jsx     # Admin dashboard
│   └── NotFoundPage.jsx  # 404 page
└── components/
    ├── common/
    │   └── Navbar.jsx    # Always visible navigation
    ├── Footer.jsx        # Always visible footer
    └── home/
        ├── HeroSection.jsx
        ├── SearchSection.jsx
        ├── FeaturedJobs.jsx
        └── Categories.jsx
```

## Router Configuration (main.jsx)

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,           // Layout wrapper
    children: [
      {
        index: true,
        element: <HomePage />,  // Landing page at "/"
      },
      {
        path: "jobs/:id",
        element: <JobDetailPage />,  // Job details at "/jobs/123"
      },
      {
        path: "admin",
        element: <AdminPage />,      // Admin at "/admin"
      },
      {
        path: "*",
        element: <NotFoundPage />,   // 404 for unknown routes
      },
    ],
  },
]);
```

## Layout Component (App.jsx)

```javascript
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />              {/* Always visible */}
      <main className="flex-1">
        <Outlet />            {/* Page content renders here */}
      </main>
      <Footer />              {/* Always visible */}
    </div>
  );
}
```

## HomePage Structure

The HomePage is the landing page and contains multiple sections:

```javascript
<HomePage>
  <HeroSection />      // Hero banner with CTA
  <SearchSection />    // Job search form
  <FeaturedJobs />     // Featured job listings
  <Categories />       // Browse by category
</HomePage>
```

## Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Landing page with hero, search, jobs, categories |
| `/jobs/:id` | JobDetailPage | Individual job details and application form |
| `/admin` | AdminPage | Admin dashboard for managing jobs |
| `*` | NotFoundPage | 404 error page |

## How It Works

1. **main.jsx** creates the router and renders `<RouterProvider>`
2. **App.jsx** acts as the Layout with Navbar, Outlet, and Footer
3. **Outlet** renders the current route's component (HomePage, JobDetailPage, etc.)
4. **Navbar and Footer** stay visible on all pages
5. Only the content between them changes based on the route

## Navigation

Users can navigate using:
- Navbar links (Find Jobs, Admin)
- Direct URL access
- Programmatic navigation with `useNavigate()` hook
- Link components throughout the app

## Benefits

✅ Navbar and Footer always visible
✅ Clean separation of layout and content
✅ Easy to add new routes
✅ Consistent user experience
✅ SEO-friendly URLs
