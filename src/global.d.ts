interface Navigator extends Navigator {
  gpu: {
    requestAdapter(): Promise<GPUAdapter>;
    getPreferredCanvasFormat(): GPUTextureFormat;
  };
}
