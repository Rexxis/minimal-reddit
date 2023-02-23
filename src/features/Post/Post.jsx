import React, { useEffect, useState } from "react";
import { getFormattedTime } from "../../App/utils";

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

    setPosts(
      rawData.map((item) => {
        return (
          <div key={item.data.id}>
            <h3>{item.data.title}</h3>
            <p>Author : {item.data.author}</p>
            <p>Ups : {item.data.ups}</p>
            <p>Posted on: {getFormattedTime(item.data.created_utc)}</p>
            <p>Comments: {item.data.num_comments}</p>
            <img src={item.data.url} />
          </div>
        );
      })
    );
  }, [rawData]);

  return (
    <div>
      Post
      {posts ? posts : "Loading"}
    </div>
  );
}
