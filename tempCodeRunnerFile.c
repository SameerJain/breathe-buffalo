#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr;
    int n = 4;

    // Allocate and initialize memory for an array of integers
    arr = (int *)calloc(n, sizeof(int));


    // Print the array elements
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    // Free the allocated memory
    free(arr);
    return 0;
}