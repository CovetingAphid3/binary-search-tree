class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        this.root = this._insert(this.root, data);
    }

    _insert(root, data) {
        if (root === null) {
            return new Node(data);
        }

        if (data < root.data) {
            root.left = this._insert(root.left, data);
        } else if (data > root.data) {
            root.right = this._insert(root.right, data);
        }

        return root;
    }

    insertArray(array) {
        array.forEach((i) => {
            this.insert(i);
        });
    }
find(data) {
    return this._find(this.root, data);
}

_find(node, data) {
    if (node === null) {
        // Data not found in the tree
        return null;
    }

    if (data === node.data) {
        // Data found
        return  `found: ${node.data}`;
    } else if (data > node.data) {
        // Search in the right subtree
        return this._find(node.right, data);
    } else {
        // Search in the left subtree
        return this._find(node.left, data);
    }
}

}

// Example usage:
const myTree = new Tree();
myTree.insertArray([5, 8, 4, 9, 6]);
console.log(myTree.find(6))
// console.log(myTree)

