import useDarkMode from 'use-dark-mode';

const Header = () => {
  const darkMode = useDarkMode();

  return (
    <>
      <button onClick={darkMode.toggle}>TOGGLE</button>
    </>
  );
};

export default Header;
