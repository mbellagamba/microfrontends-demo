export function login(username, password) {
  console.log("Authenticating", username, password);
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate an API request
      const token = Math.random().toString(36).substring(7);
      resolve(token);
    }, 1000);
  });
}
