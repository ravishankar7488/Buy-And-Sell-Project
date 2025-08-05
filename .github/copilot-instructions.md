# Copilot Instructions for Buy And Sell Updation Backend

## Project Overview
- This is a Node.js/Express backend for a buy-and-sell marketplace.
- EJS is used for server-side rendering; views are in `/views` and layouts in `/layouts`.
- MongoDB is used for data storage via Mongoose models in `/models`.
- Multer handles file uploads, with images stored in `/public/uploads/profileImages` and `/public/uploads/productImages`.

## Key Components
- **index.js**: Main entry point, sets up Express, routes, middleware, and database connection.
- **models/**: Contains Mongoose schemas for `User`, `Product`, `Order`, `Cart`, `Notification`, and `Review`.
- **views/**: EJS templates for all pages; layouts and includes are in `/layouts` and `/includes`.
- **public/**: Static assets (CSS, images, uploads). Images are served from `/public/uploads`.

## Routing & Data Flow
- All routes are defined in `index.js`.
- User authentication is basic (no sessions/JWT); passwords are stored in plaintext.
- File uploads use Multer; uploaded file paths are saved as `/uploads/profileImages/filename` or `/uploads/productImages/filename` and referenced in EJS templates.
- Notifications are created and displayed for user actions (signup, order status changes, etc.).

## Developer Workflows
- **Start server**: `node index.js` (port 3000)
- **Database**: Local MongoDB at `mongodb://127.0.0.1:27017/Buyandsell`
- **Debugging**: Console logs are used throughout for error tracking.
- **Static files**: Served via `express.static(path.join(__dirname, "/public"))`

## Project-Specific Patterns
- EJS templates expect data objects named after their purpose (e.g., `{user, products}`).
- Uploaded images are referenced by their relative path from `/public` (e.g., `/uploads/profileImages/filename.jpg`).
- Notification and order flows are tightly coupled to user actions; see `index.js` for examples.
- No test framework or build process is present; all logic is in `index.js`.

## Integration Points
- **Mongoose**: All data access is via Mongoose models in `/models`.
- **Multer**: File uploads are routed based on fieldname (`profileImage` or others).
- **EJS-Mate**: Used for layout support in EJS templates.

## Examples
- To display a user's profile image: `<img src="<%=user.profileImage%>" ...>` in EJS.
- To upload a profile image, use a form with `enctype="multipart/form-data"` and fieldname `profileImage`.

## Conventions
- All business logic is centralized in `index.js`.
- Error handling is mostly via `console.log` and basic redirects.
- Data passed to EJS templates matches the expected variable names in the template.

---

If any section is unclear or missing important details, please provide feedback to improve these instructions.
