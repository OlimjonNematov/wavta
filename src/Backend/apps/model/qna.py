from transformers import pipeline

question_answerer = pipeline('question-answering', model='distilbert-base-uncased-distilled-squad')

context = r"""
Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. Dijkstra's algorithm was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.
Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree.

Binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.
Binary search runs in logarithmic time in the worst case, making O(log n) comparisons, where n is the number of elements in the array.

Breadth-first search (BFS) is an algorithm for searching a tree data structure for a node that satisfies a given property. Breadth-first search (BFS) starts at the tree root and explores all nodes at the present depth prior to moving on to the nodes at the next depth level. Extra memory, usually a queue, is needed to keep track of the child nodes that were encountered but not yet explored.

Depth-first search (DFS) is an algorithm for traversing or searching tree or graph data structures. Depth-first search (DFS) starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. Extra memory, usually a stack, is needed to keep track of the nodes discovered so far along a specified branch which helps in backtracking of the graph.

Quicksort is a divide-and-conquer algorithm. Quicksort works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, Quicksort is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively.

Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
Merge sort repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

Kruskal's algorithm finds a minimum spanning forest of an undirected edge-weighted graph. If the graph is connected, it finds a minimum spanning tree. (A minimum spanning tree of a connected graph is a subset of the edges that forms a tree that includes every vertex, where the sum of the weights of all the edges in the tree is minimized.

Floyd-Warshall algorithm (also known as Floyd's algorithm, the Roy-Warshall algorithm, the Roy-Floyd algorithm, or the WFI algorithm) is an algorithm for finding shortest paths in a directed weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of shortest paths between all pairs of vertices.
"""

def get_answer(question: str):
   res = question_answerer(question=question, context=context)
   return res['answer']