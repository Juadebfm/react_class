import { useColors } from "../context/ColorContext";

const Footer = () => {
  const { colors, setColors } = useColors();

  console.log(colors);
  //   {primary: 'bg-blue-500', secondary: 'bg-green-500', tertiary: 'bg-black'}
  // primary
  // :
  // "bg-blue-500"
  // secondary
  // :
  // "bg-green-500"
  // tertiary
  // :
  // "bg-black"

  // Color change function
  // Function will help us use the setColors
  const changeColor = () => {
    setColors({
      primary: "bg-slate-500",
    });
  };
  return (
    <div>
      <h1 className={`${colors.primary}`}>Footer</h1>
      <button onClick={changeColor}>Change Colors</button>
    </div>
  );
};

export default Footer;
