import React, { useEffect, useState } from "react";
import API from "../api/axios";

function AppHome() {
    // 🔹 Posts list
    const [posts, setPosts] = useState([]);

    // 🔹 Modal open / close
    const [showModal, setShowModal] = useState(false);

    // 🔹 Form fields
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 🔹 Page load ayinappudu posts fetch
    useEffect(() => {
        fetchPosts();
    }, []);

    // 🔹 Backend nundi posts fetch
    const fetchPosts = async () => {
        try {
            const res = await API.get("posts/");
            setPosts(res.data);
        } catch (error) {
            console.log("Error fetching posts", error);
        }
    };

    // 🔹 Create new blog
    const handleCreatePost = async () => {
        try {
            const res = await API.post("posts/", {
                title: title,
                content: content,
            });

            // New post ni UI lo top lo add cheyyadam
            setPosts([res.data, ...posts]);

            // Modal close + form reset
            setShowModal(false);
            setTitle("");
            setContent("");
        } catch (error) {
            alert("Login required to create blog");
        }
    };

    return (
        <div className="home">
            <h1>All Posts</h1>

            {/* 🔹 Create Blog button */}
            <button onClick={() => setShowModal(true)}>
                Create Blog
            </button>

            {/* 🔹 Create Blog Modal */} 
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Create New Blog</h3>

                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <textarea
                            placeholder="Content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>

                        <div className="modal-actions">
                            <button onClick={handleCreatePost}>Create</button>
                            <button onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* 🔹 Posts list */}
            {posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                posts.map((post) => (
                    <div key={post.id} className="post-card">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                        <small>Author: {post.author}</small>
                    </div>
                ))
            )}
        </div>
    );
}

export default AppHome;
