At taskService.js file

Bug 1: Pagination Offset Logic
Issue: page * limit skips the first page of results.
Fix: Changed to (page - 1) * limit.

Bug 2: Status Filtering
Issue: Uses .includes() which causes partial matches (e.g., "do" matches "todo").
Fix: Changed to strict equality ===.
