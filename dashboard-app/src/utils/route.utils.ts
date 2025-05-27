const routeKeyMap: { key: string; path: RegExp }[] = [
  { key: "archived", path: /^\/blogs\/archived/ },
  { key: "latest", path: /^\/blogs\/latest/ },
  { key: "all", path: /^\/blogs/ },

  { key: "calendar", path: /^\/calendar/ },
  { key: "schedule-actions", path: /^\/schedule-actions/ },
  { key: "live-alerts", path: /^\/live-alerts/ },
  { key: "overview", path: /^\/dashboard/ },
];

// Function to get key from current path
export const getSelectedKeyFromPath = (pathname: string): string => {
  const match = routeKeyMap.find((route) => route.path.test(pathname));
  return match ? match.key : "overview";
};