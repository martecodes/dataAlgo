class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

/*
         a
        / \
       b   c
     /  \   \
    d    e   f

*/


// Naive
const depthFirst = (root) => {
    if (!root) return [];

    const result = [];
    const stack = [ root ];

    while (stack.length > 0) {
        const current = stack.pop();
       result.push(current.val);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }

    return result;
}


// Recursive

const depthFirstSearch = (root) => {
    if (!root) return [];

    const leftValues = depthFirstSearch(root.left);
    const rightValues = depthFirstSearch(root.right);

    return [root.val, ...leftValues, ...rightValues];
}

console.log(depthFirstSearch(a))