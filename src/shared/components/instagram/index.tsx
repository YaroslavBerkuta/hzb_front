"use client";
import React, { useEffect, useState } from "react";
import { InstagramPost } from "./instagram-post";
import styles from "./index.module.scss";

interface InstagramPost {
  media_type: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
}

export const Instagram = () => {
  
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://graph.instagram.com/me/media?fields=media_type,media_url,thumbnail_url,permalink&access_token=IGQWRQQ3BlQkJlUHZAsY1ZASMm9DSDctX19XanBJcW9fc0dwQWJxSWNzbENFdlhGVmJOUFM0RklmcFp3N1RwOWRwVXBsdEhGQTJHZAjR5dmZAnSmNaVG1kMFlVdWFGS292Q1p4T1NUY3VZAMm1JcEpTNHAtOVRwZAWR4ZAUUZD&limit=8`);
        const data = await response.json();
        if (data && data.data) {
          setPosts(data.data);
        }
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const getPostUrl  = (post: InstagramPost): string => {
    if (post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM") {
      return post.media_url || "";
    } else if (post.media_type === "VIDEO") {
      return post.thumbnail_url || "";
    }
    return "";
  }
  return (
    <div className={styles.grid}>
      {posts.map(post => (
        <InstagramPost imageUrl={getPostUrl(post)} postUrl={post.permalink} />
      ))}
    </div>
  );
};
