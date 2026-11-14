export function home(req, res) {
  res.render("index", {
    title: "Home Page",
    content: "This is homepage",
  });
}

export function about(req, res) {
  res.render("about", {
    title: "About Us",
    content: "This is about us",
  });
}
