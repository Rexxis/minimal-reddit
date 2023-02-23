import React, { useEffect, useState } from "react";
import { Stack } from "@chakra-ui/react";
import PostItem from "./PostItem";

export default function Post() {
  const [rawData, setRawData] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    fetch("https://www.reddit.com/r/pics.json")
      .then((res) => res.json())
      .then((data) => {
        setRawData(data.data.children);
      });
  }, []);

  useEffect(() => {
    if (!rawData) {
      return;
    }

    // setPosts(
    //   rawData.map((item) => {
    //     return (
    //       <div key={item.data.id}>
    //         <h3>{item.data.title}</h3>
    //         <p>Author : {item.data.author}</p>
    //         <p>Ups : {item.data.ups}</p>
    //         <p>Posted on: {getFormattedTime(item.data.created_utc)}</p>
    //         <p>Comments: {item.data.num_comments}</p>
    //         <img src={item.data.url} />
    //       </div>
    //     );
    //   })
    // );

    setPosts(
      rawData.map((item) => {
        return (
          <PostItem
            key={item.data.id}
            title={item.data.title}
            author={item.data.author}
            body={item.data.selftext}
            ups={item.data.ups}
            time={item.data.created_utc}
            num_comments={item.data.num_comments}
            img={item.data.url}
            userVoteValue={1}
          />
        );
      })
    );
  }, [rawData]);

  return (
    <Stack>
      Post
      {posts ? posts : "Loading"}
    </Stack>
  );
}
