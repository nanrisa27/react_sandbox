import React, { Component } from "react";
import Post from "./Post/Post";
import cat from "./img/cat.jpeg";

const posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Joe Smith",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin posuere elementum posuere. Vestibulum sit amet turpis non justo maximus dapibus.",
    img: cat,
  },
  {
    id: 2,
    title: "Quisque vel justo nec elit ornare congue",
    author: "Joe Smith",
    desc:
      "Nunc a dui efficitur, convallis ligula sit amet, molestie mauris. Donec laoreet neque dui, vel pulvinar sapien tempor ut.",
    img: "https://source.unsplash.com/featured/?sky",
  },
  {
    id: 3,
    title: "Maecenas sit amet metus fringilla, volutpat lorem nec",
    author: "Joe Smith",
    desc:
      "Aliquam eu arcu ipsum. Mauris scelerisque massa eu risus dignissim rutrum. Suspendisse eu libero egestas turpis tincidunt convallis at a orci.",
    img: "https://source.unsplash.com/featured/?forest",
  },
];

class App extends Component {
  state = {
    posts: posts,
  };

  removeHandler = (removeId) => {
    const oldArray = [...this.state.posts];
    oldArray.splice(removeId, 1);
    this.setState({ posts: oldArray });
  };

  render() {
    const postsList = this.state.posts.map((post, index) => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          desc={post.desc}
          img={post.img}
          click={this.removeHandler.bind(this, index)}
        />
      );
    });

    return <div className="posts">{postsList}</div>;
  }
}

export default App;
