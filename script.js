const colorType = [
  ["lightsalmon", "#FFA07A"],
  ["salmon", "#FA8072"],
  ["darksalmon", "#E9967A"],
  ["lightcoral", "#F08080"],
  ["indianred", "#CD5C5C"],
  ["crimson", "#DC143C"],
  ["firebrick", "#B22222"],
  ["red", "#FF0000"],
  ["darkred", "#8B0000"],
  ["coral", "#FF7F50"],
  ["tomato", "#FF6347"],
  ["orangered", "#FF4500"],
  ["gold", "#FFD700"],
  ["orange", "#FFA500"],
  ["darkorange", "#FF8C00"],
  ["lightyellow", "#FFFFE0"],
  ["lemonchiffon", "#FFFACD"],
  ["lightgoldenrodyellow", "#FAFAD2"],
  ["papayawhip", "#FFEFD5"],
  ["moccasin", "#FFE4B5"],
  ["peachpuff", "#FFDAB9"],
  ["palegoldenrod", "#EEE8AA"],
  ["khaki", "#F0E68C"],
  ["darkkhaki", "#BDB76B"],
  ["yellow", "#FFFF00"],
  ["lawngreen", "#7CFC00"],
  ["chartreuse", "#7FFF00"],
  ["limegreen", "#32CD32"],
  ["lime", "#00FF00"],
  ["forestgreen", "#228B22"],
  ["green", "#008000"],
  ["darkgreen", "#006400"],
  ["greenyellow", "#ADFF2F"],
  ["yellowgreen", "#9ACD32"],
  ["springgreen", "#00FF7F"],
  ["mediumspringgreen", "#00FA9A"],
  ["lightgreen", "#90EE90"],
  ["palegreen", "#98FB98"],
  ["darkseagreen", "#8FBC8F"],
  ["mediumseagreen", "#3CB371"],
  ["seagreen", "#2E8B57"],
  ["olive", "#808000"],
  ["darkolivegreen", "#556B2F"],
  ["olivedrab", "#6B8E23"],
  ["lightcyan", "#E0FFFF"],
  ["cyan", "#00FFFF"],
  ["aqua", "#00FFFF"],
  ["aquamarine", "#7FFFD4"],
  ["mediumaquamarine", "#66CDAA"],
  ["paleturquoise", "#AFEEEE"],
  ["turquoise", "#40E0D0"],
  ["mediumturquoise", "#48D1CC"],
  ["darkturquoise", "#00CED1"],
  ["lightseagreen", "#20B2AA"],
  ["cadetblue", "#5F9EA0"],
  ["darkcyan", "#008B8B"],
  ["teal", "#008080"],
  ["powderblue", "#B0E0E6"],
  ["lightblue", "#ADD8E6"],
  ["lightskyblue", "#87CEFA"],
  ["skyblue", "#87CEEB"],
  ["deepskyblue", "#00BFFF"],
  ["lightsteelblue", "#B0C4DE"],
  ["dodgerblue", "#1E90FF"],
  ["cornflowerblue", "#6495ED"],
  ["steelblue", "#4682B4"],
  ["royalblue", "#4169E1"],
  ["blue", "#0000FF"],
  ["mediumblue", "#0000CD"],
  ["darkblue", "#00008B"],
  ["navy", "#000080"],
  ["midnightblue", "#191970"],
  ["mediumslateblue", "#7B68EE"],
  ["slateblue", "#6A5ACD"],
  ["darkslateblue", "#483D8B"],
  ["lavender", "#E6E6FA"],
  ["thistle", "#D8BFD8"],
  ["plum", "#DDA0DD"],
  ["violet", "#EE82EE"],
  ["orchid", "DA70D6"],
  ["fuchsia", "#FF00FF"],
  ["magenta", "#FF00FF"],
  ["mediumorchid", "#BA55D3"],
  ["mediumpurple", "#9370DB"],
  ["blueviolet", "#8A2BE2"],
  ["darkviolet", "#9400D3"],
  ["darkorchid", "#9932CC"],
  ["darkmagenta", "#8B008B"],
  ["purple", "#800080"],
  ["indigo", "#4B0082"],
  ["pink", "#FFC0CB"],
  ["lightpink", "#FFB6C1"],
  ["hotpink", "#FF69B4"],
  ["deeppink", "#FF1493"],
  ["palevioletred", "#DB7093"],
  ["mediumvioletred", "#C71585"],
  ["white", "#FFFFFF"],
  ["snow", "#FFFAFA"],
  ["honeydew", "#F0FFF0"],
  ["mintcream", "F5FFFA"],
  ["azure", "#F0FFFF"],
  ["aliceblue", "#F0F8FF"],
  ["ghostwhite", "#F8F8FF"],
  ["whitesmoke", "#F5F5F5"],
  ["seashell", "#FFF5EE"],
  ["beige", "#F5F5DC"],
  ["oldlace", "#FDF5E6"],
  ["floralwhite", "#FFFAF0"],
  ["ivory", "#FFFFF0"],
  ["antiquewhite", "#FAEBD7"],
  ["linen", "#FAF0E6"],
  ["lavenderblush", "#FFF0F5"],
  ["mistyrose", "#FFE4E1"],
  ["gainsboro", "#DCDCDC"],
  ["lightgray", "#D3D3D3"],
  ["silver", "#C0C0C0"],
  ["darkgray", "#A9A9A9"],
  ["gray", "#808080"],
  ["dimgray", "#696969"],
  ["lightslategray", "#778899"],
  ["slategray", "#708090"],
  ["darkslategray", "#2F4F4F"],
  ["black", "#000000"],
  ["cornsilk", "#FFF8DC"],
  ["blanchedalmond", "#FFEBCD"],
  ["bisque", "#FFE4C4"],
  ["navajowhite", "#FFDEAD"],
  ["wheat", "#F5DEB3"],
  ["burlywood", "#DEB887"],
  ["tan", "#D2B48C"],
  ["rosybrown", "#BC8F8F"],
  ["sandybrown", "#F4A460"],
  ["goldenrod", "#DAA520"],
  ["peru", "#CD853F"],
  ["chocolate", "#D2691E"],
  ["saddlebrown", "#8B4513"],
  ["sienna", "#A0522D"],
  ["brown", "#A52A2A"],
  ["maroon", "#800000"],
];

const columnElement = document.querySelectorAll(".column");
const colorNameElement = document.querySelectorAll(".color-name");
const colorsElement = document.querySelectorAll(".colors");

const resetColors = document.querySelector(".reset");

resetColors.addEventListener("click", () => {
  for (i = 0; i < colorsElement.length; i++) {
    const randomColor = Math.floor(Math.random() * 139);
    columnElement[i].style.backgroundColor = colorType[randomColor][0];
    colorNameElement[i].innerHTML = colorType[randomColor][0];

    colorType.map((color) => {
      const addOption = document.createElement("option");
      addOption.innerHTML = color[0];
      addOption.value = color[0];
      colorsElement[i].append(addOption);
    });
  }
});

for (i = 0; i < colorsElement.length; i++) {
  const randomColor = Math.floor(Math.random() * 139);
  columnElement[i].style.backgroundColor = colorType[randomColor][0];
  colorNameElement[i].innerHTML = colorType[randomColor][0];

  colorType.map((color) => {
    const addOption = document.createElement("option");
    addOption.innerHTML = color[0];
    addOption.value = color[0];
    colorsElement[i].append(addOption);
  });
}
