const TERRAIN_MAP = [90, 46, 46, 46, 88, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 26, 28, 28, 28, 28, 26, 26, 27, 27, 28, 28, 28, 28, 28, 28, 28, 26, 28, 27, 26, 28, 28, 28, 27, 26, 26, 27, 27, 28, 28, 28, 28, 28, 28, 28, 26, 28, 27, 26, 28, 28, 28, 27, 26, 26, 27, 27, 28, 28, 28, 28, 28, 28, 28, 26, 28, 27, 26, 28, 28, 28, 27, 26, 26, 27, 27, 28, 28, 28, 28, 28, 28, 28, 26, 28, 27, 26, 28, 28, 28, 27, 26, 26, 27, 27, 28, 28, 28, 28, 28, 28, 28, 26, 28, 27, 26, 28, 28, 28, 27, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 20, 21, 51, 51, 51, 21, 21, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 16, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 20, 21, 51, 51, 51, 36, 36, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 2, 2, 16, 16, 2, 16, 16, 16, 2, 4, 2, 2, 2, 20, 51, 51, 51, 22, 2, 2, 2, 16, 2, 2, 16, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 16, 16, 16, 16, 16, 0, 2, 0, 2, 2, 2, 2, 2, 2, 20, 36, 51, 51, 21, 21, 21, 22, 2, 2, 10, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 16, 3, 2, 4, 4, 2, 2, 2, 2, 2, 4, 2, 2, 16, 20, 51, 36, 51, 22, 16, 4, 4, 16, 2, 2, 16, 2, 16, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 20, 21, 21, 36, 16, 21, 10, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 2, 2, 4, 4, 2, 2, 2, 2, 4, 4, 4, 4, 20, 51, 36, 36, 22, 2, 3, 3, 16, 3, 4, 16, 2, 16, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 3, 3, 0, 3, 3, 3, 2, 2, 2, 20, 21, 21, 21, 21, 21, 21, 22, 2, 2, 2, 2, 2, 2, 10, 10, 2, 2, 10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 2, 4, 4, 3, 2, 3, 3, 2, 2, 4, 4, 51, 51, 36, 22, 2, 16, 4, 3, 3, 4, 16, 4, 4, 2, 2, 4, 0, 2, 2, 3, 3, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 2, 3, 2, 2, 2, 20, 21, 16, 21, 51, 36, 21, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 16, 16, 16, 3, 3, 2, 2, 3, 3, 3, 3, 3, 16, 4, 4, 2, 2, 2, 2, 2, 3, 16, 4, 4, 4, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4, 0, 2, 16, 0, 16, 0, 0, 3, 3, 3, 2, 2, 2, 20, 36, 21, 21, 21, 21, 21, 22, 2, 2, 3, 16, 3, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 3, 2, 2, 2, 16, 16, 2, 3, 3, 2, 2, 16, 3, 4, 2, 2, 2, 2, 3, 3, 3, 4, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 16, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 3, 0, 3, 2, 2, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 16, 3, 3, 16, 2, 3, 10, 3, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 16, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 2, 2, 16, 2, 2, 3, 3, 3, 3, 2, 2, 16, 2, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 16, 2, 4, 4, 2, 2, 4, 4, 4, 0, 4, 4, 4, 0, 2, 0, 2, 2, 2, 0, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 4, 4, 4, 2, 16, 2, 4, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 16, 16, 2, 2, 4, 4, 4, 4, 4, 2, 2, 4, 4, 2, 0, 0, 16, 0, 16, 4, 0, 2, 2, 2, 16, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 2, 2, 16, 2, 2, 2, 16, 2, 2, 2, 4, 4, 4, 16, 4, 2, 4, 2, 4, 16, 2, 2, 4, 4, 4, 4, 2, 3, 3, 3, 2, 2, 4, 4, 16, 4, 4, 4, 2, 2, 2, 2, 4, 2, 4, 4, 2, 0, 0, 2, 4, 2, 2, 2, 0, 2, 2, 3, 16, 2, 10, 10, 10, 10, 2, 2, 2, 10, 10, 10, 2, 2, 2, 2, 10, 2, 4, 16, 16, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 2, 2, 2, 3, 4, 4, 4, 2, 2, 2, 4, 4, 2, 2, 2, 16, 2, 2, 2, 16, 2, 2, 4, 16, 4, 2, 2, 2, 2, 2, 4, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 4, 4, 4, 2, 2, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 16, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 4, 2, 2, 16, 16, 16, 2, 16, 2, 2, 2, 2, 2, 16, 2, 16, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 0, 2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 16, 2, 2, 2, 16, 2, 2, 4, 4, 4, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 16, 2, 16, 4, 16, 0, 2, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 6, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 2, 2, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 2, 2, 2, 2, 2, 2, 2, 4, 16, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 2, 2, 2, 2, 16, 2, 16, 16, 2, 2, 2, 2, 2, 2, 3, 3, 3, 20, 21, 21, 21, 21, 21, 22, 2, 2, 3, 3, 4, 25, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 2, 25, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 2, 2, 3, 3, 3, 3, 4, 3, 3, 25, 3, 3, 3, 3, 3, 2, 2, 16, 16, 16, 16, 16, 16, 16, 2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 25, 2, 11, 12, 13, 2, 2, 2, 2, 3, 4, 4, 4, 20, 36, 36, 36, 51, 21, 22, 4, 2, 3, 3, 2, 40, 2, 2, 4, 2, 2, 2, 3, 3, 4, 4, 4, 2, 2, 3, 4, 4, 4, 4, 4, 4, 2, 2, 3, 3, 2, 40, 2, 2, 2, 2, 3, 3, 3, 4, 4, 3, 4, 4, 4, 4, 2, 4, 4, 2, 2, 40, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 2, 2, 4, 2, 2, 2, 4, 4, 2, 4, 4, 4, 4, 4, 4, 2, 4, 4, 40, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 35, 36, 51, 51, 51, 21, 37, 2, 2, 4, 4, 2, 55, 2, 2, 2, 4, 4, 4, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 55, 2, 4, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 55, 4, 4, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 4, 2, 4, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 55, 2, 2, 2, 2, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15, 16, 16, 16, 16, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 30, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 73, 46, 46, 46, 46, 46, 46, 46, 30, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 30, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 30, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 45, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 45, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 45, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 45, 46, 46, 46, 46];
let ELEMENTS_MAP = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 16, 0, 49, 16, 49, 16, 49, 16, 0, 16, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 16, 16, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 1, 24, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 16, 16, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 49, 16, 49, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 2, 2, 2, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 0, 0, 0, 0, 0, 0, 16, 0, 2, 2, 2, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 16, 0, 2, 2, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 49, 16, 49, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 16, 16, 0, 0, 0, 54, 0, 65, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 16, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 2, 0, 61, 62, 0, 0, 0, 0, 0, 0, 0, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 64, 0, 0, 0, 0, 16, 0, 0, 0, 0, 16, 16, 0, 0, 16, 0, 69, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 1, 0, 0, 0, 0, 76, 77, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 78, 79, 0, 0, 1, 1, 16, 0, 0, 16, 0, 0, 0, 0, 0, 16, 0, 84, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 16, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 49, 49, 49, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 0, 0, 49, 0, 49, 0, 1, 16, 39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 1, 0, 49, 49, 49, 49, 49, 49, 1, 1, 1, 1, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 0, 0, 0, 0, 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 49, 49, 0, 49, 49, 49, 0, 0, 0, 1, 0, 0, 0, 49, 49, 49, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 0, 2, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 49, 1, 49, 1, 1, 0, 0, 0, 0, 0, 2, 47, 0, 0, 0, 0, 0, 38, 0, 0, 0, 0, 65, 66, 0, 0, 49, 49, 0, 49, 49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 0, 0, 0, 61, 62, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 62, 0, 0, 0, 0, 0, 53, 0, 0, 0, 0, 69, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 1, 0, 44, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 76, 77, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 76, 77, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 84, 85, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 1, 0, 59, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 89, 0, 0, 0, 0, 0, 0, 0, 0, 73, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const BLOCKING_TILES = [15, 16, 26, 8, 69, 99, 27, 28, 38, 68, 53, 10];

