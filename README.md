# Metaversal frontend assessment project.

Project implements a social media feed and user profile pages using provided [design files](https://www.figma.com/design/yKiOqBqcJVCuG42i6tmrkM/Front-End-Dev-Test?node-id=1133-16284&t=uJGmBShEkUrtbBrm-1), [dummyjson posts](https://www.dummyjson.com/docs/posts) and [dummyjson users](https://www.dummyjson.com/docs/users) APIs. Built with Next JS 14 and Tailwind CSS it implements both Static and Server Side Rendering techniques.

## Running Project Locally

1 Clone the repository to your local machine
2 Navigate to project dircetory on your machine
3 Run `yarn install` in side project directory to install project dependencies
4 Run `yarn dev` to start development server

## Dependencies

1 Mantine Hooks - useIntersection hook used to implement infinite scroll.
2 Class Variance Authority (CVA) - To compose extensible and customizable components.
3 Clxs - For conditional classNames in components.
4 Tailwind Merge - To merge classNames without conflicts.

## Features Implemented

- Routing, Nested routes, error routes
- Loading UIs for feed and profile pages
- Server and Client Components
- Hooks
- UI Components (Avatar, Button, Cards, Tags, Icons, Post Stats, Skeletons, Error, Infinite Scroll)
- Data Fetching
- Error States (Feed, Profile, Posts, Not Found)

## App Routes

`/`: Displays suggested posts, Who to follow and recent posts.
`/profile/[userId]`: Displays user profile and user-specific posts.

## Data Fetching

Data fetching is implemented in the /app/lib/data.ts file. The file contains all the functions used to fetch for different components in the application

- fetchUserById - fetch a single user by id
- fetchPosts - fetches all posts
- fetchUsersWithMostPosts - fetches all posts, counts and sort posts per user by post.userId, returns user with most posts
- fetchTopPosts - fetches all posts, sorts posts by likes in descending order, adds user data to post data and returns posts with most likes
- fetchUserPostsById - fetches a user's posts by id with limit for pagination
- fetchtUserStats - fetches every post for a user and calculate total likes and total posts

## Folder Structure

```
└── 📁app
    └── 📁assets
        └── avatar.png
    └── 📁components
        └── 📁ui
            └── Avatar.tsx
            └── Button.tsx
            └── Card.tsx
            └── DepartmentTag.tsx
            └── ErrorBoundary.tsx
            └── Icons.tsx
            └── Navbar.tsx
            └── PostCard.tsx
            └── PostCardSkeleton.tsx
            └── PostStats.tsx
            └── ProfileCardSkeleton.tsx
            └── Tag.tsx
            └── UserCardSkeleton.tsx
            └── UserProfileCard.tsx
        └── InfiniteScroll.tsx
        └── RecentPosts.tsx
        └── SuggestedPosts.tsx
        └── UserData.tsx
        └── WhoToFollow.tsx
    └── 📁hooks
        └── use-icon-click.ts
    └── 📁lib
        └── data.ts
        └── utils.ts
    └── 📁profile
        └── 📁[userId]
            └── loading.tsx
            └── not-found.tsx
            └── page.tsx
        └── error.tsx
        └── layout.tsx
    └── favicon.ico
    └── globals.css
    └── layout.tsx
    └── loading.tsx
    └── not-found.tsx
    └── page.tsx
```
