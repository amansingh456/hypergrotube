export interface Theme {
  bg: string;
  bgLighter: string;
  text: string;
  textSoft: string;
  soft: string;
}

export const darkTheme: Theme = {
  bg: "#1b2635",
  bgLighter: "#27374d",
  text: "white",
  textSoft: "#9DB2BF",
  soft: "#5d88a9",
};

export const lightTheme: Theme = {
  bg: "#f9f9f9",
  bgLighter: "white",
  text: "black",
  textSoft: "#606060",
  soft: "#f5f5f5",
};