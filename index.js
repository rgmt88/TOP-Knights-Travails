// Helper function to check if a position is within the chessboard
function isInBounds(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function knightMoves(start, target) {
    // If the starting position is the target
    if (start[0] === target[0] && start[1] === target[1]) {
        return [start];
    }

    // Define the possible movements of a knight
    const movements = [[2, 1], [2, -1], [-2, 1], [-2, -1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    
    // Use a queue for BFS and a set to track visited positions
    let queue = [[start, [start]]];
    let visited = new Set();
    // Using .toString to store coordinate pairs as strings
    visited.add(start.toString());

    while (queue.length > 0) {
        let [position, path] = queue.shift();

        for (let [dx, dy] of movements) {
            let nextPosition = [position[0] + dx, position[1] + dy];

            // Check if the new position is within the bounds of the chessboard
            if (!isInBounds(nextPosition[0], nextPosition[1])) {
                continue;
            }

            // Check if the new position is the target
            if (nextPosition[0] === target[0] && nextPosition[1] === target[1]) {
                const result = [...path, nextPosition];
                console.log(`You made it in ${result.length} moves! Here's your path: ${JSON.stringify(result)}`);
                return result;
            }

            // Check if the new position has already been visited
            if (!visited.has(nextPosition.toString())) {
                visited.add(nextPosition.toString());
                queue.push([nextPosition, [...path, nextPosition]]);
            }
        }
    }
    // This will typically not happen on a standard chessboard
    return "Path not found";
}

knightMoves([3, 3],[4, 3]);
