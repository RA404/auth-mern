import CSS from "csstype";

export const formContainer: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "350px",
  margin: "100px auto",
  boxSizing: "border-box",
  background: "white",
  borderRadius: "10px",
  padding: "25px 0",
};

export const formHeader: CSS.Properties = {
  boxSizing: "border-box",
  width: "350px",
  margin: "5px 5px 15px 5px",
  textAlign: "center",
};

export const formInput: CSS.Properties = {
  boxSizing: "border-box",
  width: "330px",
  margin: "10px",
  padding: "5px",
  height: "40px",
};

export const formButton: CSS.Properties = {
  boxSizing: "border-box",
  margin: "5px",
  border: "0",
  borderRadius: "10px",
  height: "44px",
  color: "#fff",
  fontSize: "15px",
  lineHeight: "20px",
  backgroundColor: "#2F71E5",
  width: "168px",
  padding: 0,
  boxShadow: "0px 5px 15px rgba(14, 26, 57, 0.2)",
  cursor: "pointer",
};

export const formLink: CSS.Properties = {
  boxSizing: "border-box",
  margin: "5px",
  border: "0",
  color: "#2F71E5",
  fontSize: "15px",
  lineHeight: "20px",
  backgroundColor: "#fff",
  padding: 0,
  cursor: "pointer",
};

export const formOverlay: CSS.Properties = {
  top: 0,
  position: "fixed",
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
};

export const flexRowContainer: CSS.Properties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
};