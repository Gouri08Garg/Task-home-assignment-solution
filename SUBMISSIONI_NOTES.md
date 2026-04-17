1. What I’d test next if I had more time
Since the data is stored in an in-memory array, I would test how the API handles simultaneous requests.
I would test what happens if a user enters impossible numbers—like asking for 'Page 0' or '-5 tasks'—to make sure the app doesn't crash or act weird.

2. Anything that surprised you in the codebase
I was surprised that the pagination logic (page * limit) was mathematically designed to skip the first page of results entirely. It was a subtle logic error that would be easy to miss without manual testing.
The router handled some validation (like pagination defaults), while the service handled others, and the validators.js file handled the rest. I was surprised there wasn't a centralized middleware for this.

3. Questions I'd ask before shipping this to production
Should the assign endpoint be restricted to managers, or can any user assign a task to themselves?
Do we need a 'Soft Delete' feature, or should the remove endpoint permanently delete tasks from the system?
