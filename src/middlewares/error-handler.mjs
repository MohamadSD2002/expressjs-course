export default (error, req, res, next) => {
  console.log("ERROR HANDLER:", error.message);

  res.status(500).send("Server Error");
};