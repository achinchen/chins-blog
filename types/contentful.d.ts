
type Author = {
  name: string;
  picture: {
    url: string
  };
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: {
    url: string;
  };
  date: string;
}