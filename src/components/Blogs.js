import React from "react";
import "./styles/blogs.css";

export const Blogs = () => {
  return (
    <div className="blogsWrapper container">
      <header className="centered sectionHeader">
        <h1>
          My <span className="accent">Blogs</span>
          <span className="primary">.</span>
        </h1>
      </header>

      <div className="blogPosts">
        <div className="blog">
          <div
            style={{ backgroundImage: `url("/images/7.jpg")` }}
            className="backgroundFix background"
          ></div>
          <a href="#" className="overlay centered">
            <div>
              <h3>First post</h3>
              <p>
                repudiandae cumque debitis nihil in blanditiis impedit beatae
                dolor tempore incidunt repellat, ipsam et iure temporibus
                accusamus? Soluta, ipsum nemo.
              </p>
            </div>
          </a>
        </div>
        <div className="blogRight">
          <div className="blog">
            <div
              style={{ backgroundImage: `url("/images/2.jpg")` }}
              className="backgroundFix background"
            ></div>
            <a href="#" className="overlay centered">
              <div>
                <h3>First post</h3>
                <p>
                  repudiandae cumque debitis nihil in blanditiis impedit beatae
                  dolor tempore incidunt repellat, ipsam et iure temporibus
                  accusamus? Soluta, ipsum nemo.
                </p>
              </div>
            </a>
          </div>
          <div className="blog">
            <div
              style={{ backgroundImage: `url("/images/6.jpg")` }}
              className="backgroundFix background"
            ></div>
            <a href="#" className="overlay centered">
              <div>
                <h3>First post</h3>
                <p>
                  repudiandae cumque debitis nihil in blanditiis impedit beatae
                  dolor tempore incidunt repellat, ipsam et iure temporibus
                  accusamus? Soluta, ipsum nemo.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
