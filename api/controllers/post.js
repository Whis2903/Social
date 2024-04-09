import { db } from "../connect.js";

export const getPosts = (req, res) => {
  // Use an alias (e.g., 'u') for the users table
  const q = `SELECT p.*, u.id AS userId, name, profilePic 
             FROM posts AS p 
             JOIN users AS u ON (u.id = p.userId)`;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
