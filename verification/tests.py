"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input":[['g', 'f', 'H', 'Y', 'v'],
                     ['z', 'e', 'a', 'P', 'u'],
                     ['s', 'B', 'T', 'e', 'y'],
                     ['k', 'u', 'c', 'R', 't'],
                     ['l', 'O', 'k', 'p', 'r']],
            "answer": True
        },
        {
            "input":[['H', 'a', 't', 's', 'E'],
                     ['a', 'Y', 'p', 'u', 'B'],
                     ['a', 'a', 'P', 'y', 'U'],
                     ['x', 'x', 'x', 'E', 'C'],
                     ['z', 'z', 'z', 'z', 'R']],
            "answer": False
        }
    ],
    "Extra": [
        {
            "input":[['H', 'a', 't', 's', 'E'],
                     ['h', 'Y', 'p', 'e', 'B'],
                     ['a', 'a', 'P', 'r', 'U'],
                     ['x', 'x', 'U', 'c', 'C'],
                     ['z', 'E', 'B', 'z', 'R']],
            "answer": True
        },
        {
            "input":[['J', 'a', 't', 's', 'x'],
                     ['a', 's', 'p', 'u', 'z'],
                     ['a', 'a', 'q', 'G', 'f'],
                     ['x', 'x', 'x', 'N', 'h'],
                     ['z', 'z', 'z', 'z', 'R']],
            "answer": False
        },
        {
            "input":[['b', 'a', 't', 's', 'm'],
                     ['a', 'c', 'p', 'u', 'l'],
                     ['a', 'a', 'd', 'y', 'k'],
                     ['x', 'x', 'x', 'f', 'h'],
                     ['z', 'z', 'z', 'z', 'g']],
            "answer": False
        },
        {
            "input":[['b', 'a', 'E', 'r'],
                     ['a', 'y', 'p', 'c'],
                     ['x', 'H', 'B', 'U'],
                     ['z', 'z', 'E', 'z']],
            "answer": True
        },
        {
            "input":[['h', 'y', 'p', 'e'],
                     ['b', 'u', 'c', 'r'],
                     ['h', 'e', 'r', 'b'],
                     ['y', 'p', 'c', 'u']],
            "answer": False
        },
        {
            "input":[['h', 'h', 'h', 'y'],
                     ['a', 'a', 'd', 'p'],
                     ['b', 'e', 'x', 'e'],
                     ['u', 'c', 'c', 'r']],
            "answer": False
        },
        {
            "input":[['U', 'C', 'r'],
                     ['B', 'H', 'e'],
                     ['e', 'Y', 'p']],
            "answer": True
        },
        {
            "input":[['h', 'y', 'p'],
                     ['C', 'R', 'E'],
                     ['u', 'b', 'e']],
            "answer": True
        },
        {
            "input":[['p', 'e', 'r'],
                     ['y', 'y', 'e'],
                     ['h', 'y', 'p']],
            "answer": False
        }

    ]
}
