const blog_controller = require('./blog.controller');
const user_controller = require('./user.controller');
const tag_controller = require('./tag.controller');
const report_controller = require('./report.controller');

const controller = {
    blog: blog_controller,
    user: user_controller,
    tag: tag_controller,
    report: report_controller
};

module.exports = controller;