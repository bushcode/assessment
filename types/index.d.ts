interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  reactions: { likes: number; dislikes: number };
  tags: string[];
  views: number;
}

interface PostResponse {
  posts: Post[];
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  address: { city: string; country: string };
  company: { department: string };
}

interface PostWithUserData extends Post {
  user: User | null;
}

interface UserWithPostCount extends User {
  postCount: number;
}

interface UserPostStats {
  totalPosts: number;
  totalLikes: number;
}