let dyingSound = new Audio("mandie.mp3");
let jumpSound = new Audio("jump.mp3");

let game = {
    tileEngine: undefined
};

kontra.assets.load('exp2.png').then(img => game.explosions = new Expolosions(kontra.spriteSheet({
    image: kontra.assets.images['exp2.png'],
    frameWidth: 64,
    frameHeight: 64,
    animations: {
        boom: {
            frames: '0..15',
            frameRate: 8
        }
    }
}), 110));
let terminal = new Terminal(document.getElementById("console"), document.getElementById("input"));

let computerManager = new ComputerTileManager(game.tileEngine);

function friction(velocity, strength) {
    return kontra.vector(-velocity.x * strength, -velocity.y * strength);
}

function groundFriction(velocity, strength) {
    return Math.floor(velocity.y) == 0 ? friction(kontra.vector(velocity.x, 0), strength) : kontra.vector(0, 0);
}

let canvas = document.getElementById("main");
let mainContext = canvas.getContext("2d");
kontra.init();
let marine = undefined;
let marineMates = undefined;

let imagen = new Image();
imagen.src = 'marines.png';
imagen.onload = e => {
    Window.spriteSheet = kontra.spriteSheet({
        image: imagen,
        frameWidth: 50,
        frameHeight: 50,
        animations: {
            stayRight: {
                frames: [0],
                frameRate: 6
            },
            stayLeft: {
                frames: [1],
                frameRate: 6
            },
            runRight: {
                frames: '8..15', // frames 0 through 9
                frameRate: 14
            },
            runLeft: {
                frames: '16..23', // frames 0 through 9
                frameRate: 14
            },
            duckRight: {
                frames: [2],
                frameRate: 6
            },
            duckLeft: {
                frames: [3],
                frameRate: 6
            },
            jumpRight: {
                frames: [4],
                frameRate: 6
            },
            jumpLeft: {
                frames: [5],
                frameRate: 6
            },
            die: {
                frames: [6],
                frameRate: 6
            }
        }
    });

    marine = new Character(150, 600, Window.spriteSheet.animations);
    marineMates = [new Character(100, 1000, Object.assign({}, Window.spriteSheet.animations), true, 20), new Character(100, 1000, Object.assign({}, Window.spriteSheet.animations), true, 400), new Character(200, 1000, Object.assign({}, Window.spriteSheet.animations), true, 160), new Character(20, 1000, Object.assign({}, Window.spriteSheet.animations), true, 260)];
};


Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
Math.limit = (number, limit) => number > limit ? limit : number;

