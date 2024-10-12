function knightMoves(start, end) {
  const directions = [
    { x: 2, y: 1 },
    { x: 2, y: -1 },
    { x: -2, y: 1 },
    { x: -2, y: -1 },
    { x: 1, y: 2 },
    { x: 1, y: -2 },
    { x: -1, y: 2 },
    { x: -1, y: -2 },
  ];

  // Helper function to check if a position is within bounds
  const isValid = (x, y) => x >= 0 && x <= 7 && y >= 0 && y <= 7;

  // Create a queue for BFS
  const queue = [];
  queue.push({ position: start, path: [start] }); // Store current position and path taken

  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);

  while (queue.length > 0) {
    const { position, path } = queue.shift();

    // Check if we reached the target position
    if (position[0] === end[0] && position[1] === end[1]) {
      return path; // Return the path if we reached the end
    }

    // Explore all possible knight moves
    for (const direction of directions) {
      const newX = position[0] + direction.x;
      const newY = position[1] + direction.y;

      // Check if the new position is valid and not visited
      if (isValid(newX, newY) && !visited.has(`${newX},${newY}`)) {
        visited.add(`${newX},${newY}`);
        queue.push({
          position: [newX, newY ],
          path: [...path, [ newX,  newY ]],
        });
      }
    }
  }

  return []; // Return an empty array if no path found (should not happen for valid inputs)
}