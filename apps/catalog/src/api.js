const robots = [...Array(50).keys()].map((i) => ({
  id: i,
  name: `Robot ${i}`,
  image: `https://robohash.org/robot-${i}.png`,
}));

export function getRobots() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const token = window.sessionStorage.getItem("token");
      if (token) {
        resolve(robots);
      } else {
        reject(new Error("Unauthorized"));
      }
    }, 500);
  });
}
