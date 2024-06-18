const express = require("express");
const blog_router = express.Router();
const controller = require("../controllers/index");
const blog_middleware = require("../middlewares/blog.post.middleware");
const authenticateToken = require("../middlewares/authenticate_token");

blog_router.get("/api/blogs", authenticateToken, controller.blog.getAll);
blog_router.get("/api/blogs/:id", authenticateToken, controller.blog.getOne);
blog_router.delete("/api/blogs/:id", controller.blog.delete);
blog_router.patch("/api/blogs/:id", controller.blog.update);
blog_router.post("/api/blogs", blog_middleware, controller.blog.post);

module.exports = blog_router;
