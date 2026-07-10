export function ok(data: unknown) {
  return {
    success: true,
    data,
  };
}

export function fail(message: string) {
  return {
    success: false,
    message,
  };
}