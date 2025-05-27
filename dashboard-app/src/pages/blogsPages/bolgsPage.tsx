// BlogPage.tsx
import React, { useEffect, useState } from "react";
import BlogList from "../../components/blogsComponents/blogList.tsx";
import { fetchPostsByRandomUser } from "../../api/services.ts";
import { Post } from "../../types/types";
import { Pagination, Skeleton, Tabs } from "antd";
import { useSearch } from "../../context/searchContex.tsx";
import { POST_PER_PAGE } from "../../utils/contants.ts";


const TabsKey = {
  ALL_POSTS: "allPosts",
  LATEST_POSTS: "latestPost",
  ARCHIVED: "archived",
};

const { TabPane } = Tabs;
const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchTerm } = useSearch();

  

  useEffect(() => {
    fetchPostsByRandomUser()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

   const filteredPosts = posts.filter((post) =>
    post.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POST_PER_PAGE,
    currentPage * POST_PER_PAGE
  );

  const handleReadMore = (postId: number) => {
    window.location.href = `/posts/${postId}`;
  };

  
  return (
    <div style={{ padding: 10 }}>
      <Tabs
        defaultActiveKey={TabsKey.ALL_POSTS}
        size='small'
      >
        <TabPane
          tab='All Posts'
          key={TabsKey.ALL_POSTS}
        >
          {loading ? (
            <Skeleton active />
          ) : (
            <>
              <BlogList
                loading={loading}
                posts={paginatedPosts}
                onReadMore={handleReadMore}
              />
              <Pagination
                current={currentPage}
                pageSize={POST_PER_PAGE}
                total={filteredPosts.length}
                onChange={setCurrentPage}
                style={{
                  marginTop: 24,
                  textAlign: "center",
                  justifyContent: "center",
                }}
              />
            </>
          )}
        </TabPane>

        <TabPane
          tab='Latest Posts'
          key={TabsKey.LATEST_POSTS}
        >
          <center>No latest posts available.</center>
        </TabPane>

        <TabPane
          tab='Archived'
          key={TabsKey.ARCHIVED}
        >
          <center>No archived posts available.</center>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default BlogPage;
