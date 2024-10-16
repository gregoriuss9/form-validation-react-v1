const darkMode = (isDarkMode) => {
  if (isDarkMode) {
    return {
      mainColor: "#2A2A2A",
      secondaryColor: "#FFFFFF",
    };
  } else {
    return {
      mainColor: "#FFFFFF",
      secondaryColor: "#2A2A2A",
    };
  }
};

export default darkMode;
