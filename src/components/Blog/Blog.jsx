// src/components/Blog.js
import React, { useState } from 'react';
import './Blog.css'; // Asegúrate de tener un archivo CSS para el Blog

const Blog = () => {
  const initialPosts = [
    {
      id: 1,
      title: 'Título de la Publicación 1',
      description: 'Esta es una breve descripción de la publicación 1.',
      content: 'Este es el contenido completo de la publicación 1. Aquí puedes agregar más detalles y explicación sobre el tema.',
      comments: [],
    },
    {
      id: 2,
      title: 'Título de la Publicación 2',
      description: 'Esta es una breve descripción de la publicación 2.',
      content: 'Este es el contenido completo de la publicación 2. Aquí puedes agregar más detalles y explicación sobre el tema.',
      comments: [],
    },
    {
      id: 3,
      title: 'Título de la Publicación 3',
      description: 'Esta es una breve descripción de la publicación 3.',
      content: 'Este es el contenido completo de la publicación 3. Aquí puedes agregar más detalles y explicación sobre el tema.',
      comments: [],
    },
    // Agrega más publicaciones aquí
  ];

  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null); // Para almacenar el post seleccionado

  const handleAddComment = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  const openModal = (post) => {
    setSelectedPost(post); // Almacenar el post seleccionado
  };

  const closeModal = () => {
    setSelectedPost(null); // Cerrar el modal
  };

  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="blog-posts">
        {posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="read-more" onClick={() => openModal(post)}>
              Ver Más
            </button>
          </div>
        ))}
      </div>
      {selectedPost && (
        <Modal post={selectedPost} onClose={closeModal} onAddComment={handleAddComment} />
      )}
    </div>
  );
};

const Modal = ({ post, onClose, onAddComment }) => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && email.trim()) {
      onAddComment(post.id, { email, comment });
      setComment(''); // Limpiar el campo de comentario
      setEmail(''); // Limpiar el campo de correo electrónico
    }
  };

  return (
    <div className="modal-overlay" id='blog'>
      <div className="modal-content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <CommentSection post={post} onAddComment={onAddComment} />
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

const CommentSection = ({ post, onAddComment }) => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() && email.trim()) {
      onAddComment(post.id, { email, comment });
      setComment(''); // Limpiar el campo de comentario
      setEmail(''); // Limpiar el campo de correo electrónico
    }
  };

  return (
    <div className="comment-section">
      <h4>Comentarios</h4>
      <form onSubmit={handleCommentSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu correo electrónico"
          required
        />
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe un comentario..."
          required
        />
        <button type="submit">Agregar Comentario</button>
      </form>
      <div className="comments">
        {post.comments.length > 0 ? (
          post.comments.map((c, index) => (
            <div key={index} className="comment">
              <p><strong>{c.email}:</strong> {c.comment}</p>
            </div>
          ))
        ) : (
          <p>No hay comentarios aún.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
