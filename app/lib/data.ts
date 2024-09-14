export async function fetchUserById(userId: number): Promise<User> {
  try {
    const url = `https://dummyjson.com/users/${userId}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const userData = await response.json();
    return {
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      username: userData.username,
      address: {
        city: userData.address.city,
        country: userData.address.country,
      },
      company: { department: userData.company.department },
    };
  } catch (error) {
    console.error(`here was a problem fetching user with ${userId}:`, error);
    throw error;
  }
}

export async function fetchPosts(page: number): Promise<PostWithUserData[]> {
  const limit = 5;
  const skip = (page - 1) * limit;
  const url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: PostResponse = await response.json();

    // Fetch user information for each post
    const postsWithUser = await Promise.all(
      data.posts.map(async (post) => {
        const user = await fetchUserById(post.userId);
        return JSON.parse(JSON.stringify({ ...post, user }));
      })
    );

    return postsWithUser;
  } catch (error) {
    console.error("There was a problem fetching the posts:", error);
    throw error;
  }
}

export async function fetchUsersWithMostPosts(
  userLimit: number
): Promise<UserWithPostCount[]> {
  try {
    // Fetch all posts
    const postsResponse = await fetch("https://dummyjson.com/posts?limit=0");
    if (!postsResponse.ok) {
      throw new Error(`HTTP error! status: ${postsResponse.status}`);
    }
    const postsData = await postsResponse.json();
    const posts: Post[] = postsData.posts;

    // Count posts per user
    const postCounts = posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    // Sort users by post count
    const sortedUsers = Object.entries(postCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, userLimit);

    // console.log("Top users:", sortedUsers);

    // Fetch user details for top users
    const topUsers = await Promise.all(
      sortedUsers.map(async ([userId, postCount]) => {
        const userResponse = await fetch(
          `https://dummyjson.com/users/${userId}`
        );

        if (!userResponse.ok) {
          throw new Error(`HTTP error! status: ${userResponse.status}`);
        }
        const userData: User = await userResponse.json();
        return {
          id: userData.id,
          firstName: userData.firstName,
          lastName: userData.lastName,
          username: userData.username,
          address: {
            city: userData.address.city,
            country: userData.address.country,
          },
          company: { department: userData.company.department },
          postCount,
        };
      })
    );

    // console.log("Top users with post counts:", topUsers);
    return topUsers;
  } catch (error) {
    console.error("There was a problem fetching the top users:", error);
    throw error;
  }
}

export async function fetchTopPosts(
  limit: number
): Promise<PostWithUserData[]> {
  try {
    // Fetch all posts
    const response = await fetch("https://dummyjson.com/posts?limit=0");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const posts: Post[] = data.posts;

    // Sort posts by reactions in descending order
    const sortedPosts = posts.sort(
      (a, b) => b.reactions.likes - a.reactions.likes
    );

    // Get the top posts
    const topPosts = sortedPosts.slice(0, limit);

    // Fetch user data for each top post
    const postsWithUsers = await Promise.all(
      topPosts.map(async (post) => {
        const user = await fetchUserById(post.userId);
        return { ...post, user };
      })
    );
    return postsWithUsers;
  } catch (error) {
    console.error(
      "There was a problem fetching the top posts with user data:",
      error
    );
    throw error;
  }
}

export async function fetchUserPostsById(
  userId: number,
  page: number
): Promise<PostWithUserData[]> {
  try {
    const limit = 5;

    // Fetch user posts
    const postsResponse = await fetch(
      `https://dummyjson.com/users/${userId}/posts?limit=${limit}&skip=${
        (page - 1) * limit
      }`
    );
    if (!postsResponse.ok) {
      throw new Error(`HTTP error! status: ${postsResponse.status}`);
    }
    const postsData = await postsResponse.json();
    const posts: Post[] = postsData.posts;

    const postsWithUserData = await Promise.all(
      posts.map(async (post) => {
        const user = await fetchUserById(post.userId);
        return { ...post, user };
      })
    );
    return postsWithUserData;
  } catch (error) {
    console.error(
      `There was a problem fetching data for user ${userId}:`,
      error
    );
    throw error;
  }
}

export async function fetchtUserStats(userId: number): Promise<UserPostStats> {
  try {
    // Fetch all posts for the user
    const response = await fetch(`https://dummyjson.com/users/${userId}/posts`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const postsData = await response.json();
    const posts: Post[] = postsData.posts;

    const totalPosts = posts.length;
    const totalLikes = posts.reduce(
      (sum, post) => sum + post.reactions.likes,
      0
    );

    return {
      totalPosts,
      totalLikes,
    };
  } catch (error) {
    console.error(`Error fetching post stats for user ${userId}:`, error);
    throw error;
  }
}
