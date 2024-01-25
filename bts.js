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
}

// Example usage:
const myTree = new Tree();
myTree.insertArray([5, 9, 4, 0, 6]);


