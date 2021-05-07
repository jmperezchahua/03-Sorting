describe("Bubble Sort, ", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it("Un arreglo desordenado termina ordenado.", function () {
    expect(bubbleSort([1, 5, 7, 3])).toEqual([1, 3, 5, 7]);
  });

  it("Un arreglo ordenado se tiene que mantener ordenado.", function () {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("Un arreglo a la inversa ([3,2,1]) termina ordenado.", function () {
    expect(bubbleSort([3, 2, 5, 3, 1])).toEqual([1, 2, 3, 3, 5]);
  });
});

describe("Contador Swaps", function () {
  it("llegar al centro deberia costar exactamente 3 licks", function () {
    spyOn(window, "swap").and.callThrough();
    bubbleSort([1, 2, 3, 5, 4]);
    expect(window.swap.calls.count()).toEqual(1);
  });
});
