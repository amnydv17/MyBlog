import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
            <div className="flex flex-wrap justify-between p-2">
              {/* <h1 className="text-2xl font-bold hover:text-blue-500">
                                Welcome To Home Page...Please Create blog.
                            </h1> */}
              <div className="p-2 w-[50%] h-3.5">
                <h1 className="">Unfolding Ideas, One Blog at a Time</h1>
                <p>
                  Welcome to a space where thoughts meet creativity, knowledge
                  finds expression, and curiosity is the guide. Dive in to
                  explore, learn, and share insights that inspire and ignite
                  conversations.
                </p>
                <button className="border">
                    Let's make every click worth your time.
                </button>
              </div>
              <div>
                <img className="w-80" src="./src/assets/think.jpg" alt="Thinking Image" />
              </div>
            </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-2xl font-bold hover:text-blue-500">
          Welcome To Home Page
        </h1>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
