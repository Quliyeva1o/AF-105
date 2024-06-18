const app = require('./config/index');

const bodyParser = require("body-parser");
const cors = require("cors");
const router = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(router.blog);
app.use(router.user);
app.use(router.tag);
app.use(router.report);