let loop = kontra.gameLoop({
    update: function(dt) {
        marine.update(dt, kontra.vector(game.tileEngine.sx, game.tileEngine.sy));
        marineMates.forEach(marine => marine.run(10));
        marineMates.forEach(marine => marine.update(dt, kontra.vector(game.tileEngine.sx, game.tileEngine.sy)));
        game.tileEngine.update(dt);
        game.explosions.update(dt);
    },
    render: function() {
        game.tileEngine.render();
        marine.render();
        marineMates.forEach(marine => marine.render());
        game.explosions.render();
    }
});

let img = document.createElement('img');
img.src = 'tiles.png';

img.onload = function() {
    game.tileEngine = kontra.tileEngine({
        // tile size
        tilewidth: 48,
        tileheight: 48,
        // map size in tiles
        width: 100,
        height: 26,
        context: mainContext,

        tilesets: [{
            firstgid: 1,
            image: img
        }],
        layers: [{
                name: 'ground',
                data: TERRAIN_MAP
            },
            {
                name: 'elements',
                data: ELEMENTS_MAP
            }
        ],
        update: function(dt) {
            this.sx = marine.realPosition.x - 486;
            this.sy = marine.realPosition.y - 360;
        }

    });
    game.tileEngine.collides = function(x, y) {
        let layersNames = this.layers.map(layer => layer.name);
        return layersNames.map(name => this.tileAtLayer(name, { x: x, y: y }));
    }
    loop.start();
}

function updateAnimation(animation, dt, ttl) {
    ttl--;
    if (animation) {
        animation.update(dt);
    }
}

function includesAny(base, searched) {
    let f = base.some(r => searched.includes(r))
    return f;
}


let playerControlsUp = (event) => {
    const keyName = event.key;
    event.preventDefault();

    if (keyName === 'ArrowRight') {
        if (marine.stateMachine.currentState == commands['run'])
            marine.stop();
    } else if (keyName === 'ArrowLeft') {
        if (marine.stateMachine.currentState == commands['run'])
            marine.stop();
    }
};
let playerControlsDown = (event) => {
    const keyName = event.key;
    event.preventDefault();

    if (keyName === 'ArrowRight') {
        marine.run(180);

    } else if (keyName === 'ArrowLeft') {
        marine.run(-180);

    } else if (keyName === 'ArrowUp') {
        marine.jump(-360);

    } else if (keyName === 'ArrowDown') {
        marine.duck();
    } else if (keyName === 'Tab') {
        switchToTerminal();
    } else if (keyName === "e") {
        computerManager.connectIfPosiible(marine);
    }
};
switchToTerminal();
terminal.execute('start');

function switchToTerminal() {
    document.removeEventListener('keydown', playerControlsDown);
    document.removeEventListener('keyup', playerControlsUp);
    terminal.focus();
}

function switchToGame() {
    document.addEventListener('keydown', playerControlsDown, false);
    document.addEventListener('keyup', playerControlsUp, false);
}

function gameWin() {
    loop.stop();
    game.explosions.mute();
    window.setTimeout(function() {
        end("You won with " + marineMates.length + " teammates")
    }, 200);

}

function gameLose() {
    loop.stop();
    game.explosions.mute();
    window.setTimeout(function() {
        end("You loosed")
    }, 200);

}

function end(msg) {
    mainContext.fillStyle = "#000000";
    mainContext.fillRect(0, 0, 1024, 768);
    mainContext.font = "60px Arial"
    mainContext.fillStyle = "#FFFFFF";
    mainContext.fillText(msg, 200, 340);

}