export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string; // Simplification for now
    date: string;
    subreddit: string; // Acts as category
    author: string;
    upvotes: number; // For that reddit feel
    commentCount: number;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'Why I moved from VS Code to Neovim',
        excerpt: 'After 5 years of using VS Code, I finally made the switch. Here is why it was the best decision for my productivity.',
        content: 'Full content would go here...',
        date: '2 hr ago',
        subreddit: 'r/coding',
        author: 'u/dev_karthik',
        upvotes: 245,
        commentCount: 42
    },
    {
        id: '2',
        title: 'Understanding React Server Components',
        excerpt: 'Everyone is talking about RSC. But what does it actually mean for us frontend devs? A deep dive.',
        content: 'Full content would go here...',
        date: '5 hr ago',
        subreddit: 'r/reactjs',
        author: 'u/react_fan',
        upvotes: 120,
        commentCount: 15
    },
    {
        id: '3',
        title: 'My journey building this portfolio',
        excerpt: 'A look back at how this site evolved from a simple HTML page to a full React application.',
        content: 'Full content would go here...',
        date: '1 day ago',
        subreddit: 'r/webdev',
        author: 'u/dev_karthik',
        upvotes: 890,
        commentCount: 112
    }
];
